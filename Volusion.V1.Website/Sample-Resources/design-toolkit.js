!function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(a,b,c){function d(a,b,c,d){"use strict";var e=function(a,b){var e=c.getElementsByTagName("html")[0],f={"":"home","default.asp":"home","searchresults.asp":"category","productslist.asp":"category","productdetails.asp":"productdetails","shoppingcart.asp":"shoppingcart","one-page-checkout.asp":"onepagecheckout","orderfinished.asp":"thankyou","dealoftheday.asp":"dealoftheday","register.asp":"register","orders.asp":"orderhistory","orderdetails.asp":"orderdetails","kb_results.asp":"kb_results","myaccount_myreviews.asp":"myreviews","ReviewMod.asp":"myreviews","cindex.asp":"sitemap","help.asp":"vol-help","help_answer.asp":"vol-help"};e.classList.remove("no-js"),e.classList.add("js"),e.classList.add("u-loading");for(var g in f){var h=PageName().replace(/\#.*/g,"");f.hasOwnProperty(g)&&h===g&&e.classList.add(f[g])}if(a!==d&&/^\d+$/.test(a)){var i=location.pathname.substr(1).toLowerCase();if("articles.asp"===i){var j=(i+location.search).toLowerCase(),k="(articles\\.asp\\?id="+a+")",l=new RegExp(k,"i"),m=l.test(j);m&&e.classList.add("contact")}}b!==d&&"searchresults.asp"!==PageName()&&"productdetails.asp"!==PageName()&&e.classList.add(b)};e("83","l-full-width"),b.DTK={addWindowLoadEvent:function(a){return!!a&&(b.addEventListener?b.addEventListener("load",a,!1):b.attachEvent("onload",a),this)},removeBreadcrumb:function(){var a=c.getElementById("content_area"),b=a.getElementsByTagName("table"),d=b[0];return d.parentNode.removeChild(d),this},removeAllTablePadding:function(){for(var a=c.getElementsByTagName("table"),b=a.length,d=0;d<b;d++)a[d].setAttribute("cellpadding","0"),a[d].setAttribute("cellspacing","0");return this},injectTag:function(a){var b={type:null,url:null,callback:null,node:"script",cache:!0,"class":null};for(var d in b)"undefined"==typeof a[d]&&(a[d]=b[d]);var e=c.getElementsByTagName(a.node)[0];if("stylesheet"===a.type){var f=e.parentNode;if(c.createStyleSheet)return c.createStyleSheet(a.url),this;var g=c.createElement("link");return g.setAttribute("rel","stylesheet"),g.setAttribute("type","text/css"),g.setAttribute("href",a.url),f.appendChild(g),this}if("script"===a.type){var h=c.createElement("script");h.type="text/javascript";var i=(new Date).getTime();return h.readyState?h.onreadystatechange=function(){"loaded"!==h.readyState&&"complete"!==h.readyState||(h.onreadystatechange=null,"function"==typeof a.callback&&a.callback())}:h.onload=function(){"function"==typeof a.callback&&a.callback()},a.cache===!1&&(a.url+=(/\?/.test(a.url)?"&":"?")+"vjsNoCache="+i),h.src=a.url,e.parentNode.insertBefore(h,e),this}},checkPage:function(a){if("function"==typeof PageName){if(PageName().split("#")[0]===a.toLowerCase())return!0;if("default.asp"===a.toLowerCase())return""===PageName().split("#")[0]}},loadCSS:function(a){if(!a)return b.alert("No template name specified"),!1},placeholderPolyfill:function(){var b=c.createElement("input");"placeholder"in b||a("input[placeholder]").each(function(){var b=a(this).attr("placeholder");a(this).removeAttr("placeholder").val(b),a(this).bind({focus:function(){var c=a(this).val();c===b&&a(this).val("")},blur:function(){""===a(this).val()&&a(this).val(b)}})})},formCheck:function(e){var f="undefined"!=typeof c.body.style.MozBoxShadow,g=!!b.attachEvent,h=!(!b.WebKitAnimationEvent||b.WebGLActiveInfo),i=e.elements,j=0;return f||g||h?(a.each(i,function(a,b){if(b.style.outline="",b.getAttribute("required"))""!==b.value&&b.selectedIndex!==-1||(b.hasAttribute===d?b.style.border="1px solid #d30000":b.style.outline="1px solid #d30000",j++);else if("email"===b.getAttribute("type")){var c=/^(([^<>\(\)\[\]\\.,;:\s@\"]+(\.[^<>\(\)\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i,e=c.test(b.value);e||(b.hasAttribute===d?b.style.border="1px solid #d30000":b.style.outline="1px solid #d30000",j++)}}),j>0?(b.alert("The fields in red are either required or invalid."),!1):void 0):a("#Email_1").val()===a("#Email_2").val()||(b.alert("The emails do not match."),!1)},addYear:function(){var b=(new Date).getFullYear();a(".insertYear").length>0&&a(".insertYear").html(b)},init:function(){this.placeholderPolyfill(),this.addYear()}},a(c).ready(function(){DTK.init()}),b.volMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}if(a("classlist.js"),"undefined"==typeof jQuery){var e=document.createElement("script");e.src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js",e.type="text/javascript";var f=document.getElementsByTagName("head")[0],g=document.getElementsByTagName("script")[0];f.insertBefore(e,g),e.readyState?e.onreadystatechange=function(){"use strict";"loaded"!==e.readyState&&"complete"!==e.readyState||d(jQuery,window,document)}:e.onload=function(){"use strict";d(jQuery,window,document)}}else d(jQuery,window,document);a("html5shiv"),a("picturefill")},{"classlist.js":2,html5shiv:3,picturefill:4}],2:[function(a,b,c){"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?!function(){"use strict";var a=document.createElement("_");if(a.classList.add("c1","c2"),!a.classList.contains("c2")){var b=function(a){var b=DOMTokenList.prototype[a];DOMTokenList.prototype[a]=function(a){var c,d=arguments.length;for(c=0;c<d;c++)a=arguments[c],b.call(this,a)}};b("add"),b("remove")}if(a.classList.toggle("c3",!1),a.classList.contains("c3")){var c=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(a,b){return 1 in arguments&&!this.contains(a)==!b?b:c.call(this,a)}}a=null}():!function(a){"use strict";if("Element"in a){var b="classList",c="prototype",d=a.Element[c],e=Object,f=String[c].trim||function(){return this.replace(/^\s+|\s+$/g,"")},g=Array[c].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},h=function(a,b){this.name=a,this.code=DOMException[a],this.message=b},i=function(a,b){if(""===b)throw new h("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(b))throw new h("INVALID_CHARACTER_ERR","String contains an invalid character");return g.call(a,b)},j=function(a){for(var b=f.call(a.getAttribute("class")||""),c=b?b.split(/\s+/):[],d=0,e=c.length;d<e;d++)this.push(c[d]);this._updateClassName=function(){a.setAttribute("class",this.toString())}},k=j[c]=[],l=function(){return new j(this)};if(h[c]=Error[c],k.item=function(a){return this[a]||null},k.contains=function(a){return a+="",i(this,a)!==-1},k.add=function(){var a,b=arguments,c=0,d=b.length,e=!1;do a=b[c]+"",i(this,a)===-1&&(this.push(a),e=!0);while(++c<d);e&&this._updateClassName()},k.remove=function(){var a,b,c=arguments,d=0,e=c.length,f=!1;do for(a=c[d]+"",b=i(this,a);b!==-1;)this.splice(b,1),f=!0,b=i(this,a);while(++d<e);f&&this._updateClassName()},k.toggle=function(a,b){a+="";var c=this.contains(a),d=c?b!==!0&&"remove":b!==!1&&"add";return d&&this[d](a),b===!0||b===!1?b:!c},k.toString=function(){return this.join(" ")},e.defineProperty){var m={get:l,enumerable:!0,configurable:!0};try{e.defineProperty(d,b,m)}catch(n){n.number===-2146823252&&(m.enumerable=!1,e.defineProperty(d,b,m))}}else e[c].__defineGetter__&&d.__defineGetter__(b,l)}}(self))},{}],3:[function(a,b,c){!function(a,c){function d(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function e(){var a=u.elements;return"string"==typeof a?a.split(" "):a}function f(a,b){var c=u.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),u.elements=c+" "+a,k(b)}function g(a){var b=t[a[r]];return b||(b={},s++,a[r]=s,t[s]=b),b}function h(a,b,d){if(b||(b=c),m)return b.createElement(a);d||(d=g(b));var e;return e=d.cache[a]?d.cache[a].cloneNode():q.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||p.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function i(a,b){if(a||(a=c),m)return a.createDocumentFragment();b=b||g(a);for(var d=b.frag.cloneNode(),f=0,h=e(),i=h.length;f<i;f++)d.createElement(h[f]);return d}function j(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return u.shivMethods?h(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+e().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(u,b.frag)}function k(a){a||(a=c);var b=g(a);return!u.shivCSS||l||b.hasCSS||(b.hasCSS=!!d(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),m||j(a,b),a}var l,m,n="3.7.3-pre",o=a.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,q=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,r="_html5shiv",s=0,t={};!function(){try{var a=c.createElement("a");a.innerHTML="<xyz></xyz>",l="hidden"in a,m=1==a.childNodes.length||function(){c.createElement("a");var a=c.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(b){l=!0,m=!0}}();var u={elements:o.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:n,shivCSS:o.shivCSS!==!1,supportsUnknownElements:m,shivMethods:o.shivMethods!==!1,type:"default",shivDocument:k,createElement:h,createDocumentFragment:i,addElements:f};a.html5=u,k(c),"object"==typeof b&&b.exports&&(b.exports=u)}("undefined"!=typeof window?window:this,document)},{}],4:[function(a,b,c){!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,c,d){"use strict";function e(a){return" "===a||"\t"===a||"\n"===a||"\f"===a||"\r"===a}function f(b,c){var d=new a.Image;return d.onerror=function(){B[b]=!1,ca()},d.onload=function(){B[b]=1===d.width,ca()},d.src=c,"pending"}function g(){N=!1,Q=a.devicePixelRatio,O={},P={},t.DPR=Q||1,R.width=Math.max(a.innerWidth||0,A.clientWidth),R.height=Math.max(a.innerHeight||0,A.clientHeight),R.vw=R.width/100,R.vh=R.height/100,s=[R.height,R.width,Q].join("-"),R.em=t.getEmValue(),R.rem=R.em}function h(a,b,c,d){var e,f,g,h;return"saveData"===C.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function i(a){var b,c=t.getSet(a),d=!1;"pending"!==c&&(d=s,c&&(b=t.setRes(c),t.applySetCandidate(b,a))),a[t.ns].evaled=d}function j(a,b){return a.res-b.res}function k(a,b,c){var d;return!c&&b&&(c=a[t.ns].sets,c=c&&c[c.length-1]),d=l(b,c),d&&(b=t.makeUrl(b),a[t.ns].curSrc=b,a[t.ns].curCan=d,d.res||ba(d,d.set.sizes)),d}function l(a,b){var c,d,e;if(a&&b)for(e=t.parseSet(b),a=t.makeUrl(a),c=0;c<e.length;c++)if(a===t.makeUrl(e[c].url)){d=e[c];break}return d}function m(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;c<d;c++)e=g[c],e[t.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function n(a,b){function c(b){var c,d=b.exec(a.substring(m));if(d)return c=d[0],m+=c.length,c}function d(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),Y.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Z.test(j)&&"x"===i?((a||c||d)&&(m=!0),l<0?m=!0:c=l):Y.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(U),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(e(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void d();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void d();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void d();i+=k}else if("after descriptor"===j)if(e(k));else{if(""===k)return void d();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(V),m>=l)return n;g=c(W),h=[],","===g.slice(-1)?(g=g.replace(X,""),d()):f()}}function o(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var d,f="",g=[],h=[],i=0,j=0,k=!1;;){if(d=a.charAt(j),""===d)return b(),c(),h;if(k){if("*"===d&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(e(d)){if(a.charAt(j-1)&&e(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}d=" "}else if("("===d)i+=1;else if(")"===d)i-=1;else{if(","===d){b(),c(),j+=1;continue}if("/"===d&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=d,j+=1}}}function c(a){return!!(k.test(a)&&parseFloat(a)>=0)||(!!l.test(a)||("0"===a||"-0"===a||"+0"===a))}var d,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,d=0;d<g;d++)if(h=f[d],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),t.matchesMedia(h))return j}return"100vw"}c.createElement("picture");var p,q,r,s,t={},u=!1,v=function(){},w=c.createElement("img"),x=w.getAttribute,y=w.setAttribute,z=w.removeAttribute,A=c.documentElement,B={},C={algorithm:""},D="data-pfsrc",E=D+"set",F=navigator.userAgent,G=/rident/.test(F)||/ecko/.test(F)&&F.match(/rv\:(\d+)/)&&RegExp.$1>35,H="currentSrc",I=/\s+\+?\d+(e\d+)?w/,J=/(\([^)]+\))?\s*(.+)/,K=a.picturefillCFG,L="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",M="font-size:100%!important;",N=!0,O={},P={},Q=a.devicePixelRatio,R={px:1,"in":96},S=c.createElement("a"),T=!1,U=/^[ \t\n\r\u000c]+/,V=/^[, \t\n\r\u000c]+/,W=/^[^ \t\n\r\u000c]+/,X=/[,]+$/,Y=/^\d+$/,Z=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,$=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},_=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},aa=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=_(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in O))if(O[b]=!1,d&&(e=b.match(a)))O[b]=e[1]*R[e[2]];else try{O[b]=new Function("e",c(b))(R)}catch(f){}return O[b]}}(),ba=function(a,b){return a.w?(a.cWidth=t.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ca=function(a){if(u){var b,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),b=f.elements||t.qsa(f.context||c,f.reevaluate||f.reselect?t.sel:t.selShort),e=b.length){for(t.setupRun(f),T=!0,d=0;d<e;d++)t.fillImg(b[d],f);t.teardownRun(f)}}};p=a.console&&console.warn?function(a){console.warn(a)}:v,H in w||(H="src"),B["image/jpeg"]=!0,B["image/gif"]=!0,B["image/png"]=!0,B["image/svg+xml"]=c.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),t.ns=("pf"+(new Date).getTime()).substr(0,9),t.supSrcset="srcset"in w,t.supSizes="sizes"in w,t.supPicture=!!a.HTMLPictureElement,t.supSrcset&&t.supPicture&&!t.supSizes&&!function(a){w.srcset="data:,a",a.src="data:,a",t.supSrcset=w.complete===a.complete,t.supPicture=t.supSrcset&&t.supPicture}(c.createElement("img")),t.supSrcset&&!t.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",b="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=c.createElement("img"),e=function(){var a=d.width;2===a&&(t.supSizes=!0),r=t.supSrcset&&!t.supSizes,u=!0,setTimeout(ca)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=b+" 1w,"+a+" 9w",d.src=b}():u=!0,t.selShort="picture>img,img[srcset]",t.sel=t.selShort,t.cfg=C,t.DPR=Q||1,t.u=R,t.types=B,t.setSize=v,t.makeUrl=_(function(a){return S.href=a,S.href}),t.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},t.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?t.matchesMedia=function(a){return!a||matchMedia(a).matches}:t.matchesMedia=t.mMQ,t.matchesMedia.apply(this,arguments)},t.mMQ=function(a){return!a||aa(a)},t.calcLength=function(a){var b=aa(a,!0)||!1;return b<0&&(b=!1),b},t.supportsType=function(a){return!a||B[a]},t.parseSize=_(function(a){var b=(a||"").match(J);return{media:b&&b[1],length:b&&b[2]}}),t.parseSet=function(a){return a.cands||(a.cands=n(a.srcset,a)),a.cands},t.getEmValue=function(){var a;if(!q&&(a=c.body)){var b=c.createElement("div"),d=A.style.cssText,e=a.style.cssText;b.style.cssText=L,A.style.cssText=M,a.style.cssText=M,a.appendChild(b),q=b.offsetWidth,a.removeChild(b),q=parseFloat(q,10),A.style.cssText=d,a.style.cssText=e}return q||16},t.calcListLength=function(a){if(!(a in P)||C.uT){var b=t.calcLength(o(a));P[a]=b?b:R.width}return P[a]},t.setRes=function(a){var b;if(a){b=t.parseSet(a);for(var c=0,d=b.length;c<d;c++)ba(b[c],a.sizes)}return b},t.setRes.res=ba,t.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,g,i,l,m,n,o=b[t.ns],p=t.DPR;if(i=o.curSrc||b[H],l=o.curCan||k(b,i,a[0].set),l&&l.set===a[0].set&&(n=G&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(g=l))),!g)for(a.sort(j),f=a.length,g=a[f-1],d=0;d<f;d++)if(c=a[d],c.res>=p){e=d-1,g=a[e]&&(n||i!==t.makeUrl(c.url))&&h(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}g&&(m=t.makeUrl(g.url),o.curSrc=m,o.curCan=g,m!==i&&t.setSrc(b,g),t.setSize(b))}},t.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},t.getSet=function(a){var b,c,d,e=!1,f=a[t.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&t.matchesMedia(c.media)&&(d=t.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},t.parseSets=function(a,b,c){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[t.ns];(j.src===d||c.src)&&(j.src=x.call(a,"src"),j.src?y.call(a,D,j.src):z.call(a,D)),(j.srcset===d||c.srcset||!t.supSrcset||a.srcset)&&(e=x.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,m(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:x.call(a,"sizes")},j.sets.push(f),g=(r||j.src)&&I.test(j.srcset||""),g||!j.src||l(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=d,j.supported=!(i||f&&!t.supSrcset||g&&!t.supSizes),h&&t.supSrcset&&!j.supported&&(e?(y.call(a,E,e),a.srcset=""):z.call(a,E)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==t.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},t.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[t.ns]||(a[t.ns]={}),c=a[t.ns],(d||c.evaled!==s)&&(c.parsed&&!b.reevaluate||t.parseSets(a,a.parentNode,b),c.supported?c.evaled=s:i(a))},t.setupRun=function(){T&&!N&&Q===a.devicePixelRatio||g()},t.supPicture?(ca=v,t.fillImg=v):!function(){var b,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=c.readyState||"";f=setTimeout(e,"loading"===a?200:999),c.body&&(t.fillImgs(),b=b||d.test(a),b&&clearTimeout(f))},f=setTimeout(e,c.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;f<b?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=A.clientHeight,i=function(){N=Math.max(a.innerWidth||0,A.clientWidth)!==R.width||A.clientHeight!==h,h=A.clientHeight,N&&t.fillImgs()};$(a,"resize",g(i,99)),$(c,"readystatechange",e)}(),t.picturefill=ca,t.fillImgs=ca,t.teardownRun=v,ca._=t,a.picturefillCFG={pf:t,push:function(a){var b=a.shift();"function"==typeof t[b]?t[b].apply(t,a):(C[b]=a[0],T&&t.fillImgs({reselect:!0}))}};for(;K&&K.length;)a.picturefillCFG.push(K.shift());a.picturefill=ca,"object"==typeof b&&"object"==typeof b.exports?b.exports=ca:"function"==typeof define&&define.amd&&define("picturefill",function(){return ca}),t.supPicture||(B["image/webp"]=f("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},{}]},{},[1]);