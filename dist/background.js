!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=164)}([,,,,,function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){var r=n(22),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();t.exports=c},function(t,e,n){function r(t){return null==t?void 0===t?i:a:f&&f in Object(t)?c(t):u(t)}var o=n(10),c=n(49),u=n(50),a="[object Null]",i="[object Undefined]",f=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},,function(t,e,n){var r=n(6),o=r.Symbol;t.exports=o},,,,function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},,function(t,e,n){function r(t,e){return(a(t)?o:c)(t,u(e))}var o=n(28),c=n(42),u=n(59),a=n(5);t.exports=r},function(t,e,n){function r(t){return null!=t&&c(t.length)&&!o(t)}var o=n(33),c=n(23);t.exports=r},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},,,function(t,e,n){function r(t){return u(t)?o(t):c(t)}var o=n(29),c=n(56),u=n(17);t.exports=r},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(48))},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},function(t,e,n){(function(t){var r=n(6),o=n(51),c="object"==typeof e&&e&&!e.nodeType&&e,u=c&&"object"==typeof t&&t&&!t.nodeType&&t,a=u&&u.exports===c,i=a?r.Buffer:void 0,f=i?i.isBuffer:void 0,s=f||o;t.exports=s}).call(e,n(14)(t))},function(t,e){function n(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}var r=Object.prototype;t.exports=n},,,function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}t.exports=n},function(t,e,n){function r(t,e){var n=u(t),r=!n&&c(t),s=!n&&!r&&a(t),p=!n&&!r&&!s&&f(t),b=n||r||s||p,d=b?o(t.length,String):[],y=d.length;for(var v in t)!e&&!l.call(t,v)||b&&("length"==v||s&&("offset"==v||"parent"==v)||p&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||i(v,y))||d.push(v);return d}var o=n(46),c=n(30),u=n(5),a=n(24),i=n(52),f=n(31),s=Object.prototype,l=s.hasOwnProperty;t.exports=r},function(t,e,n){var r=n(47),o=n(8),c=Object.prototype,u=c.hasOwnProperty,a=c.propertyIsEnumerable,i=r(function(){return arguments}())?r:function(t){return o(t)&&u.call(t,"callee")&&!a.call(t,"callee")};t.exports=i},function(t,e,n){var r=n(53),o=n(54),c=n(55),u=c&&c.isTypedArray,a=u?o(u):r;t.exports=a},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e,n){function r(t){if(!c(t))return!1;var e=o(t);return e==a||e==i||e==u||e==f}var o=n(7),c=n(18),u="[object AsyncFunction]",a="[object Function]",i="[object GeneratorFunction]",f="[object Proxy]";t.exports=r},function(t,e){function n(t){return t}t.exports=n},,,,,,,function(t,e,n){"use strict";function r(t,e){i(t),chrome.runtime.onMessage.addListener(function(n,r,o){n.type===t&&e(n.data,r,o)})}function o(t){if(t){var e=t.type,n=t.data,r=t.callback;i(e),chrome.runtime.sendMessage({type:e,data:n},r)}}function c(t){if(t){var e=t.id,n=t.type,r=t.data,o=t.callback;i(n);var c=function(t){chrome.tabs.sendMessage(t,{type:n,data:r},o)};"number"==typeof e?e<0?chrome.tabs.query({},function(t){(0,a.default)(t,function(t){return c(t.id)})}):c(e):chrome.tabs.query({currentWindow:!0,active:!0},function(t){c(t[0].id)})}}Object.defineProperty(e,"__esModule",{value:!0}),e.sendToContent=e.sendMessage=e.onMessage=void 0;var u=n(16),a=function(t){return t&&t.__esModule?t:{default:t}}(u);e.onMessage=r,e.sendMessage=o,e.sendToContent=c;var i=function(t){if("string"!=typeof t)throw"message needs type"}},function(t,e,n){var r=n(43),o=n(58),c=o(r);t.exports=c},function(t,e,n){function r(t,e){return t&&o(t,e,c)}var o=n(44),c=n(21);t.exports=r},function(t,e,n){var r=n(45),o=r();t.exports=o},function(t,e){function n(t){return function(e,n,r){for(var o=-1,c=Object(e),u=r(e),a=u.length;a--;){var i=u[t?a:++o];if(!1===n(c[i],i,c))break}return e}}t.exports=n},function(t,e){function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},function(t,e,n){function r(t){return c(t)&&o(t)==u}var o=n(7),c=n(8),u="[object Arguments]";t.exports=r},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){function r(t){var e=u.call(t,i),n=t[i];try{t[i]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[i]=n:delete t[i]),o}var o=n(10),c=Object.prototype,u=c.hasOwnProperty,a=c.toString,i=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},function(t,e){function n(){return!1}t.exports=n},function(t,e){function n(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=n},function(t,e,n){function r(t){return u(t)&&c(t.length)&&!!a[o(t)]}var o=n(7),c=n(23),u=n(8),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=r},function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},function(t,e,n){(function(t){var r=n(22),o="object"==typeof e&&e&&!e.nodeType&&e,c=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=c&&c.exports===o,a=u&&r.process,i=function(){try{return a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=i}).call(e,n(14)(t))},function(t,e,n){function r(t){if(!o(t))return c(t);var e=[];for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n);return e}var o=n(25),c=n(57),u=Object.prototype,a=u.hasOwnProperty;t.exports=r},function(t,e,n){var r=n(32),o=r(Object.keys,Object);t.exports=o},function(t,e,n){function r(t,e){return function(n,r){if(null==n)return n;if(!o(n))return t(n,r);for(var c=n.length,u=e?c:-1,a=Object(n);(e?u--:++u<c)&&!1!==r(a[u],u,a););return n}}var o=n(17);t.exports=r},function(t,e,n){function r(t){return"function"==typeof t?t:o}var o=n(34);t.exports=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(e,n){e.selectionText&&p(n).then(function(e){return(0,c.sendToContent)({type:"CHANGE_CASE",data:t,id:e})}).catch(function(t){return alert(t)})}}var c=n(41),u=n(165),a=r(u),i=n(166),f=r(i),s=n(167),l=r(s),p=(0,a.default)();(0,l.default)([["upperCase","UPPERCASE"],["lowerCase","lowercase"],["titleCase","Title Case"],["sentenceCase","Sentence case"],null,["camelCase","camelCase"],["pascalCase","PascalCase"],["constantCase","CONSTANT_CASE"],null,["paramCase","param-case"],["snakeCase","snake_case"],["dotCase","dot.case"],null,["toggleCase","tOGGLE cASE"],["noCase","no case"]],function(t){return{title:t[1],onclick:o(t[0])}},{contexts:["editable"]}),(0,f.default)({shortcuts:{upperCase:"alt+1",lowerCase:"alt+2",titleCase:"alt+3",sentenceCase:"alt+4"}}),chrome.runtime.onInstalled.addListener(function(t){var e=t.reason;"install"!==e&&"update"!==e||chrome.runtime.openOptionsPage()})},function(t,e,n){"use strict";function r(){var t={};return function(e){var n=null==e?-1:e.id;if(n<0)return Promise.reject("This tab cannot be scripted.");var r=t[n];return void 0!==r?!1===r?Promise.resolve(n):Promise.reject(r):new Promise(function(e,r){chrome.tabs.executeScript(n,{code:"void(0)"},function(){var o=chrome.runtime.lastError;o?(t[n]=o.message,r(o.message)):(t[n]=!1,e(n))})})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";function r(t){chrome.storage.sync.get(null,function(e){var n={},r=0;(0,c.default)(t,function(t,o){e.hasOwnProperty(o)||(n[o]=t,r+=1)}),r&&chrome.storage.sync.set(n)})}Object.defineProperty(e,"__esModule",{value:!0});var o=n(16),c=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=r},function(t,e,n){"use strict";function r(t,e,n){null!=t&&t.forEach(function(t){var r=void 0;r=null===t?{type:"separator"}:e(t),n&&(r=Object.assign({},n,r)),chrome.contextMenus.create(r)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r}]);