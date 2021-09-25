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
        this.flipX = false;
        this.flipY = true;
        this.renderPosition = new Vector2(x, y);
        this.renderWidth = width;
        this.renderHeight = height;
    }

    render() {

        let _ww = this.width / 2;
        let _hh = this.height / 2;
        let fx = 1, fy = 1

        if (this.flipX) {
            fx = -1;
            _ww *= -1;
        }

        if (this.flipY) {
            fy = -1;
            _hh *= -1;
        }

        this.renderPosition.x = this.position.x - Camera.position.x - _ww;
        this.renderPosition.y = this.position.y - Camera.position.y - _hh;
        this.renderWidth = this.width * fx;
        this.renderHeight = this.height * fy;

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