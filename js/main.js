//console.log(c);

pageVar = "";
postVar = "";


$(document).ready(function() {
	set_page();
	code_fix.fix();
});

//
function pageLoad(page, post) {
	if (post === undefined) {
        window.location.href = window.location.pathname + "?page=" + page;
    } else {
		window.location.href = window.location.pathname + "?page=" + page + "&post=" + post;
	}
	document.getElementById("footer").style.visibility = "hidden";
}


// stuff to show the page
function set_page() {
	
	// get the page var from the url
	pageVar = getQueryVariable("page");
	postVar = getQueryVariable("post");
	
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
			
			page_loading_compleat();
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

function page_loading_compleat(){
	// make footer visable
	document.getElementById("footer").style.visibility = "visible";
	
	if (pageVar != "Home" && pageVar != "AboutMe" && postVar == "-1"){
		getNumberOfPosts();
		//loadPosts(pageVar, 2);
	}
}

function getNumberOfPosts(){
	var xml = pageVar+"/info.xml";

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
			xmlhttp.responseXML
			var number = xmlhttp.responseXML.getElementsByTagName("postNumber")[0].childNodes[0].nodeValue;
			loadPosts(pageVar, number);
		}
	}
	
	xmlhttp.open("GET", xml, true);
	xmlhttp.send();
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

//////
var code_fix = {
	fix: function() {
		var elements = document.getElementsByClassName("code");
		
		for(var i=0; i<elements.length; i++) {
			
			var element = elements[i];
			var text = element.innerHTML.split("\n");
			
			var html = "";
			
			html += "<table style='width:100%; border-collapse: collapse;'>";
				html += "<tr style=''>";
					html += "<th rowspan='"+(text.length-2)+"' style='width: 32px; border: 1px solid black; vertical-align: text-top; background-color: lightgray;'>";
						html += "<pre style='margin: 0px;'>";
							html += "<code>";
								for(var j=1; j<text.length-1; j++) { html+= j + "\n"; }
							html+= "</code>";
						html+= "</pre>";			
					html+= "</th>";
					
					html += "<th rowspan='"+(text.length-2)+"' style='text-align: left; border: 1px solid black; padding-left: 16px;'>";
						html += "<pre style='margin: 0px;'>";
							html += "<code>";
								for(var j=1; j<text.length-1; j++) { html+= text[j] + "\n"; }
							html+= "</code>";
						html+= "</pre>";
					html+= "</th>";
				html+= "</tr>";
			html+= "</table>";
			
			element.innerHTML = html;
		}
	}
}