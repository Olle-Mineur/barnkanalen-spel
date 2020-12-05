(function(){var a=false,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(g){var f=this.prototype;a=true;var e=new this();a=false;for(var d in g){e[d]=typeof g[d]=="function"&&typeof f[d]=="function"&&b.test(g[d])?(function(h,i){return function(){var k=this._super;this._super=f[h];var j=i.apply(this,arguments);this._super=k;return j}})(d,g[d]):g[d]}function c(){if(!a&&this.init){this.init.apply(this,arguments)}}c.prototype=e;c.constructor=c;c.extend=arguments.callee;return c}})();/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, Jï¿½Ã¶rn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 3640 2007-10-11 18:34:38Z pmclanahan $
 *
 */

/**
 * Sets the type of metadata to use. Metadata is encoded in JSON, and each property
 * in the JSON will become a property of the element itself.
 *
 * There are three supported types of metadata storage:
 *
 *   attr:  Inside an attribute. The name parameter indicates *which* attribute.
 *          
 *   class: Inside the class attribute, wrapped in curly braces: { }
 *   
 *   elem:  Inside a child element (e.g. a script tag). The
 *          name parameter indicates *which* element.
 *          
 * The metadata for an element is loaded the first time the element is accessed via jQuery.
 *
 * As a result, you can define the metadata type, use $(expr) to load the metadata into the elements
 * matched by expr, then redefine the metadata type and run another $(expr) for other elements.
 * 
 * @name $.metadata.setType
 *
 * @example <p id="one" class="some_class {item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("class")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from the class attribute
 * 
 * @example <p id="one" class="some_class" data="{item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("attr", "data")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a "data" attribute
 * 
 * @example <p id="one" class="some_class"><script>{item_id: 1, item_label: 'Label'}</script>This is a p</p>
 * @before $.metadata.setType("elem", "script")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a nested script element
 * 
 * @param String type The encoding type
 * @param String name The name of the attribute to be used to get metadata (optional)
 * @cat Plugins/Metadata
 * @descr Sets the type of encoding to be used when loading metadata for the first time
 * @type undefined
 * @see metadata()
 */

(function($) {

$.extend({
	metadata : {
		defaults : {
			type: 'class',
			name: 'metadata',
			cre: /({.*})/,
			single: 'metadata'
		},
		setType: function( type, name ){
			this.defaults.type = type;
			this.defaults.name = name;
		},
		get: function( elem, opts ){
			var settings = $.extend({},this.defaults,opts);
			// check for empty string in single property
			if ( !settings.single.length ) settings.single = 'metadata';
			
			var data = $.data(elem, settings.single);
			// returned cached data if it already exists
			if ( data ) return data;
			
			data = "{}";
			
			if ( settings.type == "class" ) {
				var m = settings.cre.exec( elem.className );
				if ( m )
					data = m[1];
			} else if ( settings.type == "elem" ) {
				if( !elem.getElementsByTagName ) return;
				var e = elem.getElementsByTagName(settings.name);
				if ( e.length )
					data = $.trim(e[0].innerHTML);
			} else if ( elem.getAttribute != undefined ) {
				var attr = elem.getAttribute( settings.name );
				if ( attr )
					data = attr;
			}
			
			if ( data.indexOf( '{' ) <0 )
			data = "{" + data + "}";
			
			data = eval("(" + data + ")");
			
			$.data( elem, settings.single, data );
			return data;
		}
	}
});

/**
 * Returns the metadata object for the first member of the jQuery object.
 *
 * @name metadata
 * @descr Returns element's metadata object
 * @param Object opts An object contianing settings to override the defaults
 * @type jQuery
 * @cat Plugins/Metadata
 */
$.fn.metadata = function( opts ){
	return $.metadata.get( this[0], opts );
};

})(jQuery);/* Copyright (c) 2007 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.0.2
 * Requires jQuery 1.1.3+
 * Docs: http://docs.jquery.com/Plugins/livequery
 */

(function($) {
	
$.extend($.fn, {
	livequery: function(type, fn, fn2) {
		var self = this, q;
		
		// Handle different call patterns
		if ($.isFunction(type))
			fn2 = fn, fn = type, type = undefined;
			
		// See if Live Query already exists
		$.each( $.livequery.queries, function(i, query) {
			if ( self.selector == query.selector && self.context == query.context &&
				type == query.type && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) )
					// Found the query, exit the each loop
					return (q = query) && false;
		});
		
		// Create new Live Query if it wasn't found
		q = q || new $.livequery(this.selector, this.context, type, fn, fn2);
		
		// Make sure it is running
		q.stopped = false;
		
		// Run it
		$.livequery.run( q.id );
		
		// Contnue the chain
		return this;
	},
	
	expire: function(type, fn, fn2) {
		var self = this;
		
		// Handle different call patterns
		if ($.isFunction(type))
			fn2 = fn, fn = type, type = undefined;
			
		// Find the Live Query based on arguments and stop it
		$.each( $.livequery.queries, function(i, query) {
			if ( self.selector == query.selector && self.context == query.context && 
				(!type || type == query.type) && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) && !this.stopped )
					$.livequery.stop(query.id);
		});
		
		// Continue the chain
		return this;
	}
});

$.livequery = function(selector, context, type, fn, fn2) {
	this.selector = selector;
	this.context  = context || document;
	this.type     = type;
	this.fn       = fn;
	this.fn2      = fn2;
	this.elements = [];
	this.stopped  = false;
	
	// The id is the index of the Live Query in $.livequery.queries
	this.id = $.livequery.queries.push(this)-1;
	
	// Mark the functions for matching later on
	fn.$lqguid = fn.$lqguid || $.livequery.guid++;
	if (fn2) fn2.$lqguid = fn2.$lqguid || $.livequery.guid++;
	
	// Return the Live Query
	return this;
};

$.livequery.prototype = {
	stop: function() {
		var query = this;
		
		if ( this.type )
			// Unbind all bound events
			this.elements.unbind(this.type, this.fn);
		else if (this.fn2)
			// Call the second function for all matched elements
			this.elements.each(function(i, el) {
				query.fn2.apply(el);
			});
			
		// Clear out matched elements
		this.elements = [];
		
		// Stop the Live Query from running until restarted
		this.stopped = true;
	},
	
	run: function() {
		// Short-circuit if stopped
		if ( this.stopped ) return;
		var query = this;
		
		var oEls = this.elements,
			els  = $(this.selector, this.context),
			nEls = els.not(oEls);
		
		// Set elements to the latest set of matched elements
		this.elements = els;
		
		if (this.type) {
			// Bind events to newly matched elements
			nEls.bind(this.type, this.fn);
			
			// Unbind events to elements no longer matched
			if (oEls.length > 0)
				$.each(oEls, function(i, el) {
					if ( $.inArray(el, els) < 0 )
						$.event.remove(el, query.type, query.fn);
				});
		}
		else {
			// Call the first function for newly matched elements
			nEls.each(function() {
				query.fn.apply(this);
			});
			
			// Call the second function for elements no longer matched
			if ( this.fn2 && oEls.length > 0 )
				$.each(oEls, function(i, el) {
					if ( $.inArray(el, els) < 0 )
						query.fn2.apply(el);
				});
		}
	}
};

$.extend($.livequery, {
	guid: 0,
	queries: [],
	queue: [],
	running: false,
	timeout: null,
	
	checkQueue: function() {
		if ( $.livequery.running && $.livequery.queue.length ) {
			var length = $.livequery.queue.length;
			// Run each Live Query currently in the queue
			while ( length-- )
				$.livequery.queries[ $.livequery.queue.shift() ].run();
		}
	},
	
	pause: function() {
		// Don't run anymore Live Queries until restarted
		$.livequery.running = false;
	},
	
	play: function() {
		// Restart Live Queries
		$.livequery.running = true;
		// Request a run of the Live Queries
		$.livequery.run();
	},
	
	registerPlugin: function() {
		$.each( arguments, function(i,n) {
			// Short-circuit if the method doesn't exist
			if (!$.fn[n]) return;
			
			// Save a reference to the original method
			var old = $.fn[n];
			
			// Create a new method
			$.fn[n] = function() {
				// Call the original method
				var r = old.apply(this, arguments);
				
				// Request a run of the Live Queries
				$.livequery.run();
				
				// Return the original methods result
				return r;
			}
		});
	},
	
	run: function(id) {
		if (id != undefined) {
			// Put the particular Live Query in the queue if it doesn't already exist
			if ( $.inArray(id, $.livequery.queue) < 0 )
				$.livequery.queue.push( id );
		}
		else
			// Put each Live Query in the queue if it doesn't already exist
			$.each( $.livequery.queries, function(id) {
				if ( $.inArray(id, $.livequery.queue) < 0 )
					$.livequery.queue.push( id );
			});
		
		// Clear timeout if it already exists
		if ($.livequery.timeout) clearTimeout($.livequery.timeout);
		// Create a timeout to check the queue and actually run the Live Queries
		$.livequery.timeout = setTimeout($.livequery.checkQueue, 20);
	},
	
	stop: function(id) {
		if (id != undefined)
			// Stop are particular Live Query
			$.livequery.queries[ id ].stop();
		else
			// Stop all Live Queries
			$.each( $.livequery.queries, function(id) {
				$.livequery.queries[ id ].stop();
			});
	}
});

// Register core DOM manipulation methods
$.livequery.registerPlugin('append', 'prepend', 'after', 'before', 'wrap', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'empty', 'remove');

// Run Live Queries when the Document is ready
$(function() { $.livequery.play(); });


// Save a reference to the original init method
var init = $.prototype.init;

// Create a new init method that exposes two new properties: selector and context
$.prototype.init = function(a,c) {
	// Call the original init and save the result
	var r = init.apply(this, arguments);
	
	// Copy over properties if they exist already
	if (a && a.selector)
		r.context = a.context, r.selector = a.selector;
		
	// Set properties
	if ( typeof a == 'string' )
		r.context = c || document, r.selector = a;
	
	// Return the result
	return r;
};

// Give the init function the jQuery prototype for later instantiation (needed after Rev 4091)
$.prototype.init.prototype = $.prototype;
	
})(jQuery);jQuery.autocomplete = function(input, options) {
	// Create a link to self
	var me = this;

	// Create jQuery object for input element
	var $input = $(input).attr("autocomplete", "off");

	// Apply inputClass if necessary
	if (options.inputClass) $input.addClass(options.inputClass);

	// Create results
	var results = document.createElement("div");
	// Create jQuery object for results
	
	var $results = $(results);
	// console.log("Create jQuery object for results : " + $results);
	$results.hide().addClass(options.resultsClass).css("position", "absolute");
	if( options.width > 0 ) $results.css("width", options.width);

	// Add to body element
	// console.log("Add to body element");
	$("body").append(results);

	input.autocompleter = me;

	var timeout = null;
	var prev = "";
	var active = -1;
	var cache = {};
	var keyb = false;
	var hasFocus = false;
	var lastKeyPressCode = null;

	// flush cache
	function flushCache(){
		cache = {};
		cache.data = {};
		cache.length = 0;
	};

	// flush cache
	flushCache();

	// if there is a data array supplied
	if( options.data != null ){
		var sFirstChar = "", stMatchSets = {}, row = [];

		// no url was specified, we need to adjust the cache length to make sure it fits the local data store
		if( typeof options.url != "string" ) options.cacheLength = 1;

		// loop through the array and create a lookup structure
		for( var i=0; i < options.data.length; i++ ){
			// if row is a string, make an array otherwise just reference the array
			row = ((typeof options.data[i] == "string") ? [options.data[i]] : options.data[i]);

			// if the length is zero, don't add to list
			if( row[0].length > 0 ){
				// get the first character
				sFirstChar = row[0].substring(0, 1).toLowerCase();
				// if no lookup array for this character exists, look it up now
				if( !stMatchSets[sFirstChar] ) stMatchSets[sFirstChar] = [];
				// if the match is a string
				stMatchSets[sFirstChar].push(row);
			}
		}

		// add the data items to the cache
		for( var k in stMatchSets ){
			// increase the cache size
			options.cacheLength++;
			// add to the cache
			addToCache(k, stMatchSets[k]);
		}
	}

	$input
	.keydown(function(e) {
		// track last key pressed
		lastKeyPressCode = e.keyCode;
		switch(e.keyCode) {
			case 38: // up
				e.preventDefault();
				moveSelect(-1);
				break;
			case 40: // down
				e.preventDefault();
				moveSelect(1);
				break;
			//case 9:  // tab
			case 13: //case 39: // return or arrow right // JOHB Added
				if( selectCurrent() ){
					// make sure to blur off the current field
					$input.get(0).blur();
					e.preventDefault();
				}
				break;
			default:
				
				// console.log("timeout");
				
				active = -1;
				if (timeout) clearTimeout(timeout);
				timeout = setTimeout(function(){onChange();}, options.delay);
				break;
		}
	})
	.focus(function(){
		// track whether the field has focus, we shouldn't process any results if the field no longer has focus
		hasFocus = true;
	})
	.blur(function() {
		// track whether the field has focus
		hasFocus = false;
		hideResults();
	});

	hideResultsNow();

	function onChange() {
		// ignore if the following keys are pressed: [del] [shift] [capslock]
		if( lastKeyPressCode == 46 || (lastKeyPressCode > 8 && lastKeyPressCode < 32) ) return $results.hide();
		var v = $input.val();
		if (v == prev) return;
		prev = v;
		if (v.length >= options.minChars) {
			$input.addClass(options.loadingClass);
			requestData(v);
		} else {
			$input.removeClass(options.loadingClass);
			$results.hide();
		}
		// console.log("onChange()");
	};

 	function moveSelect(step) {

		var lis = $("li", results);
		if (!lis) return;

		active += step;

		if (active < 0) {
			active = 0;
		} else if (active >= lis.size()) {
			active = lis.size() - 1;
		}

		lis.removeClass("ac_over");

		$(lis[active]).addClass("ac_over");

		// Weird behaviour in IE
		// if (lis[active] && lis[active].scrollIntoView) {
		// 	lis[active].scrollIntoView(false);
		// }

	};

	function selectCurrent() {
		var li = $("li.ac_over", results)[0];
		if (!li) {
			var $li = $("li", results);
			if (options.selectOnly) {
				if ($li.length == 1) li = $li[0];
			} else if (options.selectFirst) {
				li = $li[0];
			}
		}
		if (li) {
			selectItem(li);
			return true;
		} else {
			return false;
		}
	};

	function selectItem(li) {
		if (!li) {
			li = document.createElement("li");
			li.extra = [];
			li.selectValue = "";
		}
		var v = $.trim(li.selectValue ? li.selectValue : li.innerHTML);
		input.lastSelected = v;
		prev = v;
		$results.html("");
		$input.val(v);
		hideResultsNow();
		if (options.onItemSelect) setTimeout(function() { options.onItemSelect(li) }, 1);
	};

	// selects a portion of the input string
	function createSelection(start, end){
		// get a reference to the input element
		var field = $input.get(0);
		if( field.createTextRange ){
			var selRange = field.createTextRange();
			selRange.collapse(true);
			selRange.moveStart("character", start);
			selRange.moveEnd("character", end);
			selRange.select();
		} else if( field.setSelectionRange ){
			field.setSelectionRange(start, end);
		} else {
			if( field.selectionStart ){
				field.selectionStart = start;
				field.selectionEnd = end;
			}
		}
		field.focus();
	};

	// fills in the input box w/the first match (assumed to be the best match)
	function autoFill(sValue){
		// if the last user key pressed was backspace, don't autofill
		if( lastKeyPressCode != 8 ){
			// fill in the value (keep the case the user has typed)
			$input.val($input.val() + sValue.substring(prev.length));
			// select the portion of the value not typed by the user (so the next character will erase)
			createSelection(prev.length, sValue.length);
		}
	};

	function showResults() {
		// get the position of the input field right now (in case the DOM is shifted)
		var pos = findPos(input);
		// either use the specified width, or autocalculate based on form element
		var iWidth = (options.width > 0) ? options.width : $input.width();
		// reposition
		$results.css({
			width: parseInt(iWidth) + 49 + "px",
			top: (pos.y + input.offsetHeight) + "px",
			left: pos.x + "px"
		}).show();
	};

	function hideResults() {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(hideResultsNow, 200);
	};

	function hideResultsNow() {
		if (timeout) clearTimeout(timeout);
		$input.removeClass(options.loadingClass);
		if ($results.is(":visible")) {
			$results.hide();
		}
		if (options.mustMatch) {
			var v = $input.val();
			if (v != input.lastSelected) {
				selectItem(null);
			}
		}
	};

	function receiveData(q, data) {
		if (data) {
			$input.removeClass(options.loadingClass);
			results.innerHTML = "";

			// if the field no longer has focus or if there are no matches, do not display the drop down
			if( !hasFocus || data.length == 0 ) return hideResultsNow();

			if ($.browser.msie) {
				// we put a styled iframe behind the calendar so HTML SELECT elements don't show through
				$results.append(document.createElement('iframe'));
			}
			results.appendChild(dataToDom(data));
			// autofill in the complete box w/the first match as long as the user hasn't entered in more data
			if( options.autoFill && ($input.val().toLowerCase() == q.toLowerCase()) ) autoFill(data[0][0]);
			showResults();
		} else {
			hideResultsNow();
		}
	};

	function parseData(data) {
		if (!data) return null;
		var parsed = [];
		var rows = data.split(options.lineSeparator);
		for (var i=0; i < rows.length; i++) {
			var row = $.trim(rows[i]);
			if (row) {
				parsed[parsed.length] = row.split(options.cellSeparator);
			}
		}
		return parsed;
	};

	function dataToDom(data) {
		var ul = document.createElement("ul");
		var num = data.length;

		// limited results to a max number
		if( (options.maxItemsToShow > 0) && (options.maxItemsToShow < num) ) num = options.maxItemsToShow;

		for (var i=0; i < num; i++) {
			var row = data[i];
			if (!row) continue;
			var li = document.createElement("li");
			if (options.formatItem) {
				li.innerHTML = options.formatItem(row, i, num);
				li.selectValue = row[0];
			} else {
				li.innerHTML = row[0];
				li.selectValue = row[0];
			}
			var extra = null;
			if (row.length > 1) {
				extra = [];
				for (var j=1; j < row.length; j++) {
					extra[extra.length] = row[j];
				}
			}
			li.extra = extra;
			ul.appendChild(li);
			$(li).hover(
				function() { $("li", ul).removeClass("ac_over"); $(this).addClass("ac_over"); active = $("li", ul).indexOf($(this).get(0)); },
				function() { $(this).removeClass("ac_over"); }
			).click(function(e) { e.preventDefault(); e.stopPropagation(); selectItem(this) });
		}
		return ul;
	};

	function requestData(q) {
		
		// console.log("requestData : " + q);
		
		if (!options.matchCase) q = q.toLowerCase();
		var data = options.cacheLength ? loadFromCache(q) : null;
		// recieve the cached data
		if (data) {
			receiveData(q, data);
		// if an AJAX url has been supplied, try loading the data now
		} else if( (typeof options.url == "string") && (options.url.length > 0) ){
			$.get(makeUrl(q), function(data) {
				data = parseData(data);
				addToCache(q, data);
				receiveData(q, data);
			});
		// if there's been no data found, remove the loading class
		} else {
			$input.removeClass(options.loadingClass);
		}
	};

	function makeUrl(q) {
		var url = options.url + "?q=" + encodeURI(q);
		for (var i in options.extraParams) {
			url += "&" + i + "=" + encodeURI(options.extraParams[i]);
		}
		return url;
	};

	function loadFromCache(q) {
		if (!q) return null;
		if (cache.data[q]) return cache.data[q];
		if (options.matchSubset) {
			for (var i = q.length - 1; i >= options.minChars; i--) {
				var qs = q.substr(0, i);
				var c = cache.data[qs];
				if (c) {
					var csub = [];
					for (var j = 0; j < c.length; j++) {
						var x = c[j];
						var x0 = x[0];
						if (matchSubset(x0, q)) {
							csub[csub.length] = x;
						}
					}
					return csub;
				}
			}
		}
		return null;
	};

	function matchSubset(s, sub) {
		if (!options.matchCase) s = s.toLowerCase();
		var i = s.indexOf(sub);
		if (i == -1) return false;
		return i == 0 || options.matchContains;
	};

	this.flushCache = function() {
		flushCache();
	};

	this.setExtraParams = function(p) {
		options.extraParams = p;
	};

	this.findValue = function(){
		var q = $input.val();

		if (!options.matchCase) q = q.toLowerCase();
		var data = options.cacheLength ? loadFromCache(q) : null;
		if (data) {
			findValueCallback(q, data);
		} else if( (typeof options.url == "string") && (options.url.length > 0) ){
			$.get(makeUrl(q), function(data) {
				data = parseData(data)
				addToCache(q, data);
				findValueCallback(q, data);
			});
		} else {
			// no matches
			findValueCallback(q, null);
		}
	}

	function findValueCallback(q, data){
		if (data) $input.removeClass(options.loadingClass);

		var num = (data) ? data.length : 0;
		var li = null;

		for (var i=0; i < num; i++) {
			var row = data[i];

			if( row[0].toLowerCase() == q.toLowerCase() ){
				li = document.createElement("li");
				if (options.formatItem) {
					li.innerHTML = options.formatItem(row, i, num);
					li.selectValue = row[0];
				} else {
					li.innerHTML = row[0];
					li.selectValue = row[0];
				}
				var extra = null;
				if( row.length > 1 ){
					extra = [];
					for (var j=1; j < row.length; j++) {
						extra[extra.length] = row[j];
					}
				}
				li.extra = extra;
			}
		}

		if( options.onFindValue ) setTimeout(function() { options.onFindValue(li) }, 1);
	}

	function addToCache(q, data) {
		if (!data || !q || !options.cacheLength) return;
		if (!cache.length || cache.length > options.cacheLength) {
			flushCache();
			cache.length++;
		} else if (!cache[q]) {
			cache.length++;
		}
		cache.data[q] = data;
	};

	function findPos(obj) {
		var curleft = obj.offsetLeft || 0;
		var curtop = obj.offsetTop || 0;
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
		return {x:curleft,y:curtop};
	}
}

