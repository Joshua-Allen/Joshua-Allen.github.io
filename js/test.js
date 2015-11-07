// need to add stuff

// an array of all the posts as a url
var post_fileLocations = [];

// start it all off
$(document).ready(function()
{
	get_posts();
});

// get all the posts
function get_posts()
{
	for (i = 0; i < 5; i++) {
		get_post(i);
	}
}

function get_post(index)
{
	var xmlhttp;
	
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			post_fileLocations.push("posts/post"+index+"/info.txt");
		}
	}
	
	//
	xmlhttp.open("GET","posts/post"+index+"/info.txt",true);
	xmlhttp.send();
}