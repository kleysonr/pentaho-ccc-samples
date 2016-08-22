var setFixedValues = function() {
	cd.canvas = "chartDiv";
	cd.height = 400;
	cd.width = 600;
};

$(function() {

	var editor = CodeMirror.fromTextArea(document.getElementById("chartDefsTextArea"), {
	        //lineNumbers: true,
	        //matchBrackets: true,
	        //mode: "text/typescript"
	    theme: 'default', // the theme can be set here
	    lineNumbers: true,
	    styleActiveLine: true,
	    mode: "javascript"
	});

	def.setDebug(5);
});

		
