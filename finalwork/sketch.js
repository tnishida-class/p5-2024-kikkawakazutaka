// 最終課題を制作しよう

let x = 600;
let y = 650;

let bx = 600;
let by = 650;
let bdx = 1;
let bdy = -1;

let e = 0;
let f = 0;

let c1 = 255;
let c2 = 0;
let c3 = 0;


function setup(){
  createCanvas(1200, 700);
  e = random(50, 1100);
  f = random(10, 600);


}

function draw(){
  background(0,0,0);

  let rad = atan2(mouseY - y, mouseX - x);
  let a = x + 30 * cos(rad);
  let b = y + 30 * sin(rad);

  stroke(255);
  line(a, b, x, y,);
  fill(255);
  ellipse(x, y, 30);

  bx = bx + bdx;
  by = by + bdy;
  fill(0, 200, 200);
  ellipse(bx, by, 10);

  fill(c1, c2, c3);
  noStroke();
  ellipse(e, f, 30);

  if ((bx-e)*(bx-e)+(by-f)*(by-f) < 400){
    c1 = 0;
  
  }

  if(bx < 0 || bx > 1200){ bdx = -1 * bdx;}
  if(by < 0 || by > 700){ bdy= -1 * bdy;}
  
}

function mousePressed(){
 bx = x;
 by = y;
 let rad =atan2(mouseY - y, mouseX - x);
 bdx = 50 * cos(rad);
 bdy = 50 * sin(rad);

 }

