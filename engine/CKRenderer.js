var color = 'rgb(255, 40, 100)';

RenderRect = (x, y, width, height) => {
    RenderObjects.push(new CKRenderRect(x, y, width, height));
}

RenderImage = (img, x, y, width, height) => {
    RenderObjects.push(new CKRenderImage(img, x, y, width, height));
}

class CKRenderObject {

    constructor(x, y, width, height) {
        this.position = new Vector2(x, y);
        this.width = width;
        this.height = height;
        this.flipX = true;
        this.flipY = false;
        this.renderPosition = new Vector2(x, y);
        this.renderWidth = width;
        this.renderHeight = height;
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

        this.renderWidth *= fx;
        this.renderHeight *= fy;

        let _xx = canvas.width / 2 - this.position.x;
        let _yy = canvas.height / 2 - this.position.y;
        let _dist = CKMath.GetDistance(new Vector2(canvas.width / 2, canvas.height / 2), this.position);

        let rot = Math.atan2(_yy, _xx) + Camera.rotation;

        let zx = (Math.cos(rot) * _dist * (Camera.position.z - 1));
        let zy = (Math.sin(rot) * _dist * (Camera.position.z - 1));

        Debug.Log(rot);

        this.renderPosition.x = this.position.x - Camera.position.x - _ww - zx;
        this.renderPosition.y = this.position.y - Camera.position.y - _hh - zy;

        ctx.fillStyle = color;
    }

}

class CKRenderImage extends CKRenderObject {
    constructor(img, x, y, width, height) {
        super(x, y, width, height);
        this.img = img;
    }

    render() {
        super.render();
        ctx.drawImage(this.img, this.renderPosition.x, this.renderPosition.y, this.renderWidth, this.renderHeight);
    }
}

class CKRenderRect extends CKRenderObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }

    render() {
        super.render();
        ctx.fillRect(this.renderPosition.x, this.renderPosition.y, this.renderWidth, this.renderHeight);
    }

}