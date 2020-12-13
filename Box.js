class Box{
    constructor(x, y, colour){
        var options={
            isStatic:false,
            friction:0.4,
            density:1.5
        }
        this.x=x;
        this.y=y;
        this.colour=colour
        this.width=50;
        this.height=50;
        this.body=Bodies.rectangle(x, y, 50, 50);
        World.add(world, this.body);
    }
    display(){
        fill(this.colour);
        stroke("white");
        strokeWeight(4);
        push(); 
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, 50, 50);
        pop();
    }
}