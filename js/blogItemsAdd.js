//console.log(c);

$(document).ready(function() {
	blog_set_posts(1);
});

//
function blog_postClick(post) {
	window.location.href = window.location.pathname + "?page=" + post;
}

// load the posts xml
function blog_set_posts(numberOfPosts) {
	var posts = [];
	for(var i=0; i<numberOfPosts; i++){
		var pageVar = "post"+i;
		
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
				posts[i] = blog_createPostSection(xmlhttp.responseXML, i);
				
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
		blog_image = "Blog/post"+post+"/"+img;
	}
	
	
	var postHtml = "";
	
	postHtml += '<div class="w3-content w3-border-bottom">';
	//postHtml += '<div class="w3-row">';
	postHtml += '<div class="w3-row w3-margin">';
	//postHtml += '<div class="w3-col w3-container m4 l3">';
	//postHtml += '<p>';
	//postHtml += '<div class="w3-image">';
	postHtml += '<div class="w3-col m2">';
	postHtml += '<img src="' + blog_image + '" alt="Blog image" style="float:left; width:100%;">';
	postHtml += '</div>';
	//postHtml += '</div>'
	//postHtml += '</p>';
	//postHtml += '</div>';
	
	//postHtml += '<div class="w3-col w3-container m8 l9">';
	postHtml += '<div class="w3-col m10 w3-container">';
	postHtml += '<p class="w3-right w3-small">'+blog_date+'</p>';
	postHtml += '<h2>'+blog_title+'</h2>';
	postHtml += '<p>'+blog_body+'</p>';
	postHtml += '</div>';
	//postHtml += '</div>';
	//postHtml += '</div>';
	postHtml += '</div>';
	postHtml += '</div>';
	
	return postHtml;
}


