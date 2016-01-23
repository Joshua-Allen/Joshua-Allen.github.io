//console.log(c);

$(document).ready(function() {
	//set_posts(1);
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
				posts[i] = createPostSection(xmlhttp.responseText);
			}
		}
		
		xmlhttp.open("GET", xml, true);
		xmlhttp.send();
	}
}

// add the post to the site
function blog_createPostSection(xml) {
	var postHtml = "";
	
	postHtml = "";
	console.log(postHtml);
	return postHtml;
}