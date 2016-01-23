//console.log(c);

$(document).ready(function() {
	set_posts(1);
});

//
function postClick(post) {
	window.location.href = window.location.pathname + "?page=" + post;
}

// load the posts xml
function set_posts(numberOfPosts) {
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
				addPostSection(xmlhttp.responseXML)
			}
		}
		
		xmlhttp.open("GET", xml, true);
		xmlhttp.send();
	}
}

// add the post to the site
function addPostSection(xml) {
	document.getElementById("blogPostsSection").innerHTML += 
"
<div class='w3-content w3-border-bottom'>
	<div class='w3-row'>
		<div class='w3-col w3-container m4 l3'>
			<p><canvas class='w3-border' id='tutorialsCanvas' width='150' height='150' style='width:100%'></canvas></p>
		</div>
		<div class='w3-col w3-container m8 l9'>
			<p>
			I love to teach, not only becuase it helps others learn but it also helps me understand the subject better. The tutorials Is where I will put things that I want other people to know.
			</p>
		</div>
	</div>
</div>
"
	console.log(xml);
}