jQuery.fn.autocomplete = function(url, options, data) {
	// Make sure options exists
	options = options || {};
	// Set url as option
	options.url = url;
	// set some bulk local data
	options.data = ((typeof data == "object") && (data.constructor == Array)) ? data : null;

	// Set default values for required options
	options.inputClass = options.inputClass || "ac_input";
	options.resultsClass = options.resultsClass || "ac_results";
	options.lineSeparator = options.lineSeparator || "\n";
	options.cellSeparator = options.cellSeparator || "|";
	options.minChars = options.minChars || 1;
	options.delay = options.delay || 400;
	options.matchCase = options.matchCase || 0;
	options.matchSubset = options.matchSubset || 1;
	options.matchContains = options.matchContains || 0;
	options.cacheLength = options.cacheLength || 1;
	options.mustMatch = options.mustMatch || 0;
	options.extraParams = options.extraParams || {};
	options.loadingClass = options.loadingClass || "ac_loading";
	options.selectFirst = options.selectFirst || false;
	options.selectOnly = options.selectOnly || false;
	options.maxItemsToShow = options.maxItemsToShow || -1;
	options.autoFill = options.autoFill || false;
	options.width = parseInt(options.width, 10) || 0;

	this.each(function() {
		var input = this;
		new jQuery.autocomplete(input, options);
	});

	// Don't break the chain
	return this;
}

jQuery.fn.autocompleteArray = function(data, options) {
	return this.autocomplete(null, options, data);
}

