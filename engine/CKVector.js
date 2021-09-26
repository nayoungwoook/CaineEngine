class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Vector3 extends Vector2 {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}
