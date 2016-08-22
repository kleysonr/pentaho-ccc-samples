$(function() {

	// Stringify function - handle functions
	function dump(object, pad){
    var indent = '\t'
    if (!pad) pad = ''
    var out = ''
    if (object.constructor == Array){
        out += '[\n'
        for (var i=0; i<object.length; i++){
            out += pad + indent + dump(object[i], pad + indent) + '\n'
        }
        out += pad + ']'
    }else if (object.constructor == Object){
        out += '{\n'
        for (var i in object){
            out += pad + indent + i + ': ' + dump(object[i], pad + indent) + '\n'
        }
        out += pad + '}'
    }else{
        out += object
    }
    return out
};
	
	
	var stringifyy = function(obj) {
	
		var result = "";

        result = JSON.stringify(obj, function(key, value) {
		  if (typeof value === 'function') {
		    return value.toString();
		  } else {
		    return value;
		  }
		}, '    ');
		
		return result	
	}
	
	var stringifyX = function(obj) {
	  var placeholder = '____PLACEHOLDER____';
	  var fns = [];
	  var json = JSON.stringify(obj, function(key, value) {
	    if (typeof value === 'function') {
	      fns.push(value);
	      return placeholder;
	    }
	    return value;
	  }, 2);
	  json = json.replace(new RegExp('"' + placeholder + '"', 'g'), function(_) {
	    return fns.shift();
	  });
	  return json;
	};
	
	var updateCd = function() {

		//eval('cd = ' + dump(cd));
		//debugger;
		cd.canvas = "chartDiv";
		cd.height = 400;
		cd.width = 600;
	}	

/*
  	CodeMirror.fromTextArea(document.getElementById('chartDefsTextArea'), {
	    theme: 'default', // the theme can be set here
	    lineNumbers: true,
	    lineWrapping: true,
	    styleActiveLine: true,
	    mode: "javascript"
	}).setValue(dump(cd));*/

	var editor = CodeMirror.fromTextArea(document.getElementById("chartDefsTextArea"), {
	        //lineNumbers: true,
	        //matchBrackets: true,
	        //mode: "text/typescript"
	    theme: 'default', // the theme can be set here
	    lineNumbers: true,
	    styleActiveLine: true,
	    mode: "javascript"
	});
	
	updateCd();

	new pvc.BarChart(cd)
		.setData(cdaData)
		.render();
		
	
});

		
