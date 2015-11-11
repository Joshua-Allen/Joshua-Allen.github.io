// an array of all the posts as a url
var post_numbers = [];
var post_fileLocations = [];
var posts_info = [];

// start it all off
$(document).ready(function()
{
	get_posts(0);
});

//
function get_posts(index)
{
	var xmlhttp;
	
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function() {
		// wait to get the post
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			add_post(xmlhttp, index);
			get_posts(index+1);
		}
		// no more posts to look at
		if (xmlhttp.status==404)
		{
			update_page();
		}
	}
	
	//
	xmlhttp.open("GET", "posts/post"+index+".xml", true);
	xmlhttp.send();
}

//
function populateList(id)
{
	$("#"+id).html("");
	
	for	(index = 0; index < post_fileLocations.length; index++) {
		$("#"+id).append("<li>" + post_fileLocations[index] + "</li>");
	}
	
	for	(index = 0; index < posts_info.length; index++) {
		$("#"+id).append("<li>" + posts_info[index] + "</li>");
	}
}

//
function add_post(xml, index)
{
	if (post_numbers.indexOf(index) == -1)
	{
		var xmlDoc = xml.responseXML;
		
		var info = xmlDoc.getElementsByTagName("info")[0];
		
		var post = {
			Title: info.getElementsByTagName("title")[0].childNodes[0].nodeValue,
			Time: info.getElementsByTagName("time")[0].childNodes[0].nodeValue,
			Date: info.getElementsByTagName("date")[0].childNodes[0].nodeValue,
			Description: info.getElementsByTagName("description")[0].childNodes[0].nodeValue,
			Index: index
		}
		
		posts_info.push(post);
		
		post_numbers.push(index);
		//post_numbers.sort();
	}
}

//
function update_page()
{
	populateList("list");
}
