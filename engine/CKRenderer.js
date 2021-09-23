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
    }

    render() {
        ctx.fillStyle = color;
        ctx.fillRect(this.position.x - Camera.position.x, this.position.y - Camera.position.y, this.width, this.height);
    }

}

class CKRenderImage extends CKRenderObject {
    constructor(img, x, y, width, height) {
        super(x, y, width, height);
        this.img = img;
    }

    render() {
        ctx.drawImage(this.img, this.position.x - Camera.position.x, this.position.y - Camera.position.y, this.width, this.height);
    }

}

class CKRenderRect extends CKRenderObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }

    render() {
        super.render();
    }

}