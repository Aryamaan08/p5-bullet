class wall {
    constructor(thickness) {
        this.x = width-100;
        this.y = 200;
        this.thickness = thickness;
        this.shapeColor = color(80, 80, 80);
        this.sprite = createSprite(this.x, this.y, this.thickness, this.thickness*3);
        
    }
}