//console.log(c);

$(document).ready(function() {
	blog_set_posts(2);
});

// load the posts xml
function blog_set_posts(numberOfPosts) {
	var posts = [];
	for(var i=0; i<numberOfPosts; i++){
		var pageVar = "post"+i;
		console.log(pageVar);
		// get the real page location
		var xml = "Blog/posts/"+pageVar+"/info.xml";
		
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
				posts[i] = blog_createPostSection(xmlhttp.responseXML, i-1);
				
				if ((posts.length-1) == numberOfPosts) {
					var html = "";
					for	(var index = 1; index < posts.length; index++) {
						html += posts[index];
					}
					$("#blogPostsSection").html(html);		
				}
			}
		}
		
		xmlhttp.open("GET", xml, true);
		xmlhttp.send();
	}
}



// add the post to the site
function blog_createPostSection(xml, post) {
	
	var blog_image = "Blog/defaultMainImage.png";
	var blog_title = xml.getElementsByTagName("title")[0].childNodes[0].nodeValue;
	var blog_body = xml.getElementsByTagName("body")[0].childNodes[0].nodeValue;
	var blog_date = xml.getElementsByTagName("date")[0].childNodes[0].nodeValue;
	
	
	var img = xml.getElementsByTagName("img")[0].childNodes[0].nodeValue;
	if (img != 0){
		blog_image = "Blog/posts/post"+post+"/"+img;
	}
	
	
	var postHtml = "";
	
	postHtml += '<div class="w3-content w3-border-bottom"">';
	
		postHtml += '<div class="w3-row w3-margin">';
		
			postHtml += '<div class="w3-col" style="width:150px;">';
			postHtml += '<img src="' + blog_image + '" alt="Blog image" style="width:100%;">';
			postHtml += '</div>';
			
			postHtml += '<div class="w3-rest w3-container">';
			postHtml += '<p class="w3-small w3-right" style="margin: 0px;">'+blog_date+'</p>';
			postHtml += '<h2 style="margin: 0px;">';
				postHtml += '<a href="#" onclick="pageLoad('+"'Blog'"+','+"'"+post+"'"+');">'+blog_title+'</a>';
			postHtml += '</h2>';
			postHtml += '<p>'+blog_body+'</p>';
			postHtml += '</div>';
		
		postHtml += '</div>';
	
	postHtml += '</div>';
	
	return postHtml;
}


