const Constraint=Matter.Constraint;

var ground,g2,g3

var en;

var h1,h2,h3,h4,h5,h6,h7
var h10,h20,h30,h40,h50
var b1,b2,b3,b4,b5,b6,b7
var b10,b20,b30,b40,b50

var player;
var backgroundImg
var sh
var score=0

function setup() {
  createCanvas(1000,600);

  en=Matter.Engine.create();


  h1=new Bo(515,370,30,30)
  h2=new Bo(545,370,30,30)
  h3=new Bo(575,370,30,30)
  h4=new Bo(605,370,30,30)
  h5=new Bo(635,370,30,30)
  h6=new Bo(665,370,30,30)
  h7=new Bo(690,370,20,30)

  h10=new Bo(545,340,30,30)
  h20=new Bo(575,340,30,30)
  h30=new Bo(605,340,30,30)
  h40=new Bo(635,340,30,30)
  h50=new Bo(665,340,30,30)

  b1=new Bo(715,270,30,30)
  b2=new Bo(745,270,30,30)
  b3=new Bo(775,270,30,30)
  b4=new Bo(805,270,30,30)
  b5=new Bo(835,270,30,30)
  b6=new Bo(865,270,30,30)
  b7=new Bo(895,270,30,30)

  b10=new Bo(745,240,30,30)
  b20=new Bo(775,240,30,30)
  b30=new Bo(805,240,30,30)
  b40=new Bo(835,240,30,30)
  b50=new Bo(865,240,30,30)


ground=Matter.Bodies.rectangle(600,400,200,20);
Matter.World.add(en.world,ground);

ground.isStatic=true;

g2=Matter.Bodies.rectangle(800,300,200,20)
Matter.World.add(en.world,g2)
g2.isStatic=true

g3=Matter.Bodies.rectangle(200,320,50,20)
Matter.World.add(en.world,g3)
g3.isStatic=true

player=Matter.Bodies.rectangle(100,200,10,10)
Matter.World.add(en.world,player)

console.log(player)
}


function draw(){
background(0)


text("score:"+score,750,50)

 


Matter.Engine.update(en);
rectMode(CENTER);



rect(ground.position.x,ground.position.y,200,20);
rect(g2.position.x,g2.position.y,200,20)
rect(g3.position.x,g3.position.y,50,20)
rect(player.position.x,player.position.y,30,30)
player.position.x=mouseX;
player.position.y=mouseY;



h1.displace();
h2.displace();
h3.displace();
h4.displace();
h5.displace();
h6.displace();
h7.displace();

h10.displace();
h20.displace();
h30.displace();
h40.displace();
h50.displace();

h1.score()
h2.score()
h3.score()
h4.score()
h5.score()
h6.score()
h7.score()
h10.score()
h20.score()
h30.score()
h40.score()
h50.score()

b1.displace()
b2.displace()
b3.displace()
b4.displace()
b5.displace()
b6.displace()
b7.displace()

b10.displace()
b20.displace()
b30.displace()
b40.displace()
b50.displace()

b1.score()
b2.score()
b3.score()
b4.score()
b5.score()
b6.score()
b7.score()
b10.score()
b20.score()
b30.score()
b40.score()
b50.score()


en.world.gravity.y=2

}



/*function mouseDragged(){

  Matter.Body.setPosition(player,{x:mouseX,y:mouseY})
  
}
*/ 

  async function getbackground(){

    var res= await fetch ("http://worldtimeapi.org/api/timezone/America/New_York");
    var data=await res.json();
    var time=data.datetime
    var hour=time.slice(11,13)
    if(hour>=06 && hour<=19){
    bg="sprites/bg.png"
    }
    else{
    bg="sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg);
    
    }