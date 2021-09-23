var img1, img2;

PreLoad = function () {
    img1 = new CKImage('res/병신1.png');
    img2 = new CKImage('res/병신2.png');
}

Init = function () {

}

Update = function () {
}

Render = function () {
    RenderImage(img1, 100, 100, 555/3, 1280/3);
    RenderImage(img2, 500, 100, 1440/3, 1402/3);
}
