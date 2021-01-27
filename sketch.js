const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base1,base2,box1;
var box2,box3,box4,box5,box6
var box7,box8,box9,box10;
var box11;
var box12,box13,box14,box15,box16,box17,box18,box19,box20;
var hexagon;
var chain;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    base1 = new Ground(500,340,250,20);
    base2 = new Ground(850,190,250,20)
    box1 = new Boxa(500,320,30,50)
    box2 = new Boxa(485,320,30,50);
    box3 = new Boxa(465,320,30,50);
    box4 = new Boxa(445,320,30,50);
    box5 = new Boxa(505,320,30,50);
    box6 = new Boxa(525,320,30,50);
    box7 = new Boxa(490,270,30,50);
    box8 = new Boxa(470,270,30,50);
    box9 = new Boxa(510,270,30,50);
    box10 = new Boxa(530,270,30,50);
    box11 = new Boxa(500,230,30,50);
    box12 = new Boxa(850,160,30,50);
    box13 = new Boxa(870,160,30,50);
    box14 = new Boxa(890,160,30,50);
    box15 = new Boxa(830,160,30,50);
    box16 = new Boxa(810,160,30,50);
    box17 = new Boxa(840,120,30,50);
    box18 = new Boxa(860,120,30,50);
    box19 = new Boxa(880,120,30,50);
    box20 = new Boxa(850,90,30,50);
    hexagon = new Polygon(150,200,50,50);
    chain = new slingshot(hexagon.body,{x:150,y:200});
}


function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    base1.display();
    hexagon.display();
    chain.display();
    fill("lightblue")
    box1.display();
    base2.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    fill("pink")
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    fill("lightblue")
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    fill("pink")
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
    }
    function mouseReleased(){
    chain.fly(); 
    }
    function keyPressed(){
        if(keyCode === 32){
        chain.attach(hexagon.body);
        }
    }