class Obstacles{
    constructor(){
        var options={
            isStatic: true
        }
        this.body=Bodies.rectangle(1500,random(100,650), 100, 100, options);
        this.image=loadImage("images/eagle.png");
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 100, 100);
    }
}