// an array of all the posts as a url
var canvas = $("#canvas");
var ctx = canvas.getContext("2d");
setInterval(draw, 1000);

//
function draw()
{
	ctx.moveTo(0,0);
	ctx.lineTo(200,100);
	ctx.stroke();
}



























