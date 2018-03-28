//amount of balls per array
var N = 10;

//array names
var B1;
var B2;

function setup() {
  createCanvas( windowWidth , windowHeight );
  //background(  0,0 ,0 );

  //creating the arrays (array is a table of variables for a for-loop)
  B1 = new Array(N);
  B2 = new Array(N);
  
  //create for-loop for the arrays)
  for ( n = 0 ; n < N ; n++ ){
    B1[n] = new Ball();
    B2[n] = new Ball();
  }
}

function draw() {
  frameRate(50);
  //background( random(mouseX*.3,mouseY*.3) ,mouseY*.5 ,mouseX*.5 , 75 );
  
  //for-loop to create the arrays
  for ( n = 0 ; n < N ; n++ ){
    B1[n].evolveDraw();
    B2[n].evolveDraw();
    
    
    stroke(155,155,155,75);
    
    //creates line between the points
    line( B1[n].pos.x , B1[n].pos.y , B2[n].pos.x , B2[n].pos.y );
  }
}

//new function-anything that is classified as ball will follow these instructions
var Ball = function(){
  //create vector for position of the bal
  this.pos = createVector( width/2 , height/2 );
  
  //create vector for velocity
    //direction (randomized)
  this.v = p5.Vector.random2D();
    //speed
  this.v.mult( random(1,10) );
  
  //new function-anything told to evolveDraw will follow these instructions
  this.evolveDraw =function() {
    //adds velocity to position
    this.pos.add( this.v );
  
  //set boundries for balls)
    if ( this.pos.x >= width || this.pos.x <= 0 ){
      this.v.x *=-1;
    }
    if ( this.pos.y >= height || this.pos.y <= 0 ){
      this.v.y *=-1;
    }
    var r = random(mouseX*.3,mouseY*.3);
    var g = random(mouseY*.5,this.pos.y+100);
    var b = random(mouseX*.5,this.pos.x+100);
    //create ellipse
    fill(r,g,b,51);
    ellipse( this.pos.x , this.pos.y , 70);
    
  };
  
};