jQuery.fn.indexOf = function(e){
	for( var i=0; i<this.length; i++ ){
		if( this[i] == e ) return i;
	}
	return -1;
};
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};/*
 * jQuery Form Plugin
 * version: 2.21 (08-FEB-2009)
 * @requires jQuery v1.2.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
    Usage Note:  
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are intended to be exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').bind('submit', function() {
            $(this).ajaxSubmit({
                target: '#output'
            });
            return false; // <-- important!
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });
        
    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.  
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting 
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    if (typeof options == 'function')
        options = { success: options };

    options = $.extend({
        url:  this.attr('action') || window.location.toString(),
        type: this.attr('method') || 'GET'
    }, options || {});

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }    
   
    var a = this.formToArray(options.semantic);
    if (options.data) {
        options.extraData = options.data;
        for (var n in options.data) {
          if(options.data[n] instanceof Array) {
            for (var k in options.data[n])
              a.push( { name: n, value: options.data[n][k] } )
          }  
          else
             a.push( { name: n, value: options.data[n] } );
        }
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }    

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }    

    var q = $.param(a);

    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else
        options.data = q; // data is the query string for 'post'

    var $form = this, callbacks = [];
    if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
    if (options.clearForm) callbacks.push(function() { $form.clearForm(); });

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            $(options.target).html(data).each(oldSuccess, arguments);
        });
    }
    else if (options.success)
        callbacks.push(options.success);

    options.success = function(data, status) {
        for (var i=0, max=callbacks.length; i < max; i++)
            callbacks[i].apply(options, [data, status, $form]);
    };

    // are there files to upload?
    var files = $('input:file', this).fieldValue();
    var found = false;
    for (var j=0; j < files.length; j++)
        if (files[j])
            found = true;

    // options.iframe allows user to force iframe mode
   if (options.iframe || found) { 
       // hack to fix Safari hang (thanks to Tim Molendijk for this)
       // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
       if (options.closeKeepAlive)
           $.get(options.closeKeepAlive, fileUpload);
       else
           fileUpload();
       }
   else
       $.ajax(options);

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;


    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUpload() {
        var form = $form[0];
        
        if ($(':input[name=submit]', form).length) {
            alert('Error: Form elements must not be named "submit".');
            return;
        }
        
        var opts = $.extend({}, $.ajaxSettings, options);
		var s = jQuery.extend(true, {}, $.extend(true, {}, $.ajaxSettings), opts);

        var id = 'jqFormIO' + (new Date().getTime());
        var $io = $('<iframe id="' + id + '" name="' + id + '" src="about:blank" />');
        var io = $io[0];

        $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

        var xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function() { 
                this.aborted = 1; 
                $io.attr('src','about:blank'); // abort op in progress
            }
        };

        var g = opts.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && ! $.active++) $.event.trigger("ajaxStart");
        if (g) $.event.trigger("ajaxSend", [xhr, opts]);

		if (s.beforeSend && s.beforeSend(xhr, s) === false) {
			s.global && jQuery.active--;
			return;
        }
        if (xhr.aborted)
            return;
        
        var cbInvoked = 0;
        var timedOut = 0;

        // add submitting element to data if we know it
        var sub = form.clk;
        if (sub) {
            var n = sub.name;
            if (n && !sub.disabled) {
                options.extraData = options.extraData || {};
                options.extraData[n] = sub.value;
                if (sub.type == "image") {
                    options.extraData[name+'.x'] = form.clk_x;
                    options.extraData[name+'.y'] = form.clk_y;
                }
            }
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        setTimeout(function() {
            // make sure form attrs are set
            var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST')
				form.setAttribute('method', 'POST');
			if (form.getAttribute('action') != opts.url)
				form.setAttribute('action', opts.url);
							
            // ie borks in some cases when setting encoding
            if (! options.skipEncodingOverride) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (opts.timeout)
                setTimeout(function() { timedOut = true; cb(); }, opts.timeout);

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (options.extraData)
                    for (var n in options.extraData)
                        extraInputs.push(
                            $('<input type="hidden" name="'+n+'" value="'+options.extraData[n]+'" />')
                                .appendTo(form)[0]);
            
                // add iframe to doc and submit the form
                $io.appendTo('body');
                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
                form.submit();
            }
            finally {
                // reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
                t ? form.setAttribute('target', t) : $form.removeAttr('target');
                $(extraInputs).remove();
            }
        }, 10);

        var nullCheckFlag = 0;
		
        function cb() {
            if (cbInvoked++) return;
            
            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

            var ok = true;
            try {
                if (timedOut) throw 'timeout';
                // extract the server response from the iframe
                var data, doc;

                doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
                
                if ((doc.body == null || doc.body.innerHTML == '') && !nullCheckFlag) {
                    // in some browsers (cough, Opera 9.2.x) the iframe DOM is not always traversable when
                    // the onload callback fires, so we give them a 2nd chance
                    nullCheckFlag = 1;
                    cbInvoked--;
                    setTimeout(cb, 100);
                    return;
                }
                
                xhr.responseText = doc.body ? doc.body.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': opts.dataType};
                    return headers[header];
                };

                if (opts.dataType == 'json' || opts.dataType == 'script') {
                    var ta = doc.getElementsByTagName('textarea')[0];
                    xhr.responseText = ta ? ta.value : xhr.responseText;
                }
                else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
                    xhr.responseXML = toXml(xhr.responseText);
                }
                data = $.httpData(xhr, opts.dataType);
            }
            catch(e){
                ok = false;
                $.handleError(opts, xhr, 'error', e);
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (ok) {
                opts.success(data, 'success');
                if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
            }
            if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
            if (g && ! --$.active) $.event.trigger("ajaxStop");
            if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

            // clean up
            setTimeout(function() {
                $io.remove();
                xhr.responseXML = null;
            }, 100);
        };

        function toXml(s, doc) {
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
        };
    };
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */ 
$.fn.ajaxForm = function(options) {
    return this.ajaxFormUnbind().bind('submit.form-plugin',function() {
        $(this).ajaxSubmit(options);
        return false;
    }).each(function() {
        // store options in hash
        $(":submit,input:image", this).bind('click.form-plugin',function(e) {
            var form = this.form;
            form.clk = this;
            if (this.type == 'image') {
                if (e.offsetX != undefined) {
                    form.clk_x = e.offsetX;
                    form.clk_y = e.offsetY;
                } else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
                    var offset = $(this).offset();
                    form.clk_x = e.pageX - offset.left;
                    form.clk_y = e.pageY - offset.top;
                } else {
                    form.clk_x = e.pageX - this.offsetLeft;
                    form.clk_y = e.pageY - this.offsetTop;
                }
            }
            // clear form vars
            setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 10);
        });
    });
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    this.unbind('submit.form-plugin');
    return this.each(function() {
        $(":submit,input:image", this).unbind('click.form-plugin');
    });

};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
    var a = [];
    if (this.length == 0) return a;

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) return a;
    for(var i=0, max=els.length; i < max; i++) {
        var el = els[i];
        var n = el.name;
        if (!n) continue;

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(!el.disabled && form.clk == el)
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            continue;
        }

        var v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            for(var j=0, jmax=v.length; j < jmax; j++)
                a.push({name: n, value: v[j]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: n, value: v});
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle them here
        var inputs = form.getElementsByTagName("input");
        for(var i=0, max=inputs.length; i < max; i++) {
            var input = inputs[i];
            var n = input.name;
            if(n && !input.disabled && input.type == "image" && form.clk == input)
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) return;
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++)
                a.push({name: n, value: v[i]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: this.name, value: v});
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *       array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
            continue;
        v.constructor == Array ? $.merge(val, v) : val.push(v);
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (typeof successful == 'undefined') successful = true;

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1))
            return null;

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) return null;
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
				var v = op.value;
				if (!v) // extra pain for IE...
                	v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                if (one) return v;
                a.push(v);
            }
        }
        return a;
    }
    return el.value;
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
    return this.each(function() {
        $('input,select,textarea', this).clearFields();
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (t == 'text' || t == 'password' || tag == 'textarea')
            this.value = '';
        else if (t == 'checkbox' || t == 'radio')
            this.checked = false;
        else if (tag == 'select')
            this.selectedIndex = -1;
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
            this.reset();
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) { 
    if (b == undefined) b = true;
    return this.each(function() { 
        this.disabled = !b 
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select == undefined) select = true;
    return this.each(function() { 
        var t = this.type;
        if (t == 'checkbox' || t == 'radio')
            this.checked = select;
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
    if ($.fn.ajaxSubmit.debug && window.console && window.console.log)
        window.console.log('[jquery.form] ' + Array.prototype.join.call(arguments,''));
};

})(jQuery);
/*
 ### jQuery Star Rating Plugin v2.61 - 2009-01-23 ###
 * http://www.fyneworks.com/ - diego@fyneworks.com
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 ###
 Project: http://plugins.jquery.com/project/MultipleFriendlyStarRating
 Website: http://www.fyneworks.com/jquery/star-rating/
*//*
	Based on http://www.phpletter.com/Demo/Jquery-Star-Rating-Plugin/
 Original comments:
	This is hacked version of star rating created by <a href="http://php.scripts.psu.edu/rja171/widgets/rating.php">Ritesh Agrawal</a>
	It thansform a set of radio type input elements to star rating type and remain the radio element name and value,
	so could be integrated with your form. It acts as a normal radio button.
	modified by : Logan Cai (cailongqun[at]yahoo.com.cn)
*/

/*# AVOID COLLISIONS #*/
;if(window.jQuery) (function($){
/*# AVOID COLLISIONS #*/
	
	// IE6 Background Image Fix
	if ($.browser.msie) try { document.execCommand("BackgroundImageCache", false, true)} catch(e) { }
	// Thanks to http://www.visualjquery.com/rating/rating_redux.html
	
	// default settings
	$.rating = {
		cancel: 'Cancel Rating',   // advisory title for the 'cancel' link
		cancelValue: '',           // value to submit when user click the 'cancel' link
		split: 0,                  // split the star into how many parts?
		
		// Width of star image in case the plugin can't work it out. This can happen if
		// the jQuery.dimensions plugin is not available OR the image is hidden at installation
		starWidth: 16,
		
		//NB.: These don't need to be defined (can be undefined/null) so let's save some code!
		//half:     false,         // just a shortcut to settings.split = 2
		//required: false,         // disables the 'cancel' button so user can only select one of the specified values
		//readOnly: false,         // disable rating plugin interaction/ values cannot be changed
		//focus:    function(){},  // executed when stars are focused
		//blur:     function(){},  // executed when stars are focused
		//callback: function(){},  // executed when a star is clicked
		
		// required properties:
		groups: {},// allows multiple star ratings on one page
		event: {// plugin event handlers
			fill: function(n, el, settings, state){ // fill to the current mouse position.
				//if(window.console) console.log(['fill', $(el), $(el).prevAll('.star_group_'+n), arguments]);
				this.drain(n);
				$(el).prevAll('.star_group_'+n).andSelf().addClass('star_'+(state || 'hover'));
				// focus handler, as requested by focusdigital.co.uk
				var lnk = $(el).children('a'); val = lnk.text();
				if(settings.focus) settings.focus.apply($.rating.groups[n].valueElem[0], [val, lnk[0]]);
			},
			drain: function(n, el, settings) { // drain all the stars.
				//if(window.console) console.log(['drain', $(el), $(el).prevAll('.star_group_'+n), arguments]);
				$.rating.groups[n].valueElem.siblings('.star_group_'+n).removeClass('star_on').removeClass('star_hover');
			},
			reset: function(n, el, settings){ // Reset the stars to the default index.
				if(!$($.rating.groups[n].current).is('.cancel'))
					$($.rating.groups[n].current).prevAll('.star_group_'+n).andSelf().addClass('star_on');
				// blur handler, as requested by focusdigital.co.uk
				var lnk = $(el).children('a'); val = lnk.text();
				if(settings.blur) settings.blur.apply($.rating.groups[n].valueElem[0], [val, lnk[0]]);
			},
			click: function(n, el, settings){ // Selected a star or cancelled
				$.rating.groups[n].current = el;
				var lnk = $(el).children('a'); val = lnk.text();
				// Set value
				$.rating.groups[n].valueElem.val(val);
				// Update display
				$.rating.event.drain(n, el, settings);
				$.rating.event.reset(n, el, settings);
				// click callback, as requested here: http://plugins.jquery.com/node/1655
				if(settings.callback) settings.callback.apply($.rating.groups[n].valueElem[0], [val, lnk[0]]);
			}      
		}// plugin events
	};
	
	$.fn.rating = function(instanceSettings){
		if(this.length==0) return this; // quick fail
		
		instanceSettings = $.extend(
			{}/* new object */,
			$.rating/* global settings */,
			instanceSettings || {} /* just-in-time settings */
		);
		
		// loop through each matched element
		this.each(function(i){
			
			var settings = $.extend(
				{}/* new object */,
				instanceSettings || {} /* current call settings */,
				($.metadata? $(this).metadata(): ($.meta?$(this).data():null)) || {} /* metadata settings */
			);
			
			////if(window.console) console.log([this.name, settings.half, settings.split], '#');
			
			// Generate internal control ID
			// - ignore square brackets in element names
			var n = (this.name || 'unnamed-rating').replace(/\[|\]+/g, "_");
   
			// Grouping
			if(!$.rating.groups[n]) $.rating.groups[n] = {count: 0};
			i = $.rating.groups[n].count; $.rating.groups[n].count++;
			
			// Accept readOnly setting from 'disabled' property
			$.rating.groups[n].readOnly = $.rating.groups[n].readOnly || settings.readOnly || $(this).attr('disabled');
			
			// Things to do with the first element...
			if(i == 0){
				// Create value element (disabled if readOnly)
				$.rating.groups[n].valueElem = $('<input type="hidden" name="' + n + '" value=""' + (settings.readOnly ? ' disabled="disabled"' : '') + '/>');
				// Insert value element into form
				$(this).before($.rating.groups[n].valueElem);
				
				if($.rating.groups[n].readOnly || settings.required){
					// DO NOT display 'cancel' button
				}
				else{
					// Display 'cancel' button
					$(this).before(
						$('<div class="cancel"><a title="' + settings.cancel + '">' + settings.cancelValue + '</a></div>')
						.mouseover(function(){ $.rating.event.drain(n, this, settings); $(this).addClass('star_on'); })
						.mouseout(function(){ $.rating.event.reset(n, this, settings); $(this).removeClass('star_on'); })
						.click(function(){ $.rating.event.click(n, this, settings); })
					);
				}
			}; // if (i == 0) (first element)
			
			// insert rating option right after preview element
			eStar = $('<div class="star"><a title="' + (this.title || this.value) + '">' + this.value + '</a></div>');
			$(this).after(eStar);
			
			// Half-stars?
			if(settings.half) settings.split = 2;
			
			// Prepare division settings
			if(typeof settings.split=='number' && settings.split>0){
				var stw = ($.fn.width ? $(eStar).width() : 0) || settings.starWidth;
				var spi = (i % settings.split), spw = Math.floor(stw/settings.split);
				$(eStar)
				// restrict star's width and hide overflow (already in CSS)
				.width(spw)
				// move the star left by using a negative margin
				// this is work-around to IE's stupid box model (position:relative doesn't work)
				.find('a').css({ 'margin-left':'-'+ (spi*spw) +'px' })
			};
			
			// Remember group name so controls within the same container don't get mixed up
			$(eStar).addClass('star_group_'+n);
			
			// readOnly?
			if($.rating.groups[n].readOnly)//{ //save a byte!
				// Mark star as readOnly so user can customize display
				$(eStar).addClass('star_readonly');
			//}  //save a byte!
			else//{ //save a byte!
				$(eStar)
				// Enable hover css effects
				.addClass('star_live')
				// Attach mouse events
				.mouseover(function(){ $.rating.event.drain(n, this, settings); $.rating.event.fill(n, this, settings, 'hover'); })
				.mouseout(function(){ $.rating.event.drain(n, this, settings); $.rating.event.reset(n, this, settings); })
				.click(function(){ $.rating.event.click(n, this, settings); });
			//}; //save a byte!
			
			////if(window.console) console.log(['###', n, this.checked, $.rating.groups[n].initial]);
			if(this.checked) $.rating.groups[n].current = eStar;
			
			//remove this checkbox
			$(this).remove();
			
			// reset display if last element
			if(i + 1 == this.length) $.rating.event.reset(n, this, settings);
		
		}); // each element
			
		// initialize groups...
		for(n in $.rating.groups)//{ not needed, save a byte!
			(function(c, v, n){ if(!c) return;
				$.rating.event.fill(n, c, instanceSettings || {}, 'on');
				$(v).val($(c).children('a').text());
			})
			($.rating.groups[n].current, $.rating.groups[n].valueElem, n);
		//}; not needed, save a byte!
		
		return this; // don't break the chain...
	};
	
	
	
	/*
		### Default implementation ###
		The plugin will attach itself to file inputs
		with the class 'multi' when the page loads
	*/
	$(function(){ $('input[type=radio].star').rating(); });
	
	
	
/*# AVOID COLLISIONS #*/
})(jQuery);
/*# AVOID COLLISIONS #*/
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);// jquery.jsonp 1.0.4 (c) 2009 Julian Aubourg | MIT License
// http://code.google.com/p/jquery-jsonp/
(function($){var x=function(o){return o!==undefined&&o!==null;},H=$("head"),Z={},K={callback:"C",url:location.href};$.jsonp=function(d){d=$.extend({},K,d);if(x(d.beforeSend)){var t=0;d.abort=function(){t=1;};if(d.beforeSend(d,d)===false||t)return d;}
var _="",y="success",n="error",u=x(d.url)?d.url:_,p=x(d.data)?d.data:_,s=(typeof p)=="string",k=function(f){setTimeout(f,1);},S,P,i,j,U;p=s?p:$.param(p);x(d.callbackParameter)&&(p+=(p==_?_:"&")+escape(d.callbackParameter)+"=?");!d.cache&&!d.pageCache&&(p+=[(p==_?_:"&"),"_xx",(new Date()).getTime(),"=",1].join(_));S=u.split("?");if(p!=_){P=p.split("?");j=S.length-1;j&&(S[j]+="&"+P.shift());S=S.concat(P);}
i=S.length-2;i&&(S[i]+=d.callback+S.pop());U=S.join("?");if(d.pageCache&&x(Z[U])){k(function(){if(x(Z[U].e)){x(d.error)&&d.error(d,n);x(d.complete)&&d.complete(d,n);}else{var v=Z[U].s;x(d.dataFilter)&&(v=d.dataFilter(v));x(d.success)&&d.success(v,y);x(d.complete)&&d.complete(d,y);}});return d;}
var f=$("<iframe />");H.append(f);var F=f[0],W=F.contentWindow||F.contentDocument,D=W.document;if(!x(D)){D=W;W=D.getParentNode();}
var w,e=function(_,m){d.pageCache&&!x(m)&&(Z[U]={e:1});w();m=x(m)?m:n;x(d.error)&&d.error(d,m);x(d.complete)&&d.complete(d,m);},t=0,C=d.callback,E=C=="E"?"X":"E";D.open();W[C]=function(v){t=1;d.pageCache&&(Z[U]={s:v});k(function(){w();x(d.dataFilter)&&(v=d.dataFilter(v));x(d.success)&&d.success(v,y);x(d.complete)&&d.complete(d,y);});};W[E]=function(s){(!s||s=="complete")&&!t++&&k(e);};w=function(){W[E]=undefined;W[C]=undefined;try{delete W[E];}catch(_){}
try{delete W[C];}catch(_){}
D.open()
D.write(_);D.close();f.remove();}
k(function(){D.write(['<html><head><script src="',U,'" onload="',E,'()" onreadystatechange="',E,'(this.readyState)"></script></head><body onload="',E,'()"></body></html>'].join(_));D.close();});d.timeout>0&&setTimeout(function(){!t&&e(_,"timeout");},d.timeout);d.abort=w;return d;}
$.jsonp.setup=function(o){$.extend(K,o);};})(jQuery);(function(g){g.fn.svtAdGallery=function(j){var l={loader_image:null,start_at_index:0,description_wrapper:false,thumb_opacity:0.7,animate_first_image:false,animation_speed:400,width:false,height:false,display_next_and_prev:true,display_back_and_forward:true,scroll_jump:0,slideshow:{enable:true,autostart:false,speed:5000,start_label:"Start",stop_label:"Stop",stop_on_scroll:true,countdown_prefix:"(",countdown_sufix:")",onStart:false,onStop:false},effect:"slide-hori",enable_keyboard_move:true,cycle:true,callbacks:{init:false,afterImageVisible:false,beforeImageVisible:false}};var k=g.extend(false,l,j);if(j&&j.slideshow){k.slideshow=g.extend(false,l.slideshow,j.slideshow)}if(!k.slideshow.enable){k.slideshow.autostart=false}var i=[];g(this).each(function(){var m=new c(this,k);i[i.length]=m});return i};function f(j,k,l){var m=parseInt(j.css("top"),10);if(k=="left"){var i="-"+this.image_wrapper_height+"px";j.css("top",this.image_wrapper_height+"px")}else{var i=this.image_wrapper_height+"px";j.css("top","-"+this.image_wrapper_height+"px")}if(l){l.css("bottom","-"+l[0].offsetHeight+"px");l.animate({bottom:0},this.settings.animation_speed*2)}if(this.current_description){this.current_description.animate({bottom:"-"+this.current_description[0].offsetHeight+"px"},this.settings.animation_speed*2)}return{old_image:{top:i},new_image:{top:m}}}function e(j,k,m){var l=parseInt(j.css("left"),10);if(k=="left"){var i="-"+this.image_wrapper_width+"px";j.css("left",this.image_wrapper_width+"px")}else{var i=this.image_wrapper_width+"px";j.css("left","-"+this.image_wrapper_width+"px")}if(m){m.css("bottom","-"+m[0].offsetHeight+"px");m.animate({bottom:0},this.settings.animation_speed*2)}if(this.current_description){this.current_description.animate({bottom:"-"+this.current_description[0].offsetHeight+"px"},this.settings.animation_speed*2)}return{old_image:{left:i},new_image:{left:l}}}function d(k,l,n){var j=k.width();var i=k.height();var m=parseInt(k.css("left"),10);var o=parseInt(k.css("top"),10);k.css({width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2});return{old_image:{width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2},new_image:{width:j,height:i,top:o,left:m}}}function b(i,j,k){i.css("opacity",0);return{old_image:{opacity:0},new_image:{opacity:1}}}function h(i,j,k){i.css("opacity",0);return{old_image:{opacity:0},new_image:{opacity:1},speed:0}}function c(j,i){this.init(j,i)}c.prototype={wrapper:false,image_wrapper:false,gallery_info:false,nav:false,loader:false,preloads:false,thumbs_wrapper:false,scroll_back:false,scroll_forward:false,next_link:false,prev_link:false,slideshow:false,image_wrapper_width:0,image_wrapper_height:0,current_index:0,current_image:false,current_description:false,nav_display_width:0,settings:false,images:false,in_transition:false,animations:false,init:function(m,l){var k=this;this.wrapper=g(m);this.settings=l;this.setupElements();this.setupAnimations();if(this.settings.width){this.image_wrapper_width=this.settings.width;this.image_wrapper.width(this.settings.width);this.wrapper.width(this.settings.width)}else{this.image_wrapper_width=this.image_wrapper.width()}if(this.settings.height){this.image_wrapper_height=this.settings.height;this.image_wrapper.height(this.settings.height)}else{this.image_wrapper_height=this.image_wrapper.height()}this.nav_display_width=this.nav.width();this.current_index=0;this.current_image=false;this.current_description=false;this.in_transition=false;this.findImages();if(this.settings.display_next_and_prev){this.initNextAndPrev()}var i=function(n){return k.nextImage(n)};this.slideshow=new a(i,this.settings.slideshow);this.controls.append(this.slideshow.create());if(this.settings.slideshow.enable){this.slideshow.enable()}else{this.slideshow.disable()}if(this.settings.display_back_and_forward){this.initBackAndForward()}if(this.settings.enable_keyboard_move){this.initKeyEvents()}var j=parseInt(this.settings.start_at_index,10);if(window.location.hash&&window.location.hash.indexOf("#ad-image")===0){j=window.location.hash.replace(/[^0-9]+/g,"");if((j*1)!=j){j=this.settings.start_at_index}}this.loading(true);this.showImage(j,function(){if(k.settings.slideshow.autostart){k.preloadImage(j+1);k.slideshow.start()}});this.fireCallback(this.settings.callbacks.init)},setupAnimations:function(){this.animations={"slide-vert":f,"slide-hori":e,resize:d,fade:b,none:h}},setupElements:function(){this.controls=this.wrapper.find(".ad-controls");this.gallery_info=g('<p class="ad-info"></p>');this.controls.append(this.gallery_info);this.image_wrapper=this.wrapper.find(".ad-image-wrapper");this.image_wrapper.empty();this.nav=this.wrapper.find(".ad-nav");this.thumbs_wrapper=this.nav.find(".ad-thumbs");this.preloads=g('<div class="ad-preloads"></div>');if(this.settings.loader_image===null){this.loader=g('<div class="ad-loader"></div>')}else{this.loader=g('<img class="ad-loader" src="'+this.settings.loader_image+'">')}this.image_wrapper.append(this.loader);this.loader.hide();g(document.body).append(this.preloads)},loading:function(i){if(i){this.loader.show()}else{this.loader.hide()}},addAnimation:function(i,j){if(g.isFunction(j)){this.animations[i]=j}},findImages:function(){var n=this;this.images=[];var m=0;var l=0;var k=this.thumbs_wrapper.find("a");var j=k.length;if(this.settings.thumb_opacity<1){k.find("img").css("opacity",this.settings.thumb_opacity)}k.each(function(p){var r=g(this);var q=r.attr("href");var o=r.find("img");if(!n.isImageLoaded(o[0])){o.load(function(){m+=this.parentNode.parentNode.offsetWidth;l++})}else{m+=o[0].parentNode.parentNode.offsetWidth;l++}r.addClass("ad-thumb"+p);r.click(function(){n.showImage(p);n.slideshow.stop();return false}).hover(function(){if(!g(this).is(".ad-active")&&n.settings.thumb_opacity<1){g(this).find("img").fadeTo(300,1)}n.preloadImage(p)},function(){if(!g(this).is(".ad-active")&&n.settings.thumb_opacity<1){g(this).find("img").fadeTo(300,n.settings.thumb_opacity)}});var r=false;if(o.data("ad-link")){r=o.data("ad-link")}else{if(o.attr("longdesc")&&o.attr("longdesc").length){r=o.attr("longdesc")}}var t=false;if(o.data("ad-desc")){t=o.data("ad-desc")}else{if(o.attr("alt")&&o.attr("alt").length){t=o.attr("alt")}}var s=false;if(o.data("ad-title")){s=o.data("ad-title")}else{if(o.attr("title")&&o.attr("title").length){s=o.attr("title")}}n.images[p]={thumb:o.attr("src"),image:q,error:false,preloaded:false,desc:t,title:s,size:false,link:r}});var i=setInterval(function(){if(j==l){m-=100;var q=n.nav.find(".ad-thumb-list");q.css("width",m+"px");var p=1;var o=q.height();while(p<201){q.css("width",(m+p)+"px");if(o!=q.height()){break}o=q.height();p++}clearInterval(i)}},100)},initKeyEvents:function(){var i=this;g(document).keydown(function(j){if(j.keyCode==39){i.nextImage();i.slideshow.stop()}else{if(j.keyCode==37){i.prevImage();i.slideshow.stop()}}})},initNextAndPrev:function(){this.next_link=g('<div class="ad-next"><div class="ad-next-image"></div></div>');this.prev_link=g('<div class="ad-prev"><div class="ad-prev-image"></div></div>');this.image_wrapper.append(this.next_link);this.image_wrapper.append(this.prev_link);var i=this;this.prev_link.add(this.next_link).mouseover(function(j){g(this).css("height",i.image_wrapper_height);g(this).find("div").show()}).mouseout(function(j){g(this).find("div").hide()}).click(function(){if(g(this).is(".ad-next")){i.nextImage();i.slideshow.stop()}else{i.prevImage();i.slideshow.stop()}}).find("div").css("opacity",0.7)},initBackAndForward:function(){var k=this;this.scroll_forward=g('<div class="ad-forward"></div>');this.scroll_back=g('<div class="ad-back"></div>');this.nav.append(this.scroll_forward);this.nav.prepend(this.scroll_back);var j=0;var i=false;g(this.scroll_back).add(this.scroll_forward).click(function(){var l=k.nav_display_width-50;if(k.settings.scroll_jump>0){var l=k.settings.scroll_jump}if(g(this).is(".ad-forward")){var m=k.thumbs_wrapper.scrollLeft()+l}else{var m=k.thumbs_wrapper.scrollLeft()-l}if(k.settings.slideshow.stop_on_scroll){k.slideshow.stop()}k.thumbs_wrapper.animate({scrollLeft:m+"px"});return false}).hover(function(){var l="left";if(g(this).is(".ad-forward")){l="right"}i=setInterval(function(){j++;if(j>30&&k.settings.slideshow.stop_on_scroll){k.slideshow.stop()}var m=k.thumbs_wrapper.scrollLeft()+1;if(l=="left"){m=k.thumbs_wrapper.scrollLeft()-1}k.thumbs_wrapper.scrollLeft(m)},10);g(this).addClass("active")},function(){j=0;clearInterval(i);g(this).removeClass("active")})},_afterShow:function(){this.gallery_info.html((this.current_index+1)+" / "+this.images.length);if(!this.settings.cycle){this.prev_link.show().css("height",this.image_wrapper_height);this.next_link.show().css("height",this.image_wrapper_height);if(this.current_index==(this.images.length-1)){this.next_link.hide()}if(this.current_index==0){this.prev_link.hide()}}this.fireCallback(this.settings.callbacks.afterImageVisible)},_getContainedImageSize:function(j,i){if(i>this.image_wrapper_height){var k=j/i;i=this.image_wrapper_height;j=this.image_wrapper_height*k}if(j>this.image_wrapper_width){var k=i/j;j=this.image_wrapper_width;i=this.image_wrapper_width*k}return{width:j,height:i}},_centerImage:function(l,j,i){l.css("top","0px");if(i<this.image_wrapper_height){var k=this.image_wrapper_height-i;l.css("top",(k/2)+"px")}l.css("left","0px");if(j<this.image_wrapper_width){var k=this.image_wrapper_width-j;l.css("left",(k/2)+"px")}},_getDescription:function(i){var k=false;if(i.desc.length||i.title.length){var j="";if(i.title.length){j='<strong class="ad-description-title">'+i.title+"</strong>"}var k="";if(i.desc.length){k="<span>"+i.desc+"</span>"}k=g('<p class="ad-image-description">'+j+k+"</p>")}return k},showImage:function(i,l){if(this.images[i]&&!this.in_transition){var j=this;var k=this.images[i];this.in_transition=true;if(!k.preloaded){this.loading(true);this.preloadImage(i,function(){j.loading(false);j._showWhenLoaded(i,l)})}else{this._showWhenLoaded(i,l)}}},_showWhenLoaded:function(r,x){if(this.images[r]){var j=this;var l=this.images[r];var m=g(document.createElement("div")).addClass("ad-image");var p=g(new Image()).attr("src",l.image);if(l.link){var u=g('<a href="'+l.link+'" target="_blank"></a>');u.append(p);m.append(u)}else{m.append(p)}this.image_wrapper.prepend(m);var y=this._getContainedImageSize(l.size.width,l.size.height);p.attr("width",y.width);p.attr("height",y.height);m.css({width:y.width+"px",height:y.height+"px"});this._centerImage(m,y.width,y.height);var q=this._getDescription(l,m);if(q){if(!this.settings.description_wrapper){m.append(q);var i=y.width-parseInt(q.css("padding-left"),10)-parseInt(q.css("padding-right"),10);q.css("width",i+"px")}else{this.settings.description_wrapper.append(q)}}this.highLightThumb(this.nav.find(".ad-thumb"+r));var v="right";var o=this.images.length-1;if(this.current_index+1==r||(this.current_index==o&&r==0)){v="left"}this.fireCallback(this.settings.callbacks.beforeImageVisible);if(this.current_image||this.settings.animate_first_image){var w=this.settings.animation_speed;var t="swing";var n=this.animations[this.settings.effect].call(this,m,v,q);if(typeof n.speed!="undefined"){w=n.speed}if(typeof n.easing!="undefined"){t=n.easing}if(this.current_image){var k=this.current_image;var s=this.current_description;k.animate(n.old_image,w,t,function(){k.remove();if(s){s.remove()}})}m.animate(n.new_image,w,t,function(){j.current_index=r;j.current_image=m;j.current_description=q;j.in_transition=false;j._afterShow();j.fireCallback(x)})}else{this.current_index=r;this.current_image=m;j.current_description=q;this.in_transition=false;j._afterShow();this.fireCallback(x)}}},nextIndex:function(){if(this.current_index==(this.images.length-1)){if(!this.settings.cycle){return false}var i=0}else{var i=this.current_index+1}return i},nextImage:function(j){var i=this.nextIndex();if(i===false){return false}this.preloadImage(i+1);this.showImage(i,j);return true},prevIndex:function(){if(this.current_index==0){if(!this.settings.cycle){return false}var i=this.images.length-1}else{var i=this.current_index-1}return i},prevImage:function(j){var i=this.prevIndex();if(i===false){return false}this.preloadImage(i-1);this.showImage(i,j);return true},preloadAll:function(){var k=this;var j=0;function l(){if(j<k.images.length){j++;k.preloadImage(j,l)}}k.preloadImage(j,l)},preloadImage:function(j,m){if(this.images[j]){var l=this.images[j];if(!this.images[j].preloaded){var i=g(new Image());i.attr("src",l.image);if(!this.isImageLoaded(i[0])){this.preloads.append(i);var k=this;i.load(function(){l.preloaded=true;l.size={width:this.width,height:this.height};k.fireCallback(m)}).error(function(){l.error=true;l.preloaded=false;l.size=false})}else{l.preloaded=true;l.size={width:i[0].width,height:i[0].height};this.fireCallback(m)}}else{this.fireCallback(m)}}},isImageLoaded:function(i){if(typeof i.complete!="undefined"&&!i.complete){return false}if(typeof i.naturalWidth!="undefined"&&i.naturalWidth==0){return false}return true},highLightThumb:function(i){this.thumbs_wrapper.find(".ad-active").removeClass("ad-active");i.addClass("ad-active");if(this.settings.thumb_opacity<1){this.thumbs_wrapper.find("a:not(.ad-active) img").fadeTo(300,this.settings.thumb_opacity);i.find("img").fadeTo(300,1)}var j=i[0].parentNode.offsetLeft;j-=(this.nav_display_width/2)-(i[0].offsetWidth/2);this.thumbs_wrapper.animate({scrollLeft:j+"px"})},fireCallback:function(i){if(g.isFunction(i)){i.call(this)}}};function a(i,j){this.init(i,j)}a.prototype={start_link:false,stop_link:false,countdown:false,controls:false,settings:false,nextimage_callback:false,enabled:false,running:false,countdown_interval:false,init:function(i,k){var j=this;this.nextimage_callback=i;this.settings=k},create:function(){this.start_link=g('<span class="ad-slideshow-start">'+this.settings.start_label+"</span>");this.stop_link=g('<span class="ad-slideshow-stop">'+this.settings.stop_label+"</span>");this.countdown=g('<span class="ad-slideshow-countdown"></span>');this.controls=g('<div class="ad-slideshow-controls"></div>');this.controls.append(this.start_link).append(this.stop_link).append(this.countdown);this.countdown.hide();var i=this;this.start_link.click(function(){i.start()});this.stop_link.click(function(){i.stop()});g(document).keydown(function(j){if(j.keyCode==83){if(i.running){i.stop()}else{i.start()}}});return this.controls},disable:function(){this.enabled=false;this.stop();this.controls.hide()},enable:function(){this.enabled=true;this.controls.show()},toggle:function(){if(this.enabled){this.disable()}else{this.enable()}},start:function(){if(this.running||!this.enabled){return false}var i=this;this.running=true;this.controls.addClass("ad-slideshow-running");this._next();this.fireCallback(this.settings.onStart);return true},stop:function(){if(!this.running){return false}this.running=false;this.countdown.hide();this.controls.removeClass("ad-slideshow-running");clearInterval(this.countdown_interval);this.fireCallback(this.settings.onStop);return true},_next:function(){var k=this;var l=this.settings.countdown_prefix;var j=this.settings.countdown_sufix;clearInterval(k.countdown_interval);this.countdown.show().html(l+(this.settings.speed/1000)+j);var i=0;this.countdown_interval=setInterval(function(){i+=1000;if(i>=k.settings.speed){var n=function(){if(k.running){k._next()}i=0};if(!k.nextimage_callback(n)){k.stop()}i=0}var m=parseInt(k.countdown.text().replace(/[^0-9]/g,""),10);m--;if(m>0){k.countdown.html(l+m+j)}},1000)},fireCallback:function(i){if(g.isFunction(i)){i.call(this)}}}})(jQuery);/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 * 
 * Requires: 1.2.2+
 */
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(i){var g=i||window.event,f=[].slice.call(arguments,1),j=0,h=true,e=0,d=0;i=c.event.fix(g);i.type="mousewheel";if(i.wheelDelta){j=i.wheelDelta/120}if(i.detail){j=-i.detail/3}d=j;if(g.axis!==undefined&&g.axis===g.HORIZONTAL_AXIS){d=0;e=-1*j}if(g.wheelDeltaY!==undefined){d=g.wheelDeltaY/120}if(g.wheelDeltaX!==undefined){e=-1*g.wheelDeltaX/120}f.unshift(i,j,e,d);return c.event.handle.apply(this,f)}})(jQuery);(function(a){a.jScrollPane={active:[]};a.fn.jScrollPane=function(c){c=a.extend({},a.fn.jScrollPane.defaults,c);var b=function(){return false};return this.each(function(){var o=a(this);o.css("overflow","hidden");var y=this;if(a(this).parent().is(".jScrollPaneContainer")){var ac=c.maintainPosition?o.position().top:0;var l=a(this).parent();var E=l.innerWidth();var ad=l.outerHeight();var m=ad;a(">.jScrollPaneTrack, >.jScrollArrowUp, >.jScrollArrowDown",l).remove();o.css({top:0})}else{var ac=0;this.originalPadding=o.css("paddingTop")+" "+o.css("paddingRight")+" "+o.css("paddingBottom")+" "+o.css("paddingLeft");this.originalSidePaddingTotal=(parseInt(o.css("paddingLeft"))||0)+(parseInt(o.css("paddingRight"))||0);var E=o.innerWidth();var ad=o.innerHeight();var m=ad;o.wrap(a("<div></div>").attr({className:"jScrollPaneContainer"}).css({height:ad+"px",width:E+"px"}));a(document).bind("emchange",function(ae,af,p){o.jScrollPane(c)})}if(c.reinitialiseOnImageLoad){var n=a.data(y,"jScrollPaneImagesToLoad")||a("img",o);var g=[];if(n.length){n.each(function(p,ae){a(this).bind("load",function(){if(a.inArray(p,g)==-1){g.push(ae);n=a.grep(n,function(ag,af){return ag!=ae});a.data(y,"jScrollPaneImagesToLoad",n);c.reinitialiseOnImageLoad=false;o.jScrollPane(c)}}).each(function(af,ag){if(this.complete||this.complete===undefined){this.src=this.src}})})}}var P=this.originalSidePaddingTotal;var M={height:"auto",width:E-c.scrollbarWidth-c.scrollbarMargin-P+"px"};if(c.scrollbarOnLeft){M.paddingLeft=c.scrollbarMargin+c.scrollbarWidth+"px"}else{M.paddingRight=c.scrollbarMargin+"px"}o.css(M);var N=o.outerHeight();var J=ad/N;if(J<0.99){var h=o.parent();h.append(a("<div></div>").attr({className:"jScrollPaneTrack"}).css({width:c.scrollbarWidth+"px"}).append(a("<div></div>").attr({className:"jScrollPaneDrag"}).css({width:c.scrollbarWidth+"px"}).append(a("<div></div>").attr({className:"jScrollPaneDragTop"}).css({width:c.scrollbarWidth+"px"}),a("<div></div>").attr({className:"jScrollPaneDragBottom"}).css({width:c.scrollbarWidth+"px"}))));var Z=a(">.jScrollPaneTrack",h);var q=a(">.jScrollPaneTrack .jScrollPaneDrag",h);if(c.showArrows){var H;var ab;var t;var R;var K=function(){if(R>4||R%4==0){Y(U+ab*C)}R++};var k=function(p){a("html").unbind("mouseup",k);H.removeClass("jScrollActiveArrowButton");clearInterval(t)};var A=function(){a("html").bind("mouseup",k);H.addClass("jScrollActiveArrowButton");R=0;K();t=setInterval(K,100)};h.append(a("<a></a>").attr({href:"javascript:;",className:"jScrollArrowUp"}).css({width:c.scrollbarWidth+"px"}).html("Scroll up").bind("mousedown",function(){H=a(this);ab=-1;A();this.blur();return false}).bind("click",b),a("<a></a>").attr({href:"javascript:;",className:"jScrollArrowDown"}).css({width:c.scrollbarWidth+"px"}).html("Scroll down").bind("mousedown",function(){H=a(this);ab=1;A();this.blur();return false}).bind("click",b));var r=a(">.jScrollArrowUp",h);var j=a(">.jScrollArrowDown",h);if(c.arrowSize){m=ad-c.arrowSize-c.arrowSize;Z.css({height:m+"px",top:c.arrowSize+"px"})}else{var S=r.height();c.arrowSize=S;m=ad-S-j.height();Z.css({height:m+"px",top:S+"px"})}}var W=a(this).css({position:"absolute",overflow:"visible"});var d;var z;var C;var U=0;var w=J*ad/2;var B=function(ae,ag){var af=ag=="X"?"Left":"Top";return ae["page"+ag]||(ae["client"+ag]+(document.documentElement["scroll"+af]||document.body["scroll"+af]))||0};var G=function(){return false};var V=function(){O();d=q.offset(false);d.top-=U;z=m-q[0].offsetHeight;C=2*c.wheelSpeed*z/N};var e=function(p){V();w=B(p,"Y")-U-d.top;a("html").bind("mouseup",u).bind("mousemove",I);if(a.browser.msie){a("html").bind("dragstart",G).bind("selectstart",G)}return false};var u=function(){a("html").unbind("mouseup",u).unbind("mousemove",I);w=J*ad/2;if(a.browser.msie){a("html").unbind("dragstart",G).unbind("selectstart",G)}};var Y=function(ae){ae=ae<0?0:(ae>z?z:ae);U=ae;q.css({top:ae+"px"});var af=ae/z;W.css({top:((ad-N)*af)+"px"});o.trigger("scroll");if(c.showArrows){r[ae==0?"addClass":"removeClass"]("disabled");j[ae==z?"addClass":"removeClass"]("disabled")}};var I=function(p){Y(B(p,"Y")-d.top-w)};var Q=Math.max(Math.min(J*(ad-c.arrowSize*2),c.dragMaxHeight),c.dragMinHeight);q.css({height:Q+"px"}).bind("mousedown",e);var L;var s;var i;var T=function(){if(s>8||s%4==0){Y((U-((U-i)/2)))}s++};var aa=function(){clearInterval(L);a("html").unbind("mouseup",aa).unbind("mousemove",F)};var F=function(p){i=B(p,"Y")-d.top-w};var v=function(p){V();F(p);s=0;a("html").bind("mouseup",aa).bind("mousemove",F);L=setInterval(T,100);T()};Z.bind("mousedown",v);h.bind("mousewheel",function(ae,ag){V();O();var af=U;Y(U-ag*C);var p=af!=U;return !p});var f;var x;function D(){var p=(f-U)/c.animateStep;if(p>1||p<-1){Y(U+p)}else{Y(f);O()}}var O=function(){if(x){clearInterval(x);delete f}};var X=function(af,p){if(typeof af=="string"){$e=a(af,o);if(!$e.length){return}af=$e.offset().top-o.offset().top}h.scrollTop(0);O();var ae=-af/(ad-N)*z;if(p||!c.animateTo){Y(ae)}else{f=ae;x=setInterval(D,c.animateInterval)}};o[0].scrollTo=X;o[0].scrollBy=function(ae){var p=-parseInt(W.css("top"))||0;X(p+ae)};V();X(-ac,true);a("*",this).bind("focus",function(ah){var ag=a(this);var aj=0;while(ag[0]!=o[0]){aj+=ag.position().top;ag=ag.offsetParent()}var p=-parseInt(W.css("top"))||0;var ai=p+ad;var af=aj>p&&aj<ai;if(!af){var ae=aj-c.scrollbarMargin;if(aj>p){ae+=a(this).height()+15+c.scrollbarMargin-ad}X(ae)}});if(location.hash){X(location.hash)}a(document).bind("click",function(ae){$target=a(ae.target);if($target.is("a")){var p=$target.attr("href");if(p.substr(0,1)=="#"){X(p)}}});a.jScrollPane.active.push(o[0])}else{o.css({height:ad+"px",width:E-this.originalSidePaddingTotal+"px",padding:this.originalPadding});o.parent().unbind("mousewheel")}})};a.fn.jScrollPane.defaults={scrollbarWidth:10,scrollbarMargin:5,wheelSpeed:18,showArrows:false,arrowSize:0,animateTo:false,dragMinHeight:1,dragMaxHeight:99999,animateInterval:100,animateStep:3,maintainPosition:true,scrollbarOnLeft:false,reinitialiseOnImageLoad:false};a(window).bind("unload",function(){var c=a.jScrollPane.active;for(var b=0;b<c.length;b++){c[b].scrollTo=c[b].scrollBy=null}})})(jQuery);/*
* SVT namespace
*/
if(typeof se == "undefined") var se = new Object();
if(typeof se.svt == "undefined") se.svt = new Object();
if(typeof se.svt.flash == "undefined") se.svt.flash = new Object();
if(typeof se.svt.web == "undefined") se.svt.web = new Object();
if(typeof se.svt.web.util == "undefined") se.svt.web.util = new Object();

