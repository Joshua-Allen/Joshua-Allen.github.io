//console.log(c);

// I'm just going to make this global
posts = [];
numberOfPosts = 0;
folder = "";

function loadPosts(folderu, number){
	console.log(folder, number);
	
	numberOfPosts = number;
	folder = folderu;
	for(var i=0; i<numberOfPosts; i++){
		set_posts(i);
	}
}

// load the posts xml
function set_posts(post_number) {
	
	var pageVar_post = "post"+post_number;
	
	// get the real page location
	var xml = folder+"/posts/"+pageVar_post+"/info.xml";
	
	console.log(folder);
	
	//
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function() {
		// wait to get the post
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			
			posts[post_number] = createPostSection(xmlhttp.responseXML, post_number);
			if ((posts.length) == numberOfPosts) {
				var html = "";
				for	(var index = posts.length-1; index >= 0; index--) {
					html += posts[index];
				}
				$("#postSection").html(html);
			}
		}
	}
	
	xmlhttp.open("GET", xml, true);
	xmlhttp.send();
}



// add the post to the site
function createPostSection(xml, post) {
	
	var post_image = "images/defaultPostImage.png";
	var post_title = xml.getElementsByTagName("title")[0].childNodes[0].nodeValue;
	var post_body = xml.getElementsByTagName("body")[0].childNodes[0].nodeValue;
	var post_date = xml.getElementsByTagName("date")[0].childNodes[0].nodeValue;
	
	
	var img = xml.getElementsByTagName("img")[0].childNodes[0].nodeValue;
	if (img != "0"){
		post_image = folder+"/posts/post"+post+"/images/"+img;
	}
	
	
	var postHtml = "";
	
	postHtml += '<div class="w3-content w3-border-bottom"">';
	
		postHtml += '<div class="w3-row w3-margin">';
		
			postHtml += '<div class="w3-col" style="width:150px;">';
			postHtml += '<img src="' + post_image + '" alt="Post image" style="width:100%;">';
			postHtml += '</div>';
			
			postHtml += '<div class="w3-rest w3-container">';
			postHtml += '<p class="w3-small w3-right" style="margin: 0px;">'+post_date+'</p>';
			postHtml += '<h2 style="margin: 0px;">';
				postHtml += '<a href="#" onclick="pageLoad('+"'"+folder+"'"+','+"'"+post+"'"+');">'+post_title+'</a>';
			postHtml += '</h2>';
			postHtml += '<p>'+post_body+'</p>';
			postHtml += '</div>';
		
		postHtml += '</div>';
	
	postHtml += '</div>';
	
	return postHtml;
}


