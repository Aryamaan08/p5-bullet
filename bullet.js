class bullet {
    constructor(weight, speed) {
        this.weight = weight;
        this.speed = speed;
        this.x = 50;
        this.y = 200;
        this.sprite = createSprite(this.x, this.y, 50, 5);
        this.sprite.velocityX = speed;
        this.sprite.shapeColor = 'black';
    }

}