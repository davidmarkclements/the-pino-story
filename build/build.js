!function e(t,n,r){function a(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return a(n?n:e)},u,u.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)a(r[o]);return a}({1:[function(e,t){(function(e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},r=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,r=n.Prism={manual:n.Prism&&n.Prism.manual,util:{encode:function(e){return e instanceof a?new a(e.type,r.util.encode(e.content),e.alias):"Array"===r.util.type(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=r.util.type(e);switch(t){case"Object":var n={};for(var a in e)e.hasOwnProperty(a)&&(n[a]=r.util.clone(e[a]));return n;case"Array":return e.map&&e.map(function(e){return r.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){a=a||r.languages;var i=a[e];if(2==arguments.length){n=arguments[1];for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);return i}var s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);s[l]=i[l]}return r.languages.DFS(r.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=s)}),a[e]=s},DFS:function(e,t,n,a){a=a||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==r.util.type(e[i])||a[r.util.objId(e[i])]?"Array"!==r.util.type(e[i])||a[r.util.objId(e[i])]||(a[r.util.objId(e[i])]=!0,r.languages.DFS(e[i],t,i,a)):(a[r.util.objId(e[i])]=!0,r.languages.DFS(e[i],t,null,a)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n);for(var a,i=n.elements||document.querySelectorAll(n.selector),o=0;a=i[o++];)r.highlightElement(a,e===!0,n.callback)},highlightElement:function(t,a,i){for(var o,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1].toLowerCase(),s=r.languages[o]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var u=t.textContent,c={element:t,language:o,grammar:s,code:u};if(r.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(r.hooks.run("before-highlight",c),c.element.textContent=c.code,r.hooks.run("after-highlight",c)),r.hooks.run("complete",c),void 0;if(r.hooks.run("before-highlight",c),a&&n.Worker){var d=new Worker(r.filename);d.onmessage=function(e){c.highlightedCode=e.data,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),r.hooks.run("after-highlight",c),r.hooks.run("complete",c)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=r.highlight(c.code,c.grammar,c.language),r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(t),r.hooks.run("after-highlight",c),r.hooks.run("complete",c)},highlight:function(e,t,n){var i=r.tokenize(e,t);return a.stringify(r.util.encode(i),n)},matchGrammar:function(e,t,n,a,i,o,s){var l=r.Token;for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==s)return;var c=n[u];c="Array"===r.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var f=c[d],p=f.inside,g=!!f.lookbehind,h=!!f.greedy,m=0,v=f.alias;if(h&&!f.pattern.global){var b=f.pattern.toString().match(/[imuy]*$/)[0];f.pattern=RegExp(f.pattern.source,b+"g")}f=f.pattern||f;for(var y=a,k=i;y<t.length;k+=t[y].length,++y){var w=t[y];if(t.length>e.length)return;if(!(w instanceof l)){f.lastIndex=0;var x=f.exec(w),E=1;if(!x&&h&&y!=t.length-1){if(f.lastIndex=k,x=f.exec(e),!x)break;for(var S=x.index+(g?x[1].length:0),P=x.index+x[0].length,A=y,C=k,L=t.length;L>A&&(P>C||!t[A].type&&!t[A-1].greedy);++A)C+=t[A].length,S>=C&&(++y,k=C);if(t[y]instanceof l||t[A-1].greedy)continue;E=A-y,w=e.slice(k,C),x.index-=k}if(x){g&&(m=x[1].length);var S=x.index+m,x=x[0].slice(m),P=S+x.length,O=w.slice(0,S),j=w.slice(P),F=[y,E];O&&(++y,k+=O.length,F.push(O));var N=new l(u,p?r.tokenize(x,p):x,v,x,h);if(F.push(N),j&&F.push(j),Array.prototype.splice.apply(t,F),1!=E&&r.matchGrammar(e,t,n,y,k,!0,u),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],a=t.rest;if(a){for(var i in a)t[i]=a[i];delete t.rest}return r.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}}},a=r.Token=function(e,t,n,r,a){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!a};if(a.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===r.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var o="Array"===r.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}r.hooks.run("wrap",i);var s=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(s?" "+s:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,i=t.code,o=t.immediateClose;n.postMessage(r.highlight(i,r.languages[a],a)),o&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(r.filename=i.src,!document.addEventListener||r.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),n.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=r),"undefined"!=typeof e&&(e.Prism=r),r.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},r.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),r.languages.xml=r.languages.markup,r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},r.languages.css.atrule.inside.rest=r.util.clone(r.languages.css),r.languages.markup&&(r.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:r.languages.css,alias:"language-css"}}),r.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:r.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:r.languages.css}},alias:"language-css"}},r.languages.markup.tag)),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),r.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),r.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}}}),r.languages.markup&&r.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:r.languages.javascript,alias:"language-javascript"}}),r.languages.js=r.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),i=t,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(o)||[,""])[1]),!n){var s=(a.match(/\.(\w+)$/)||[,""])[1];n=e[s]||s}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var u=new XMLHttpRequest;u.open("GET",a,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,r.highlightElement(l)):l.textContent=u.status>=400?"✖ Error "+u.status+" while fetching file: "+u.statusText:"✖ Error: File does not exist or is empty")},u.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t){t.exports=function(){return function(e){function t(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var r=document.createElement("div");return r.className=n,r.classList.add("bespoke-backdrop"),e.parent.appendChild(r),r}}function n(t){if(t){var n=i.indexOf(t),o=e.slide();r(t,"active"),r(t,"inactive"),r(t,"before"),r(t,"after"),n!==o?(a(t,"inactive"),a(t,o>n?"before":"after")):a(t,"active")}}function r(e,t){e.classList.remove("bespoke-backdrop-"+t)}function a(e,t){e.classList.add("bespoke-backdrop-"+t)}var i;i=e.slides.map(t),e.on("activate",function(){i.forEach(n)})}}},{}],3:[function(e,t){t.exports=function(e){return function(t){var n,r,a=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),i=function(){var e=n+1;return l(1)?(s(n,r+1),!1):(a[e]&&s(e,0),void 0)},o=function(){var e=n-1;return l(-1)?(s(n,r-1),!1):(a[e]&&s(e,a[e].length-1),void 0)},s=function(e,t){n=e,r=t,a.forEach(function(n,r){n.forEach(function(n,a){n.classList.add("bespoke-bullet"),e>r||r===e&&t>=a?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),r===e&&a===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},l=function(e){return void 0!==a[n][r+e]};t.on("next",i),t.on("prev",o),t.on("slide",function(e){s(e.index,0)}),s(0,0)}}},{}],4:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},r=function(r,a){var i=e.slides[e.slide()],o=a-e.slide(),s=o>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,r)),r!==i&&["inactive",s,s+"-"+Math.abs(o)].map(t.bind(null,r))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(a){e.slides.map(r),t(a.slide,"active"),n(a.slide,"inactive")})}}},{}],5:[function(e,t){t.exports=function(){return function(e){var t=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)},n=function(){var n=window.location.hash.slice(1),r=parseInt(n,10);n&&(r?t(r-1):e.slides.forEach(function(e,r){(e.getAttribute("data-bespoke-hash")===n||e.id===n)&&t(r)}))};setTimeout(function(){n(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash")||e.slide.id;window.location.hash=t||e.index+1}),window.addEventListener("hashchange",n)},0)}}},{}],6:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],7:[function(e,t){t.exports=function(e){return e=e||{},e.delay=e.delay||250,e.evalDelay=e.evalDelay||100,function(t){window.__nwWindowId&&window.nwDispatcher&&(window.BESPOKE_PDF=Object.create(t),e.setup instanceof Function&&e.setup(BESPOKE_PDF),document.documentElement.classList.add("pdf"),BESPOKE_PDF.once=function(e,t){var n=BESPOKE_PDF.on(e,function(e){n(),t(e)})},BESPOKE_PDF.when=function(e){return new Promise(function(t){BESPOKE_PDF.once(e,function(e){t(e)})})},BESPOKE_PDF.slides.map(function(e){return{element:e,headline:e.querySelector("h1")||e.querySelector("h2")||e.querySelector("h3")||e.querySelector("h4")||e.querySelector("h5")||e.querySelector("li")||e.querySelector("p")||e.querySelector("span")}}).map(function(e){return e.headline?(e.element.dataset.pdfId=e.headline.innerText.trim().toLowerCase().split(" ").join("-"),e.element):void 0}).filter(Boolean).map(getComputedStyle).map(function(e,t){return"none"===e.display&&t}).filter(function(e){return"number"==typeof e}).forEach(function(e){BESPOKE_PDF.slides.splice(e,1)}),BESPOKE_PDF.options=e)}}},{}],8:[function(e,t){t.exports=function(e){return function(t){var n=document.createElement("div"),r=document.createElement("div"),a="vertical"===e?"height":"width";n.className="bespoke-progress-parent",r.className="bespoke-progress-bar",n.appendChild(r),t.parent.appendChild(n),t.on("activate",function(e){r.style[a]=100*e.index/(t.slides.length-1)+"%"})}}},{}],9:[function(e,t,n){(function(r){!function(e){if("object"==typeof n&&"undefined"!=typeof t)t.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var a;"undefined"!=typeof window?a=window:"undefined"!=typeof r?a=r:"undefined"!=typeof self&&(a=self);var i=a;i=i.bespoke||(i.bespoke={}),i=i.plugins||(i.plugins={}),i.run=e()}}(function(){return function t(n,r,a){function i(s,l){if(!r[s]){if(!n[s]){var u="function"==typeof e&&e;if(!l&&u)return u(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=r[s]={exports:{}};n[s][0].call(c.exports,function(e){var t=n[s][1][e];return i(t?t:e)},c,c.exports,t,n,r,a)}return r[s].exports}for(var o="function"==typeof e&&e,s=0;s<a.length;s++)i(a[s]);return i}({1:[function(e,t){t.exports=function(){return function(e){var t=-1;[].forEach.call(document.querySelectorAll("[data-bespoke-run]"),function(t){t.setAttribute("href","#"),t.addEventListener("click",function(t){e.fire("runCurrentCode"),t.preventDefault()})}),e.on("runCurrentCode",function(){var e=document.querySelector(".bespoke-active code");if(!e)throw"No code element on this slide, or no bespoke-classes plugin";new Function(e.innerText)()}),e.on("prev",function(){t=e.slide()}),e.on("next",function(n){var r=n.slide,a=r.querySelector("code[data-bespoke-autorun]"),i=t!==e.slide();return t=e.slide(),a&&i?(e.fire("runCurrentCode"),!1):!0})}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,r=t.slides[0],a=r.offsetHeight,i=r.offsetWidth,o="zoom"===e||"zoom"in n.style&&"transform"!==e,s=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},l=o?t.slides:t.slides.map(s),u=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,r){return r+e in n.style?r+e:t},e.toLowerCase())}("Transform"),c=o?function(e,t){t.style.zoom=e}:function(e,t){t.style[u]="scale("+e+")"},d=function(){var e=n.offsetWidth/i,t=n.offsetHeight/a;l.forEach(c.bind(null,Math.min(e,t)))};window.addEventListener("resize",d),d()}}},{}],11:[function(e,t){t.exports=function(e){return function(t){var n,r,a="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+a],r=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),r=e.touches[0]["page"+a]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(r)>50&&t[r>0?"prev":"next"]()})}}},{}],12:[function(e,t){var n=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),r=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),a=r[0],i={},o=function(e,t){r[e]&&(d("deactivate",f(a,t)),a=r[e],d("activate",f(a,t)))},s=function(e,t){return arguments.length?(d("slide",f(r[e],t))&&o(e,t),void 0):r.indexOf(a)},l=function(e,t){var n=r.indexOf(a)+e;d(e>0?"next":"prev",f(a,t))&&o(n,t)},u=function(e,t){return(i[e]||(i[e]=[])).push(t),c.bind(null,e,t)},c=function(e,t){i[e]=(i[e]||[]).filter(function(e){return e!==t})},d=function(e,t){return(i[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},f=function(e,t){return t=t||{},t.index=r.indexOf(e),t.slide=e,t},p={on:u,off:c,fire:d,slide:s,next:l.bind(null,1),prev:l.bind(null,-1),parent:n,slides:r};return(t||[]).forEach(function(e){e(p)}),o(0),p};t.exports={from:n}},{}],13:[function(e){var t=e("bespoke"),n=e("bespoke-classes"),r=e("bespoke-keys"),a=e("bespoke-touch"),i=e("bespoke-bullets"),o=e("bespoke-backdrop"),s=e("bespoke-scale"),l=e("bespoke-hash"),u=e("bespoke-pdf"),c=e("bespoke-progress"),d=e("bespoke-run");t.from("article",[n(),r(),a(),d(),u(5e3),i("li, .bullet"),o(),s(),l(),c()]),e("./../../bower_components/prism/prism.js")},{"./../../bower_components/prism/prism.js":1,bespoke:12,"bespoke-backdrop":2,"bespoke-bullets":3,"bespoke-classes":4,"bespoke-hash":5,"bespoke-keys":6,"bespoke-pdf":7,"bespoke-progress":8,"bespoke-run":9,"bespoke-scale":10,"bespoke-touch":11}]},{},[13]);