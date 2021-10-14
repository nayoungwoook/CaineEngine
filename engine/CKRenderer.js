var Color = 'rgb(255, 40, 100)';

RenderRect = (x, y, width, height) => {
    RenderObjects.push(new CKRenderRect(x, y, width, height));
}

RenderImage = (img, x, y, width, height) => {
    RenderObjects.push(new CKRenderImage(img, x, y, width, height));
}

RenderImage = (img, x, y, width, height, rotation) => {
    var ri = new CKRenderImage(img, x, y, width, height)
    ri.rotation = rotation;

    RenderObjects.push(ri);
}

class CKRenderObject {

    constructor(x, y, width, height) {
        this.position = new Vector2(x, y);
        this.width = width;
        this.height = height;
        this.flipX = false;
        this.flipY = false;
        this.rotation = 0;
        this.renderPosition = new Vector2(x, y);
        this.renderWidth = width;
        this.renderHeight = height;

        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this._fx = false;
        this._fy = false;
    }

    render() {

        let fx = 1, fy = 1
        this.renderWidth = this.width * Camera.position.z;
        this.renderHeight = this.height * Camera.position.z;

        let _ww = this.renderWidth / 2;
        let _hh = this.renderHeight / 2;

        if (this.flipX) {
            fx = -1;
            _ww *= -1;
        }

        if (this.flipY) {
            fy = -1;
            _hh *= -1;
        }

        this._fx = fx;
        this._fy = fy;

        _ww *= this._fx;
        _hh *= this._fy;

        this.renderWidth *= fx;
        this.renderHeight *= fy;

        let _dist = CKMath.GetDistance(new Vector2(Width / 2 + Camera.position.x, Height / 2 + Camera.position.y), new Vector2(this.position.x, this.position.y));
        let _rot = Math.atan2(Height / 2 + Camera.position.y - this.position.y, Width / 2 + Camera.position.x - this.position.x) + Camera.rotation;
        let xx = (this.position.x - (Width / 2 + Camera.position.x));
        let yy = (this.position.y - (Height / 2 + Camera.position.y));
        let _zDist = _dist * (Camera.position.z);

        let _zx = (Math.cos(_rot) * _zDist), _zy = (Math.sin(_rot) * _zDist);

        this.renderPosition.x = this.position.x - Camera.position.x - _ww - (xx + _zx);
        this.renderPosition.y = this.position.y - Camera.position.y - _hh - (yy + _zy);

        ctx.fillStyle = Color;
    }

}

class CKRenderImage extends CKRenderObject {
    constructor(img, x, y, width, height) {
        super(x, y, width, height);
        this.img = img;
    }

    render() {
        super.render();

        ctx.save();
        ctx.translate(this.renderPosition.x, this.renderPosition.y);
        ctx.scale(this._fx, this._fy);

        ctx.translate(this.renderWidth * this.anchorX, this.renderHeight * this.anchorY);

        ctx.rotate(this.rotation * this._fx * this._fy + Camera.rotation);

        ctx.translate(-(this.renderWidth * this.anchorX), -(this.renderHeight * this.anchorY));
        ctx.drawImage(this.img, 0, 0, this.renderWidth, this.renderHeight);
        ctx.restore();
    }
}

class CKRenderRect extends CKRenderObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }

    render() {
        super.render();

        ctx.save();
        ctx.translate(this.renderPosition.x, this.renderPosition.y);
        ctx.scale(this._fx, this._fy);

        ctx.translate(this.renderWidth * this.anchorX, this.renderHeight * this.anchorY);

        ctx.rotate(this.rotation * this._fx * this._fy + Camera.rotation);

        ctx.translate(-(this.renderWidth * this.anchorX), -(this.renderHeight * this.anchorY));
        ctx.fillRect(0, 0, this.renderWidth, this.renderHeight);
        ctx.restore();
    }

}