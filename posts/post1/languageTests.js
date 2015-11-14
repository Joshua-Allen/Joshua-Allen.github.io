// an array of all the posts as a url
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
setInterval(draw, 1);

//
function draw()
{
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,200,200);

	ctx.moveTo(0,0);
	ctx.lineTo(200,200*Math.random());
	ctx.stroke();
}



