var SgAvailWidth = screen.availWidth;
var SgAvailHeight = screen.availHeight-24;
var SgDOM;
var SgUpWin;


SgIsLoaded = false;

//var tw_url = "http://svt.se/2.112087/1.1579586/spelet_bakom_fly_me_s_konkurs"; 
var tw_conf_id = "svt";
var tw_language = "swedish";
var tw_useToolTip = false;
var tw_skipDefaultCss  = true;
var tw_alwaysShowPager = true;
var tw_onComplete = function() {
	if (typeof tw_numberOfPosts != 'undefined') {
		if(tw_numberOfPosts > 0) {			
			$("a.tw_rss_icon").addClass("tw_rss_svticon");
			$("a.tw_rss_icon").removeClass("tw_rss_icon");
			$("div.tw_pager").html("<a href=\"javascript:SgOpenArgs('http://media.svt.se/upload/twingly/info.html','sk',331,340,'scrolling=no,resizable=no,status=no');\">(Vad är Twingly?)</a>");
			$("div.tw_item").each( function(){
				var blogname = $(this).find("a.tw_rss_link").text();
				$(this).find("a.tw_rss_link").attr("title","Blog: " + blogname );
				$(this).find("a.tw_rss_svticon").attr("title","RSS: " + blogname );
			});
			$("#tw_link_wrapper").show();
		} else {
			promtForBlogging();			
		}
	} else {
		promtForBlogging();
	}
};

function promtForBlogging(){
	$("#tw_link_widget").html("<div class=\"tw_blogthis\"><h4 class=\"tw_header\">Blogga om den här artikeln</h4><p>Om du bloggar om den här artikeln så länkar vi till ditt inlägg.</p><a href=\"http://www.twingly.se/ping\" target=\"_blank\">Pinga din blogg hos Twingly för att vi skall kunna hitta den.</a>");
	$("#tw_link_wrapper").show();
}

function svtInit(){
	SgIsLoaded = true;
	if(typeof se.svt.web.util.InitHandler.run != "undefined") {
    	se.svt.web.util.InitHandler.run();
    }
}

function SgRandomImage(url){
	if(url == undefined || typeof url != 'string') {
		return false;
	} else {
		if(url.length < 2){
			return false;	
		} 
		var img = new Image(1,1);
		if(url.indexOf('?') > -1){
		    img.src=url+'&rnd='+(new Date()).getTime();
	    } else {
		    img.src=url+'?rnd='+(new Date()).getTime();
	    }
	}
}

