// an array of all the posts as a url
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
setInterval(render, 1000/60);

//
function render()
{
	//ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

	draw_point(200*Math.random(),200*Math.random())
}

function draw_line(x1, y1, x2, y2)
{
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}

function draw_circle(x, y, r)
{
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
}

function draw_rect(x,y,width,height)
{
	ctx.fillRect(x,y,width,height);
}

function draw_point(x,y)
{
	ctx.fillRect(x,y,1,1);
}






















