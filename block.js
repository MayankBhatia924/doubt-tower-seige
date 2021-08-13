class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)

        World.add(world,this.body)
        this.Visiblity=255;
       
        }
    display()  {
        rectMode(CENTER)
        fill(171,247,247)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        if((this.body.speed)<2.5){

World.remove(world,this.body)  

        push();
this.Visiblity=this.Visiblity-5;
tint(255,this.Visiblity)
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop();
}
    }
}
