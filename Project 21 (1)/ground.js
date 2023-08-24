class Ground{
    constructor(x,y,w,h){
        var ground_options={
            isStatic: true,
        }
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, ground_options)
        World.add(world,this.body)
    }
    display(){
        var groundPosition = this.body.position;
        push()
        translate(groundPosition.x,  groundPosition.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill("yellow")
        rect(0,0,this.w, this.h)
        pop()
    }
}