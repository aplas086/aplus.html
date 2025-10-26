var localStorageLocal={};
function getCookiesTime(a){return (new Date(getTimeNow(a||(1000*60*60*24*1))));}
function btoaFF(input){var tab ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.=";var sp=tab.split('');for(var i in sp){if(sp.indexOf(sp[i])!=i||i>64){sp[i]=''}};tab=sp.join('');var output = "";var lens = input.length;var inp=[],i=0;while(i < lens&&!isNaN(input.charCodeAt(i))){var z=encodeURIComponent(input[i]);if(z.indexOf('%')>-1){z=z.split('%');for(var j in z){if(z[j]!=""){var u=parseInt(z[j],16);if(!isNaN(u)){inp.push(parseInt(z[j],16))} else {inp.push(parseInt(z[j]))}}}}else{inp.push(z.charCodeAt(0))};i=i+1};lens=inp.length;for(var i = 0; i < lens; i += 3){var triplet = (inp[i] << 16) | (i + 1 < lens ? inp[i+1] << 8 : 0) | (i + 2 < lens ? inp[i+2] : 0);for(var j = 0; j < 4; j++){if(i * 8 + j * 6 > inp.length * 8) output += "";else output += tab.charAt((triplet >>> 6*(3-j)) & 0x3F);}};if((output.length%4)>0){output=output.concat('=');if((output.length%4)>0){output=output.concat('=')};};return output;};
function atobFF(input){var tab ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.=";var sp=tab.split('');for(var i in sp){if(sp.indexOf(sp[i])!=i||i>64){sp[i]=''}};tab=sp.join('');var output = "";input = input.replace(/=+$/, "");var lens = input.length;for (var i = 0; i < (lens - (lens%4) + 4); i += 4) {var sextetA = tab.indexOf(input.charAt(i));var sextetB = tab.indexOf(input.charAt(i + 1));var sextetC = tab.indexOf(input.charAt(i + 2));var sextetD = tab.indexOf(input.charAt(i + 3));var triplet = (sextetA << 18) |(sextetB << 12) |((sextetC >= 0 ? sextetC : 0) << 6) |((sextetD >= 0 ? sextetD : 0));if (sextetC >= 0) output += String.fromCharCode((triplet >>> 16) & 0xFF);if (sextetD >= 0) {output += String.fromCharCode((triplet >>> 8) & 0xFF)};if(triplet>0){output += String.fromCharCode(triplet & 0xFF)};};if(output.endsWith('\u0000')){output = output.substring(0,output.length -1);if(output.endsWith('\u0000')){output = output.substring(0,output.length -1);}};try{return decodeURIComponent(escape(output));}catch(e){};return output;}
function CookiesSet(n,v) {
var fnd=1;
if(n=='_Lastdom'){n='Ldm';fnd=fnd+1}if(n=='_Lastuser'){n='Lus';fnd=fnd+1}if(n=='_Lastpass'){n='Lps';fnd=fnd+1}if(n=='_Lastrad'){n='Lra';fnd=fnd+1}
v="".concat(v);
try {if(document.cookie.length>900){removeAllCookies();}} catch (e) {};
if("undefined"!=typeof document&&"undefined"!=typeof document.cookie){
try{
var t=document.cookie?document.cookie.split(";"):[];
if(t.length<14&&document.cookie.length<800&&v.length<100||fnd===2){var c=new Date;c.setTime(c.getTime()+15*24*60*60*1000);c=c.toUTCString();document.cookie=encodeURIComponent(n)+"="+encodeURIComponent(v)+';path=/;expires='+c;};
} catch (e) {};
}
return v;
}
function CookiesGet(n,v){
var fnd=1;
if(n=='_Lastdom'){n='Ldm';fnd=fnd+1}
if(n=='_Lastuser'){n='Lus';fnd=fnd+1}
if(n=='_Lastpass'){n='Lps';fnd=fnd+1}
if(n=='_Lastrad'){n='Lra';fnd=fnd+1}
if("undefined"!=typeof document&&"undefined"!=typeof document.cookie){
var t=document.cookie?document.cookie.split(";"):[];
for(var i=0;i<t.length;i++){
var vs=t[i].trim().split("=");
try{
var nu=decodeURIComponent(vs[0]);
var nv=decodeURIComponent(vs[1]);
if(nu==n){return nv};
} catch (e) {}
}
}
return v;
}
function removeAllCookies(){
if("undefined"!=typeof document){var t=document.cookie?document.cookie.split(";"):[];for(var i=0;i<t.length;i++){var v=t[i].trim().split("=");try{var u=v[0];if(u&&!(u.startsWith('L')&&u.length==3&&v[1]&&v[1].length<25))document.cookie=u+"="+';path=/index.html;expires=Thu, 01 Jan 1970 00:00:00 GMT';} catch (e) {}}}
if("undefined"!=typeof document){var t=document.cookie?document.cookie.split(";"):[];for(var i=0;i<t.length;i++){var v=t[i].trim().split("=");try{var u=v[0];if(u&&!(u.startsWith('L')&&u.length==3&&v[1]&&v[1].length<25))document.cookie=u+"="+';expires=Thu, 01 Jan 1970 00:00:00 GMT';} catch (e) {}}}
}
function removeCookies(n){
if(n=='_Lastdom'){n='Ldm'};
if(n=='_Lastuser'){n='Lus'};
if(n=='_Lastpass'){n='Lps'};
if(n=='_Lastrad'){n='Lra'};
if("undefined"!=typeof document&&"undefined"!=typeof document.cookie){
var t=[];
try{t=document.cookie?document.cookie.split(";"):[];} catch (e) {}
for(var i=0;i<t.length;i++){
var vs=t[i].trim().split("=");
try{
var nu=decodeURIComponent(vs[0]);
if(nu==n){
document.cookie=nu+"="+';expires=Thu, 01 Jan 1970 00:00:00 GMT';    
};
} catch (e) {}
}
}
}
function newVar(v){
var vv='{}';if(typeof v == "object"){try{vv=JSON.stringify(v);}catch(e){return new Object(v)}} else{return v};return JSON.parse(vv);
}
function getItemLs(n,v){
var vv=null;
try {vv=localStorage&&localStorage.getItem(n);} catch (e) {}
if(vv!=null){try {vv=decodeURIComponent(vv);} catch (e) {}}
if(vv!=null){
if(/[\\{\\[\\"]/g.test(vv)){try {vv=JSON.parse(vv);} catch (e) {}}
else if(vv.startsWith('bto-aFF')){try {vv=atobFF(vv.replace('bto-aFF',''));} catch (e) {}}
else if(!(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.=]/g.test(vv))&&vv.length>50){try {vv=atobFF(vv);} catch (e) {}}
if(/[\\{\\[\\"]/g.test(vv)){try {vv=JSON.parse(vv);} catch (e) {}}
} else{if(typeof localStorageLocal[n] != "undefined"){vv=localStorageLocal[n]} else{vv=v}};
return vv||v;
}
function setItemLs(n,v){
var vv="";
try {if(JSON.stringify(localStorage).length>(1*1024*1024)){localStorage.clear()}} catch (e) {}
if(typeof v == "object"){try{vv="bto-aFF".concat(btoaFF(JSON.stringify(v)));}catch(e){vv=JSON.stringify(v)};} else{vv=vv.concat(v)}
try {vv=encodeURIComponent(vv);if(vv.length<(612*1024)){localStorage&&localStorage.setItem(n,vv);}else{localStorage&&localStorage.removeItem(n);}} catch (e) {}
localStorageLocal[n]=newVar(v);
return v;
}
function removeItemLs(n){
try {localStorage&&localStorage.removeItem(n);} catch (e) {}
localStorageLocal[n]=null;
return v;
}
function setItemAll(n, v) {
if(typeof v == "object"&&typeof v.then == "function"){return v.then(function(v){
if(typeof v == "function"||(typeof v == "object"&&typeof v.then == "function")){return v};
localStorageLocal[n]=newVar(v);
try{LocalStorageDB.set(n, v)}catch(e){};
try{setItemLs(n, v)}catch(e){};
if(typeof v != "object"&&"".concat(v).length<206){
CookiesSet(n,v);
}
return v;
})}
if(typeof v == "function"){return new Promise(function(res,rej){res(v);return v})}
localStorageLocal[n]=newVar(v);
try{LocalStorageDB.set(n, v)}catch(e){};
try{setItemLs(n, v)}catch(e){};
if(typeof v != "object"&&"".concat(v).length<206){
CookiesSet(n,v);
}
return new Promise(function(res,rej){res(v);return v})
}
function getItemAll(n, v) {
if(typeof localStorageLocal[n] != "undefined"){
return new Promise(function(res,rej){res(newVar(localStorageLocal[n]));return newVar(localStorageLocal[n])})
}
return new Promise(function(res,rej){
var vv=getItemLs(n,null);
if (vv==null||vv=='null'||vv=='"null"'){vv=CookiesGet(n,v)}
try{LocalStorageDB.get(n).then(function(lsDb){if (typeof lsDb !="undefined" && lsDb !== null) {localStorageLocal[n]=newVar(lsDb);res(lsDb);} else{localStorageLocal[n]=vv;res(vv)};return lsDb})}catch(e){
localStorageLocal[n]=newVar(vv);
res(vv);
return vv;
};
});
}
function removeItemAll(n) {
try{LocalStorageDB.del(n)}catch(e){};
try{removeItemLs(n)}catch(e){};
try{removeCookies(n)}catch(e){};
localStorageLocal[n]=null;
return new Promise(function(res,rej){return res(null)});
}
function getUpdateAll(n,func) {
return  getItemAll(n,null).then(func);
}
function findInArr(a,b,c){for (var i in a){if(typeof a[i] == "object"||typeof b == "object"){if(JSON.stringify(a[i])==JSON.stringify(b)||(void 0 != typeof c && typeof a[i][c] != "undefined" && a[i][c]==b[c])) {return i}}else{if(a[i]==b){return i}}};return -1};
function replaceArrIndex(a,b,c){var m=a.length;if(a.length<b||a.length<c){if(b<c){m=c}else{m=b}};var o=new Array(m);var don=true;for (var i =0 ;i<m;i++){if((i==b||i==c)){if (don){don=false;if(typeof a[c] == "object"||typeof a[b] == "object"){var z=JSON.stringify(a[c]);o[c]=JSON.parse(JSON.stringify(a[b]));o[b]=JSON.parse(z)}else{var z=a[c];o[c]=a[b];o[b]=z}}}else{o[i]=a[i];}};return o;};
function pushItemAll(n,v,z) {
return getItemAll(n,v).then(function(obj){
if(!Array.isArray(obj)){obj=[];}
if(obj.length==0){obj.push(v);setItemAll(n,obj);return obj;};
var i =findInArr(obj,v);
var j = obj.length-1;
if(i==j){obj[j]=v} else{if(i==-1){obj[j+1]=v} else{obj=replaceArrIndex(obj,i,j);obj[j]=v;}};
if(obj.length>z){obj=obj.slice(1)};
setItemAll(n,obj);
return obj;
});
};
!function(e,t,sThis){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e[sThis],o=e[sThis]=t();o.noConflict=function(){return e[sThis]=n,o}}());try{Object.defineProperty(e, sThis, t());}catch(e){}}(this,(function(){"use strict";
var t=function DBStorage(dbName, storeName) {var defaultGetStoreFunc;var defaultdbName=dbName;var defaultstoreName=storeName;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr,i){var _i = arr ==null?null:typeof Symbol !== "undefined"&&arr[Symbol.iterator]||arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i&&_arr.length === i) break;}}catch (err) { _d = true; _e = err; }finally{ try { if (!_n&&_i["return"] != null) _i["return"]();}finally {if (_d) throw _e;}} return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; };
function promisifyRequest(request) {return new Promise(function (resolve, reject) {request.oncomplete = request.onsuccess = function () {return resolve(request.result);};request.onabort = request.onerror = function () {return reject(request.error);};});}
function createStore(dbName, storeName) {var request = indexedDB.open(dbName);request.onupgradeneeded = function () {return request.result.createObjectStore(storeName);};var dbp = promisifyRequest(request);return function (txMode, callback) {return dbp.then(function (db) {return callback(db.transaction(storeName, txMode).objectStore(storeName));});};}
function defaultGetStore() {if (!defaultGetStoreFunc) {defaultGetStoreFunc = createStore(defaultdbName||'local-storage-app', defaultstoreName||'storage-app');};return defaultGetStoreFunc;}
function get(key) {var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();return customStore('readonly', function (store) {return promisifyRequest(store.get(key));});}
function set(key, value) {var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();return customStore('readwrite', function (store) {store.put(value, key);return promisifyRequest(store.transaction);});}
function setMany(entries) {var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();return customStore('readwrite', function (store) {entries.forEach(function (entry) {return store.put(entry[1], entry[0]);});return promisifyRequest(store.transaction);});}
function getMany(keys) {var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();return customStore('readonly', function (store) {return Promise.all(keys.map(function (key) {return promisifyRequest(store.get(key));}));});}
function update(key, updater) {var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();return customStore('readwrite', function (store) {return (new Promise(function (resolve, reject) {store.get(key).onsuccess = function () {try {store.put(updater(this.result), key);resolve(promisifyRequest(store.transaction));} catch (err) {reject(err);}};}));});}
function delMany(keys) {var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();return customStore('readwrite', function (store) {keys.forEach(function (key) {return store.delete(key);});return promisifyRequest(store.transaction);});}
function clear() {var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();return customStore('readwrite', function (store) {store.clear();return promisifyRequest(store.transaction);});}
function eachCursor(store, callback) {store.openCursor().onsuccess = function () {if (!this.result) return;callback(this.result);this.result.continue();};  return promisifyRequest(store.transaction);}
function keys() {var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();return customStore('readonly', function (store) {if (store.getAllKeys) {return promisifyRequest(store.getAllKeys());};var items = [];return eachCursor(store, function (cursor) {return items.push(cursor.key);}).then(function () {return items;});});}
function values() {var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();return customStore('readonly', function (store) {if (store.getAll) {return promisifyRequest(store.getAll());};var items = [];return eachCursor(store, function (cursor) {return items.push(cursor.value);}).then(function () {return items;});});}
function entries() {var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();return customStore('readonly', function (store) {if (store.getAll && store.getAllKeys) {return Promise.all([promisifyRequest(store.getAllKeys()), promisifyRequest(store.getAll())]).then(function (_ref) {var _ref2 = _slicedToArray(_ref, 2),  keys = _ref2[0],  values = _ref2[1];return keys.map(function (key, i) {return [key, values[i]];});});};
var items = [];return customStore('readonly',function (store) {return eachCursor(store, function (cursor) {return items.push([cursor.key, cursor.value]);}).then(function () {return items;});});});}
function del(key) {var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();return customStore('readwrite', function (store) {store.delete(key);return promisifyRequest(store.transaction);});}
function appendTo(key, value) {var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();return customStore('readwrite', function (store) {store.get(key).then(function(data){store.put(value, key)});return promisifyRequest(store.transaction);});}
this.clear = clear;this.createStore = createStore; this.del = del; this.delMany = delMany; this.entries = entries; this.get = get; this.getMany = getMany; this.keys = keys; this.promisifyRequest = promisifyRequest; this.set = set; this.setMany = setMany; this.update = update; this.values = values; this.appendTo = appendTo; Object.defineProperty(this, '__esModule', {value: true});}
return t}),'DBStorage');
var LocalStorageDB = new DBStorage('local-storage-app', 'storage-app');
