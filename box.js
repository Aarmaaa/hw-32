class Bo{

    constructor(a,b,c,d){

        this.body=Matter.Bodies.rectangle(a,b,c,d)
        Matter.World.add(en.world,this.body)
        this.width=c;
        this.height=d;
        this.visibility=255
    }

    displace(){
        if(this.body.speed < 3){
            push()

            translate(this.body.position.x,this.body.position.y)
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            rectMode(CENTER)
    
            rect(0,0,this.width,this.height);
    
            pop()
           }
           else{
          //Matter.World.remove(en.world,this.body)
          this.visibility=this.visibility-5
           }
    }

    score(){

        if(this.visibility<0&&this.visibility>-1005){
            score++
        }

    }

}