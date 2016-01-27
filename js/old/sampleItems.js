var interval;

var blogCanvas; 
var blog_c; 

var gameStuffCanvas; 
var gameStuff_c; 

var blogTick;
var tutorialsTick;
var gameStuffTick;

var tick_blog;
//var tick_tutorials;
var tick_gameStuff;
var tick;

window.onload = function(){
	
	blogCanvas = document.getElementById('blogCanvas'); 
	blog_c = blogCanvas.getContext('2d'); 

	gameStuffCanvas = document.getElementById('gameStuffCanvas'); 
	gameStuff_c = gameStuffCanvas.getContext('2d'); 

	blogTick = false;
	tutorialsTick = false;
	gameStuffTick = false;

	tick_blog = 0;
	//var tick_tutorials = 0;
	tick_gameStuff = 0;
	tick = 0;
	
	interval = setInterval(loop, 30);
	
	
	lifeStart(document.getElementById('tutorialsCanvas'));

	document.addEventListener('mousemove', function(evt) {
		var path = evt.path;
		var found = "";
		for(var i=0; i<path.length; i++) {
			var id = path[i].id;
			if (id == "blog") {found = "blog"; break;}
			if (id == "tutorials") {found = "tutorials"; break;}
			if (id == "gameStuff") {found = "gameStuff"; break;}
		}
		
		mouse_evt_found('blog', found == 'blog');
		mouse_evt_found('tutorials', found == 'tutorials');
		mouse_evt_found('gameStuff', found == 'gameStuff');
		
	}, false);
}

function mouse_evt_found(type, set){
	if (type == 'blog'){
		if (blogTick != set)
		{
			if (set == true){
				blogTick = true;
			} else {
				blogTick = false;;
			}
		}
	}
	if (type == 'tutorials'){
		if (tutorialsTick != set)
		{
			if (set == true){
				tutorialsTick = true; lifeReset(); 
			} else {
				tutorialsTick = false;;
			}
		}
	}
	if (type == 'tutorials'){
		if (gameStuffTick != set)
		{
			if (set == true){
				gameStuffTick = true; 
			} else {
				gameStuffTick = false;;
			}
		}
	}
}

function loop() { 
	var y = 0;
	
	y = (tick_blog % 10) * 80;
	/*blog_c.drawImage( 
		img,        // the image of the sprite sheet 
		0,y,150,80, // source coordinates      (x,y,w,h) 
		0,0,150,80  // destination coordinates (x,y,w,h) 
	); */
	
	if (tutorialsTick) updateLife();
	drawLife();
	

	y = (tick_gameStuff % 10) * 80;
	/*gameStuff_c.drawImage( 
		img,        // the image of the sprite sheet 
		0,y,150,80, // source coordinates      (x,y,w,h) 
		0,0,150,80  // destination coordinates (x,y,w,h) 
	); */
	
	if (tick % 50 == 0) {
		if (blogTick) tick_blog++; 
		//if (tutorialsTick) tick_tutorials++; 
		if (gameStuffTick) tick_gameStuff++; 
	}
	tick++;
}
















