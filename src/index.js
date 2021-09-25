var img1, img2;

class Game extends CKState {

    PreLoad = function () {
        img1 = new CKImage('res/병신1.png');
        img2 = new CKImage('res/병신2.png');
    }

    Init = function () {

    }

    Update = function () {
    }

    Render = function () {
        RenderImage(img1, 0, 0, 555 / 5, 1280 / 5);
        RenderImage(img2, 1000, 400, 1440 / 5, 1402 / 5);
    }
}

var game = new Game();
SetState(game);
