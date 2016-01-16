var surface;
var mainGrid;
var cellSize = 2;

function lifeStart(canvas) {
	surface = new_surface();
	surface.create(canvas);
	
	mainGrid = new_grid();
	mainGrid.create(Math.floor(surface.width / cellSize), Math.floor(surface.height / cellSize));
	mainGrid.random();
	drawLife();
}

function lifeReset(){
	mainGrid.random();
}

function new_surface() {
	return {
		create : function(canvas) {
			this.canvas = canvas;
			this.context = this.canvas.getContext("2d");
			this.width = canvas.width;
			this.height = canvas.height;
		},
		clear : function() {
			this.context.clearRect(0, 0, this.width, this.height);
		},
		draw_line : function(x1, y1, x2, y2) {
			this.context.beginPath();
			this.context.moveTo(x1,y1);
			this.context.lineTo(x2,y2);
			this.context.stroke();
		},
		draw_circle : function(x, y, r) {
			this.context.beginPath();
			this.context.arc(x,y,r,0,2*Math.PI);
			this.context.stroke();
		},
		draw_rect : function(x,y,width,height) {
			this.context.fillRect(x,y,width,height);
		},
		draw_point : function(x,y) {
			this.context.fillRect(x,y,1,1);
		}
	}
}

function new_grid(){
	return {
		cells: [],
		width: 0,
		height: 0,

		create : function(width, height) {
			this.numCells_x = width;
			this.numCells_y = height;
			this.width = width;
			this.height = height;
			this.numberOfCells = this.numCells_x * this.numCells_y;
			
			for (var i = 0; i < this.numberOfCells; i++) 
			{
				this.cells[i] = false;
			}
			
		},
		
		random : function() {
			for (var i = 0; i < this.numberOfCells; i++) 
			{
				this.cells[i] = (100*Math.random() < 20);
			}
		},
		
		copy : function() {
			
		},
		
		getCell : function(x,y) {
				if (y < 0) y = this.numCells_y-1;
				if (y > this.numCells_y-1) y = 0;
					
				if (x < 0) x = this.numCells_x-1;
				if (x > this.numCells_x-1) x = 0;
			
			return this.cells[x+(y*(this.numCells_x))];
		},
		setCell : function(x,y, val) {
			this.cells[x+y*this.numCells_x] = val;
		}
	}
}

function updateLife() {
	var numCells_x = mainGrid.numCells_x;
	var numCells_y = mainGrid.numCells_y;
	var numberOfCells = mainGrid.numberOfCells;
	
	var newlife = new_grid();
	newlife.create(mainGrid.numCells_x, mainGrid.numCells_y);
	
	for (var x = 0; x < numCells_x; x++) 
	{
		for (var y = 0; y < numCells_y; y++) 
		{
			
			var c = mainGrid.getCell(x,y);
			
			var c1 = mainGrid.getCell(x-1,y-1);
			var c2 = mainGrid.getCell(x  ,y-1);
			var c3 = mainGrid.getCell(x+1,y-1);
			var c4 = mainGrid.getCell(x-1,y  );
			var c5 = mainGrid.getCell(x+1,y  );
			var c6 = mainGrid.getCell(x-1,y+1);
			var c7 = mainGrid.getCell(x  ,y+1);
			var c8 = mainGrid.getCell(x+1,y+1);
			
			var total = c1+c2+c3+c4+c5+c6+c7+c8;
			
			newlife.setCell(x, y, false);
			//console.log(total);
			if (c){
				if (total < 2)
				{
					newlife.setCell(x, y, false);
				}
				if (total == 2 || total == 3)
				{
					newlife.setCell(x, y, true);
				}
				if (total > 3)
				{
					newlife.setCell(x, y, false);
				}
			} else {
				if (total == 3)
				{
					newlife.setCell(x, y, true);
				}
			}
		}
	}
	mainGrid = newlife;
	/*
	for (var x = 0; x < numCells_x; x++) 
	{
		for (var y = 0; y < numCells_y; y++) 
		{
			mainGrid.setCell(x, y, newlife.getCell(x,y));
		}
	}*/
}

function drawLife() {
	surface.clear();
	
	for (var x = 0; x < mainGrid.numCells_x; x++) 
	{
		for (var y = 0; y < mainGrid.numCells_y; y++) 
		{
			if (mainGrid.getCell(x,y))
			{
				surface.draw_rect(x*cellSize,y*cellSize,cellSize,cellSize);
				//console.log(x);
			}
		}
	}
	//console.log(mainGrid.numCells_x+mainGrid.numCells_y);
}





