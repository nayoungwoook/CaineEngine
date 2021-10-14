class Game extends CKState {

    constructor() {
        super();
    }

    PreLoad = function () {
        this.object = new CKObject(Width / 2, Height / 2, 200, 200);
        this.object.sprite = new CKImage('res/병신1.png');
    }

    Init = function () {
    }

    Update = function () {
        if (Key['a']) {
            // Camera.rotation += 0.1;
            this.rot += 0.1;
        }
    }

    Render = function () {
        Color = 'rgb(40, 40, 40)';
        // RenderImage(this.img1, canvas.width / 2, canvas.height / 2, 555 / 5, 1280 / 5);
        // RenderImageRotation(this.img2, 1000, 400, 1440 / 5, 1402 / 5, this.rot);
        this.object.Render();
    }
}

var game = new Game();
SetState(game);
