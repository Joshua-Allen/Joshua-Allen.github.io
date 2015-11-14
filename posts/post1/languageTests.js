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
function lifeUpdate()
{
	var newlife = [];
	for (x = 0; x < numCells_x; x++) 
	{
		for (y = 0; y < numCells_y; y++) 
		{
			var c = lifeGetCell(x,y);
			
			var c1 = lifeGetCell(x-1,y-1);
			var c2 = lifeGetCell(x  ,y-1);
			var c3 = lifeGetCell(x+1,y-1);
			var c4 = lifeGetCell(x-1,y  );
			var c5 = lifeGetCell(x+1,y  );
			var c6 = lifeGetCell(x-1,y+1);
			var c7 = lifeGetCell(x  ,y+1);
			var c8 = lifeGetCell(x+1,y+1);
			
			var total = c1+c2+c3+c4+c5+c6+c7+c8;
			
			lifeSetCell(newlife, x, y, false);
			if (c){
				if (total < 2)
				{
					lifeSetCell(newlife, x, y, false);
				}
				if (total == 2 || total == 3)
				{
					lifeSetCell(newlife, x, y, true);
				}
				if (total > 3)
				{
					lifeSetCell(newlife, x, y, false);
				}
			} else {
				if (total == 3)
				{
					lifeSetCell(newlife, x, y, true);
				}
			}
		}
	}
	
	Array.prototype.splice.apply(life, [0, newlife.length].concat(newlife));
}
function lifeGetCell(x, y)
{
	if (y < 0 || y > numCells_y) 
		return 0;
	if (x < 0 || x > numCells_x) 
		return 0;
	
	return life[x+y*numCells_x];
}
function lifeSetCell(array, x, y, val)
{
	array[x+y*numCells_x] = val;
}


//
function render()
{
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
	
	lifeUpdate()

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






















