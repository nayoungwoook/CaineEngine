class MyObject extends CNObject {

    constructor(img, x, y, width, height) {
        super(img, x, y, width, height);

        this.moveSpeed = 6;
        this.position.z = 2;
    }

    KeyInput = () => {
        if (Key['w'])
            this.position.y -= this.moveSpeed;
        if (Key['s'])
            this.position.y += this.moveSpeed;
        if (Key['a'])
            this.position.x -= this.moveSpeed;
        if (Key['d'])
            this.position.x += this.moveSpeed;

    }

    GamePadInput() {
        if (GamePads[0] != undefined) {
            this.position.x += GamePads[0].axes[0] * this.moveSpeed;
            this.position.y += GamePads[0].axes[1] * this.moveSpeed;
            Camera.position.x += GamePads[0].axes[2] * this.moveSpeed;
            Camera.position.y += GamePads[0].axes[3] * this.moveSpeed;

            if (GamePads[0].buttons[4].pressed) {
                this.rotation -= 0.1;
            }
            if (GamePads[0].buttons[5].pressed) {
                this.rotation += 0.1;
            }
            if (GamePads[0].buttons[6].pressed) {
                Camera.position.z += 0.01;
            }
            if (GamePads[0].buttons[7].pressed) {
                Camera.position.z -= 0.01;
            }
        }
    }

    Update = () => {
        this.KeyInput();
        this.GamePadInput();
    }
}

class Game extends CNState {

    constructor() {
        super();
    }

    PreLoad = function () {
        this.img1 = new CNImage('res/병신1.png');
        this.img2 = new CNImage('res/병신2.png');
        this.object = new MyObject(this.img2, Width / 2, Height / 2, 200, 200);
    }

    Init = function () {
    }

    Update = function () {
        this.object.Update();
    }

    Render = function () {
        for (var i = 0; i < 100; i++)
            for (var j = 0; j < 100; j++)
                RenderImage(this.img1, i * 200, j * 200, 200, 200);
        this.object.Render();
    }
}

var game = new Game();
SetState(game);
