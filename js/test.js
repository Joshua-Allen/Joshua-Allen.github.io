// an array of all the posts as a url
var post_numbers = [];
var post_fileLocations = [];
var posts_info = [];

// start it all off
$(document).ready(function()
{
	get_posts(0);
	set_page();
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
	
	xmlhttp.open("GET", "posts/post"+index+"/post"+index+".xml", true);
	xmlhttp.send();
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
		
		posts_info.unshift(post);
		
		post_numbers.push(index);
	}
}

//
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return -1;
}

//////////////////////////////////////////////////////////////////////////////////////////////////

//
function update_page()
{
	populateList("postList");
}

//
function set_page()
{
	var page = "special/startPage.html";
	var index = getQueryVariable("id");
	if(index != -1)
	{
		page = "posts/post"+index+"/page.html";
	}
	
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
			$("#mainSection").html(xmlhttp.responseText);
			document.getElementById("mainSectionStyle").setAttribute("href", "posts/post"+index+"/style.css"); 
		}
		// no more posts to look at
		if (xmlhttp.status==404)
		{
			// update_page();
		}
	}
	
	xmlhttp.open("GET", page, true);
	xmlhttp.send();
}

//
function populateList(id)
{
	$("#"+id).html("");

	for	(index = 0; index < posts_info.length; index++) {
		var address = "http://joshua-allen.github.io/?" + 
					"id="+posts_info[index].Index + "&" +
					"title="+posts_info[index].Title.replace(/ /g,"_");
		var link = '<a id = "postLink" href='+address+'>'+posts_info[index].Title+'</a>';
		
		var date = posts_info[index].Date;
		
		$("#"+id).append(
				'<span id = "postDate">' + date + '</span>' + 
				"<br>" + link + "<br>" +
				'<hr style="margin-bottom: 3px; margin-top: 5px;">');
	}
}



