function SgBrowserobj(){
	this.ver = navigator.appVersion.toLowerCase();
	this.agent = navigator.userAgent.toLowerCase();
	this.name = navigator.appName.toLowerCase();
	this.byid = document.getElementById;
	this.opera = (this.agent.indexOf("opera")>-1);
	this.ie = (this.name == 'microsoft internet explorer' && !this.opera);
	this.ie4 = (this.ie && ( this.ver.indexOf("msie 4")>-1 || this.agent.indexOf("msie 4")>-1 ) );
	// ie5 didn't exist in production
    this.ie5 = (this.ie && ( this.ver.indexOf("msie 5")>-1 || this.agent.indexOf("msie 5")>-1 ) );
	this.ns = (this.name == 'netscape' && !this.opera);
	this.ns4 = (this.ns && document.layers);
	this.mac = (this.agent.indexOf("mac")>-1);
	this.windows = (this.agent.indexOf("windows")>-1);
return this;
}
if(!SgDOM){
	SgDOM = new SgBrowserobj();
}
function SgOpenStandard(url) {
	var w_height = 599;
	var w_width = 799;
	if ((SgAvailWidth > 840) && (SgAvailHeight > 640)){
		if (screen.availWidth >= 1024){
			w_height = (SgDOM.ie) ? 748 : 590;
			w_width = 1015;
		} else {
			w_height = (SgDOM.ie) ? (screen.availHeight - 20) : (screen.availHeight - 100);
			w_width = (screen.availWidth - 10);
		}
	} else {
		w_height = (SgDOM.ie) ? "550" : "440";
		w_width = 799;
	}
	SgOpenWindow(url,'standardpopup',w_width,w_height,'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes');
}
function SgMyPersonalPage(id) { //O pen spinnmembers function
	SgOpenArgs('http://spinn.svt.se/default.ns?strItemID=personal_page&lngUserID='+id+'&section=','Personlig_sida'+id,590,500,'menubar=no,directories=no,toolbar=no,status=no,scrollbars=yes,resizable=yes,location=no');
}
function SgOpenMax(url,name,maxWidth,maxHeight,args){
	var w_width = maxWidth;
	var w_height = maxHeight;
	if( (maxWidth > SgAvailWidth || maxHeight > SgAvailHeight) || (maxWidth < 1 || maxHeight < 1) ){
		w_width = SgAvailWidth;
		w_height = SgAvailHeight;
	}
	SgOpenWindow(url,SgTrimUScore(name),w_width,w_height,args);
}
function SgOpenArgs(url,name,w_width,w_height,args) {
	SgOpenWindow(url,SgTrimUScore(name),w_width,w_height,args);
}
// DEPRECATED
var VideoPlayerURL = "/mediaplayer/mediaplayer_real/default.htm";
function SgOpenVideoWindow(mediapath, title, version){
	var URL = VideoPlayerURL + "?" + mediapath + "&" + escape(title) + "&" + version;
	SgOpenWindow(URL,"videowindow","355","344","scrolling=yes,framespacing=0");
}
// DEPRECATED
function SgOpenVideoWindowNew(mediapath, title, version, inCorpWith){
	var URL = VideoPlayerURL + "?" + mediapath + "&" + escape(title) + "&" + version + "&" + escape(inCorpWith);
	SgOpenWindow(URL,"videowindow","355","344","scrolling=yes,framespacing=0");
}
// Base function to handle SgUpWindows (do not call directly)
function SgOpenWindow(url, name, w_width, w_height, args, placeWindow) {
	name = SgTrim(name);
	args = SgTrim(args);
	if(args !== ''){
		args = args + ',';
	}
	if (!SgUpWin || SgUpWin.closed) {
		center_of_screen_X=Math.floor(SgAvailWidth/2)-Math.floor(w_width/2);
		center_of_screen_Y=Math.floor(SgAvailHeight/2)-Math.floor(w_height/2);
		placeWindow = (SgDOM.opera) ? "" : ",left=" + center_of_screen_X + ",top=" + center_of_screen_Y;
	}
	SgUpWin = window.open(url,name, args + 'width='+w_width+',height='+w_height + placeWindow);
	if(SgUpWin){
		SgUpWin.focus();
	} else {
		alert("Fönstret som skulle öppnas blockerades! Ändra inställningar för svt.se i din popup-blockerare.");
	}
}
function SgIsEmpty(inputString) {
	var theReturn;
	inputString = SgTrim(inputString);
	theReturn = (inputString === " " || inputString === "" || inputString === null);
	return theReturn;
}
function SgTrim(inputString) {
	if (typeof inputString != "string") {
		return inputString;
	}
	var theReturn = inputString.replace(/^\s*([\S\s]*)$/,'$1');
	theReturn = theReturn.replace(/\s+$/,'');
	theReturn = theReturn.replace(/\s\s+/g,' ');
	return theReturn;
}
function SgTrimUScore(inputString) {
	var theReturn = SgTrim(inputString);
	theReturn = theReturn.replace(/\s/g,'_');
	return theReturn;
}
// DEPRECATED (Remove when the new menu.jsp is launched)
function SgGo(theForm,theSelect){
	var strURL;
	strURL = theForm.elements[theSelect].options[theForm.elements[theSelect].options.selectedIndex].value;
	if(SgIsEmpty(strURL) || strURL == "0" || strURL == "-1") {
	  alert("En länk i listan måste väljas");
	  return false;
	} else {
		document.location.href=strURL;
		return false;
	}
}
function SgNavigater(theForm,theSelect){
	var strURL = theForm.elements[theSelect].options[theForm.elements[theSelect].options.selectedIndex].value;
	if(SgIsEmpty(strURL) || strURL == "0" || strURL == "-1") {
		  alert("En länk i listan måste väljas");
		  return false;
	} else if(theSelect=="open" || theSelect=="video"){
		SgOpenArgs('/svt/road/Classic/shared/mediacenter/index.jsp?'+strURL,'largevideoplayer',790,585,'scrolling=no,status=yes');
		return false;
	} else {
		document.location.href=strURL;
	}
}
function SgNavigate(theForm,theSelect){
	var strURL = theForm.elements[theSelect].options[theForm.elements[theSelect].options.selectedIndex].value;
	if(SgIsEmpty(strURL) || strURL == "0" || strURL == "-1") {
		  alert("En länk i listan måste väljas");
		  return false;
	} else if(theSelect=="open" || theSelect=="video"){
		SgOpenArgs('/svt/road/Classic/shared/mediacenter/index.jsp?'+strURL,'largevideoplayer',790,585,'scrolling=no,status=yes');
		return false;
	} else {
		document.location.href=strURL;
	}
    return true;
}
function SgSearchValidate(theForm, theFieldName){
	
	var ele = theForm.elements[theFieldName].value;
	
	if(ele.indexOf("Sök på svt.se") != -1){
		document.location = "/sok"
		return false;
	} else if(ele.length < 1){
		alert(" Minst ett tecken måste alltid skrivas in i sökrutan");
		return false;
	} else if (ele.indexOf("Sök på svt.se") != -1){
		document.location = "http://svt.se/sok";
		return false;
	}
    return true;
}
function SgValidateEmail(inputString){
	inputString = SgTrim(inputString);
	var expr = /^([^\W][a-z_0-9\.-]+[^\W]|[a-z_0-9-]+)@([^\W]+[a-z_0-9\.-]*[^\W]+|[a-z_0-9-]*[^\W]+)\.[a-z]{2,9}$/i;
	if (inputString===""){
		return false;
	}
	var retVal = inputString.replace(expr,"");
	if (retVal === ""){
		return true;
	}
	return false;
}
function SgVoid(){
	// nothing
}
// DEPRECATED
function SM_fncGoRullmeny(strSelbox){
	var strURL;
	strURL = strSelbox.options[strSelbox.selectedIndex].value;
	if(strURL === "") { return false;}
	document.location.href=strURL;
}
function SgBrowserMessage(){
	var theMessage = "<div align=\"left\">";
	theMessage += "<img src=\"http://svt.se/svt_se/images/framework/redalert.gif\" width=\"16\" height=\"14\" alt=\"Alert!\" border=\"0\" valign=\"middle\"> ";
	theMessage += "Din webbläsare kan inte kan hantera alla \"stilmallar\" på svt.se på ett korrekt sätt. Vi rekommenderar att du laddar hem en senare version av webbläsare, <a href=\"/svt/jsp/Crosslink.jsp?d=1994\">klicka här om du vill ha hjälp</a>.";
	theMessage += "</div><br>";
	return theMessage;
}
function SgForumValidate(theForm, maxContentLength, demandEmail){
	var notValid = false;
	var ele = theForm.elements;
	var alertString = "Formuläret kan inte skickas\n----------------------------\n";
	if(ele.content.value.length > maxContentLength){
		notValid = true;
		alertString += "Inlägget får inte vara längre än \nmaximalt " + maxContentLength + " tecken\n";
		alertString += "\n----------------------------";
	} else {
		if(ele.title.value.length < 1){
			notValid = true;
			alertString += "Rubrik\n";
		}
		if(ele.content.value.length < 1){
			notValid = true;
			alertString += "Inlägg\n";
		}
		if(ele.name.value.length < 1){
			notValid = true;
			alertString += "Namn\n";
		}
		if (demandEmail && !SgValidateEmail(ele.email.value)) {
			notValid = true;
			alertString += "En giltig e-postadress\n";
		}
		alertString += "\n----------------------------\nMåste fyllas i";
	}
	if(notValid){
		alert(alertString);
		return false;
	} else {
		return true;
	}
}
var SgmDI = document.images;
var SgmIsPrel = false;
function SgmNewImage(theImage) {
	if (SgmDI) {
		var theReturn = new Image();
		theReturn.src = theImage;
		return theReturn;
	}
}
function SgmPreload() {
	prelimg = new Array();
	if (SgmDI) {
		for (var i=0; i<SgmPreload.arguments.length; i++) {
			prelimg[i] = SgmNewImage(SgmPreload.arguments[i]);
		}
	SgmIsPrel = true;
	}
}
function SgmSwap() {
	if (SgmDI && (SgmIsPrel === true)) {
		for (var i=0; i<SgmSwap.arguments.length; i+=2) {
			document[SgmSwap.arguments[i]].src = SgmSwap.arguments[i+1];
		}
	}
}
function SgShowHideObjects(obj, showOrHide){
	if(showOrHide == "show"){
		showOrHide = "block";
	} else if (showOrHide == "hide") {
		showOrHide = "none";
	}
	if(getObject(obj) && (showOrHide == "block" || showOrHide == "none")){
		getObject(obj).style.display = showOrHide;
	}
}
function getObject(theObj){
	if(document.getElementById){
		return document.getElementById(theObj);
	} else if (document.all){
		return document.all[theObj];
	}
}
function SgBookmark(url,headline) {
	if(SgDOM.ie){
		window.external.AddFavorite(url,headline);
	} else if(SgDOM.ns) {
		alert("Klicka OK och tryck sedan CTRL+D för att lägga till i favoriter.");
	}
}

/** javascript link that links to a anchor link. **/
function SgSoftLink(e,hrefId) {
	var targ;
    var url = getObject(hrefId).href;

    if (!e) {
        e = window.event;
    }

    if (e.target) {
    	targ = e.target;
    } else if (e.srcElement) {
    	targ = e.srcElement;
    } else {
    	targ = e;
    }

    if (targ.nodeType == 3) {
        targ = targ.parentNode;
    }

    if(targ) {
        targ.className = targ.className + " SgSoftLink";
    }

    if(!targ.onclick) {
        targ.onclick = function (event)	{
        	window.location = url;
        };
    }

	if(!targ.onmouseout){
    	targ.onmouseout	= function (event)	{
      		window.status = '';
        };
    }

    if(!targ.onmousedown) {
    	targ.onmousedown = function (event)	{
        	window.status = url;
        };
    }

    if(document.all) {
        window.status = url;
    }
}


/*
On load function cue handler
*/

if(typeof se.svt.web.util.InitHandler == "undefined") se.svt.web.util.InitHandler = new Object();
se.svt.web.util.InitHandler.add = function(fn) {
    if(typeof this.functionList == "undefined") this.functionList = new Array();
    this.functionList[this.functionList.length] = fn;
}

se.svt.web.util.InitHandler.run = function() {
    if(typeof this.functionList != "undefined" && this.functionList.length > 0) {
        for ( var i=0; i < this.functionList.length; i++) {
            if (typeof this.functionList[i] == "function") this.functionList[i]();
            else if (typeof this.functionList[i] == "string") eval(this.functionList[i]);
        }
    }
}



/*
Flash utils
*/
//(Depricated) use svt.SWFObject
if(typeof se.svt.flash.FlashUtil == "undefined") se.svt.flash.FlashUtil = new Object();


    se.svt.flash.FlashUtil.getPlayerVersion = function() {

        if(typeof this.playerVersion  == "undefined") {
            this.playerVersion = new se.svt.flash.PlayerVersion(0,0,0);

            if(navigator.plugins && navigator.mimeTypes.length) {
                var x = navigator.plugins["Shockwave Flash"];
                if(x && x.description) {
                    this.playerVersion = new se.svt.flash.PlayerVersion(x.description.replace(/([a-z]|[A-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));
                }
            } else if (window.ActiveXObject) {
                try {
                    var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    this.playerVersion = new se.svt.flash.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));
                } catch (e) {}
            }
        }
		return this.playerVersion;
	}

    se.svt.flash.PlayerVersion = function(arrVersion) {
		this.major	= parseInt(arrVersion[0]) || 0;
		this.minor	= parseInt(arrVersion[1]) || 0;
		this.rev	= parseInt(arrVersion[2]) || 0;
   	}

/**
* original source : SWFObject v1.4: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
* svt.SWFObject = function(swf, id, w, h, ver, c, useExpressInstall, quality, xiRedirectUrl, redirectUrl, detectKey)
*/

if(typeof svt=="undefined"){
var svt=new Object();
}
if(typeof svt.util=="undefined"){
svt.util=new Object();
}
if(typeof svt.SWFObjectUtil=="undefined"){
svt.SWFObjectUtil=new Object();
}

if(typeof deconcept=="undefined"){var deconcept=new Object();}
if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}
if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}
deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a,_b){if(!document.getElementById){return;}
this.DETECT_KEY=_b?_b:"detectflash";
this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);
this.params=new Object();
this.variables=new Object();
this.attributes=new Array();
if(_1){this.setAttribute("swf",_1);}
if(id){this.setAttribute("id",id);}
if(w){this.setAttribute("width",w);}
if(h){this.setAttribute("height",h);}
if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}
this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();
if(c){this.addParam("bgcolor",c);}
var q=_8?_8:"high";
this.addParam("quality",q);
this.setAttribute("useExpressInstall",_7);
this.setAttribute("doExpressInstall",false);
var _d=(_9)?_9:window.location;
this.setAttribute("xiRedirectUrl",_d);
this.setAttribute("redirectUrl","");
if(_a){this.setAttribute("redirectUrl",_a);}};
deconcept.SWFObject.prototype={setAttribute:function(_e,_f){
this.attributes[_e]=_f;
},getAttribute:function(_10){
return this.attributes[_10];
},addParam:function(_11,_12){
this.params[_11]=_12;
},getParams:function(){
return this.params;
},addVariable:function(_13,_14){
this.variables[_13]=_14;
},getVariable:function(_15){
return this.variables[_15];
},getVariables:function(){
return this.variables;
},getVariablePairs:function(){
var _16=new Array();
var key;
var _18=this.getVariables();
for(key in _18){_16.push(key+"="+_18[key]);}
return _16;},getSWFHTML:function(){var _19="";
if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){
if(this.getAttribute("doExpressInstall")){
this.addVariable("MMplayerType","PlugIn");}
_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\"";
_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";
var _1a=this.getParams();
for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}
var _1c=this.getVariablePairs().join("&");
if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";
}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");}
_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\">";
_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";
var _1d=this.getParams();
for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}
var _1f=this.getVariablePairs().join("&");
if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}
return _19;
},write:function(_20){
if(this.getAttribute("useExpressInstall")){
var _21=new deconcept.PlayerVersion([6,0,65]);
if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){
this.setAttribute("doExpressInstall",true);
this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));
document.title=document.title.slice(0,47)+" - Flash Player Installation";
this.addVariable("MMdoctitle",document.title);}}
if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){
var n=(typeof _20=="string")?document.getElementById(_20):_20;
n.innerHTML=this.getSWFHTML();return true;
}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}
return false;}};
deconcept.SWFObjectUtil.getPlayerVersion=function(){
var _23=new deconcept.PlayerVersion([0,0,0]);
if(navigator.plugins&&navigator.mimeTypes.length){
var x=navigator.plugins["Shockwave Flash"];
if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}
}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}
catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}
catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}
catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}
return _23;};
deconcept.PlayerVersion=function(_27){
this.major=_27[0]!=null?parseInt(_27[0]):0;
this.minor=_27[1]!=null?parseInt(_27[1]):0;
this.rev=_27[2]!=null?parseInt(_27[2]):0;
};
deconcept.PlayerVersion.prototype.versionIsValid=function(fv){
if(this.major<fv.major){return false;}
if(this.major>fv.major){return true;}
if(this.minor<fv.minor){return false;}
if(this.minor>fv.minor){return true;}
if(this.rev<fv.rev){
return false;
}return true;};
deconcept.util={getRequestParameter:function(_29){
var q=document.location.search||document.location.hash;
if(q){var _2b=q.substring(1).split("&");
for(var i=0;i<_2b.length;i++){
if(_2b[i].substring(0,_2b[i].indexOf("="))==_29){
return _2b[i].substring((_2b[i].indexOf("=")+1));}}}
return "";}};
deconcept.SWFObjectUtil.cleanupSWFs=function(){if(window.opera||!document.all){return;}
var _2d=document.getElementsByTagName("OBJECT");
for(var i=0;i<_2d.length;i++){_2d[i].style.display="none";for(var x in _2d[i]){
if(typeof _2d[i][x]=="function"){_2d[i][x]=function(){};}}}};
deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};
__flash_savedUnloadHandler=function(){};
if(typeof window.onunload=="function"){
var _30=window.onunload;
window.onunload=function(){
deconcept.SWFObjectUtil.cleanupSWFs();_30();};
}else{window.onunload=deconcept.SWFObjectUtil.cleanupSWFs;}};
if(typeof window.onbeforeunload=="function"){
var oldBeforeUnload=window.onbeforeunload;
window.onbeforeunload=function(){
deconcept.SWFObjectUtil.prepUnload();
oldBeforeUnload();};
}else{window.onbeforeunload=deconcept.SWFObjectUtil.prepUnload;}
if(Array.prototype.push==null){
Array.prototype.push=function(_31){
this[this.length]=_31;
return this.length;};}
var getQueryParamValue=deconcept.util.getRequestParameter;
var FlashObject=deconcept.SWFObject;
var SWFObject=deconcept.SWFObject;

svt.SWFObject = deconcept.SWFObject;


/*
Form utils
*/
// only allow set number och checkboxes. Used by poll votes.
// elm = checkbox element , size = numer of allowed checkboxes
function SgCheckboxRange(elm,size){
    var cnt = 0;

    if(elm.checked) {size - 1;}  // TODO: Alex! Expression statement is not an assigment
    for(var i=0; i < elm.form[elm.name].length; i++) {
        var checkbox = elm.form[elm.name][i];
        if(checkbox != elm && checkbox.checked) {
            cnt++;
            if(cnt>=size) checkbox.checked = false;
        }
    }
};

