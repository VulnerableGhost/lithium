var HTML = require('./lib.js').HTML
var ra = require('./lib.js').ra
var rint = require('./lib.js').rint

function fuzzRangeApi(){


var SCRIPT = '';

for(var j=0;j<3;j++)
{

switch(rint(35))
{

case 0:
SCRIPT += "try{var doc = range.cloneContents()}catch(e){}\n"
break;

case 1:


SCRIPT += "try{var doc=range.cloneContents()}catch(e){}\n"
SCRIPT += "try{doc.detach()}catch(e){}\n"
break;

case 2:

SCRIPT += "try{var clonedRange = range.cloneRange()}catch(e){}\n"
break;

case 3:

SCRIPT += "try{var clonedRange = range.cloneRange()}catch(e){}\n"
SCRIPT += "try{clonedRange.detach()}catch(e){}\n"

break;

case 4:
SCRIPT += "try{range.deleteContents()}catch(e){}\n"
break;

case 5:
try{

SCRIPT += "try{range.collapse(true)}catch(e){}\n"
}catch(e){}
break;

case 6:
try{
SCRIPT += "try{range.collapse(false)}catch(e){}\n"
}catch(e){}
break;

case 7:
try{

SCRIPT += "try{range.detach()}catch(e){}\n"
}catch(e){}
break;

case 8:

try{

SCRIPT += "try{elem=document.getElementById('initial')}catch(e){}\n"
SCRIPT += "try{start_index = "+rint(4)+"}catch(e){}\n"
SCRIPT += "try{end_index = "+rint(4)+"}catch(e){}\n"

SCRIPT += "try{var range_1 = document.createRange()}catch(e){}\n"

SCRIPT += "try{range_1.setStart(start_index,0)}catch(e){}\n"
SCRIPT += "try{range_1.setEnd(end_index,0)}catch(e){}\n"

}catch(e){}

try{

switch(rint(4)){

case 0:

SCRIPT += "try{range.compareBoundaryPoints(Range.START_TO_START,range_1)}catch(e){}\n"
break;

case 1:

SCRIPT += "try{range.compareBoundaryPoints(Range.START_TO_END,range_1)}catch(e){}\n"
break;

case 2:

SCRIPT += "try{range.compareBoundaryPoints(Range.END_TO_START,range_1)}catch(e){}\n"
break;

case 3:

SCRIPT += "try{range.compareBoundaryPoints(Range.START_TO_END,range_1)}catch(e){}\n"
break;

}

}catch(e){}

break;


case 9:
//IE10 ONLY
try{
SCRIPT += "try{var htmlString = randomHTML()}catch(e){}\n"
SCRIPT += "try{var doc = range.createContextualFragment(htmlString)}catch(e){}\n"
}catch(e){}
break;

case 10:
try{


SCRIPT += "try{var doc = range.cloneContents()}catch(e){}\n"
SCRIPT += "try{doc.childNodes[0].parentNode.removeChlid(doc.childNodes[0])}catch(e){}\n"

}catch(e){}

break;

case 11:

try{

SCRIPT += "try{var doc  = range.extractContents()}catch(e){}\n"
SCRIPT += "try{doc.childNodes[0].parentNode.removeChild(doc.childNodes[0])}catch(e){}\n"
}catch(e){}
break;


case 12:
try{
SCRIPT += "try{rnd_tag = '"+ra(HTML)+"'}catch(e){}\n"
SCRIPT += "try{range.insertNode(document.createElement(rnd_tag));}catch(e){}\n"
}catch(e){}
break;


case 13:
try{
SCRIPT +="try{rnd_tag = '"+ra(HTML)+"'}catch(e){}\n"
SCRIPT += "try{var e = document.createElement(rnd_tag)}catch(e){}\n"
SCRIPT += "try{var initial = document.getElementById('initial')}catch(e){}\n"
SCRIPT += "try{range.selectNode(initial);}catch(e){}\n"
SCRIPT += "try{range.inserNode(e)}catch(e){}\n"
}catch(e){}

break;


case 14:

try{

SCRIPT += "try{rnd_tag = '"+ra(HTML)+"'}catch(e){}\n"
SCRIPT += "try{var e = document.createElement(rnd_tag)}catch(e){}\n"
SCRIPT += "try{rnd_text = '"+randomHTML()+"'}catch(e){}\n"

SCRIPT += "try{var t = document.createTextNode(rnd_text)}catch(e){}\n"

SCRIPT += "try{e.appendChild(t)}catch(e){}\n"

SCRIPT += "try{var initial = document.getElementById('initial')}catch(e){}\n"

SCRIPT += "try{range.selectNode(initial);}catch(e){}\n"

}catch(e){}

break;



case 15:

try{

SCRIPT += "try{range.selectNode(document.body)}catch(e){}\n"
}catch(e){}
break;

case 16:

try{
SCRIPT += "rnd_tag = 'test';\n"//rand_item(HTML)
SCRIPT += "try{var rnd_node = document.getElementsByTagName(rnd_tag)[0];}catch(e){}\n"


SCRIPT += "try{range.selectNode(rnd_code)}catch(e){}\n"
}catch(e){}
break;


case 17:

SCRIPT += "rnd_tag = '"+ra(HTML)+"';"
SCRIPT += "try{refNode=document.getElementsByTagName(rnd_tag)[0];}catch(e){}\n"
SCRIPT += "try{range.selectNodeContents(refNode);}catch(e){}\n"

break;

case 18:

try{
SCRIPT += "try{rndElemIndex = 2}catch(e){}\n"
SCRIPT += "try{rndElem =document.body.childNodes[rndElemIndex]}catch(e){}\n"
SCRIPT += "try{range.surroundContents(rndElem)}catch(e){}\n"
}catch(e){}
break;

case 19:

try{
SCRIPT += "try{rndElemIndex = 2}catch(e){}\n"
SCRIPT += "try{rndElem =document.body.childNodes[rndElemIndex]}catch(e){}\n"
SCRIPT += "try{range.surroundContents(rndElem)}catch(e){}\n"
}catch(e){}

break;

case 20:

try{
SCRIPT += "try{rndElemIndex = 2}catch(e){}\n"
SCRIPT += "try{var rndElem = document.body.childNodes['+rndElemIndex+'];}catch(e){}\n"
SCRIPT += "try{range.surroundContents(rndElem)}catch(e){}\n"
}catch(e){}

break;

case 21:

try{
SCRIPT += "rndElemIndex = 2\n"

SCRIPT += "try{rndElem =document.body.childNodes[rndElemIndex]}catch(e){}\n"
SCRIPT += "try{range.surroundContents(rndElem)}catch(e){}\n"
}catch(e){}

break;

case 22:


try{
SCRIPT += "try{rndElemIndex = 2}catch(e){}\n"
SCIRPT += "rndElem =document.body.childNodes[rndElemIndex]\n"
SCRIPT += "range.surroundContents(rndElem)}catch(e){}\n"
}catch(e){}
break;

case 23:

try{

//setStart
}catch(e){}
break;

case 24:

try{
//setStartAfter
}catch(e){}
break;
case 25:

try{
//setStartBefore

}catch(e){}
break;


case 25:

try{

SCRIPT += "try{range.toString()}catch(e){}\n"
}catch(e){}
break;

case 26:

try{
SCRIPT += "rnd_tag = '"+ra(HTML)+"';"
SCRIPT += "try{range.surroundContents(document.createElement(rnd_tag));}catch(e){}\n"
}catch(e){}


if(rint(2)){
fuzzRangeApi()
}

break;


case 27:

try{
SCRIPT += "rndOffset = "+rint(10)+"\n"
SCRIPT += "try{range.setStart(document.firstChild,rndOffset)}catch(e){}\n"
}catch(e){} 

try{
SCRIPT += "rndOffset = "+rint(10)+"\n"
SCRIPT += "try{range.setEnd(document.firstChild,rndOffset)}catch(e){}\n"
}catch(e){}


if(rint(2)){
fuzzRangeApi()
}


break;

case 28:

/*
try{

rnd_tag = rand_item(HTML)
randomDomStyle = random_propval()

//create Element
logger.log('rndElem = document.createElement("'+rnd_tag + '")');
rndElem = document.createElement(rnd_tag)

//set DOM style
logger.log('rndElem.style["'+randomDomStyle[0]+'"]="'+randomDomStyle[1]+'";')
rndElem.style[randomDomStyle[0]]=randomDomStyle[1];

//set style attribute from seed_css 

randomCSSStyle = rand_item(seed_css)
logger.log('rndElem.setAttribute("style","'+randomCSSStyle+'")')
rndElem.setAttribute("style",randomCSSStyle);


//range.setStart
rndOffset = rand(10)
logger.log('range.setStart(document.lastChild,'+rndOffset+')')
range.setStart(document.lastChild,rndOffset)


//range.setEnd
rndOffset= rand(10)
logger.log('range.setEnd(document.lastChild,'+rndOffset+')')
range.setEnd(document.lastChild,rndOffset)

if(rand(2)){
fuzzRangeApi()
}

logger.log('range.surroundContents(rndElem)')
range.surroundContents(rndElem)
break;

}catch(e){}
*/



case 29:


SCRIPT += "try{getSelection.deleteFromDocument()}catch(e){}\n"
break;

case 30:


SCRIPT += "try{getSelection().removeRange(range)}catch(e){}\n"
break;


case 31:
SCRIPT += "try{getSelection().removeAllRanges()}catch(e){}\n"
break;

case 32:

SCRIPT += "getSelection.selectAllChildren(document.body);}catch(e){}\n"
break;

case 33:

SCRIPT += "try{getSelection().getRangeAt(0);}catch(e){}\n"
break;


case 34:

SCRIPT += "try{getSelection().collapseToEnd();}catch(e){}\n"
break;

}//switch
}//

return SCRIPT;
}

module.exports.fuzzRangeApi=fuzzRangeApi;
