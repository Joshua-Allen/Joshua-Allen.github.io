// an array of all the posts as a url
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
setInterval(render, 1000/60);

var life = [];
var cellSize = 10;
var numCells_x = (myCanvas.width / cellSize);
var numCells_y = (myCanvas.height / cellSize);
var numberOfCells = numCells_x * numCells_y;
	
lifeStart();

//
function lifeStart()
{
	for (i = 0; i < numberOfCells; i++) 
	{
		life[i] = (100*Math.random() < 10);
	}
}

//
function render()
{
	//ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

	var x = 0;
	var y = 0;
	for (i = 0; i < numberOfCells; i++) 
	{
		if (life[i])
		{
			draw_rect(x*cellSize,y*cellSize,cellSize,cellSize);
		}
		x++;
		if (x > numCells_x)
		{
			x = 0;
			y++;
		}
	}
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






















