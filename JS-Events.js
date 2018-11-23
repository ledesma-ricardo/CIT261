// Variables for referencing the canvas and 2dcanvas context
var canvas,ctx;
var mouseX,mouseY,mouseDown=0;
var touchX,touchY;

// Set-up the canvas and add our event handlers after the page has loaded
function init() {
    canvas = document.getElementById('mycanvas');
    if (canvas.getContext)
        ctx = canvas.getContext('2d');
    if (ctx) {
        canvas.addEventListener('mousedown', mycanvas_mouseDown, false);
        canvas.addEventListener('mousemove', mycanvas_mouseMove, false);
        window.addEventListener('mouseup', mycanvas_mouseUp, false);
        canvas.addEventListener('touchstart', mycanvas_touchStart, false);
        canvas.addEventListener('touchmove', mycanvas_touchMove, false);
    }
}

//Set circle Color and fill style
function drawDot(ctx,x,y,size) {
    r=0; g=0; b=0; a=255;
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
} 

// Keep track of the mouse button being pressed to draw a dot.
function mycanvas_mouseDown() {
    mouseDown=1;
    drawDot(ctx,mouseX,mouseY,3);
}

function mycanvas_mouseUp() {
    mouseDown=0;
}

function mycanvas_mouseMove(e) { 
    getMousePos(e);
    if (mouseDown==1) {
        drawDot(ctx,mouseX,mouseY,3);
    }
}

// Get the current mouse position relative to canvas.
function getMousePos(e) {
    if (!e)
        var e = event;

    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
 }

// Draw in canvas when the touchStart is detected
function mycanvas_touchStart() {
    getTouchPos();
    drawDot(ctx,touchX,touchY,3);
    event.preventDefault();
}

// Draw in canvas and prevent to scrolling when touch movement is detected
function mycanvas_touchMove(e) { 
    getTouchPos(e);
    drawDot(ctx,touchX,touchY,3); 
    event.preventDefault();
}

// Get the touch position relative to the top-left of the canvas. When we get the raw values of pageX and pageY below, they take into account the scrolling on the page
function getTouchPos(e) {
    if (!e)
        var e = event;

    if(e.touches) {
        if (e.touches.length == 1) {
            var touch = e.touches[0];
            touchX=touch.pageX-touch.target.offsetLeft;
            touchY=touch.pageY-touch.target.offsetTop;
        }
    }
}

// Clear the canvas context using the canvas width and height
function clearCanvas(canvas,ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Random and Reset Color Functions.    
        function random_bg_color() {
              var x = Math.floor(Math.random() * 256);
              var y = Math.floor(Math.random() * 256);
              var z = Math.floor(Math.random() * 256);
              var bgColor = "rgb(" + x + "," + y + "," + z + ")";
              document.getElementById('id1').style.color = bgColor;
              }

        function resetStyle() {
            document.getElementById('id1').style.color = 'black';
            }
        