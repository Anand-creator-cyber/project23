var centre, left1, right1, centretop;
var d, l2, r2, l3, r3;
var r4,l4;





function setup() {
  createCanvas(800,400);

   centre = createSprite(400, 330, 80, 160);
   centre.shapeColor = "black";

   left1 = createSprite(472, 300, 60,200);
   left1.shapeColor = "black";

   d = createSprite(400,380,20,50);
   d.shapeColor = "white";

   right1 = createSprite(327,300,60,200);
   right1.shapeColor = "black";

   //centretop = createSprite(400,225,50,50);
   //centretop.shapeColor = "black";

   l3 = createSprite(169,340,250,130);
   l3.shapeColor = "black";

   r3 = createSprite(630,340,250,130);
   r3.shapeColor = "black";

   r4 = createSprite(741.6,200,30,150);
   r4.shapeColor = "black";

   l4 = createSprite(57.6,200,30,150);
   l4.shapeColor = "black";



  }

function draw() {
  background("maroon");  











  drawSprites();
}