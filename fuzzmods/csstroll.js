var genSensibleCss=require('./cssgen.js').genSensibleCss
var html = require('./Helpers/lib.js').HTML
var fs = require('fs')
var dom = require('./Helpers/createDom.js').createRandomDom;
var rangeFuzz = require('./Helpers/rangeApiNode.js').fuzzRangeApi
eval(fs.readFileSync('./fuzzmods/Helpers/stdlib.js')+'') 

function generateTestCase(){
	SCRIPT = '<!DOCTYPE html>\n'
		+'<html>\n'
		+'<head>\n'
		+'<style id="css"></style>\n'
		+'<script>\n'
		+ FunctionBase64Decode()
		+ FunctionExecCss()
		+ FunctionExecCss2()
		+ rangeFuzz()
		+'\nfunction start(){\n'
		+ 'execCss();\n'
		+ genDomElements(11)
		+ 'execCss2();\n'
		+ 'rangeFuzz();\n'
		//+ dom(4)
		+ 'while(1){try{document.styleSheets[0].deleteRule(0)}catch(e){break;}}\n'
		+ 'window.location.href=window.location.href;\n'
		+ '}\n'
		+ 'window.onload=start;\n'
		+ '</script>\n'
		+'</head>\n'
		+'<body>\n'
		+'</body>\n'
		+'</html>\n'
	return SCRIPT;

}


function FunctionExecCss(){
return '\nfunction execCss(){\ns=document.getElementById("css");\n'+genSensibleCss(11)+'}\n'
}


function FunctionExecCss2(){
return '\nfunction execCss2(){\ns=document.getElementById("css");\n'+genSensibleCss(11)+'}\n'
}

function genDomElements(_iter){

	name = 'elem'
	id = 'test'
	SCRIPT = ''
	for(var i=0;i<_iter;i++){
		SCRIPT += name+'_'+i+' = document.createElement("'+ra(HTML)+'");\n'
			+ name+'_'+i+'.id="'+id+i+'";\n'
			if(i==0){
			SCRIPT += 'document.body.appendChild('+name+'_'+i+');\n\n'
			}else{
			SCRIPT += name+'_'+(i-1)+'.appendChild('+name+'_'+i+');\n\n'
			}
	}
	return SCRIPT

}

module.exports.generateTestCase = generateTestCase;
console.log(generateTestCase());
