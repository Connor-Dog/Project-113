function preload(){
}
function setup(){
canvas=createCanvas(700,500);
canvas.position(100,250);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,700,500);
circle(30,30,40);
circle(650,30,40);
circle(30,450,40);
circle(650,450,40);
let c=color('red');
fill(c);
rect(50,15,580,30);
rect(50,435,580,30);
rect(15,50,30,380);
rect(635,50,30,380);
let a=color('blue');
fill(a);
}
function take_snapshot(){
save('Connor.png');}