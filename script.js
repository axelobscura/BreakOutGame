var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(40,40,50,50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 100, 10, 0, Math.PI*2, false);
ctx.fillStyle = "#000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 100);
ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
ctx.stroke();
ctx.closePath();

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1;
var dy = -1;

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#333";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
};
setInterval(draw, 10);