class CKObject extends CKRenderImage {

    constructor(x, y, width, height) {
        super(null, x, y, width, height);
    }

    Update = () => {
    }

    Render = () => {
        RenderObjects.push(this);
    }

}