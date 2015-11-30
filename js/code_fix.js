// start it all off
$(document).ready(function()
{
	code_fix.fix();
});

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