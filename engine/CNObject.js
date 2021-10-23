class CNObject extends CNRenderImage {

    constructor(sprite, x, y, width, height) {
        super(sprite, x, y, width, height);
    }

    Update = () => {
    }

    Render = () => {
        RenderObjects.push(this);
    }

    render = () => {
        super.render();
    }

}