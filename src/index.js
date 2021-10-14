var img1, img2;
var rot = 0;

class Game extends CKState {

    PreLoad = function () {
        img1 = new CKImage('res/병신1.png');
        img2 = new CKImage('res/병신2.png');
    }

    Init = function () {

    }

    Update = function () {
        if (Key['a']) {
            Camera.rotation += 0.02;
            // rot+=0.1;
        }
    }

    Render = function () {
        Color = 'rgb(40, 40, 40)';
        RenderRect(Width/2, Height/2, 300, 300);
        // RenderImage(img1, canvas.width / 2, canvas.height / 2, 555 / 5, 1280 / 5, rot);
        // RenderImage(img1, canvas.width / 2 + 111, canvas.height / 2, 555 / 5, 1280 / 5, rot);
        // RenderImage(img1, canvas.width / 2, canvas.height / 2 - 1280 / 5, 555 / 5, 1280 / 5, rot);
        // RenderImage(img2, 1000, 400, 1440 / 5, 1402 / 5);
    }
}

var game = new Game();
SetState(game);