/* used to require prototype.js refactored to jQuery */
function SgMultiToggle(id) {
	$("#" + id + " .toggleDisplay").each(function(){
		$(this).toggle();
	});
	/* OLD prototype code
	$A(document.getElementsByClassName('toggleDisplay',$(id))).each(function(item){
		Element.toggle(item);
	});
	*/
}
function SgToggleObjects(id) {
	$("#" + id).toggle();
	/* OLD prototype code
    if(SgDOM.ie && SgDOM.mac){
        // Code that works in IE on Mac
        var element = getObject(id);
        if(element.style.display == 'none'){
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    } else {
        Element.toggle(id);
    }
    */
}

/**
 * Autocomplete
 * @author johb
 */
var goValue = "";
var sValue = "";

var KEY_ENTER = 13;
var KEY_LEFT_ARROW = 37;
var KEY_RIGHT_ARROW = 39;

var lastKeyStroke = -1;

function doSearch(){
		
	/*
	var oSuggest = $("#global-search-field")[0].autocompleter;
	*/

	if(goValue != ""){
		document.location = goValue;
		return false;
	} else if ($("#global-search-field").val().indexOf("Sök på svt") != -1){
		document.location = "/sok";
		return false;
	} else if($("#global-search-field").val() != ""){
		return true;
	} else {
		alert("Skriv minst ett tecken att söka efter");
		return false;
	}
}

function findValue(li) {
		
	// var sValue;

	if (li == null) {
		sValue = "";
		goValue = "";
		//$("#global-search-button").val("Sök");
		return false;
	}

	// Use the URL as the value
	if (!!li.extra) {
		goValue = li.extra[0];
		sValue = li.selectValue;

        doSearch();
		//$("#global-search-button").val("Gå");
	} // otherwise, let's just display the value in the text box
	else {
		//$("#global-search-button").val("Sök");
		goValue = ""; // Set nothing to go to
		sValue = li.selectValue;
	}
}

function selectItem(li) {
	findValue(li);
	$("#global-search-field").focus();
}

function formatItem(row) {
	return row[0] + " (id: " + row[1] + ")";
}


function videoStarted(videoID,embedId){
	var theLink = $("a#link-" + embedId + "-" + videoID);
	if( theLink.length ){
		SgPlayList.updatePlayLists( embedId );
		SgPlaySymphony.selectedDisplay( theLink, embedId );
	}
	SgPlayList.setActiveVideo(embedId,videoID);
}
function videoCompleted(videoID,embedId){
	// Play next if continous
    if ($('#nova-player-' + embedId).length) {
        var novaPlayerNode = $('#nova-player-' + embedId);
        novaPlayerNode.data('novaPlayer').videoEnded(videoID);
    } else if ($("#SgPlayVideos" + embedId + ".SgPlayPlayList").metadata().continuous == "true"){
		SgPlayList.skipToNext(embedId,videoID);
	} else if ($("#SgVideoSpellista" + embedId + ".SgPlayPlayList").metadata().continuous == "true") {
		SgPlayList.skipToNext(embedId,videoID);
	}

}

function setContinuousPlay(playlistId, continuous) {
    if ($('#nova-player-' + playlistId).length) {
        var novaPlayerNode = $('#nova-player-' + playlistId);
        novaPlayerNode.data('novaPlayer').setContinuousPlay(continuous);
    }
}

function playVideoId(playlistId, videoId) {
    if ($('#nova-player-' + playlistId).length) {
        var novaPlayerNode = $('#nova-player-' + playlistId);
        novaPlayerNode.data('novaPlayer').playVideo(videoId);
    }
}



// Replace dynamic content tags (svt:dynamicContent))
var SgDynamicContent = {

    loadAndReplace: function(dynamicTag) {
        var path = $(dynamicTag).attr('path');
        $.ajax({type: "GET",
                url: path,
                async: true,
                success: function (content) {
                    $(dynamicTag).replaceWith(content);
                }
        });
    },
    initalize: function() {
        // dynamicContent (without svt:) was added to make this work in IE
        $("svt\\:dynamicContent, dynamicContent").livequery(function(){
            $(this).each(function() {
                SgDynamicContent.loadAndReplace($(this));
		});
        });
    }
};

// TabGroup, variant 612, 613
var SgTabGroup = {

	initTabGroup: function(tabGroup){
	
		var preload = tabGroup.metadata().preloadMeta;
		var depId = tabGroup.metadata().depIdMeta;
		var width = tabGroup.metadata().availableWidthMeta;

		var linkelement = ["div.#SgTabs-", depId, " ul#ul-", depId, " li a"].join("");
        $(linkelement).click(
            function(){
                if ($(this).parent().hasClass("SgTabs-active")){
                    return false;
                } else {
                    $(this).parent().addClass("SgTabs-active").siblings().removeClass("SgTabs-active");
                    var href = $(this).attr("href");
                    if (preload) {
                        var idAppend = ["SgTabs-content-", depId, "-"].join("");
                        var id = ["#", href.replace("/2.", idAppend)].join("");
                        // Difficult to make this work correctly (in IE6, Safari) with siblings/children when having complex tabgroups.
                        tabGroup.find("div.SgTabs-panel[id*=SgTabs-content-" + depId +"]").not(id).addClass("SgTabs-hide").hide();
                        $(id).hide().removeClass("SgTabs-hide").fadeIn("slow");

                    } else {
                        var tab = ["#SgTabs-content-", depId].join("");
                        $(tab).hide().load(href, { included: true, ajaxColumnWidth: width }, function(){$(tab).fadeIn("slow")});
                    }
                }
            return false;
            });
	},
    
    _initTabPage: function(){
		$(this).find("div.SgTabs").each(
			function(){
				SgTabGroup.initTabGroup($(this));
			}
		);
	}

};

SgVideo={getFallbackVideo:function(c){if(c!==undefined){var b=false;if(navigator.userAgent.indexOf("iPad")!=-1||navigator.userAgent.indexOf("iPhone")!=-1){b=true}var a=null;$.each(c,function(d,e){if(b&&d==="hts-a-v1"){a=e;return false}})}return a},loadFallbackvideo:function(g,b,f,h,a){var c="";if(a!=undefined){c=' poster="'+a+'" '}var d='<video width="'+f+'" height="'+h+'" controls="controls" autoplay="autoplay" x-webkit-airplay="allow"'+c+">";d+='<source src="'+b.src+'"  type="'+b.type+'" />';d+="</video>";g.html(d);var e=g.find("video");e.attr("src",b.src);e[0].load()},initVideoPlayerMock:function(a){var b=$(a).find(".startbutton");$(a).hover(function(){var c=Math.floor((a.height()/2)-50);if(c>0){b.css("top",c+"px")}b.css("visibility","visible")},function(){b.css("visibility","hidden")})}};var SgFlashVideo = {
    
    init: function(theObj){
        var data = $(theObj).metadata();
        if ($(theObj).hasClass("sgFlashAutoStart")){
			return SgFlashVideo.createObject(data.flashId, data.contentPath, data.playerWidth, data.playerHeight, data.variables, data.flashVersion, data.fallbackUrl, data.fallback);
		} else {
            SgVideo.initVideoPlayerMock(theObj);
		}
    },
	
	loadVideo: function (theObj){
		var data = $(theObj).metadata();
		$(theObj).trigger('SgVideoLoaded', [data.flashId, data.variables.a]);
        return SgFlashVideo.createObject(data.flashId, data.contentPath, data.playerWidth, data.playerHeight, data.variables, data.flashVersion, data.fallbackUrl, data.fallback);
	},

    createObject: function(flashId, contentPath, playerWidth, playerHeight, flashVariables, flashVersion, fallbackUrl, fallbackVideos) {
        var flashVariableName;
		var requiredVersion = new deconcept.PlayerVersion(flashVersion.split("."));
		var validFlashVersion = deconcept.SWFObjectUtil.getPlayerVersion().versionIsValid(requiredVersion);
		if (validFlashVersion) {
            var so = new svt.SWFObject(contentPath,
                                       "flashmovie" + flashId,
                                       playerWidth,
                                       playerHeight,
                                       flashVersion);
            if (so){
                for (flashVariableName in flashVariables) {
                    so.addVariable(flashVariableName, flashVariables[flashVariableName]);
                }
                so.addVariable("autostart","true");
                so.addParam("bgcolor","#000000");
                so.addParam("allowFullScreen","true");
                so.addParam("wmode","window");             
                // TODO should this be "samedomain" or something ?
                so.addParam("allowScriptAccess","always");
                so.write("swfcontent" + flashId);
                return false;
            } else {
                return true;
            }
        } else {
            var fallbackvideo = SgVideo.getFallbackVideo(fallbackVideos);
            if (fallbackvideo !== null) {
                SgVideo.loadFallbackvideo($('#swfcontent'+flashId), fallbackvideo, playerWidth, playerHeight);
                return false;
            }
            return true;
        }
	}

};

var SgPlaySymphony = {  
    
    init: function(theObj){ 
        theObj = $("#" + theObj.attr("id"));
        var thePlayer = theObj.find("div.gPlayVideoPlayer");    
        
        if(thePlayer.length /* If no player  */){
            
            SgPlaySymphony._vWidth = thePlayer.metadata().vWidth;
            SgPlaySymphony._vHeight = thePlayer.metadata().vHeight;
            
            $(theObj).find("a.localplayer").livequery( function(){          
                $(this).click(function() {  
                    return SgPlaySymphony._videoClick( $(this) );   
                });
            });
            
            
        }   
        
        // Clicking pagination
        $(theObj).find("ul.pagination a").livequery( function(){    
            $(this).click(function(){       
                return SgPlaySymphony._paginationClick( $(this) );
            });         
        }); 
    },
    selectedDisplay: function(aLink){
        var parentLi = aLink.parents("li:not(.selected)");
        if(parentLi.length){
            aLink.parents("ul").find("li.selected").removeClass("selected");        
            aLink.parents("li").addClass("selected");
        }   
    },
    paginate: function(toPageNum,aKey){
        var theLink = $("div.#SgPlayVideos" + aKey + " ul.pagination li a[title='" + toPageNum + "']" );
        
        if(theLink.length){
            SgPlaySymphony._paginationClickAction(theLink,true);
        }
        
    },
    _videoClick: function(theLink){
        
        var videoId =  theLink.metadata().videoId;
        var targetId =  theLink.metadata().targetId;    
        
        return SgPlaySymphony._videoClickAction(videoId,targetId,theLink);

    },
    _videoClickAction: function(videoId,targetId,theLink){
        
        var playerWrapper = "playerwrapper" + targetId;
        var playerWrapperJq = $("#" + playerWrapper);
        
        var vWidth = playerWrapperJq.metadata().vWidth;
        var vHeight = playerWrapperJq.metadata().vHeight;
        
        if( videoId < 1 || $("#playerwrapper" + targetId).length < 1 ){
            // If no target or no ID let the click go through to svtplay.se
            return true;
        }
        // If the link is visible
        if(theLink){
            SgPlaySymphony.selectedDisplay( theLink ); // TODO: ? Also one by player callback!
        }
        
        var aSrc = "/embededflash/" + videoId + "/play.swf";
        
        var so = new svt.SWFObject(aSrc, "playercontent-" + targetId, vWidth, vHeight, "9.0.28", "#000000");    
        so.addVariable("autostart","true");
        so.addVariable("playlistId","" + targetId);
        so.addParam("allowFullScreen","true");
        so.addParam("wmode","window");
        so.addParam("allowScriptAccess","always");
        so.write(playerWrapper);
        return false;   
    },
    _paginationClick: function(aTarget){
        
        if( $(aTarget).parents("li.selected").length || $(aTarget).parents("li.disabled").length){
            // Click disabled
            return false;
        }   
        
        return SgPlaySymphony._paginationClickAction(aTarget,false);

    },
    _paginationClickAction: function(aTarget,playFirstOnLoaded){
                
        var ajaxUrl =  $(aTarget).metadata().ajaxUrl;   
        var targetId =  $(aTarget).metadata().targetID; 
        
        var aTargetContent = $(aTarget).parents("div.content");
        
        var aTargetBrowser = aTargetContent.parents(".browser");

        aTargetContent.fadeTo("fast",0.1);
        aTargetBrowser.addClass("loader");
        
        var activeVideo = SgPlayList.getActiveVideo(targetId);
        
        $.get(ajaxUrl, { nocache: "true", activeVideo:activeVideo },
          function(data){
            aTargetContent.html(data);
            aTargetBrowser.removeClass("loader");
            aTargetContent.fadeTo("fast",1);
            if(playFirstOnLoaded){
                SgPlayList.playFirstInList( targetId );
            }
        });
        return false;

    }
};

