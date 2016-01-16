

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