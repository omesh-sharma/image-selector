var rect = {};
var drag = false;
var orgImg;
var image;
var canvas;
var context;
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
function addImage(image=null){

    if(!image)
    {
        image = document.getElementById('myImage');
        orgImg = image.src
        
    }
    else{
        image = "https://f1.media.brightcove.com/8/234507581/234507581_5106927173001_5106903722001-vs.jpg?pubId=234507581&videoId=5106903722001"; //document.getElementById('myImage').src; //"https://f1.media.brightcove.com/8/234507581/234507581_5106927173001_5106903722001-vs.jpg?pubId=234507581&videoId=5106903722001";
    }
 
image.onload = function() {
  ctx.drawImage(image, 10,10);
  canvas = document.getElementById("myCanvas");
  context = canvas.getContext("2d");
  console.log('canvas2')
  console.log(canvas)
  init(canvas, context);
}
}

function drawRectangle() {
  context.rect(0, 0, 200, 100);
  context.fillStyle = 'yellow';
  context.fill();
  context.lineWidth = 7;
  context.strokeStyle = 'black';
  context.stroke();
}

function init(canvas, context) {
  
  console.log(canvas);
  canvas.addEventListener('mousedown', mouseDown, false);
  canvas.addEventListener('mouseup', mouseUp, false);
  canvas.addEventListener('mousemove', mouseMove, false);
}

function mouseDown(e) {
  rect.startX = e.pageX - this.offsetLeft;
  rect.startY = e.pageY - this.offsetTop;
  drag = true;
}

function mouseUp() {
    drag = false;
    addImage(orgImg);
    //context.fillStyle=None;)
    //context.clearRect(rect.startX, rect.startY, rect.w, rect.h)
    //context.clearRect(0, 0, canvas.width, canvas.height);

}

function mouseMove(e) {
  if (drag) {
    rect.w = (e.pageX - this.offsetLeft) - rect.startX;
    rect.h = (e.pageY - this.offsetTop) - rect.startY;
    context.fillStyle="rgba(0, 100, 255, 0.02)"; //"rgba(240,248,255,0.1)";
    //context.fillStyle = "rgba(0, 0, 200, 0.1)";
    drawMarker();
  }
}

function drawMarker() {
  context.fillRect(rect.startX, rect.startY, rect.w, rect.h);
}

addImage();