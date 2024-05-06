let pd = 1; //pixel density
let mainCanvas, seed;

function setup() {
  seed = int($fx.rand()*9999999); //fxrand must be used to generate randomness on fxhash.  Making this a seed allows you to keep using p5 random and noise function (see below). Seeding also allows you to resize the canvas or change pixel densities and (hopefully) get the same output.
  restart();
}

function restart(){
  pixelDensity(pd);  
  randomSeed(seed);
  noiseSeed(seed);
  maxCanv = min(windowWidth, windowHeight);
  mainCanvas = createCanvas(windowWidth, (windowWidth / 3) * 4); //naming it mainCanvas for the grain shader
  if (height > windowHeight) {
    resizeCanvas((windowHeight / 4) * 3, windowHeight);
  }
   grainBuffer = createGraphics(width, height, WEBGL);
  grainShader = grainBuffer.createShader(vert, frag);
  
  //Start coding here.
  background(150);
  x = random(width);
  y = random(height);
  circle(x,y,width*0.2);
  applyGrain(); //comment this out if you don't want grain.
  $fx.preview(); //creates token image on fxhash
}

function keyTyped() {
  if (key === "s") {
    save(seed + ".png");
  }
  if (key === "2") {
    pd = 2;
    restart();
  }
  if (key === "3") {
    pd = 3;
    restart();
  }
  if (key === "4") {
    pd = 4;
    restart();
  }
  if (key === "5") {
    pd = 5;
    restart();
  }
}

function windowResized() {
  pd = 1;
  restart();
}