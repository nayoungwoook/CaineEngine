class Game extends CNState {

    constructor() {
        super();
    }

    PreLoad = function () {
        this.rot = 0;
        this.img1 = new CNImage('res/병신1.png');
        this.img2 = new CNImage('res/병신2.png');
        this.object = new CNObject(this.img2, Width / 2, Height / 2, 200, 200);
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
        this.object.Render();
    }
}

var game = new Game();
SetState(game);
