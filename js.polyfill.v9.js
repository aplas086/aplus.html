var $jscomp=$jscomp||{};$jscomp.scope={},
$jscomp.arrayIteratorImpl=function(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}},$jscomp.arrayIterator=function(t){return{next:$jscomp.arrayIteratorImpl(t)}},
$jscomp.ASSUME_ES5=!1,$jscomp.ASSUME_NO_NATIVE_MAP=!1,$jscomp.ASSUME_NO_NATIVE_SET=!1,$jscomp.SIMPLE_FROUND_POLYFILL=!1,$jscomp.ISOLATE_POLYFILLS=!1,$jscomp.FORCE_POLYFILL_PROMISE=!1,$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1,$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,o){return t==Array.prototype||t==Object.prototype||(t[e]=o.value),t},
$jscomp.getGlobal=function(t){for(var e=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,],o=0;o<e.length;++o){var n=e[o];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")},$jscomp.global=$jscomp.getGlobal(this),$jscomp.IS_SYMBOL_NATIVE="function"==typeof Symbol&&"symbol"==typeof Symbol("x"),
$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE,$jscomp.polyfills={},$jscomp.propertyToPolyfillSymbol={},$jscomp.POLYFILL_PREFIX="$jscp$",
$jscomp.polyfill=function(t,e,o,n){e&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(t,e,o,n):$jscomp.polyfillUnisolated(t,e,o,n))},
$jscomp.polyfillUnisolated=function(t,e){for(var o=$jscomp.global,n=t.split("."),r=0;r<n.length-1;r++){var s=n[r];if(!(s in o))return;o=o[s]}var i=n[n.length-1],c=o[i],l=e(c);try{l!=c&&null!=l&&$jscomp.defineProperty(o,i,{configurable:!0,writable:!0,value:l})}catch(e){}},
$jscomp.polyfillIsolated=function(t,e,o){for(var n=t.split("."),r=1===n.length,s=n[0],i=!r&&(s in $jscomp.polyfills)?$jscomp.polyfills:$jscomp.global,c=0;c<n.length-1;c++){var l=n[c];if(!(l in i))return;i=i[l]}var p=n[n.length-1],a=$jscomp.IS_SYMBOL_NATIVE&&"es6"===o?i[p]:null,u=e(a);null!=u&&(r?$jscomp.defineProperty($jscomp.polyfills,p,{configurable:!0,writable:!0,value:u}):u!==a&&($jscomp.propertyToPolyfillSymbol[p]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(p):$jscomp.POLYFILL_PREFIX+p,p=$jscomp.propertyToPolyfillSymbol[p],
$jscomp.defineProperty(i,p,{configurable:!0,writable:!0,value:u})))},$jscomp.initSymbol=function(){},
$jscomp.polyfill("Symbol",function(t){if(t)return t;var e=function(t,e){this.$jscomp$symbol$id_=t,
$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:e})};e.prototype.toString=function(){return this.$jscomp$symbol$id_};var o=0,n=function(t){if(this instanceof n)throw TypeError("Symbol is not a constructor");return new e("jscomp_symbol_"+(t||"")+"_"+o++,t)};return n},"es6","es3"),
$jscomp.polyfill("Symbol.iterator",function(t){if(t)return t;for(var e=Symbol("Symbol.iterator"),o="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),n=0;n<o.length;n++){var r=$jscomp.global[o[n]];"function"==typeof r&&"function"!=typeof r.prototype[e]&&$jscomp.defineProperty(r.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return e},"es6","es3"),
$jscomp.iteratorPrototype=function(t){var e={next:t};return e[Symbol.iterator]=function(){return this},e},
$jscomp.createTemplateTagFirstArg=function(t){return t.raw=t},$jscomp.createTemplateTagFirstArgWithRaw=function(t,e){return t.raw=e,t},
$jscomp.makeIterator=function(t){var e="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return e?e.call(t):$jscomp.arrayIterator(t)},
$jscomp.arrayFromIterator=function(t){for(var e,o=[];!(e=t.next()).done;)o.push(e.value);return o},
$jscomp.arrayFromIterable=function(t){return t instanceof Array?t:$jscomp.arrayFromIterator($jscomp.makeIterator(t))},
$jscomp.objectCreate=$jscomp.ASSUME_ES5||"function"==typeof Object.create?Object.create:function(t){var e=function(){};return e.prototype=t,new e},
$jscomp.getConstructImplementation=function(){if($jscomp.TRUST_ES6_POLYFILLS&&"undefined"!=typeof Reflect&&Reflect.construct){if(function t(){function e(){}return new e,Reflect.construct(e,[],function(){}),new e instanceof e}())return Reflect.construct;var t=Reflect.construct;return function(e,o,n){var r=t(e,o);return n&&Reflect.setPrototypeOf(r,n.prototype),r}}return function(t,e,o){void 0===o&&(o=t);var n=$jscomp.objectCreate(o.prototype||Object.prototype);return Function.prototype.apply.call(t,n,e)||n}},
$jscomp.construct=({valueOf:$jscomp.getConstructImplementation}).valueOf(),
$jscomp.underscoreProtoCanBeSet=function(){var t={};try{return t.__proto__={a:!0},t.a}catch(e){}return!1},
$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(t,e){if(t.__proto__=e,t.__proto__!==e)throw TypeError(t+" is not extensible");return t}:null,
$jscomp.inherits=function(t,e){if(t.prototype=$jscomp.objectCreate(e.prototype),t.prototype.constructor=t,
$jscomp.setPrototypeOf)(0,$jscomp.setPrototypeOf)(t,e);else for(var o in e)if("prototype"!=o){if(Object.defineProperties){var n=Object.getOwnPropertyDescriptor(e,o);n&&Object.defineProperty(t,o,n)}else t[o]=e[o]}t.superClass_=e.prototype},
$jscomp.generator={},$jscomp.generator.ensureIteratorResultIsObject_=function(t){if(!(t instanceof Object))throw TypeError("Iterator result "+t+" is not an object")},
$jscomp.generator.Context=function(){this.isRunning_=!1,this.yieldAllIterator_=null,this.yieldResult=void 0,this.nextAddress=1,this.finallyAddress_=this.catchAddress_=0,this.abruptCompletion_=null},
$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw TypeError("Generator is already running");this.isRunning_=!0},
$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1},
$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_},
$jscomp.generator.Context.prototype.next_=function(t){this.yieldResult=t},
$jscomp.generator.Context.prototype.throw_=function(t){this.abruptCompletion_={exception:t,isException:!0},this.jumpToErrorHandler_()},
$jscomp.generator.Context.prototype.return=function(t){this.abruptCompletion_={return:t},this.nextAddress=this.finallyAddress_},
$jscomp.generator.Context.prototype.yield=function(t,e){return this.nextAddress=e,{value:t}},
$jscomp.generator.Context.prototype.jumpTo=function(t){this.nextAddress=t},
$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0},
$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(t,e){this.catchAddress_=t,void 0!=e&&(this.finallyAddress_=e)},
$jscomp.generator.Context.prototype.leaveTryBlock=function(t,e){this.nextAddress=t,this.catchAddress_=e||0},
$jscomp.generator.Context.prototype.enterCatchBlock=function(t){this.catchAddress_=t||0;var e=this.abruptCompletion_.exception;return this.abruptCompletion_=null,e},
$jscomp.generator.Context.PropertyIterator=function(t){for(var e in this.properties_=[],t)this.properties_.push(e);this.properties_.reverse()},
$jscomp.generator.Engine_=function(t){this.context_=new $jscomp.generator.Context,this.program_=t},
$jscomp.generator.Engine_.prototype.next_=function(t){return(this.context_.start_(),this.context_.yieldAllIterator_)?this.yieldAllStep_(this.context_.yieldAllIterator_.next,t,this.context_.next_):(this.context_.next_(t),this.nextStep_())},
$jscomp.generator.Engine_.prototype.return_=function(t){this.context_.start_();var e=this.context_.yieldAllIterator_;return e?this.yieldAllStep_("return"in e?e.return:function(t){return{value:t,done:!0}},t,this.context_.return):(this.context_.return(t),this.nextStep_())},
$jscomp.generator.Engine_.prototype.throw_=function(t){return(this.context_.start_(),this.context_.yieldAllIterator_)?this.yieldAllStep_(this.context_.yieldAllIterator_.throw,t,this.context_.next_):(this.context_.throw_(t),this.nextStep_())},
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(t,e,o){try{var n=t.call(this.context_.yieldAllIterator_,e);if($jscomp.generator.ensureIteratorResultIsObject_(n),!n.done)return this.context_.stop_(),n;var r=n.value}catch(s){return this.context_.yieldAllIterator_=null,this.context_.throw_(s),this.nextStep_()}return this.context_.yieldAllIterator_=null,o.call(this.context_,r),this.nextStep_()},
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var t=this.program_(this.context_);if(t)return this.context_.stop_(),{value:t.value,done:!1}}catch(e){this.context_.yieldResult=void 0,this.context_.throw_(e)}if(this.context_.stop_(),this.context_.abruptCompletion_){
var o=this.context_.abruptCompletion_;if(this.context_.abruptCompletion_=null,o.isException)throw o.exception;return{value:o.return,done:!0}};return{value:void 0,done:!0}},
$jscomp.generator.Generator_=function(t){this.next=function(e){return t.next_(e)},this.throw=function(e){return t.throw_(e)},this.return=function(e){return t.return_(e)},this[Symbol.iterator]=function(){return this}},
$jscomp.generator.createGenerator=function(t,e){var o=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(e));return $jscomp.setPrototypeOf&&t.prototype&&$jscomp.setPrototypeOf(o,t.prototype),o},
$jscomp.asyncExecutePromiseGenerator=function(t){function e(e){return t.next(e)}function o(e){return t.throw(e)}return new Promise(function(n,r){!function t(s){s.done?n(s.value):Promise.resolve(s.value).then(e,o).then(t,r)}(t.next())})},
$jscomp.asyncExecutePromiseGeneratorFunction=function(t){return $jscomp.asyncExecutePromiseGenerator(t())},
$jscomp.asyncExecutePromiseGeneratorProgram=function(t){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(t)))},
$jscomp.parseIntPolyfill=function(str, radix) {var istr =str;
!(str instanceof String)&&(istr=String(str));istr=typeof istr.trim== 'function'?istr.trim():istr;
var isHex = /^0x/i.test(istr);var prx = radix || (isHex ? 16 : 10);var sign = /^[+-]/.test(istr) ? (istr[0] === '-' ? -1 : 1) : 1;var nstr = istr.slice(isHex ? 2 : 0).replace(/^[+-]/, '');if (prx < 2 || prx > 36 || isNaN(prx)) {return NaN;} var result = 0; for (var i = 0; i < nstr.length; i++) { var charCode = nstr.charCodeAt(i); var digit; 
if (charCode >= 48 && charCode <= 57) { digit = charCode - 48; } else if (charCode >= 65 && charCode <= 90) { digit = charCode - 65 + 10; } else if (charCode >= 97 && charCode <= 122) { digit = charCode - 97 + 10; } else { break; };
if (digit >= prx) { break; }; result = result * prx + digit; };if (prx<=10&&!isNaN(result)){if(/[^0-9\+\-]/.test(nstr)&&result==0){return NaN}};if (prx<=8&&isNaN(result)){if(/[^0-7\+\-]/.test(nstr)&&result==0){return NaN}};return isNaN(result) ? NaN : result * sign; 
},
$jscomp.polyfill("Reflect",function(t){return t?t:{}},"es6","es3"),
$jscomp.polyfill("Array.isArray",function(t){return t?t:function(a){return typeof a=='object'&&void 0!=a&&typeof a.length=='number'}},"es6","es3"),
$jscomp.polyfill("Promise",function(z){return (z&&z!=null&&z.all)?z:(function(){"use strict";var FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor";
function finallyConstructor(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}
function allSettled(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;
function i(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var s=n.then;if("function"==typeof s)return void s.call(n,(function(t){i(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--o&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--o&&t(r)}for(var s=0;s<r.length;s++)i(s,r[s])}))}
function AggregateError(e,t){this.name="AggregateError",this.errors=e,this.message=t||""}
function any(e){var t=this;return new t((function(n,r){if(!e||void 0===e.length)return r(new TypeError("Promise.any accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return r();for(var i=[],s=0;s<o.length;s++)try{t.resolve(o[s]).then(n).catch((function(e){i.push(e),i.length===o.length&&r(new AggregateError(i,"All promises were rejected"))}))}catch(e){r(e)}}))}
AggregateError.prototype=Error.prototype;
var setTimeoutFunc=setTimeout;
function isArray(e){return Boolean(e&&void 0!==e.length)}
function noop(){}
function bind(e,t){return function(){e.apply(t,arguments)}}
function Promise(e){if(!(this instanceof Promise))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],doResolve(e,this)}
function handle(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,Promise._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void reject(t.promise,e)}resolve(t.promise,r)}else(1===e._state?resolve:reject)(t.promise,e._value)}))):e._deferreds.push(t)}
function resolve(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof Promise)return e._state=3,e._value=t,void finale(e);if("function"==typeof n)return void doResolve(bind(n,t),e)}e._state=1,e._value=t,finale(e)}catch(t){reject(e,t)}}
function reject(e,t){e._state=2,e._value=t,finale(e)}
function finale(e){2===e._state&&0===e._deferreds.length&&Promise._immediateFn((function(){e._handled||Promise._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)handle(e,e._deferreds[t]);e._deferreds=null}
function Handler(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}
function doResolve(e,t){var n=!1;try{e((function(e){n||(n=!0,resolve(t,e))}),(function(e){n||(n=!0,reject(t,e))}))}catch(e){if(n)return;n=!0,reject(t,e)}}
Promise.prototype.catch=function(e){return this.then(null,e)},Promise.prototype.then=function(e,t){var n=new this.constructor(noop);return handle(this,new Handler(e,t,n)),n},
Promise.prototype.finally=finallyConstructor,
Promise.all=function(e){return new Promise((function(t,n){if(!isArray(e))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var c=s.then;if("function"==typeof c)return void c.call(s,(function(t){i(e,t)}),n)}r[e]=s,0==--o&&t(r)}catch(e){n(e)}}for(var s=0;s<r.length;s++)i(s,r[s])}))},
Promise.any=any,
Promise.allSettled=allSettled,
Promise.resolve=function(e){return e&&"object"==typeof e&&e.constructor===Promise?e:new Promise((function(t){t(e)}))},
Promise.reject=function(e){return new Promise((function(t,n){n(e)}))},
Promise.race=function(e){return new Promise((function(t,n){if(!isArray(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=e.length;r<o;r++)Promise.resolve(e[r]).then(t,n)}))},
Promise._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){setTimeoutFunc(e,0)},
Promise._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};
return Promise;
}());},"es6","es3"),
$jscomp.polyfill("Reflect.construct",function(){return $jscomp.construct},"es6","es3"),
$jscomp.polyfill("Reflect.setPrototypeOf",function(t){if(t)return t;if($jscomp.setPrototypeOf){var e=$jscomp.setPrototypeOf;return function(t,o){try{return e(t,o),!0}catch(n){return!1}}}return null},"es6","es5"),
$jscomp.checkStringArgs=function(t,e,o){if(null==t)throw TypeError("The 'this' value for String.prototype."+o+" must not be null or undefined");if(e instanceof RegExp)throw TypeError("First argument to String.prototype."+o+" must not be a regular expression");return t+""},
$jscomp.polyfill("String.prototype.endsWith",function(t){return t?t:function(t,e){var o=$jscomp.checkStringArgs(this,t,"endsWith");t+="",void 0===e&&(e=o.length);for(var n=Math.max(0,Math.min(0|e,o.length)),r=t.length;0<r&&0<n;)if(o[--n]!=t[--r])return!1;return 0>=r}},"es6","es3"),
$jscomp.findInternal=function(t,e,o){t instanceof String&&(t=String(t));for(var n=t.length,r=0;r<n;r++){var s=t[r];if(e.call(o,s,r,t))return{i:r,v:s}}return{i:-1,v:void 0}},
$jscomp.polyfill("String.prototype.startsWith",function(t){return t?t:function(t,e){var o=$jscomp.checkStringArgs(this,t,"startsWith");t+="";for(var n=o.length,r=t.length,s=Math.max(0,Math.min(0|e,o.length)),i=0;i<r&&s<n;)if(o[s++]!=t[i++])return!1;return i>=r}},"es6","es3"),
$jscomp.polyfill("String.prototype.repeat",function(t){return t?t:function(t){var e=$jscomp.checkStringArgs(this,null,"repeat");if(0>t||1342177279<t)throw RangeError("Invalid count value");t|=0;for(var o="";t;)1&t&&(o+=e),(t>>>=1)&&(e+=e);return o}},"es6","es3"),
$jscomp.polyfill("Object.setPrototypeOf",function(t){return t?t:$jscomp.setPrototypeOf},"es6","es5"),
$jscomp.owns=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},
$jscomp.assign=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.assign?Object.assign:function(t,e){for(var o=1;o<arguments.length;o++){var n=arguments[o];if(n)for(var r in n)$jscomp.owns(n,r)&&(t[r]=n[r])}return t},
$jscomp.iteratorFromArray=function(t,e){t instanceof String&&(t+="");var o=0,n=!1,r={next:function(){if(!n&&o<t.length){var r=o++;return{value:e(r,t[r]),done:!1}}return n=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r},
$jscomp.polyfill("Object.assign",function(t){return t?t:$jscomp.assign},"es6","es3"),
$jscomp.polyfill("Object.is",function(t){return t?t:function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},"es6","es3"),
$jscomp.polyfill("Object.getOwnPropertyNames",function(t){return t?t:function(obj){if (obj === null || obj === undefined) {throw new TypeError('Cannot convert undefined or null to object');};var result = [];for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {result.push(key);}};return result;};},"es6","es3"),
$jscomp.polyfill("Array.prototype.entries",function(t){return t?t:function(){return $jscomp.iteratorFromArray(this,function(t,e){return[t,e]})}},"es6","es3"),
$jscomp.polyfill("Array.prototype.keys",function(t){return t?t:function(){return $jscomp.iteratorFromArray(this,function(t){return t})}},"es6","es3"),
$jscomp.polyfill("Array.prototype.values",function(t){return t?t:function(){return $jscomp.iteratorFromArray(this,function(t,e){return e})}},"es8","es3"),
$jscomp.polyfill("Array.prototype.includes",function(t){return t?t:function(t,e){var o=this;o instanceof String&&(o=String(o));var n=o.length,r=e||0;for(0>r&&(r=Math.max(r+n,0));r<n;r++){var s=o[r];if(s===t||Object.is(s,t))return!0}return!1}},"es7","es3"),
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6-impl","es3"),
$jscomp.polyfill("Array.prototype.map",function(a){return a?a:function(c,d){var a=this;for(var e=a.length,f=Array(e),g=("string"==typeof a)?a.split(""):a,h=0;h<e;h++)h in g&&(f[h]=c.call(d,g[h],h,a));return f}},"es6","es3"),
$jscomp.polyfill("Array.prototype.filter",function(a){return a?a:function(c,d){var a=this;for(var e=a.length,z,f=Array(),g=("string"==typeof a)?a.split(""):a,h=0;h<e;h++)h in g&&(z=c.call(d,g[h],h,a),z&&f.push(g[h]));return f}},"es6","es3"),
$jscomp.polyfill("Array.prototype.forEach",function(a){return a?a:function(t,e){if(this==null)throw TypeError(" this is null or not defined");var n,r,e,i=Object(this),l=i.length>>>0;if("function"!=typeof t)throw TypeError(t+" is not a function");for(arguments.length>1&&(n=o),r=0;r<l;)r in i&&(e=i[r],t.call(n,e,r,i)),r++}},"es6","es3"),
$jscomp.polyfill("Array.prototype.some",function(a){return a?a:function(c){var a=this;for(var d=a.length,e=("string"==typeof a)?a.split(""):a,f=0;f<d;f++)if(f in e&&c.call(void 0,e[f],f,a))return!0;return!1}},"es6","es3"),
$jscomp.polyfill("Array.prototype.contains",function(a){return a?a:function(t,e){var o=this;o instanceof String&&(o=String(o));var n=o.length,r=e||0;for(0>r&&(r=Math.max(r+n,0));r<n;r++){var s=o[r];if(s===t||Object.is(s,t))return!0}return!1}},"es6","es3"),
$jscomp.polyfill("Array.prototype.last",function(a){return a?a:function(){return this[this.length - 1];}},"es6","es3"),
$jscomp.polyfill("Array.prototype.first",function(a){return a?a:function(){return this[0];}},"es6","es3"),
$jscomp.polyfill("Object.keys",function(z){return z?z:(function(){"use strict";var t=Object.prototype.hasOwnProperty,o=!({toString:null}).propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=n.length;return function(e){if("object"!=typeof e&&("function"!=typeof e||null===e))throw TypeError("Object.keys called on non-object");var i,l,f=[];for(i in e)t.call(e,i)&&f.push(i);if(o)for(l=0;l<r;l++)t.call(e,n[l])&&f.push(n[l]);return f}}());},"es6","es3"),
$jscomp.polyfill("Object.values",function(z){return z?z:(function(){"use strict";var t=Object.prototype.hasOwnProperty,o=!({toString:null}).propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=n.length;return function(e){if("object"!=typeof e&&("function"!=typeof e||null===e))throw TypeError("Object.keys called on non-object");var i,l,f=[];for(i in e)t.call(e,e[i])&&f.push(e[i]);if(o)for(l=0;l<r;l++)t.call(e,n[l])&&f.push(n[l]);return f}}());},"es6","es3"),
$jscomp.polyfill("Math.min",function(t){return t?t:function(){if (arguments.length === 0) { return Infinity; } ;var minVal = Infinity; for (var i = 0; i < arguments.length; i++) { var num = Number(arguments[i]); if (isNaN(num)) { return NaN; } if (num < minVal) { minVal = num; } } return minVal;}},"es6","es3"),
$jscomp.polyfill("Math.max",function(t){return t?t:function(){var maxVal = -Infinity; for (var i = 0; i < arguments.length; i++) { var currentVal = Number(arguments[i]); if (isNaN(currentVal)) { return NaN; } if (currentVal > maxVal) { maxVal = currentVal; } } return maxVal; }},"es6","es3"),
$jscomp.polyfill("String.prototype.trimLeft",function(t){return t?t:function(){return this.replace(/^[\s\xa0]+/,"")}},"es_2019","es3"),
$jscomp.polyfill("String.prototype.trim",function(t){return t?t:function(){return this.replace(/^\s+|\s+$/g, "");}},"es6","es3"),
$jscomp.polyfill("String.prototype.includes",function(t){return t?t:function(t,e){return -1!==$jscomp.checkStringArgs(this,t,"includes").indexOf(t,e||0)}},"es6","es3"),
$jscomp.polyfill("String.prototype.substr",function(t){return t?t:function(start,length){var str = String(this);var size = str.length;var intStart = start === undefined ? 0 : Number(start);if (intStart === -Infinity) {intStart = 0;} else if (intStart < 0) {intStart = Math.max(size + intStart, 0);} else {intStart = Math.min(intStart, size);};var intLength = length === undefined ? size : Number(length);intLength = Math.max(0, Math.min(intLength, size - intStart));return str.slice(intStart, intStart + intLength);}},"es6","es3"),
$jscomp.polyfill("String.prototype.substring",function(t){return t?t: function(start, end) {if (typeof start == "undefined"||start==null) {start = 0;};if (typeof end == "undefined"||end ==null) {end = this.length;};start = isNaN(start) ? 0 : Number(start);end = isNaN(end) ? 0 : Number(end);if (start < 0) {start = 0;};if (end < 0) {end = 0;};if (start > this.length) {start = this.length;};if (end > this.length) {end = this.length;};if (start > end) {var temp = start;start = end;end = temp;};var result = '';for (var i = start; i < end; i++) {result += this[i];};return result;}},"es6","es3"),
$jscomp.polyfill("String.prototype.replaceAll",function(a){return a?a:function(a, b) {if (typeof a !== "string" && !(a instanceof RegExp)) {throw new TypeError("First argument must be a string or RegExp");}
if (typeof b !== "function" && typeof b !== "string") {throw new TypeError("Second argument must be a function or string");};var c = a instanceof RegExp ? new RegExp(a,a.flags.includes('g') ?a.flags:a.flags + 'g'):new RegExp(a, 'g');return this.replace(c, typeof b === "function"?b:function(a){return b});};},"es6","es3"),
$jscomp.polyfill("isNaN",function(a){return a&&a!=null?a:function(c){return (c==NaN||(typeof c == "number"&&!(c>=0||c<0)));}},"es6","es3"),
$jscomp.polyfill("parseInt",function(a){return a&&a!=null?a:function(a,b){return $jscomp.parseIntPolyfill(a,b)}},"es6","es3"),
$jscomp.polyfill("parseFloat",function(a){return a?a:function(a,bi){var b=10;if(typeof bi != "undefined"&&bi!=null){b=bi};if(typeof a == "undefined"||a==null){return NaN;};var s=a;!(a instanceof String)&&(s=String(a));s=s.trim();var o1=0;var o2=0;if(s.indexOf(".")>-1){o2=("00"+s).split('.')[1];o1=s.split('.')[0];o2=parseInt(o2,b);o1=parseInt(o1,b);} else{return parseInt(a,b)};if(isNaN(o1)&&(isNaN(o2)||o2===0)){return o1};if(o2>0&&!isNaN(o2)){o2= o2/Math.pow(10, o2.toString().length)} else {o2=0};return (o1+o2);}},"es6","es3"),
$jscomp.polyfill("btoa",function(a){return a&&a!=null?a:function(input){var tab ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.=";var sp=tab.split('');for(var i in sp){if(sp.indexOf(sp[i])!=i||i>64){sp[i]=''}};tab=sp.join('');var output = "";var lens = input.length;var inp=[],i=0;while(i < lens&&!isNaN(input.charCodeAt(i))){var z=encodeURIComponent(input[i]);if(z.indexOf('%')>-1){z=z.split('%');for(var j in z){if(z[j]!=""){var u=parseInt(z[j],16);if(!isNaN(u)){inp.push(parseInt(z[j],16))} else {inp.push(parseInt(z[j]))}}}}else{inp.push(z.charCodeAt(0))};i=i+1};lens=inp.length;for(var i = 0; i < lens; i += 3){var triplet = (inp[i] << 16) | (i + 1 < lens ? inp[i+1] << 8 : 0) | (i + 2 < lens ? inp[i+2] : 0);for(var j = 0; j < 4; j++){if(i * 8 + j * 6 > inp.length * 8) output += "";else output += tab.charAt((triplet >>> 6*(3-j)) & 0x3F);}};if((output.length%4)>0){output=output.concat('=');if((output.length%4)>0){output=output.concat('=')};};return output;}},"es6","es3"),
$jscomp.polyfill("atob",function(a){return a&&a!=null?a:function(input){var tab ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.=";var sp=tab.split('');for(var i in sp){if(sp.indexOf(sp[i])!=i||i>64){sp[i]=''}};tab=sp.join('');var output = "";input = input.replace(/=+$/, "");var lens = input.length;for (var i = 0; i < (lens - (lens%4) + 4); i += 4) {var sextetA = tab.indexOf(input.charAt(i));var sextetB = tab.indexOf(input.charAt(i + 1));var sextetC = tab.indexOf(input.charAt(i + 2));var sextetD = tab.indexOf(input.charAt(i + 3));var triplet = (sextetA << 18) |(sextetB << 12) |((sextetC >= 0 ? sextetC : 0) << 6) |((sextetD >= 0 ? sextetD : 0));if (sextetC >= 0) output += String.fromCharCode((triplet >>> 16) & 0xFF);if (sextetD >= 0) {output += String.fromCharCode((triplet >>> 8) & 0xFF)};if(triplet>0){output += String.fromCharCode(triplet & 0xFF)};};if(output.endsWith('\u0000')){output = output.substring(0,output.length -1);if(output.endsWith('\u0000')){output = output.substring(0,output.length -1);}};try{return decodeURIComponent(escape(output));}catch(e){};return output;}},"es6","es3"),
$jscomp.polyfill("encodeURIComponent",function(a){return a&&a!=null?a:function(str){if (typeof str =="undefined"||str === null ) {return '';};!(str instanceof String)&&(str=String(str));str=str.replace(/[^a-zA-Z0-9\-\_\.\!\~\*\'\(\)]/g, function(c) {return '%'.concat(c.charCodeAt(0).toString(16).toUpperCase());});return str;}},"es6","es3"),
$jscomp.polyfill("decodeURIComponent",function(a){return a&&a!=null?a:function(str){if (typeof str =="undefined"||str === null ) {return '';};!(str instanceof String)&&(str=String(str));str=str.replace(/%[a-fA-F0-9][a-fA-F0-9]/g, function(c) {var d="".concat(c.charAt(1),c.charAt(2));try{return String.fromCharCode(parseInt(d,16));}catch(e){return c}});
return str;}},"es6","es3"),
$jscomp.polyfill("JSON",function(a){return a&&a!=null?a:(function(){"use strict";
var JSON={};(function(){"use strict";
function f(e){return e<10?"0"+e:e}function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}
function str(e,t){var n,r,i,s,o=gap,u,a=t[e];if(a&&typeof a==="object"&&typeof a.toJSON==="function"){a=a.toJSON(e)}if(typeof rep==="function"){a=rep.call(t,e,a)}switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null"}gap+=indent;u=[];
if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1){u[n]=str(n,a)||"null"}i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]";gap=o;return i}if(rep&&typeof rep==="object"){s=rep.length;for(n=0;n<s;n+=1){
if(typeof rep[n]==="string"){r=rep[n];i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}else{for(r in a){if(Object.prototype.hasOwnProperty.call(a,r)){i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}
i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}";gap=o;return i}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var cx,escapable,gap,indent,meta,rep;if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
JSON.stringify=function(e,t,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":e})}}
if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i==="object"){
for(n in i){if(Object.prototype.hasOwnProperty.call(i,n)){r=walk(i,n);if(r!==undefined){i[n]=r}else{delete i[n]}}}}return reviver.call(e,t,i)}var j;text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})();
return JSON})()},"es6","es3"),
$jscomp.polyfill("fetch",function(a){return a&&a!=null?a:(function(){"use strict";
function nMethode(m) {var um = m.toUpperCase();return (['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'].indexOf(um) > -1) ? um : m};
function getXhr() {
try {if (typeof XMLHttpRequest !== 'undefined') {return new XMLHttpRequest();}} catch (e) {}
var v = [
"MSXML2.XmlHttp.5.0",
"MSXML2.XmlHttp.4.0",
"MSXML2.XmlHttp.3.0",
"MSXML2.XmlHttp.2.0",
"Microsoft.XmlHttp"
];
var x;for(var i = 0; i < v.length; i++) {try {x = new ActiveXObject(v[i]);break;} catch (e) {}}
return x;
};
function gBody(options) {
if(typeof options != 'object'){return options||null}; 
var body;
if(typeof options.body == 'object'){body=options.body} else{
if (typeof options.body === 'string'||(typeof options.body === 'number'&&options.body!=0)) {
body="".concat(options.body);
if (/[^a-zA-Z0-9\-\_\.\!\~\*\'\%]/g.test(body)){body=encodeURIComponent(body)};
return body;
};
return null;
};
if (typeof body == 'object' && null!=body) {
var ret=[];
for(var n in body){
var v=body[n];
if(typeof n == "number"){
if (typeof v == "object" && null !==v){
v=gBody({body:v});
} else{
if(typeof v != "number"&&typeof v != "string" ){
v=null;
}}
if(null != v){
ret.push(encodeURIComponent(v));
} 
} else{
if (typeof v == "object" && null !==v){
v=gBody({body:v});
} else{
if(typeof v != "number"&&typeof v != "string" ){
v=null;
}}
if(null != v){
ret.push(encodeURIComponent(n)+'='+encodeURIComponent(v));
} else{
ret.push(encodeURIComponent(n));
}    
}};
if(ret.length){
return ret.join('&');
}};
return null;
}
function xhrReq(url, method, headers , mode , asyn) {
var xhr = getXhr();
xhr.open(method, url, asyn);
if (mode === 'cors') {
try {
xhr.withCredentials = true;
} catch (e) {}}
if (typeof headers == 'object' && null!=headers) {
for(var n in headers){
var v=headers[n];
try {
xhr.setRequestHeader(n,v);                
} catch (e) {}}}
if(method=='POST'&& typeof headers['Content-Type']=="undefined"){
try {
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
} catch (e) {}}
return xhr;
}
function f(){
var url=arguments[0];
var options=arguments.length>1?arguments[1]:{};
if(typeof arguments[0] == "object"){options=arguments[0];url=options.url||'/'}
if(typeof options != "object"||null==options){options={}}
var method=nMethode(options.method || 'GET');
var body=null;
var headers=options.headers||{};
var mode=options.mode||'GET';
body=gBody(options)||null;
try{
if ((method === 'GET' || method === 'HEAD' || method === '')) {
if(typeof body == "string"){
if(url.includes('?')){
if(url.includes('=')){
url=url+'&'+body;
} else{
url=url+body;
}}else{
url=url+'?'+body;
}} else{body=null}}else if(typeof body != "string"){
body=null;
}}catch(e){}
return new Promise(function(res,rej){
var xhr = xhrReq(url, method , headers,mode , !0);
if(typeof xhr.text != "function"){xhr.text=function(){return new Promise(function(res2,rej2){try{res2(xhr.responseText);return xhr.responseText}catch(e){return rej2(e)}})}}
if(typeof xhr.json != "function"){xhr.json=function(){return new Promise(function(res2,rej2){try{var tx=xhr.responseText;res2(JSON.parse(tx));return JSON.parse(tx)}catch(e){return rej2(e)}})}}
xhr.onreadystatechange = function(){if(4===xhr.readyState){res(xhr);return xhr}};
xhr.onload = function(){if(4===xhr.readyState){res(xhr);return xhr}};
xhr.onerror = rej;
if (null!=body) {
body="".concat(body);
if(body==''){body=null};
try{xhr.send(body)}catch(e){return rej(e)}} else{
try{xhr.send()}catch(e){return rej(e)}}})
}
return f;
})()});
Function.prototype.appendFunction||(Function.prototype.appendFunction=function(a){var b=this.name;"function"!=typeof window[b]?console.warn("function "+b+" is not exist"):window[b]=function(c){return function(){c.apply(null,arguments);a.apply(null,arguments)}}(window[b])});
function md5safe_add(x, y){var lsw = (x & 0xFFFF) + (y & 0xFFFF);var msw = (x >> 16) + (y >> 16) + (lsw >> 16);return (msw << 16) | (lsw & 0xFFFF);};function rol(num, cnt){return (num << cnt) | (num >>> (32 - cnt))};
function md5cmn(q, a, b, x, s, t){return  md5safe_add(rol( md5safe_add( md5safe_add(a, q),  md5safe_add(x, t)), s), b)};function md5ff(a, b, c, d, x, s, t){return md5cmn((b & c) | ((~b) & d), a, b, x, s, t)};function md5gg(a, b, c, d, x, s, t){return md5cmn((b & d) | (c & (~d)), a, b, x, s, t)};
function md5hh(a, b, c, d, x, s, t){return md5cmn(b ^ c ^ d, a, b, x, s, t)};function md5ii(a, b, c, d, x, s, t){return md5cmn(c ^ (b | (~d)), a, b, x, s, t)};function coreMD5(x){var a =  1732584193;var b = -271733879;var c = -1732584194;var d =  271733878;for(i = 0; i < x.length; i += 16){
var olda = a;var oldb = b;var oldc = c;var oldd = d;a = md5ff(a, b, c, d, x[i+ 0], 7 , -680876936);d = md5ff(d, a, b, c, x[i+ 1], 12, -389564586);c = md5ff(c, d, a, b, x[i+ 2], 17,  606105819);b = md5ff(b, c, d, a, x[i+ 3], 22, -1044525330);a = md5ff(a, b, c, d, x[i+ 4], 7 , -176418897);d = md5ff(d, a, b, c, x[i+ 5], 12,  1200080426);
c = md5ff(c, d, a, b, x[i+ 6], 17, -1473231341);b = md5ff(b, c, d, a, x[i+ 7], 22, -45705983);a = md5ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);d = md5ff(d, a, b, c, x[i+ 9], 12, -1958414417);c = md5ff(c, d, a, b, x[i+10], 17, -42063);b = md5ff(b, c, d, a, x[i+11], 22, -1990404162);a = md5ff(a, b, c, d, x[i+12], 7 ,  1804603682);
d = md5ff(d, a, b, c, x[i+13], 12, -40341101);c = md5ff(c, d, a, b, x[i+14], 17, -1502002290);b = md5ff(b, c, d, a, x[i+15], 22,  1236535329);a = md5gg(a, b, c, d, x[i+ 1], 5 , -165796510);d = md5gg(d, a, b, c, x[i+ 6], 9 , -1069501632);c = md5gg(c, d, a, b, x[i+11], 14,  643717713);b = md5gg(b, c, d, a, x[i+ 0], 20, -373897302);
a = md5gg(a, b, c, d, x[i+ 5], 5 , -701558691);d = md5gg(d, a, b, c, x[i+10], 9 ,  38016083);c = md5gg(c, d, a, b, x[i+15], 14, -660478335);b = md5gg(b, c, d, a, x[i+ 4], 20, -405537848);a = md5gg(a, b, c, d, x[i+ 9], 5 ,  568446438);d = md5gg(d, a, b, c, x[i+14], 9 , -1019803690);c = md5gg(c, d, a, b, x[i+ 3], 14, -187363961);
b = md5gg(b, c, d, a, x[i+ 8], 20,  1163531501);a = md5gg(a, b, c, d, x[i+13], 5 , -1444681467);d = md5gg(d, a, b, c, x[i+ 2], 9 , -51403784);c = md5gg(c, d, a, b, x[i+ 7], 14,  1735328473);b = md5gg(b, c, d, a, x[i+12], 20, -1926607734);a = md5hh(a, b, c, d, x[i+ 5], 4 , -378558);d = md5hh(d, a, b, c, x[i+ 8], 11, -2022574463);
c = md5hh(c, d, a, b, x[i+11], 16,  1839030562);b = md5hh(b, c, d, a, x[i+14], 23, -35309556);a = md5hh(a, b, c, d, x[i+ 1], 4 , -1530992060);d = md5hh(d, a, b, c, x[i+ 4], 11,  1272893353);c = md5hh(c, d, a, b, x[i+ 7], 16, -155497632);b = md5hh(b, c, d, a, x[i+10], 23, -1094730640);a = md5hh(a, b, c, d, x[i+13], 4 ,  681279174);
d = md5hh(d, a, b, c, x[i+ 0], 11, -358537222);c = md5hh(c, d, a, b, x[i+ 3], 16, -722521979);b = md5hh(b, c, d, a, x[i+ 6], 23,  76029189);a = md5hh(a, b, c, d, x[i+ 9], 4 , -640364487);d = md5hh(d, a, b, c, x[i+12], 11, -421815835);c = md5hh(c, d, a, b, x[i+15], 16,  530742520);b = md5hh(b, c, d, a, x[i+ 2], 23, -995338651);
a = md5ii(a, b, c, d, x[i+ 0], 6 , -198630844);d = md5ii(d, a, b, c, x[i+ 7], 10,  1126891415);c = md5ii(c, d, a, b, x[i+14], 15, -1416354905);b = md5ii(b, c, d, a, x[i+ 5], 21, -57434055);a = md5ii(a, b, c, d, x[i+12], 6 ,  1700485571);d = md5ii(d, a, b, c, x[i+ 3], 10, -1894986606);c = md5ii(c, d, a, b, x[i+10], 15, -1051523);
b = md5ii(b, c, d, a, x[i+ 1], 21, -2054922799);a = md5ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);d = md5ii(d, a, b, c, x[i+15], 10, -30611744);c = md5ii(c, d, a, b, x[i+ 6], 15, -1560198380);b = md5ii(b, c, d, a, x[i+13], 21,  1309151649);a = md5ii(a, b, c, d, x[i+ 4], 6 , -145523070);d = md5ii(d, a, b, c, x[i+11], 10, -1120210379);
c = md5ii(c, d, a, b, x[i+ 2], 15,  718787259);b = md5ii(b, c, d, a, x[i+ 9], 21, -343485551);a =  md5safe_add(a, olda);b =  md5safe_add(b, oldb);c =  md5safe_add(c, oldc);d =  md5safe_add(d, oldd)};return [a, b, c, d]}
function binl2hex(binarray){var hex_tab = "0123456789abcdef";var str = "";for(var i = 0; i < binarray.length * 4; i++){str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +hex_tab.charAt((binarray[i>>2] >> ((i%4)*8)) & 0xF)};return str;}
function md5str2binl(str){var nblk = ((str.length + 8) >> 6) + 1 ;var blks = new Array(nblk * 16);for(var i = 0; i < nblk * 16; i++){blks[i] = 0};for(var i = 0; i < str.length; i++){blks[i>>2] |= (str.charCodeAt(i) & 0xFF) << ((i%4) * 8)};blks[i>>2] |= 0x80 << ((i%4) * 8);blks[nblk*16-2] = str.length * 8;return blks;}
function hexMD5(str) {return binl2hex(coreMD5(md5str2binl(str))).toLowerCase();}
//URL
(typeof window!=="undefined")&&(function(t){var e=function(){try{return!!Symbol.iterator}catch(e){return false}};var r=e();var n=function(t){var e={next:function(){var e=t.shift();return{done:e===void 0,value:e}}};if(r){e[Symbol.iterator]=function(){return e}}return e};var i=function(e){return encodeURIComponent(e).replace(/%20/g,"+")};var o=function(e){return decodeURIComponent(String(e).replace(/\+/g," "))};var a=function(){var a=function(e){Object.defineProperty(this,"_entries",{writable:true,value:{}});var t=typeof e;if(t==="undefined"){}else if(t==="string"){if(e!==""){this._fromString(e)}}else if(e instanceof a){var r=this;e.forEach(function(e,t){r.append(t,e)})}else if(e!==null&&t==="object"){if(Object.prototype.toString.call(e)==="[object Array]"){for(var n=0;n<e.length;n++){var i=e[n];if(Object.prototype.toString.call(i)==="[object Array]"||i.length!==2){this.append(i[0],i[1])}else{throw new TypeError("Expected [string, any] as entry at index "+n+" of URLSearchParams's input")}}}else{for(var o in e){if(e.hasOwnProperty(o)){this.append(o,e[o])}}}}else{throw new TypeError("Unsupported input's type for URLSearchParams")}};var e=a.prototype;e.append=function(e,t){if(e in this._entries){this._entries[e].push(String(t))}else{this._entries[e]=[String(t)]}};e.delete=function(e){delete this._entries[e]};e.get=function(e){return e in this._entries?this._entries[e][0]:null};e.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]};e.has=function(e){return e in this._entries};e.set=function(e,t){this._entries[e]=[String(t)]};e.forEach=function(e,t){var r;for(var n in this._entries){if(this._entries.hasOwnProperty(n)){r=this._entries[n];for(var i=0;i<r.length;i++){e.call(t,r[i],n,this)}}}};e.keys=function(){var r=[];this.forEach(function(e,t){r.push(t)});return n(r)};e.values=function(){var t=[];this.forEach(function(e){t.push(e)});return n(t)};e.entries=function(){var r=[];this.forEach(function(e,t){r.push([t,e])});return n(r)};if(r){e[Symbol.iterator]=e.entries}e.toString=function(){var r=[];this.forEach(function(e,t){r.push(i(t)+"="+i(e))});return r.join("&")};t.URLSearchParams=a};var s=function(){try{var e=t.URLSearchParams;return new e("?a=1").toString()==="a=1"&&typeof e.prototype.set==="function"&&typeof e.prototype.entries==="function"}catch(e){return false}};if(!s()){a()}var f=t.URLSearchParams.prototype;if(typeof f.sort!=="function"){f.sort=function(){var r=this;var n=[];this.forEach(function(e,t){n.push([t,e]);if(!r._entries){r.delete(t)}});n.sort(function(e,t){if(e[0]<t[0]){return-1}else if(e[0]>t[0]){return+1}else{return 0}});if(r._entries){r._entries={}}for(var e=0;e<n.length;e++){this.append(n[e][0],n[e][1])}}}if(typeof f._fromString!=="function"){Object.defineProperty(f,"_fromString",{enumerable:false,configurable:false,writable:false,value:function(e){if(this._entries){this._entries={}}else{var r=[];this.forEach(function(e,t){r.push(t)});for(var t=0;t<r.length;t++){this.delete(r[t])}}e=e.replace(/^\?/,"");var n=e.split("&");var i;for(var t=0;t<n.length;t++){i=n[t].split("=");this.append(o(i[0]),i.length>1?o(i[1]):"")}}})}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);(function(u){var e=function(){try{var e=new u.URL("b","http://a");e.pathname="c d";return e.href==="http://a/c%20d"&&e.searchParams}catch(e){return false}};var t=function(){var t=u.URL;var e=function(e,t){if(typeof e!=="string")e=String(e);if(t&&typeof t!=="string")t=String(t);var r=document,n;if(t&&(u.location===void 0||t!==u.location.href)){t=t.toLowerCase();r=document.implementation.createHTMLDocument("");n=r.createElement("base");n.href=t;r.head.appendChild(n);try{if(n.href.indexOf(t)!==0)throw new Error(n.href)}catch(e){throw new Error("URL unable to set base "+t+" due to "+e)}}var i=r.createElement("a");i.href=e;if(n){r.body.appendChild(i);i.href=i.href}var o=r.createElement("input");o.type="url";o.value=e;if(i.protocol===":"||!/:/.test(i.href)||!o.checkValidity()&&!t){throw new TypeError("Invalid URL")}Object.defineProperty(this,"_anchorElement",{value:i});var a=new u.URLSearchParams(this.search);var s=true;var f=true;var c=this;["append","delete","set"].forEach(function(e){var t=a[e];a[e]=function(){t.apply(a,arguments);if(s){f=false;c.search=a.toString();f=true}}});Object.defineProperty(this,"searchParams",{value:a,enumerable:true});var h=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:false,configurable:false,writable:false,value:function(){if(this.search!==h){h=this.search;if(f){s=false;this.searchParams._fromString(this.search);s=true}}}})};var r=e.prototype;var n=function(t){Object.defineProperty(r,t,{get:function(){return this._anchorElement[t]},set:function(e){this._anchorElement[t]=e},enumerable:true})};["hash","host","hostname","port","protocol"].forEach(function(e){n(e)});Object.defineProperty(r,"search",{get:function(){return this._anchorElement["search"]},set:function(e){this._anchorElement["search"]=e;this._updateSearchParams()},enumerable:true});Object.defineProperties(r,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e;this._updateSearchParams()},enumerable:true},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:true},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol];var t=this._anchorElement.port!=e&&this._anchorElement.port!=="";return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:true},password:{get:function(){return""},set:function(e){},enumerable:true},username:{get:function(){return""},set:function(e){},enumerable:true}});e.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)};e.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)};u.URL=e};if(!e()){t()}if(u.location!==void 0&&!("origin"in u.location)){var r=function(){return u.location.protocol+"//"+u.location.hostname+(u.location.port?":"+u.location.port:"")};try{Object.defineProperty(u.location,"origin",{get:r,enumerable:true})}catch(e){setInterval(function(){u.location.origin=r()},100)}}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);
//Mustache
(function(l,u){"object"===typeof exports&&exports&&"string"!==typeof exports.nodeName?u(exports):"function"===typeof define&&define.amd?define(["exports"],u):(l.Mustache={},u(l.Mustache))})(this,function(l){function u(a){return"function"===typeof a}function B(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function D(a,b){return null!=a&&"object"===typeof a&&b in a}function F(a,b){function c(r){"string"===typeof r&&(r=r.split(G,2));if(!z(r)||2!==r.length)throw Error("Invalid tags: "+r);
p=new RegExp(B(r[0])+"\\s*");t=new RegExp("\\s*"+B(r[1]));A=new RegExp("\\s*"+B("}"+r[1]))}if(!a)return[];var d=[],e=[],g=[],h=!1,f=!1,p,t,A;c(b||l.tags);for(var m=new y(a),v,k,q,w;!m.eos();){v=m.pos;if(q=m.scanUntil(p)){w=0;for(var H=q.length;w<H;++w)if(k=q.charAt(w),I.call(J,k)?f=!0:g.push(e.length),e.push(["text",k,v,v+1]),v+=1,"\n"===k){if(h&&!f)for(;g.length;)delete e[g.pop()];else g=[];f=h=!1}}if(!m.scan(p))break;h=!0;k=m.scan(K)||"name";m.scan(L);"="===k?(q=m.scanUntil(E),m.scan(E),m.scanUntil(t)):
"{"===k?(q=m.scanUntil(A),m.scan(M),m.scanUntil(t),k="&"):q=m.scanUntil(t);if(!m.scan(t))throw Error("Unclosed tag at "+m.pos);w=[k,q,v,m.pos];e.push(w);if("#"===k||"^"===k)d.push(w);else if("/"===k){k=d.pop();if(!k)throw Error('Unopened section "'+q+'" at '+v);if(k[1]!==q)throw Error('Unclosed section "'+k[1]+'" at '+v);}else"name"===k||"{"===k||"&"===k?f=!0:"="===k&&c(q)}if(k=d.pop())throw Error('Unclosed section "'+k[1]+'" at '+m.pos);return N(O(e))}function O(a){for(var b=[],c,d,e=0,g=a.length;e<
g;++e)if(c=a[e])"text"===c[0]&&d&&"text"===d[0]?(d[1]+=c[1],d[3]=c[3]):(b.push(c),d=c);return b}function N(a){for(var b=[],c=b,d=[],e,g=0,h=a.length;g<h;++g)switch(e=a[g],e[0]){case "#":case "^":c.push(e);d.push(e);c=e[4]=[];break;case "/":c=d.pop();c[5]=e[2];c=0<d.length?d[d.length-1][4]:b;break;default:c.push(e)}return b}function y(a){this.tail=this.string=a;this.pos=0}function x(a,b){this.view=a;this.cache={".":this.view};this.parent=b}function n(){this.cache={}}var P=Object.prototype.toString,
z=Array.isArray||function(a){return"[object Array]"===P.call(a)},I=RegExp.prototype.test,J=/\S/,Q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},L=/\s*/,G=/\s+/,E=/\s*=/,M=/\s*\}/,K=/#|\^|\/|>|\{|&|=|!/;y.prototype.eos=function(){return""===this.tail};y.prototype.scan=function(a){a=this.tail.match(a);if(!a||0!==a.index)return"";a=a[0];this.tail=this.tail.substring(a.length);this.pos+=a.length;return a};y.prototype.scanUntil=function(a){a=this.tail.search(a);
switch(a){case -1:var b=this.tail;this.tail="";break;case 0:b="";break;default:b=this.tail.substring(0,a),this.tail=this.tail.substring(a)}this.pos+=b.length;return b};x.prototype.push=function(a){return new x(a,this)};x.prototype.lookup=function(a){var b=this.cache;if(b.hasOwnProperty(a))var c=b[a];else{for(var d=this,e,g,h=!1;d;){if(0<a.indexOf("."))for(c=d.view,e=a.split("."),g=0;null!=c&&g<e.length;)g===e.length-1&&(h=D(c,e[g])),c=c[e[g++]];else c=d.view[a],h=D(d.view,a);if(h)break;d=d.parent}b[a]=
c}u(c)&&(c=c.call(this.view));return c};n.prototype.clearCache=function(){this.cache={}};n.prototype.parse=function(a,b){var c=this.cache,d=c[a];null==d&&(d=c[a]=F(a,b));return d};n.prototype.render=function(a,b,c){var d=this.parse(a);b=b instanceof x?b:new x(b);return this.renderTokens(d,b,c,a)};n.prototype.renderTokens=function(a,b,c,d){for(var e="",g,h,f,p=0,t=a.length;p<t;++p)f=void 0,g=a[p],h=g[0],"#"===h?f=this.renderSection(g,b,c,d):"^"===h?f=this.renderInverted(g,b,c,d):">"===h?f=this.renderPartial(g,
b,c,d):"&"===h?f=this.unescapedValue(g,b):"name"===h?f=this.escapedValue(g,b):"text"===h&&(f=this.rawValue(g)),void 0!==f&&(e+=f);return e};n.prototype.renderSection=function(a,b,c,d){function e(A){return g.render(A,b,c)}var g=this,h="",f=b.lookup(a[1]);if(f){if(z(f))for(var p=0,t=f.length;p<t;++p)h+=this.renderTokens(a[4],b.push(f[p]),c,d);else if("object"===typeof f||"string"===typeof f||"number"===typeof f)h+=this.renderTokens(a[4],b.push(f),c,d);else if(u(f)){if("string"!==typeof d)throw Error("Cannot use higher-order sections without the original template");
f=f.call(b.view,d.slice(a[3],a[5]),e);null!=f&&(h+=f)}else h+=this.renderTokens(a[4],b,c,d);return h}};n.prototype.renderInverted=function(a,b,c,d){var e=b.lookup(a[1]);if(!e||z(e)&&0===e.length)return this.renderTokens(a[4],b,c,d)};n.prototype.renderPartial=function(a,b,c){if(c&&(a=u(c)?c(a[1]):c[a[1]],null!=a))return this.renderTokens(this.parse(a),b,c,a)};n.prototype.unescapedValue=function(a,b){var c=b.lookup(a[1]);if(null!=c)return c};n.prototype.escapedValue=function(a,b){var c=b.lookup(a[1]);
if(null!=c)return l.escape(c)};n.prototype.rawValue=function(a){return a[1]};l.name="mustache.js";l.version="2.2.1";l.tags=["{{","}}"];var C=new n;l.clearCache=function(){return C.clearCache()};l.parse=function(a,b){return C.parse(a,b)};l.render=function(a,b,c){if("string"!==typeof a)throw b=TypeError,a=z(a)?"array":typeof a,new b('Invalid template! Template should be a "string" but "'+a+'" was given as the first argument for mustache#render(template, view, partials)');return C.render(a,b,c)};l.to_html=
function(a,b,c,d){a=l.render(a,b,c);if(u(d))d(a);else return a};l.escape=function(a){return String(a).replace(/[&<>"'`=\/]/g,function(b){return Q[b]})};l.Scanner=y;l.Context=x;l.Writer=n});
//classList
if ("document" in this || "document" in window.self) {
if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {(function (view) {"use strict";    
if (!('Element' in view)) return;
var classListProp = "classList"
, protoProp = "prototype"
, elemCtrProto = view.Element[protoProp]
, objCtr = Object
, strTrim = String[protoProp].trim || function () {
return this.replace(/^\s+|\s+$/g, "");
}
, arrIndexOf = Array[protoProp].indexOf || function (item) {
var i = 0
, len = this.length
;
for (; i < len; i++) {
if (i in this && this[i] === item) {
return i;
}}
return -1;
}
// Vendors: please allow content code to instantiate DOMExceptions
, DOMEx = function (type, message) {
this.name = type;
this.code = DOMException[type];
this.message = message;
}
, checkTokenAndGetIndex = function (classList, token) {
if (token === "") {
throw new DOMEx(
"SYNTAX_ERR"
, "An invalid or illegal string was specified"
);
}
if (/\s/.test(token)) {
throw new DOMEx(
"INVALID_CHARACTER_ERR"
, "String contains an invalid character"
);
}
return arrIndexOf.call(classList, token);
}
, ClassList = function (elem) {
var trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
, i = 0
, len = classes.length
;
for (; i < len; i++) {
this.push(classes[i]);
}
this._updateClassName = function () {
elem.setAttribute("class", this.toString());
};
}
, classListProto = ClassList[protoProp] = []
, classListGetter = function () {
return new ClassList(this);
}
;
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
return this[i] || null;
};
classListProto.contains = function (token) {
token += "";
return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
var tokens = arguments
, i = 0
, l = tokens.length
, token
, updated = false
;
do {
token = tokens[i] + "";
if (checkTokenAndGetIndex(this, token) === -1) {
this.push(token);
updated = true;
}}
while (++i < l);
if (updated) {
this._updateClassName();
}};
classListProto.remove = function () {
var tokens = arguments
, i = 0
, l = tokens.length
, token
, updated = false
, index
;
do {
token = tokens[i] + "";
index = checkTokenAndGetIndex(this, token);
while (index !== -1) {
this.splice(index, 1);
updated = true;
index = checkTokenAndGetIndex(this, token);
}}
while (++i < l);
if (updated) {
this._updateClassName();
}};
classListProto.toggle = function (token, force) {
token += "";
var result = this.contains(token)
, method = result ?
force !== true && "remove":
force !== false && "add";
if (method) {
this[method](token);
}
if (force === true || force === false) {
return force;
} else {
return !result;
}};
classListProto.toString = function () {
return this.join(" ");
};
if (objCtr.defineProperty) {
var classListPropDesc = {get: classListGetter, enumerable: true, configurable: true};
try {
objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
} catch (ex) { 
if (ex.number === undefined || ex.number === -0x7FF5EC54) {
classListPropDesc.enumerable = false;
objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
}}} else if (objCtr[protoProp].__defineGetter__) {
elemCtrProto.__defineGetter__(classListProp, classListGetter);
}}(window.self));
}
(function () {
"use strict";
var testElement = document.createElement("_");
testElement.classList.add("c1", "c2");
if (!testElement.classList.contains("c2")) {
var createMethod = function(method) {
var original = DOMTokenList.prototype[method];
DOMTokenList.prototype[method] = function(token) {
var i, len = arguments.length;
for (i = 0; i < len; i++) {
token = arguments[i];
original.call(this, token);
}};
};
createMethod('add');
createMethod('remove');
}
testElement.classList.toggle("c3", false);
// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
// support the second argument.
if (testElement.classList.contains("c3")) {
var _toggle = DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle = function(token, force) {
if (1 in arguments && !this.contains(token) === !force) {
return force;
} else {
return _toggle.call(this, token);
}};
}
testElement = null;
}());
}