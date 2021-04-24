class dropZone{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var pos1 =this.body.position;
        push ();
        translate (pos1.x,pos1.y);
        rectMode(CENTER);
        fill ("red");
        rect(0,0,this.width,this.height);
        pop ();
    }
}