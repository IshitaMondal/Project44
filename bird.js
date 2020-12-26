class Bird{
    constructor(){
        var options={
            isStatic: true
        }
        this.body=Bodies.rectangle(200, 350, 75, 75, options);
        this.image=loadImage("images/bird.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 75, 75);
    }
}