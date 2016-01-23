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
				//$("#mainSection").html(xmlhttp.responseText);
				posts[i] = blog_createPostSection(xmlhttp.responseXML);
				
				console.log(posts.length);
				console.log(numberOfPosts);
				console.log(posts);
				
				if ((posts.length-1) == numberOfPosts) {
					var html = "";
					for	(var index = 0; index < posts.length; index++) {
						html += fruits[index];
					}
					$("#blogPostsSection").html(html);
					console.log(posts);
					console.log(html);				
				}
			}
		}
		
		xmlhttp.open("GET", xml, true);
		xmlhttp.send();
	}
	

}



// add the post to the site
function blog_createPostSection(xml) {
	var postHtml = "";
	
	postHtml += '<div class="w3-content w3-border-bottom">';
	postHtml += '<div class="w3-row">';
	
	postHtml += '<div class="w3-col w3-container m4 l3">';
	postHtml += '<p><canvas class="w3-border" id="tutorialsCanvas" width="150" height="150" style="width:100%"></canvas></p>';
	postHtml += '</div>';
	
	postHtml += '<div class="w3-col w3-container m8 l9">';
	
	postHtml += '<p>text</p>';
	
	postHtml += '</div></div></div>';
	
	return postHtml;
}


