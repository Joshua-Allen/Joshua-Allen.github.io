// need to add stuff

// an array of all the posts as a url
var post_fileLocations = [];

// start it all off
$(document).ready(function()
{
	get_posts(2);
});

// get all the posts
function get_posts(number)
{
	for (i = 0; i < number; i++) {
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
			//post_fileLocations.push("posts/post"+index+"/info.txt");
			post_fileLocations_add(index);
		}
	}
	
	//
	xmlhttp.open("GET","posts/post"+index+"/info.txt",true);
	xmlhttp.send();
}

function populateList(id)
{
	$("#"+id).html("");
	for	(index = 0; index < post_fileLocations.length; index++) {
		$("#"+id).append(
			"<li>" + post_fileLocations[index] + "</li>");
	}
}

function post_fileLocations_add(item)
{
	post_fileLocations.push("posts/post"+item+"/info.txt");
	populateList("list");
}
