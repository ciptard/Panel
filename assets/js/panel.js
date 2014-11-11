var Showdown={extensions:{}},forEach=Showdown.forEach=function(a,b){if(typeof a.forEach=="function")a.forEach(b);else{var c,d=a.length;for(c=0;c<d;c++)b(a[c],c,a)}},stdExtName=function(a){return a.replace(/[_-]||\s/g,"").toLowerCase()};Showdown.converter=function(a){var b,c,d,e=0,f=[],g=[];if(typeof module!="undefind"&&typeof exports!="undefined"&&typeof require!="undefind"){var h=require("fs");if(h){var i=h.readdirSync((__dirname||".")+"/extensions").filter(function(a){return~a.indexOf(".js")}).map(function(a){return a.replace(/\.js$/,"")});Showdown.forEach(i,function(a){var b=stdExtName(a);Showdown.extensions[b]=require("./extensions/"+a)})}}
this.makeHtml=function(a){return b={},c={},d=[],a=a.replace(/~/g,"~T"),a=a.replace(/\$/g,"~D"),a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n"),a="\n\n"+a+"\n\n",a=M(a),a=a.replace(/^[ \t]+$/mg,""),Showdown.forEach(f,function(b){a=k(b,a)}),a=z(a),a=m(a),a=l(a),a=o(a),a=K(a),a=a.replace(/~D/g,"$$"),a=a.replace(/~T/g,"~"),Showdown.forEach(g,function(b){a=k(b,a)}),a};if(a&&a.extensions){var j=this;Showdown.forEach(a.extensions,function(a){typeof a=="string"&&(a=Showdown.extensions[stdExtName(a)]);if(typeof a!="function")throw"Extension '"+a+"' could not be loaded.  It was either not found or is not a valid extension.";Showdown.forEach(a(j),function(a){a.type?a.type==="language"||a.type==="lang"?f.push(a):(a.type==="output"||a.type==="html")&&g.push(a):g.push(a)})})}
var k=function(a,b){if(a.regex){var c=new RegExp(a.regex,"g");return b.replace(c,a.replace)}
if(a.filter)return a.filter(b)},l=function(a){return a+="~0",a=a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,function(a,d,e,f,g){return d=d.toLowerCase(),b[d]=G(e),f?f+g:(g&&(c[d]=g.replace(/"/g,"&quot;")),"")}),a=a.replace(/~0/,""),a},m=function(a){a=a.replace(/\n/g,"\n\n");var b="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside",c="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";return a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,n),a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,n),a=a.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n),a=a.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,n),a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n),a=a.replace(/\n\n/g,"\n"),a},n=function(a,b){var c=b;return c=c.replace(/\n\n/g,"\n"),c=c.replace(/^\n/,""),c=c.replace(/\n+$/g,""),c="\n\n~K"+(d.push(c)-1)+"K\n\n",c},o=function(a){a=v(a);var b=A("<hr />");return a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,b),a=x(a),a=y(a),a=E(a),a=m(a),a=F(a),a},p=function(a){return a=B(a),a=q(a),a=H(a),a=t(a),a=r(a),a=I(a),a=G(a),a=D(a),a=a.replace(/  +\n/g," <br />\n"),a},q=function(a){var b=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return a=a.replace(b,function(a){var b=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return b=N(b,"\\`*_"),b}),a},r=function(a){return a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,s),a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,s),a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,s),a},s=function(a,d,e,f,g,h,i,j){j==undefined&&(j="");var k=d,l=e,m=f.toLowerCase(),n=g,o=j;if(n==""){m==""&&(m=l.toLowerCase().replace(/ ?\n/g," ")),n="#"+m;if(b[m]!=undefined)n=b[m],c[m]!=undefined&&(o=c[m]);else{if(!(k.search(/\(\s*\)$/m)>-1))return k;n=""}}
n=N(n,"*_");var p='<a href="'+n+'"';return o!=""&&(o=o.replace(/"/g,"&quot;"),o=N(o,"*_"),p+=' title="'+o+'"'),p+=">"+l+"</a>",p},t=function(a){return a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,u),a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,u),a},u=function(a,d,e,f,g,h,i,j){var k=d,l=e,m=f.toLowerCase(),n=g,o=j;o||(o="");if(n==""){m==""&&(m=l.toLowerCase().replace(/ ?\n/g," ")),n="#"+m;if(b[m]==undefined)return k;n=b[m],c[m]!=undefined&&(o=c[m])}
l=l.replace(/"/g,"&quot;"),n=N(n,"*_");var p='<img src="'+n+'" alt="'+l+'"';return o=o.replace(/"/g,"&quot;"),o=N(o,"*_"),p+=' title="'+o+'"',p+=" />",p},v=function(a){function b(a){return a.replace(/[^\w]/g,"").toLowerCase()}
return a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,c){return A('<h1 id="'+b(c)+'">'+p(c)+"</h1>")}),a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,c){return A('<h2 id="'+b(c)+'">'+p(c)+"</h2>")}),a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,c,d){var e=c.length;return A("<h"+e+' id="'+b(d)+'">'+p(d)+"</h"+e+">")}),a},w,x=function(a){a+="~0";var b=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return e?a=a.replace(b,function(a,b,c){var d=b,e=c.search(/[*+-]/g)>-1?"ul":"ol";d=d.replace(/\n{2,}/g,"\n\n\n");var f=w(d);return f=f.replace(/\s+$/,""),f="<"+e+">"+f+"</"+e+">\n",f}):(b=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(b,function(a,b,c,d){var e=b,f=c,g=d.search(/[*+-]/g)>-1?"ul":"ol",f=f.replace(/\n{2,}/g,"\n\n\n"),h=w(f);return h=e+"<"+g+">\n"+h+"</"+g+">\n",h})),a=a.replace(/~0/,""),a};w=function(a){return e++,a=a.replace(/\n{2,}$/,"\n"),a+="~0",a=a.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,function(a,b,c,d,e){var f=e,g=b,h=c;return g||f.search(/\n{2,}/)>-1?f=o(L(f)):(f=x(L(f)),f=f.replace(/\n$/,""),f=p(f)),"<li>"+f+"</li>\n"}),a=a.replace(/~0/g,""),e--,a};var y=function(a){return a+="~0",a=a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(a,b,c){var d=b,e=c;return d=C(L(d)),d=M(d),d=d.replace(/^\n+/g,""),d=d.replace(/\n+$/g,""),d="<pre><code>"+d+"\n</code></pre>",A(d)+e}),a=a.replace(/~0/,""),a},z=function(a){return a+="~0",a=a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(a,b,c){var d=b,e=c;return e=C(e),e=M(e),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),e="<pre><code"+(d?' class="'+d+'"':"")+">"+e+"\n</code></pre>",A(e)}),a=a.replace(/~0/,""),a},A=function(a){return a=a.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(d.push(a)-1)+"K\n\n"},B=function(a){return a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,c,d,e){var f=d;return f=f.replace(/^([ \t]*)/g,""),f=f.replace(/[ \t]*$/g,""),f=C(f),b+"<code>"+f+"</code>"}),a},C=function(a){return a=a.replace(/&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=N(a,"*_{}[]\\",!1),a},D=function(a){return a=a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),a=a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),a},E=function(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var c=b;return c=c.replace(/^[ \t]*>[ \t]?/gm,"~0"),c=c.replace(/~0/g,""),c=c.replace(/^[ \t]+$/gm,""),c=o(c),c=c.replace(/(^|\n)/g,"$1  "),c=c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /mg,"~0"),c=c.replace(/~0/g,""),c}),A("<blockquote>\n"+c+"\n</blockquote>")}),a},F=function(a){a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");var b=a.split(/\n{2,}/g),c=[],e=b.length;for(var f=0;f<e;f++){var g=b[f];g.search(/~K(\d+)K/g)>=0?c.push(g):g.search(/\S/)>=0&&(g=p(g),g=g.replace(/^([ \t]*)/g,"<p>"),g+="</p>",c.push(g))}
e=c.length;for(var f=0;f<e;f++)
while(c[f].search(/~K(\d+)K/)>=0){var h=d[RegExp.$1];h=h.replace(/\$/g,"$$$$"),c[f]=c[f].replace(/~K\d+K/,h)}
return c.join("\n\n")},G=function(a){return a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;"),a},H=function(a){return a=a.replace(/\\(\\)/g,O),a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,O),a},I=function(a){return a=a.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,'<a href="$1">$1</a>'),a=a.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,function(a,b){return J(K(b))}),a},J=function(a){var b=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return a="mailto:"+a,a=a.replace(/./g,function(a){if(a=="@")a=b[Math.floor(Math.random()*2)](a);else if(a!=":"){var c=Math.random();a=c>.9?b[2](a):c>.45?b[1](a):b[0](a)}
return a}),a='<a href="'+a+'">'+a+"</a>",a=a.replace(/">.+:/g,'">'),a},K=function(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)}),a},L=function(a){return a=a.replace(/^(\t|[ ]{1,4})/gm,"~0"),a=a.replace(/~0/g,""),a},M=function(a){return a=a.replace(/\t(?=\t)/g,"    "),a=a.replace(/\t/g,"~A~B"),a=a.replace(/~B(.+?)~A/g,function(a,b,c){var d=b,e=4-d.length%4;for(var f=0;f<e;f++)d+=" ";return d}),a=a.replace(/~A/g,"    "),a=a.replace(/~B/g,""),a},N=function(a,b,c){var d="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";c&&(d="\\\\"+d);var e=new RegExp(d,"g");return a=a.replace(e,O),a},O=function(a,b){var c=b.charCodeAt(0);return"~E"+c+"E"}},typeof module!="undefined"&&(module.exports=Showdown),typeof define=="function"&&define.amd&&define("showdown",function(){return Showdown});






/*!
 * -------------------------------------------------------
 *  SIMPLE TEXT SELECTION LIBRARY FOR ONLINE TEXT EDITING
 * -------------------------------------------------------
 *
 * Author => Taufik Nurrohman
 * URL => http://www.dte.web.id, http://latitudu.com
 *
 */
var Editor=function(source){var base=this,history=[],undo=0,redo=null;base.area=typeof source!="undefined"?source:document.getElementsByTagName('textarea')[0];history[undo]={value:base.area.value,selectionStart:0,selectionEnd:0};undo++;base.selection=function(){var start=base.area.selectionStart,end=base.area.selectionEnd,value=base.area.value.substring(start,end),before=base.area.value.substring(0,start),after=base.area.value.substring(end),data={start:start,end:end,value:value,before:before,after:after};return data;};base.select=function(start,end,callback){base.area.setSelectionRange(start,end);if(typeof callback=="function")callback();};base.replace=function(from,to,callback){var sel=base.selection(),start=sel.start,end=sel.end,selections=sel.value.replace(from,to);base.area.value=sel.before+selections+sel.after;base.select(start,start+selections.length);if(typeof callback=="function"){callback();}else{base.updateHistory({value:base.area.value,selectionStart:start,selectionEnd:start+selections.length});}};base.insert=function(insertion,callback){var sel=base.selection(),start=sel.start,end=sel.end;base.area.value=sel.before+insertion+sel.after;base.select(start+insertion.length,start+insertion.length);if(typeof callback=="function"){callback();}else{base.updateHistory({value:base.area.value,selectionStart:start+insertion.length,selectionEnd:start+insertion.length});}};base.wrap=function(open,close,callback){var sel=base.selection(),selections=sel.value,before=sel.before,after=sel.after;base.area.value=before+open+selections+close+after;base.select(before.length+open.length,before.length+open.length+selections.length);if(typeof callback=="function"){callback();}else{base.updateHistory({value:base.area.value,selectionStart:before.length+open.length,selectionEnd:before.length+open.length+selections.length});}};base.indent=function(chars,callback){var sel=base.selection();if(sel.value.length>0){base.replace(/(^|\n)([^\n])/gm,'$1'+chars+'$2',callback);}else{base.area.value=sel.before+chars+sel.value+sel.after;base.select(sel.start+chars.length,sel.start+chars.length);if(typeof callback=="function"){callback();}else{base.updateHistory({value:base.area.value,selectionStart:sel.start+chars.length,selectionEnd:sel.start+chars.length});}}};base.outdent=function(chars,callback){var sel=base.selection();if(sel.value.length>0){base.replace(new RegExp('(^|\n)'+chars,'gm'),'$1',callback);}else{var before=sel.before.replace(new RegExp(chars+'$'),"");base.area.value=before+sel.value+sel.after;base.select(before.length,before.length);if(typeof callback=="function"){callback();}else{base.updateHistory({value:base.area.value,selectionStart:before.length,selectionEnd:before.length});}}};base.callHistory=function(index){return(typeof index=="number")?history[index]:history;};base.updateHistory=function(data,index){var value=(typeof data!="undefined")?data:{value:base.area.value,selectionStart:base.selection().start,selectionEnd:base.selection().end};history[typeof index=="number"?index:undo]=value;undo++;};base.undo=function(callback){var data;if(history.length>1){if(undo>1){undo--;}else{undo=1;}
data=base.callHistory(undo-1);redo=undo<=0?undo-1:undo;}else{return;}
base.area.value=data.value;base.select(data.selectionStart,data.selectionEnd);if(typeof callback=="function")callback();};base.redo=function(callback){var data;if(redo!==null){data=base.callHistory(redo);if(redo<history.length-1){redo++;}else{redo=history.length-1;}
undo=redo>=history.length-1?redo+1:redo;}else{return;}
base.area.value=data.value;base.select(data.selectionStart,data.selectionEnd);if(typeof callback=="function")callback();};};function fakePrompt(label,value,isRequired,callback){var overlay=document.createElement('div');overlay.className='custom-modal-overlay';var modal=document.createElement('div');modal.className='custom-modal custom-modal-prompt';modal.innerHTML='<div class="custom-modal-header">'+label+'</div><div class="custom-modal-content"></div><div class="custom-modal-action"></div>';var onSuccess=function(value){overlay.parentNode.removeChild(overlay);modal.parentNode.removeChild(modal);if(typeof callback=="function")callback(value);};var input=document.createElement('input');input.type='text';input.value=value;input.onkeyup=function(e){if(isRequired){if(e.keyCode==13&&this.value!==""&&this.value!==value){onSuccess(this.value);}}else{if(e.keyCode==13){onSuccess(this.value==value?"":this.value);}}};var buttonOK=document.createElement('button');buttonOK.innerHTML='OK';buttonOK.onclick=function(){if(isRequired){if(input.value!==""&&input.value!==value){onSuccess(input.value);}}else{onSuccess(input.value==value?"":input.value);}};var buttonCANCEL=document.createElement('button');buttonCANCEL.innerHTML='Cancel';buttonCANCEL.onclick=function(){overlay.parentNode.removeChild(overlay);modal.parentNode.removeChild(modal);};document.body.appendChild(overlay);document.body.appendChild(modal);modal.children[1].appendChild(input);modal.children[2].appendChild(buttonOK);modal.children[2].appendChild(buttonCANCEL);input.select();}


/*!
 * -------------------------------------------------------
 *  MARKDOWN EDITOR BY MONCHO VARELA (NAKOME)
 * -------------------------------------------------------
 */
var app=(function(){'use-sctrict';return{run:function(){String.prototype.capitalize=function(lower){return(lower?this.toLowerCase():this).replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase();});}
var c=new Showdown.converter(),e=_('#eye'),y=_('#editor-area'),o=_('.result'),w=_('.close_window'),d=_('.drag');o.innerHTML=c.makeHtml(y.value);y.addEventListener('keyup',function(){o.innerHTML=c.makeHtml(y.value);});var btn=_('#editor-control').getElementsByTagName('a'),editor=new Editor(y),controls={'bold':function(){editor.wrap('**','**');o.innerHTML=c.makeHtml(y.value);},'italic':function(){editor.wrap('_','_');o.innerHTML=c.makeHtml(y.value);},'code':function(){editor.wrap('`','`');o.innerHTML=c.makeHtml(y.value);},'code-block':function(){editor.indent(' ');o.innerHTML=c.makeHtml(y.value);},'cut':function(){editor.indent('{cut}');o.innerHTML=c.makeHtml(y.value);},'php':function(){editor.wrap('{php}','{/php}');o.innerHTML=c.makeHtml(y.value);},'quote':function(){editor.indent('> ');o.innerHTML=c.makeHtml(y.value);},'ul-list':function(){var sel=editor.selection(),added="";if(sel.value.length>0){editor.indent('',function(){editor.replace(/^[^\n\r]/gm,function(str){added+='- ';return str.replace(/^/,'- ');});editor.select(sel.start,sel.end+added.length);});}else{var placeholder='- List Item';editor.indent(placeholder,function(){editor.select(sel.start+2,sel.start+placeholder.length);});}
o.innerHTML=c.makeHtml(y.value);},'ol-list':function(){var sel=editor.selection(),ol=0,added="";if(sel.value.length>0){editor.indent('',function(){editor.replace(/^[^\n\r]/gm,function(str){ol++;added+=ol+'. ';return str.replace(/^/,ol+'. ');});editor.select(sel.start,sel.end+added.length);});}else{var placeholder='1. List Item';editor.indent(placeholder,function(){editor.select(sel.start+3,sel.start+placeholder.length);});}
o.innerHTML=c.makeHtml(y.value);},'link':function(){var sel=editor.selection(),title=null,url=null,placeholder='Title of link';fakePrompt('Link title:','Title of link',false,function(r){title=r;fakePrompt('URL:','http://',true,function(r){url=r;editor.insert('\n['+title+']('+r+')\n');o.innerHTML=c.makeHtml(y.value);});});},'image':function(){fakePrompt('Image URL:','http://',true,function(r){var altText=r.substring(r.lastIndexOf('/')+1,r.lastIndexOf('.')).replace(/[\-\_\+]+/g," ").capitalize();altText=altText.indexOf('/')<0?decodeURIComponent(altText):'Image';editor.insert('\n!['+altText+']('+r+')\n');o.innerHTML=c.makeHtml(y.value);});},'h1':function(){heading('#');o.innerHTML=c.makeHtml(y.value);},'h2':function(){heading('##');o.innerHTML=c.makeHtml(y.value);},'h3':function(){heading('###');o.innerHTML=c.makeHtml(y.value);},'hr':function(){editor.insert('\n\n---\n\n');o.innerHTML=c.makeHtml(y.value);},'undo':function(){editor.undo();o.innerHTML=c.makeHtml(y.value);},'redo':function(){editor.redo();o.innerHTML=c.makeHtml(y.value);}};function heading(key){if(editor.selection().value.length>0){editor.wrap(key+' ',"");}else{var placeholder=key+' Heading '+key.length+'\n\n';editor.insert(placeholder,function(){var s=editor.selection().start;editor.select(s-placeholder.length+key.length+1,s-2);});}}
function click(elem){var hash=elem.hash.replace('#',"");if(controls[hash]){elem.onclick=function(){controls[hash]();return false;};}}
for(var i=0,len=btn.length;i<len;++i){click(btn[i]);btn[i].href='#';}
var pressed=0;editor.area.onkeydown=function(e){if(pressed<5){pressed++;}else{editor.updateHistory();pressed=0;}
if(e.keyCode==9){editor.indent('    ');return false;}};function _(el){return document.querySelector(el);}}};})();



/*!
 * -------------------------------------------------------
 *  http://stackoverflow.com/questions/19017401/how-to-store-and-retrieve-image-to-localstorage 
 * -------------------------------------------------------
 */
var imagePreview=(function(){'use strict';return{run:function(){var demo=_('#image-display').getAttribute('src'),database=window.localStorage;if(!database.getItem("image-base64")){var t=setTimeout(function(){database.setItem("image-base64",demo);clearTimeout(t);},100);}
var imgInput=_("#image-input"),imgContainer=_("#image-display"),updateUi=function(){var t2=setTimeout(function(){imgContainer.src=database.getItem("image-base64");database.clear();clearTimeout(t2);},200);},bindUi=function(){imgInput.addEventListener("change",function(){if(this.files.length){var reader=new FileReader();reader.onload=function(e){database.setItem("image-base64",e.target.result);updateUi();};reader.readAsDataURL(this.files[0]);}},false);};updateUi();bindUi();}}}());



// SHORT QUERY SELECTOR
function _(el) {
    return document.querySelector(el);
}

// CONFIRM DELETE
function confirmDelete(msg) {
    var data = confirm(msg + " ?");
    return data;
}


// NOTIFICATION 
function notification(type,title, content, redirect) {
    alert_panel = document.querySelector('.alert_panel'),html='';    
    if(type === 'success'){
        html = '<div class="alert_inner_success"><h3>' + title + '</h3><p>' + content + '</p></div>';
        alert_panel.innerHTML = html;
    }else if(type === 'error'){
        html = '<div class="alert_inner_error"><h3>' + title + '</h3><p>' + content + '</p></div>';
        alert_panel.innerHTML = html;        
    }
    var t = setTimeout(function() {
        window.location.href = redirect;
        clearTimeout(t);
    }, 2000);
}

// RESIZE EDITOR
function resizeEditor() {
    var editor = _('#editor-area'),
    		result = _('.result'),
        content = _('.content'),
        breadcrumb = _('.breadcrumb');
    editor.style.height = (content.offsetHeight - breadcrumb.offsetHeight - 250) + 'px';
    result.style.height = (content.offsetHeight - breadcrumb.offsetHeight - 216) + 'px';
}


// ONLOAD
window.addEventListener("load", function() {
    // IF EDITOR
    if (_('#editor-area')) {
        // RUN APP
        app.run();
        // SET HEIGHT 
        resizeEditor();
        // SET HEIGHT ON RESIZE
        window.onresize = resizeEditor;
    }
    // IF IMAGE
    if (_('#image-display')) {
        // RUN FN
        imagePreview.run();
    }

    // filter pages
    (function(){
	  	$('.search_pages').on('keyup', function(e) {
			var filter_text = new RegExp(this.value, 'im');
			$('.tumb-grid').css({
				'opacity':0.2,
				'transition': 'all 1s ease'
			});
			var items = jQuery('.tumb-grid').filter(function() {
				return jQuery(this).html().match(filter_text);
			});
			items.css({
				'opacity':1,
				'transition': 'all 1s ease'
			});

		});
	})(jQuery);

	(function(){
		$('.toggle_menu').on('click',function(){
			$(this).toggleClass('on');
			if($(this).hasClass('on')){
				$('.menu li a span').hide().parent().css('padding','10px');
				$('#morfy_panel .sidebar').animate({width:'50px'});
				$('.header,.footer').css('width','100%');
				$('.main').animate({
					'left':'53px',
					'width':'96%',
					'transition':'all 0.5s ease'
				},500);
				$(this).find('i').removeClass('fa-arrow-left').addClass('fa-arrow-right');
			}else{
				$('.menu li a span').parent().css('padding','10px 17px');
				$('#morfy_panel .sidebar').animate({width:'197px'});
				$('.header,.footer').css('width','100%');
				$('.main').animate({
					'left':'197px',
					'width':'86%',
					'transition':'all 0.5s ease'
				},500,function(){
					$('.menu li a span').fadeIn('fast');
				});
				$(this).find('i').removeClass('fa-arrow-right').addClass('fa-arrow-left');
			}
		});
	})(jQuery);



}, false);