var SgPlayVideoSpellista = {  
    init: function(theObj){
        theObj = $("#" + theObj.attr("id"));
        var thePlayer = theObj.find("div.gPlayVideoPlayer"); 
        
        var videoListLink =  theObj.find("div.animation");
        var playlistUrl = null;
        if (videoListLink.length) {
            playlistUrl = videoListLink.metadata().playlistUrl;
        }

        $(theObj).bind('SgVideoLoaded', function(event, playerId, videoId ) {
            SgPlayVideoSpellista._setHash(playerId, videoId);
        });
        
        if(thePlayer.length){
            SgPlayVideoSpellista._loadHash(theObj);
            $(theObj).find("a.localplayer").livequery( function(){
                $(this).click(function() {  
                    return SgPlayVideoSpellista._videoClick( $(this) );   
                });
            });
        }
        
        if(playlistUrl && playlistUrl.length){
            $(theObj).find("a.localplayer").livequery( function(){
                var videoId =  $(this).metadata().videoId;
                var targetId =  $(this).metadata().targetId;    
                var videoLink = playlistUrl + "?video" + targetId + "=" + videoId;
                $(this).attr("href", videoLink);                
            });
        }
        
        // Clicking pagination
        $(theObj).find("ul.pagination a").livequery( function(){    
            $(this).click(function(){       
                return SgPlayVideoSpellista._paginationClick( $(this) );
            });         
        });
        
    },
    _loadHash: function(theObj){
        if (window.location.hash) {
            var artID =  theObj.attr("id"); 
            var hashURL =  window.location.hash;
            var hashID = hashURL.replace(/#video(\d+)=.*/,'$1');
            var videoID = hashURL.replace(/#video\d+=(\d+).*/,'$1');
			
			var videoPlayer = $(theObj).find(".gPlayVideoPlayer");
			var videoPlayerWrapper = $(theObj).find(".playerwrapper");
			videoPlayer.height(parseInt(videoPlayerWrapper.metadata().vHeight));
			videoPlayer.addClass("browserinverted");
			videoPlayer.addClass("loader");
			videoPlayerWrapper.hide();
			
		    if (artID == "SgPlayVideos" + hashID) {
                var ajaxUrl = "/svt/road/Classic/article/1311/jsp/navigation.jsp?a=" + hashID + "&video" + hashID + "=" + videoID;
                $(theObj).find(".content").load(ajaxUrl, '', function(data){
				   videoPlayerWrapper.show();
				   videoPlayer.removeClass("loader");
				   var theLink = $(this).find(".selected a");
                   var requestedVideoInfo =  $(this).find("div.animation").metadata().requestedVideoInfo;
                   SgPlayVideoSpellista._handleErrorMessages(requestedVideoInfo, theObj);
                   SgPlayVideoSpellista._videoClick(theLink);
                });
            }
        }
    },
    _setHash: function(artId, videoId){
        // Change the URL
        // var title = "";
        var pathname = window.location.pathname;
        var search = window.location.search;
        var hash = "";
        var url ="";

        /*if(history.pushState){
            try
            {
                // Adds ? tag to link on click
                var stateObj = { foo: "bar" };
                hash = "?" + "video" + artId + "=" + videoId;
                url = pathname + hash;
                history.pushState(stateObj, title, hash );
                document.title = title;
            }
            catch(err)
            {
                // Adds # tag to link on click
                hash = "#" + "video" + artId + "=" + videoId;
                url = pathname + search + hash;
                window.location.replace(url);
            }
        } else {
        */
            // Adds # tag to link on click
            hash = "#" + "video" + artId + "=" + videoId;
            url = pathname + search + hash;
            window.location.replace(url);
        //}
    },
    selectedDisplay: function(aLink, artId){
        var parentLi = aLink.parents("li:not(.selected)");
        if(parentLi.length){
            aLink.parents("ul").find("li.selected").removeClass("selected");
            aLink.parents("li").addClass("selected");
        }
        
        var videoText = $("#SgVideoSpellista" + artId + " .SgVideoText");
        if (videoText.length){
            var spellistaRubrik = "";
            if ($(aLink).find('span').length && $(aLink).find('span').text().length > 0) {
                spellistaRubrik = $(aLink).find('span').text();
            }
            videoText.find('h1').html(spellistaRubrik);

            var spellistaIngress = "";
            if (aLink.attr('titel') != undefined) {
                spellistaIngress = aLink.attr('titel');
            } else if (aLink.attr('title') != undefined) {
                spellistaIngress = aLink.attr('title');
            }
            videoText.find('p').html(spellistaIngress);
        }
        SgPlayVideoSpellista._setHash(artId, aLink.metadata().videoId);
    },
    paginate: function(toPageNum,aKey){
        var theLink = $("div.#SgVideoSpellista" + aKey + " ul.pagination li a[title='" + toPageNum + "']" );
        
        if(theLink.length){
            SgPlayVideoSpellista._paginationClickAction(theLink,true);
        }
    },
    _hideErrorMessages: function(artId) {
		var theObj = $('#SgVideoSpellista' + artId);
        var errorDiv = theObj.find('.SgVideoErrorText');
        if (errorDiv.length) {
            errorDiv.remove();
            theObj.find('.gPlayVideoPlayer').show();
        }
		theObj.find('.gPlayVideoPlayer').show();
		var infoBar =  theObj.find('.SgVideoText');
		if (infoBar.length) {
			infoBar.show();
		}
     
    },
    _handleErrorMessages: function(requestedVideoInfo, theObj) {
		var inList = requestedVideoInfo.inList == 'true';
		var inPlay = requestedVideoInfo.inPlay == 'true';
		
		if (!inList) {
			var thePlayer = theObj.find('.gPlayVideoPlayer');
			
			var theError = theObj.find('.SgVideoErrorText');
			if (theError.length) {	
			     theError.remove();
			}
			
			var errorHTML = '<div class="SgVideoErrorText"';
			if (thePlayer.length) {
                var playerHeight = thePlayer.find('.playerwrapper').metadata().vHeight;
                errorHTML += ' style="height:' + (playerHeight-50) + 'px;"';
            }
			errorHTML += '>';
			if (inPlay) {
				errorHTML += '<div class="SgVideoErrorBorder"><h1>Videon finns inte l&auml;ngre h&auml;r</h1>';
			} else {
				errorHTML += '<div class="SgVideoErrorBorder"><h1>Videon du s&ouml;ker finns tyv&auml;rr inte l&auml;ngre</h1>';
			}
            if (inPlay && requestedVideoInfo.playUrl.length) {
                errorHTML += '<ul class="xtramtrl"><li class="xplay">';
                errorHTML += '<a href="';
                errorHTML += requestedVideoInfo.playUrl;
                errorHTML += '">Se videon i SVT Play</a></li></ul>';
            }
            errorHTML += '</div><span class="mockbar"><em>';
			errorHTML += 'Videon du s&ouml;ker finns inte l&auml;ngre i listan';
			errorHTML += '</em></span></div>';
			
			thePlayer.after(errorHTML);
			thePlayer.hide();
			
			var infoBar =  theObj.find('.SgVideoText');
            if (infoBar.length) {
                infoBar.hide();
            }
        } else {
			SgPlayVideoSpellista._hideErrorMessages();
		}
        
			
    },
    _videoClick: function(theLink){
        var videoId =  theLink.metadata().videoId;
        var targetId =  theLink.metadata().targetId;    
        return SgPlayVideoSpellista._videoClickAction(videoId,targetId,theLink);

    },
    _videoClickAction: function(videoId,targetId,theLink){
        var playerWrapper = "playerwrapper" + targetId;
        var playerWrapperJq = $("#" + playerWrapper);
        
        var vWidth = playerWrapperJq.metadata().vWidth;
        var vHeight = playerWrapperJq.metadata().vHeight;
        
        
        
        if( videoId < 1 || $("#playerwrapper" + targetId).length < 1 ){
            // If no target or no ID let the click go through to svtplay.se
            return true;
        }
        // Hide error text when starting a new video
        SgPlayVideoSpellista._hideErrorMessages(targetId);

        // If the link is visible
        if(theLink){
            SgPlayVideoSpellista.selectedDisplay( theLink, targetId ); // TODO: ? Also one by player callback!
        } 

        var playlistMetadata = $('#SgPlayVideos' + targetId).metadata();
        var aSrc = "/embededflash/" + videoId;
        if (playlistMetadata.type == 'barn') {
            aSrc += "/barn.swf";
        }
        else {
            aSrc += "/play.swf";
        }
        
        var so = new svt.SWFObject(aSrc, "playercontent-" + targetId, vWidth, vHeight, "9.0.28", "#000000");    
        so.addVariable("autostart","true");
        so.addVariable("playlistId","" + targetId);
        so.addParam("allowFullScreen","true");
        so.addParam("wmode","window");
        so.addParam("allowScriptAccess","always");
        so.write(playerWrapper);
        return false;   
    },
    _paginationClick: function(aTarget){
        
        if( $(aTarget).parents("li.selected").length || $(aTarget).parents("li.disabled").length){
            // Click disabled
            return false;
        }   
        
        return SgPlayVideoSpellista._paginationClickAction(aTarget,false);
    },
    _paginationClickAction: function(aTarget,playFirstOnLoaded){
                
        var ajaxUrl =  $(aTarget).metadata().ajaxUrl;   
        var targetId =  $(aTarget).metadata().targetID; 
        
        var aTargetContent = $(aTarget).parents("div.content");
        
        var aTargetBrowser = aTargetContent.parents(".browser");

        aTargetContent.fadeTo("fast",0.1);
        aTargetBrowser.addClass("loader");
        
        var activeVideo = SgPlayList.getActiveVideo(targetId);
        
        var videoParameterName = 'video' + targetId;
        var data = { nocache: "true" };
        data[videoParameterName] = activeVideo;
        $.get(ajaxUrl, data,
          function(data){
            aTargetContent.html(data);
            aTargetBrowser.removeClass("loader");
            aTargetContent.fadeTo("fast",1);
            if(playFirstOnLoaded){
                SgPlayList.playFirstInList( targetId );
                var videoId = SgPlayList._getListByKey(targetId)[0];
                if (videoId) {
                    SgPlayVideoSpellista._setHash(targetId, videoId);
                }
            }
        });
        return false;

    }
};

var SgOverlay = {
	init: function(theObj){
		
		if (theObj.attr('title') == null || theObj.attr('title') == '') {
			return false;
		}
		
		if ($('#tooltip').length < 1) {
			$('body').append($('<div id="tooltip"></div>'));
		}
		
		theObj.attr('titel', SgOverlay._cleanScript(theObj.attr('title')));
		theObj.attr("title", "");		
		theObj.find('img').attr('alt', '');
	},
	_cleanScript: function (text){
		if (text == undefined) {
			return "";
		}
		if (text.indexOf("<") > -1) {
			text = text.replace(/</g, "[");
		}
		
		if (text.indexOf(">") > -1) {
			text = text.replace(/>/g, "]");
		}
		
		if (text.indexOf("&lt;") > -1) {
			text = text.replace(/&lt;/g, "[");
		}
		
		if (text.indexOf("&gt;") > -1) {
			text = text.replace(/&gt;/g, "]");
		}
		return text;
	}
};

var SgPlayList = {
	createPlayLists: function(){
		
		$(".SgPlayPlayList").each( function(){
			var anID = $(this).attr("id");
			var aPlaylist = $(this).find(".show-tab-container").metadata().playlist;
			SgPlayList._playLists[anID] = aPlaylist;
		});
	},
	updatePlayLists: function(targetId){
		// TODO: _getPlaylistByKey
		var aPlayListKey = "SgPlayVideos" + targetId;
		var aPlaylist = $("#" + aPlayListKey).find(".show-tab-container").metadata().playlist;	
		SgPlayList._playLists[aPlayListKey] = aPlaylist;
	},
	playFirstInList: function(aKey){

		// First upadate the playlist
		SgPlayList.updatePlayLists(aKey);

		var theVideo = SgPlayList._getListByKey(aKey)[0];
		var linkObject = $("a#link-" + aKey + "-" + theVideo);


        if ($("#SgVideoSpellista" + aKey).length) {
			if(linkObject.length){
				return SgPlayVideoSpellista._videoClick( linkObject );
			} else {
				return SgPlayVideoSpellista._videoClickAction(theVideo,aKey,null);
			}
		} else {
			if(linkObject.length){
	            return SgPlaySymphony._videoClick( linkObject );
	        } else {
	            return SgPlaySymphony._videoClickAction(theVideo,aKey,null);
	        }
		}
		
	},
	setActiveVideo: function(aKey,theId){
		SgPlayList._activeVideo[aKey] = theId;
	},
	getActiveVideo: function(aKey){
		return SgPlayList._activeVideo[aKey];
	},
	skipToNext: function(aKey,thePrevious){
		var posAndLength = SgPlayList._positionAndLength(aKey,thePrevious);
		if(posAndLength[0] < 0){
			return false;
		}
        
		if(posAndLength[0] >= (posAndLength[1] - 2) /* TODO pagecheck:  && page < pages */){
			var aPlayListKey = "SgPlayVideos" + aKey; 
			var theList = SgPlayList._playLists[aPlayListKey];
			var thePage = theList[posAndLength[1] - 1];		
			var numberOfPages = $("#SgPlayVideos" + aKey).metadata().numberOfpages;
            
			if( parseInt(thePage) >= parseInt(numberOfPages) ){
				return false;
			}
            
			if ($("#SgVideoSpellista" + aKey).length) {
			     SgPlayVideoSpellista.paginate(thePage + 1, aKey);
			} else {
				SgPlaySymphony.paginate(thePage + 1, aKey);
			}
			
			return false;
		}
		var nextVideo = SgPlayList._getNextVideoInPlaylist(aKey,posAndLength[0]);
		var linkObject = $("a#link-" + aKey + "-" + nextVideo);

        if ($("#SgVideoSpellista" + aKey).length) {
			if (linkObject.length) {
				return SgPlayVideoSpellista._videoClick(linkObject);
			} else {
				return SgPlayVideoSpellista._videoClickAction(nextVideo, aKey, null);
			}
		} else {
			if (linkObject.length) {
                return SgPlaySymphony._videoClick(linkObject);
            } else {
                return SgPlaySymphony._videoClickAction(nextVideo, aKey, null);
            }  
		}
		
	},
	_getListByKey: function(aKey){
		var aPlayListKey = "SgPlayVideos" + aKey;
		return SgPlayList._playLists[aPlayListKey];
	},
	_positionAndLength: function(aKey, aVideoID) {		
		var aPlayListKey = "SgPlayVideos" + aKey;  
		var theLength = SgPlayList._playLists[aPlayListKey].length;
		var i = theLength;
		while (i--) {
			if (SgPlayList._playLists[aPlayListKey][i] == aVideoID) {
				return [i,theLength];
			}
		}
		return [-1,-1];
	},
	_getNextVideoInPlaylist: function(aKey,aPos){
		var aPlayListKey = "SgPlayVideos" + aKey;
		return SgPlayList._playLists[aPlayListKey][aPos + 1];
	},
	_activeVideo: new Object(),
	_playLists: new Object()
};
var disqus_identifier;
var disqus_shortname;
var disqus_url;
var disqus_title;
var disqus_category_id;
var disqus_developer;

var SgDisqus = {

    disqusShortName: null,

    init: function (obj) {
        if (!SgDisqus.verifyInclude($(obj).metadata().shortName)) {
            return;
        }

        SgDisqus.showNumberOfComments(obj);

    },

    showNumberOfComments: function (baseTag) {
        var metadata = $(baseTag).metadata();

        $.jsonp({
            url: 'http://disqus.com/api/3.0/threads/details.jsonp?',
            data: {
                forum: metadata.shortName,
                thread: 'ident:' + metadata.disqusId,
                api_key: metadata.publishKey
            },
            dataType: 'jsonp',
            cache: true,
            callbackParameter: "callback",
            timeout: 5000,
            success: function (data, status) {
                var numberOfComments = data.response.posts;
                var mayComment = !data.response.isClosed;
                SgDisqus.updatePageWithCount(baseTag, numberOfComments, mayComment);
            },
            error: function (textStatus, errorThrown) {
                // If there is a timeout loading the count, we skip the comments
                if (errorThrown === 'error') {
                    SgDisqus.updatePageWithCount(baseTag, 0, true);
                }
            }
        });
    },

    updatePageWithCount: function (baseTag, numberOfComments, canComment) {
        var commentHtml;
        var numberString = 'inga kommentarer';
        var commentString = 'Bli först att kommentera';
        if (numberOfComments === 1) {
            numberString = 'en kommentar';
            commentString = 'Visa kommentaren';
        }
        else if (numberOfComments > 1) {
            numberString = numberOfComments + ' kommentarer';
            commentString = 'Visa kommentarer';
        }
        commentHtml = '<div class="comments"><span class="count">Det finns ' + numberString + ' till artikeln.</span>';
        commentHtml += '<span class="show"><a';
        if (canComment) {
            commentHtml += ' class="mayComment"';
        }
        commentHtml += '>' + commentString + '</a>';
        commentHtml += '</div>';

        if (commentHtml !== undefined) {
            $(baseTag).html(commentHtml);
            $(baseTag).find("a").click(function (event) {
                event.stopPropagation();
                $(baseTag).html('<div id="disqus_thread"></div>');

                var metadata = $(baseTag).metadata();

                disqus_identifier = metadata.disqusId;
                disqus_shortname = metadata.shortName;
                disqus_url = metadata.url;
                disqus_title = metadata.title;
                disqus_category_id = metadata.category;
                if (metadata.testSystem === true) {
                    disqus_developer = 1;
                }

                var disqusUrl = 'http://' + metadata.shortName + '.disqus.com/embed.js';
                var dsq = document.createElement('script');
                dsq.type = 'text/javascript';
                dsq.async = true;
                dsq.src = disqusUrl;
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            });
        }
    },

    verifyInclude : function (shortName) {
        if (SgDisqus.disqusShortName === null) {
            SgDisqus.disqusShortName = shortName;
            return true;
        }
        return false;
    }
};var SgImageGallery={init:function(){$(".image-gallery").each(function(){SgImageGallery.ImageGallery($(this))})},ImageGallery:function(d){var b=d.metadata();d.find("img").each(function(){var e=$(this).metadata();$(this).data("ad-desc",e.desc);$(this).data("ad-title",e.title)});var c={};var a=d.find(".description");if(a.length>0){c.description_wrapper=a}c.width=b.width;c.height=b.height;c.cycle=b.cycle;c.slideshow={autostart:false};d.svtAdGallery(c)}};var NovaPlayer=Class.extend({novaPlayerNode:undefined,navigation:undefined,swfNode:undefined,videoTagNode:undefined,videoStarted:false,continuousPlay:false,reversedPlayOrder:false,singlePlayer:false,init:function(a){this.novaPlayerNode=a;var c=this;var e=this.novaPlayerNode.find(".player a");if(this.novaPlayerNode.hasClass("single-video")){this.singlePlayer=true;e.click(function(f){c._singlePlayerClickHandler(f)})}else{a.data("novaPlayer",this);this.novaPlayerNode.find(".navigation li").click(function(f){c._playlistClickHandler(f)});e.click(function(f){c._playerClickHandler(f)});var b=this.novaPlayerNode.metadata();this.continuousPlay=b.continuousPlay;this.reversedPlayOrder=b.reversedPlayOrder;this.navigation=this._initNavigation(this.novaPlayerNode);var d=this._initHashTag();if(!d&&b.autostart){this.play()}}if(this.novaPlayerNode.hasClass("hoverable")){SgVideo.initVideoPlayerMock(e)}},play:function(){var a=false;var c=this.novaPlayerNode.find(".navigation .active");if(c.length===1){var b=c.metadata().id;a=this.playVideo(b)}return a},pause:function(){if(this.swfNode!==undefined){this.swfNode.pause()}else{var a=this.novaPlayerNode.find("video");if(a.length===1){a[0].pause()}}},resume:function(){if(this.swfNode!==undefined){this.swfNode.resume()}else{var a=this.novaPlayerNode.find("video");if(a.length===1){a[0].play()}}},videoEnded:function(c){if(this.continuousPlay){var b=this._findNextVideoNode(this.reversedPlayOrder);if(b!=null){var a=b.metadata().id;this.navigation.scrollToVideo(a);this.playVideo(a)}}},playVideo:function(c){var d=this.getCurrentVideoId();if(c!==d||!this.videoStarted){if(!this.singlePlayer){this._markVideoAsActive(c)}var b="/video/info/"+c+".json";var a=this;$.ajax({url:b,dataType:"json",success:function(e){a._videoInfoSuccessHandler(e)},error:function(e,f){a._videoInfoErrorHandler(f)}})}},setContinuousPlay:function(a){this.continuousPlay=a},getCurrentVideoId:function(){var a=null;var b=this.novaPlayerNode.find(".navigation .active");if(b.length===1){a=b.metadata().id}return a},_showErrorMessage:function(a){var c=this.novaPlayerNode.find(".error-message");var b=this.novaPlayerNode.find(".player");if(a){c.show();b.hide()}else{c.hide();b.show()}},_findNextVideoNode:function(c){var b=this.novaPlayerNode.find(".navigation .active");var a;if(c){a=b.prev("li")}else{a=b.next("li")}if(a.length){return a}return null},_getCurrentVideoId:function(){var a=this.novaPlayerNode.find(".navigation .active");if(a.length){return a.metadata().id}return null},_playerClickHandler:function(a){a.preventDefault();this.play()},_singlePlayerClickHandler:function(a){a.preventDefault();videoId=this.novaPlayerNode.metadata().id;started=this.playVideo(videoId)},_playlistClickHandler:function(a){a.preventDefault();var c=a.currentTarget;if(!($(c).hasClass("active")&&this.videoStarted)){var b=$(c).metadata().id;this.playVideo(b)}},_markVideoAsActive:function(a){this.novaPlayerNode.find(".navigation .active").removeClass("active");this.novaPlayerNode.find(".navigation .video"+a).addClass("active")},_videoInfoSuccessHandler:function(a){this._playVideo(a)},_videoInfoErrorHandler:function(a){this._showErrorMessage(true)},_playVideo:function(c){var a=false;var b=this.novaPlayerNode.find(".player");var d=$(b).metadata();this._showErrorMessage(false);if(this._isValidFlashVersion(d.flashVersion)){a=this._playFlashVideo(b,d,c.flashVariables)}else{a=this._playFallbackVideo(b,c.fallbackVideos,c.flashVariables.background)}if(a){this.videoStarted=true;if(!this.singlePlayer){this._updateUrl(c.videoId)}}else{this._showErrorMessage(true)}},_initHashTag:function(){var g=false;var f=window.location.hash;if(f.length>0){var b=this.novaPlayerNode.metadata().id;var e=new RegExp("video"+b+"=([0-9]+)");var a=f.match(e);if(a!=null&&a.length==2){var c=a[1];var d=this.getCurrentVideoId();if(d===null||d!==c){this.navigation.scrollToVideo(c);this.playVideo(c);g=true}}}return g},_updateUrl:function(h){var d=this.novaPlayerNode.metadata().id;var i="video"+d;var b=window.location.pathname;var k=window.location.search;var j=false;if(typeof window.history.pushState=="function"){try{var c="?";if(k.length){var g=new RegExp("video"+d+"=[0-9]+","g");c=k.replace(g,"");c=c.replace("&&","&")}if(c.length>1&&c.substr(-1)!=="&"){c+="&"}c+=i+"="+h;history.replaceState({},$(document).attr("title"),b+c);j=true}catch(e){}}if(!j){var f="#video"+d+"="+h;var a=b+k+f;window.location.replace(a)}},_isValidFlashVersion:function(a){var b=new deconcept.PlayerVersion(a.split("."));return deconcept.SWFObjectUtil.getPlayerVersion().versionIsValid(b)},_playFlashVideo:function(h,i,b){var g=false;var k;var j=this._findNextVideoNode(this.reversedPlayOrder);var d;if(j!=null){d=j.find("img")}if(this.swfNode===undefined){var e=this.novaPlayerNode.metadata().id;var c=new svt.SWFObject(i.swfPath,"nova-player-swf-"+e,i.playerWidth,i.playerHeight,i.flashVersion);if(c){for(k in b){c.addVariable(k,b[k])}c.addVariable("playlistId",""+e);c.addVariable("autostart","true");if(this.continuousPlay){c.addVariable("continuousplay","true")}if(i.svtSwfPath!==undefined){c.addVariable("svtplayerswf",i.svtSwfPath)}if(j!=null){c.addVariable("nextvideoid",""+j.metadata().id);c.addVariable("nextvideoimage",d.attr("src"))}c.addParam("bgcolor","#000000");c.addParam("allowFullScreen","true");c.addParam("wmode","window");c.addParam("allowScriptAccess","always");h.html(c.getSWFHTML());this.swfNode=h.find("embed,object")[0];g=true}}else{var a="";for(k in b){if(a.length>0){a+="&"}a+=k;a+="=";a+=b[k].replace(/\+/g,"%20")}if(j!=null){a+="&nextvideoid=";a+=j.metadata().id;a+="&nextvideoimage=";a+=d.attr("src")}try{this.swfNode.setFlashvars(a);g=true}catch(f){}}return g},_playFallbackVideo:function(h,g,f){var e=false;var a=SgVideo.getFallbackVideo(g);if(a!==null){var c=h.metadata();if(this.videoTagNode==undefined){SgVideo.loadFallbackvideo(h,a,c.playerWidth,c.playerHeight,f);var d=h.find("video");if(d.length===1){var b=this;d.bind("ended",function(){b._html5VideoEnded()});this.videoTagNode=d[0];this.videoTagNode.play();e=true}}else{$(this.videoTagNode).attr("src",a.src);e=true}}return e},_html5VideoEnded:function(){var a=this._getCurrentVideoId();if(a!=null){this.videoEnded(a)}},_initNavigation:function(a){var b;if(a.hasClass("vertical-list")){b=new NovaPlayerVerticalNavigation(a)}else{if(a.hasClass("horizontal-list")){b=new NovaPlayerHorizontalNavigation(a)}else{b=new NovaPlayerNavigation(a)}}return b}});var NovaPlayerNavigation=Class.extend({novaPlayerNode:undefined,hoverable:true,TOUCH_THRESHOLD:50,touchStartCoord:{x:0,y:0},touchCurrentCoord:{x:0,y:0},init:function(a){this.novaPlayerNode=a;this._disableHoverIfNotUsedOnDevice()},scrollToVideo:function(a){},_disableHoverIfNotUsedOnDevice:function(){if(navigator.userAgent.indexOf("iPad")!=-1||navigator.userAgent.indexOf("iPhone")!=-1){this.novaPlayerNode.removeClass("hoverable");this.hoverable=false}},_getVideoListPos:function(a){var c=null;var b=-1;$.each(this.novaPlayerNode.find(".video-list .video"),function(){b++;if($(this).metadata().id==a){c=b}});return c},_touchStart:function(a){this.touchStartCoord={x:a.targetTouches[0].pageX,y:a.targetTouches[0].pageY}},_touchMove:function(a){this.touchCurrentCoord={x:a.targetTouches[0].pageX,y:a.targetTouches[0].pageY}},_touchMoveX:function(){return this.touchCurrentCoord.x-this.touchStartCoord.x},_touchMoveY:function(){return this.touchCurrentCoord.y-this.touchStartCoord.y},_bindTouchGestures:function(){try{var b=this.novaPlayerNode.find(".video-list ul")[0];var a=this;b.addEventListener("touchstart",function(d){a._touchStart(d)},false);b.addEventListener("touchmove",function(d){a._touchMove(d)},false)}catch(c){}}});var NovaPlayerVerticalNavigation=NovaPlayerNavigation.extend({SCROLLBAR_WIDTH:14,TOUCH_SCROLL:10,listNode:undefined,init:function(a){this._super(a);this.listNode=a.find(".video-list");this.listNode.jScrollPane({scrollbarWidth:this.SCROLLBAR_WIDTH,animateTo:this.hoverable,dragMinHeight:15,showArrows:true,arrowSize:1});var b=a.find(".jScrollPaneDragTop");b.after('<div class="scrollpane-middle"></div>');this._bindTouchGestures()},scrollToVideo:function(a){this._super(a);this.listNode[0].scrollTo(".video"+a)},_touchMove:function(b){this._super(b);b.preventDefault();var a=Math.abs(this._touchMoveX());if(a<this.TOUCH_THRESHOLD){var c=this._touchMoveY();if(c>this.TOUCH_SCROLL){this.touchStartCoord.y+=this.TOUCH_SCROLL;this.listNode[0].scrollBy(-25)}else{if(c<(0-this.TOUCH_SCROLL)){this.touchStartCoord.y-=this.TOUCH_SCROLL;this.listNode[0].scrollBy(25)}}}}});var NovaPlayerHorizontalNavigation=NovaPlayerNavigation.extend({SCROLL_SIZE:136,THUMBNAIL_WIDTH:136,navigationNode:undefined,prevButton:undefined,nextButton:undefined,videoList:undefined,internalList:undefined,visibleListWidth:0,internalListWidth:0,init:function(a){this._super(a);this.navigationNode=a.find(".navigation");this.prevButton=this.navigationNode.find(".nav-button.nav-left");this.nextButton=this.navigationNode.find(".nav-button.nav-right");this.videoList=this.navigationNode.find(".video-list");this.visibleListWidth=this.videoList.width();this.internalList=this.videoList.find("ul");this.internalListWidth=this.internalList.width();var b=this;this.prevButton.click(function(c){b._scrollLeftHandler(c)});this.nextButton.click(function(c){b._scrollRightHandler(c)});this.navigationNode.removeClass("no-nav-buttons");this._setPosition(this._getStartPosition())},scrollToVideo:function(a){this._super(a);var b=this._getVideoCenterPos(a);if(b!==null){this._setPosition(b)}},_getVideoCenterPos:function(d){var b=this._getVideoListPos(d);if(b!==null){var a=Math.floor(this.visibleListWidth/this.THUMBNAIL_WIDTH);var c=Math.floor(a/2);return 0-((b-c)*this.THUMBNAIL_WIDTH)}return null},_scrollLeftHandler:function(a){a.preventDefault();var b=this.SCROLL_SIZE;this._scroll(b)},_scrollRightHandler:function(a){a.preventDefault();var b=0-this.SCROLL_SIZE;this._scroll(b)},_scroll:function(c){var b=this.internalList.position().left;var a=b+c;this._setPosition(a)},_setPosition:function(a){if(a<=this._getEndPosition()){a=this._getEndPosition();this.nextButton.addClass("disabled")}else{this.nextButton.removeClass("disabled")}if(a>=this._getStartPosition()){a=this._getStartPosition();this.prevButton.addClass("disabled")}else{this.prevButton.removeClass("disabled")}this.internalList.css("left",a)},_getEndPosition:function(){return this.visibleListWidth-this.internalListWidth},_getStartPosition:function(){return 0}});$(document).ready(function() {
	// The old function that used to be in the body onload
	svtInit();
	
	if (!$("#global-search-field").val()){
		$("#global-search-field").val("Sök på svt.se");
	}

	if($("div.SgPlayPlayList div.gPlayVideoPlayer").length){
		SgPlayList.createPlayLists();
	}
	
	// Loads "Klippsymfonier"
	
	
	
	
	$("div.SgPlayVideoListBox").each( function(){
        SgPlaySymphony.init($(this));
    });
	$("div.SgVideoSpellista").livequery(function(){
        $(this).each(function(){
            SgPlayVideoSpellista.init($(this));
        });
    });

	// Overlays
	$("a.overlay").livequery(function(){
		SgOverlay.init( $(this) );
		$(this).hover(function()
		{
			
			if ($(this).attr('titel') == null) {
				return;
			}
			
			if(this.xOffset == null)
			{

				this.xOffset = 15;
				this.yOffset = 5;
						
				// if there's not enough space, invert the tooltip position
				if( ( $(document).width() - $(this).parent().offset().left - $(this).parent().width()  - $('#tooltip').width() - this.xOffset) < 5)
				{
					this.xOffset = 0 - $('#tooltip').width() - 23;
				}
		
			}
			
			if($(this).hasClass("white-tooltip")){
				$('#tooltip').addClass("white");
			} else {
				$('#tooltip').removeClass("white");
			}
			
			
			$('#tooltip').text($(this).attr('titel')).show();
	
			$(this).mousemove(
				function(e)
				{
					$('#tooltip').css({
						top:e.pageY + this.yOffset,
						left:e.pageX + this.xOffset
					});
				});
	
		},
		function()
		{
			if($(this).attr('titel') == null) return;
			$(this).unbind('mousemove');
			$('#tooltip').hide();
		});
	});
	
	$("div#tvclock").click(function() {		
		$('div#gDropdownOnTv').toggle();		
	});
	
	$(".refreshplaylist").each(function(){
		var data = $(this).metadata();
		// TODO: implement ajaxq plugin
		$(this).load(data.ajaxurl);
	});
	
	/*
	Autocomplete moved to json.jsp
	*/
	// STAR RATING
	// TODO: implement ajaxq plugin
	$(".starrating").each(function(){
		var data = $(this).metadata();
		if(data.linktowebapp.indexOf("showVote") != -1){
			$(this).load(data.linktowebapp);
		}	
	});	
	
	// Removed: Show "min sida" link if logged in
	$("div.SgTabs").livequery(function(){
		$(this).each(function(){
		SgTabGroup.initTabGroup($(this));
		});
	});

	$("a.SgFlashVideoMeta").livequery(function(){
		$(this).each(function(){
			SgFlashVideo.init($(this));
		});
	});


    $(".SgDisqusComment").livequery(function() {
        $(this).each(function(){
            SgDisqus.init($(this));
        });
    });

	SgDynamicContent.initalize();

    SgImageGallery.init();

    $(".nova-player").livequery(function() {
        $(this).each(function(){
            var player = new NovaPlayer($(this));
        });
    });
});
var PERSONALIZED_BASE_URL = "/svt/personal/?";

$(document).ready(function() {
    $(".sgUserContent form").submit(function() {
        var data = $(this).metadata();
		if(data.teaserid != null){
            var options = { path: '/', expires: 365, domain: 'svt.se' };
			var cookieName = "PersonalizedDataArticle"+data.teaserid;
            var select_box = $("#SVTPersonalizationArticleSelectParams"+data.teaserid + " option:selected");
            $.cookie(cookieName, select_box.val(), options);

            $("#sgUserContentSelect"+data.teaserid).hide();
            $("#sgUserContentDefualt"+data.teaserid).hide();
            $("#sgUserContentFooter"+data.teaserid).show();
            $("#sgUserContentHolder"+data.teaserid).load(PERSONALIZED_BASE_URL+select_box.val());
            $("#sgUserContentHolder"+data.teaserid).show();
        }
    });

    $("a.customizeLink").click(function(e) {
        var data = $(this).metadata();
		if(data.teaserid != null){
            $("#sgUserContentSelect"+data.teaserid).show();
            $("#sgUserContentFooter"+data.teaserid).hide();
        }
		e.preventDefault();
    });

	$(".sgUserContent").each(function(){
        var data = $(this).metadata();
		if(data.teaserid != null){
			var cookieName = "PersonalizedDataArticle"+data.teaserid;
            var cookie = $.cookie(cookieName);
            if (cookie != null) {
                $("#sgUserContentSelect"+data.teaserid).hide();
                $("#sgUserContentDefualt"+data.teaserid).hide();
                $("#sgUserContentFooter"+data.teaserid).show();
                $("#sgUserContentHolder"+data.teaserid).load(PERSONALIZED_BASE_URL+cookie);
            }
            else {
                $("#sgUserContentSelect"+data.teaserid).show();
                $("#sgUserContentDefualt"+data.teaserid).show();
                $("#sgUserContentFooter"+data.teaserid).hide();
            }
		}
	});
});function sitestat(ns_l){ns_l+='&amp;ns__t='+(new Date()).getTime();ns_pixelUrl=ns_l;
ns_0=document.referrer;
ns_0=(ns_0.lastIndexOf('/')==ns_0.length-1)?ns_0.substring(ns_0.lastIndexOf('/'),0):ns_0;
if(ns_0.length>0)ns_l+='&amp;ns_referrer='+escape(ns_0);
if(document.images){ns_1=new Image();ns_1.src=ns_l;} else
document.write('<img src="'+ns_l+'" width="1" height="1" alt=""/>');}
/**
 * @author siga01
 *
 * Javascript for the Tableau specific polopoly page.
 *
 */
var SgTableauOverlay = {
	init: function(theObj){

		if (theObj.attr('title') == null || theObj.attr('title') == '') {
			return false;
		}

		if ($('#tableautooltip').length < 1) {
			$('body').append($('<div id="tableautooltip"></div>'));
		}

		theObj.attr('titel', SgTableauOverlay._cleanScript(theObj.attr('title')));
		theObj.attr("title", "");
		theObj.find('img').attr('alt', '');
	},
	_cleanScript: function (text){
		if (text == undefined) {
			return "";
		}
		if (text.indexOf("<") > -1) {
			text = text.replace(/</g, "[");
		}

		if (text.indexOf(">") > -1) {
			text = text.replace(/>/g, "]");
		}

		if (text.indexOf("&lt;") > -1) {
			text = text.replace(/&lt;/g, "[");
		}

		if (text.indexOf("&gt;") > -1) {
			text = text.replace(/&gt;/g, "]");
		}
		return text;
    },
    _breakifyScript: function (text){
        if (text == undefined) {
            return "";
        }
        if (text.indexOf("\n") > -1) {
            text = text.replace(/\n/g, "<br />");
        }

        return text;
    }
}


$(document).ready(function() {
	
	$(".os2010TableTableau").each(function() {
	  $this = $(this);

	  var currentHour = $("#currentTime").val().substr(0,2);
	  var currentMin = $("#currentTime").val().substr(2,2);
	  var currentTimeBlock;
	  
	  if(currentMin<15) {
	    currentTimeBlock = "00";
	  } else if (currentMin<30 && currentMin>14) {
	    currentTimeBlock = "15";
	  } else if (currentMin<45 && currentMin>29 ) {
	    currentTimeBlock = "30";
	  } else {
	    currentTimeBlock = "45";
	  }
	  
	  var currentTimeMarker = $(".currentTimeMarker");
	  var osTableauOffsetTop = $(this).offset().top;
	  
	  
	  var correctTableRow = $(".time_"+currentHour+currentTimeBlock);
	  var correctTableRowOffsetTop = correctTableRow.offset().top;
	  
	  if (correctTableRow.length > 0) {
		  currentTimeMarker.css("top", correctTableRowOffsetTop-osTableauOffsetTop+((currentMin-currentTimeBlock)*2)+"px");
	  }
	});

	// Show a faded grey line when hovering the hour marks in the Tableau. 
	$(".os2010TableTableau th.column_1").mousemove(function(e){
	  $('.viewerTimeMarker').css("top", e.pageY+"px");
	}).mouseout(function() {
	  $('.viewerTimeMarker').css("top", "-9999px");
	});
	
	//Show hide on Tableau Sports page
	$(".tSportsDayRow h5").click(function() {
	  var $this = $(this).parent();
	  if ($this.hasClass("open")) {
	    $this.removeClass("open");
	    $this.find(".tSportsDayRowExtra").css("position","relative").hide();
	  } else {
	    $this.addClass("open");
	    $this.find(".tSportsDayRowExtra").css("position","relative").show();
	  }
	  return false;
	});

	// Scroll to the center of the screen if the currentTimeMarker is below the visable screen height.
	if ($(".currentTimeMarker").offset().top > $(window).height()) {
		var scrollHeight = $(".currentTimeMarker").offset().top-$(window).height()/2;
		$.scrollTo(scrollHeight+"px",600);
	}
	$(".broadcastOn").mouseover(function() {
		$(this).addClass("broadcastHover");
        $(this).css("cursor", "pointer");
        $(this).find("a").css("text-decoration","underline");
	}).mouseout(function() {
		$(this).removeClass("broadcastHover");
        $(this).css("cursor", "arrow");
        $(this).find("a").css("text-decoration","none");
    }).click(function() {
            location.href=$(this).find("a").attr("href");
	});

	// Hover and click css/actions on the future and active Tableau items.
    /*
	$(".broadcast:not('.broadcastPast')").mouseover(function() {
		$(this).css("cursor", "pointer");
		$(this).find("a").css("text-decoration","underline");
	}).mouseout(function() {
		$(this).css("cursor", "arrow");
		$(this).find("a").css("text-decoration","none");
    }).click(function() {
            location.href=$(this).find("a").attr("href");
	}); */

	$(".tableauCalendarLink").click(function() {
	  var $this = $(this);
	  if ($this.hasClass("open")) {
	    $(".tableauCalendar").hide();
	    $this.removeClass("open");
	  } else {
	    var linkTopLocation = $this.offset().top;
  	  var linkLeftLocation = $this.offset().left;
  	  $(".tableauCalendar").css("top", linkTopLocation+15+"px").css("left", linkLeftLocation+25+"px").show();
  	  $this.addClass("open");
	  }
	  return false;
	}).each(function() {
		$(this).show();
	});
	$(".tableauCalendar span a").click(function() {
	  $(".tableauCalendarLink").click();
	  return false;
	});

    // Overlays
    $("div.tableauoverlay").livequery(function(){
        SgTableauOverlay.init( $(this) );
        $(this).hover(function()
        {

            if ($(this).attr('titel') == null) {
                return;
            }

            if(this.xOffset == null)
            {

                this.xOffset = 15;
                this.yOffset = 5;

                // if there's not enough space, invert the tooltip position
                if( ( $(document).width() - $(this).parent().offset().left - $(this).parent().width()  - $('#tableautooltip').width() - this.xOffset) < 5)
                {
                    this.xOffset = 0 - $('#tableautooltip').width() - 23;
                }

            }

            if($(this).hasClass("white-tooltip")){
                $('#tableautooltip').addClass("white");
            } else {
                $('#tableautooltip').removeClass("white");
            }


            $('#tableautooltip').html(SgTableauOverlay._breakifyScript( $(this).attr('titel') )).show();

            $(this).mousemove(
                function(e)
                {
                    $('#tableautooltip').css({
                        top:e.pageY + this.yOffset,
                        left:e.pageX + this.xOffset
                    });
                });
	
        },
        function()
        {
            if($(this).attr('titel') == null) return;
            $(this).unbind('mousemove');
            $('#tableautooltip').hide();
        });
    });

});