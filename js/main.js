//console.log(c);

$(document).ready(function() {
	set_page();
});

//
function navClick(page) {
	window.location.href = window.location.pathname + "?page=" + page;
}

// stuff to show the page
function set_page() {
	
	// get the page var from the url
	var pageVar = getQueryVariable("page");
	var postVar = getQueryVariable("post");
	
	// get the real page location
	if (postVar == "-1"){
		var page = pageVar+"/index.html";
	} else {
		var page = pageVar+"/posts/post"+postVar+"/index.html";
	}
	
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
			$("#mainSection").html(xmlhttp.responseText);
			
			// make footer visable
			document.getElementById("footer").style.visibility = "visible";
		}
	}
	
	xmlhttp.open("GET", page, true);
	xmlhttp.send();
}

function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
	   if (variable == "page") return "Home";
	   if (variable == "post") return "-1";
}

// stuff to fix the page
//////////////////////////////////////////////////////////////////////////
if (window.addEventListener) {
    window.addEventListener("scroll", function() {fix_sidemenu();});
    window.addEventListener("resize", function() {fix_sidemenu();});
    window.addEventListener("touchmove", function() {fix_sidemenu();});
    window.addEventListener("load", function() {fix_sidemenu();});
} else if (window.attachEvent) {
    window.attachEvent("onscroll", function() {fix_sidemenu();});
    window.attachEvent("onresize", function() {fix_sidemenu();});
    window.attachEvent("ontouchmove", function() {fix_sidemenu();});
    window.attachEvent("onload", function() {fix_sidemenu();});
}

function fix_sidemenu() {
	var w, top;
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	top = scrolltop()
	if (w < 993 && w > 610) {
		if (top > 82) {
			document.getElementById("belowtopnav").style.paddingTop = "44px";
			document.getElementById("topnav").style.position = "fixed";
			document.getElementById("topnav").style.top = "0";
		} else {
			document.getElementById("belowtopnav").style.paddingTop = "0";
			document.getElementById("topnav").style.position = "relative";
		}
	} else {
		if (top > 82) {
			document.getElementById("belowtopnav").style.paddingTop = "44px";
			document.getElementById("topnav").style.position = "fixed";
			document.getElementById("topnav").style.top = "0";
		} else {
			document.getElementById("belowtopnav").style.paddingTop = "0";
			document.getElementById("topnav").style.position = "relative";
		}
	}
}

function scrolltop() {
    var top = 0;
    if (typeof (window.pageYOffset) == "number") {
        top = window.pageYOffset;
    } else if (document.body && document.body.scrollTop) {
        top = document.body.scrollTop;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        top = document.documentElement.scrollTop;
    }
    return top;
}