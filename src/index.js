class Game extends CKState {

    constructor() {
        super();
    }

    PreLoad = function () {
        this.rot = 0;
        this.img1 = new CKImage('res/병신1.png');
        this.img2 = new CKImage('res/병신2.png');
        this.object = new CKObject(Width / 2, Height / 2, 200, 200);
        this.object.sprite = new CKImage('res/병신1.png');
    }

    Init = function () {
    }

    Update = function () {
        if (Key['F2']) {
            Camera.rotation += 0.1;
            Camera.position.z += 0.01;
            // this.rot += 0.1;
        }

        if (GamePads[0] != null && GamePads[0].buttons[6].pressed) {
            gamepadVibration(GamePads[0], 10, GamePads[0].buttons[6].value / 10);
        }
    }

    Render = function () {
        Color = 'rgb(40, 40, 40)';
        // this.object.Render();
        RenderRectZ(Width / 2, Height / 2, 5.5, 100, 100);
        // if (GamePads[0] != null)
        // RenderImage(this.img1, canvas.width / 2 + GamePads[0].axes[0] * 500, canvas.height / 2 + GamePads[0].axes[1] * 500, 555 / 5, 1280 / 5);

        RenderImageZ(this.img2, 600, 400, 5.2, 1440 / 5, 1402 / 5);
    }
}

var game = new Game();
SetState(game);
