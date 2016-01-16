var surface;
var mainGrid;
var cellSize = 2;

function textStart(canvas) {
	surface = new_surface();
	surface.create(canvas);
	
	mainGrid = new_grid();
	mainGrid.create(Math.floor(surface.width / cellSize), Math.floor(surface.height / cellSize));
	mainGrid.random();
	drawLife();
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


