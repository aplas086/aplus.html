var speedForm=document.getElementById("speedform");
var trialBtn=document.querySelector("[data-trial-btn]");
var pointsA= document.querySelector("[data-points]");
var pointsN= document.querySelector("[data-points-name]");
var pointsV= document.querySelector("[data-points-value]");
var pointsAdded= document.querySelector("[data-points-added]");
var pointsNoAcc= document.querySelector("[data-points-noacc]");
var profileA=  document.querySelector("[data-profile]");
var profileN=  document.querySelector("[data-profile-name]");
var profileV=  document.querySelector("[data-profile-value]");
var speedA= document.querySelector("[data-speed]");
var speedV= document.querySelector("[data-speed-value]");
var usernameA=document.querySelector("[data-username]");
var usernameV=document.querySelector("[data-username-value]");
var usernameN=document.querySelector("[data-username-name]");
var daysA= document.querySelector("[data-days]");
var daysV= document.querySelector("[data-days-value]");
var updates=document.getElementById('updates');
var statust=document.querySelectorAll('[data-statust]');
var selectSpeeds=document.getElementById('speedn');
var speedForm=document.getElementById("speedform");
var loginSubmit=document.querySelector("[data-login_submit]");
var loginForm=document.querySelector(".login-form");
var speedSubBtn=document.getElementById('speedsub');
var toSpeedsBtn=document.getElementById("tospeeds");
var dologoutBtn=document.getElementById("dologout");
var errCont=document.getElementById("err-cot");
var selectUs=document.getElementById("selectus");
var allusersList=document.getElementById('allusers');
var allPasswordList=document.getElementById('allpasswords');
var statusApp=document.getElementById('status');
var loginApp=document.getElementById('login');
var speedsBtn=document.getElementById('speedsbtn');
var statusBtn=document.getElementById('statusbtn');
var selectSpeeds=document.getElementById('speedn');
var errElem=document.getElementById("error");
var goToAppBtns=document.querySelectorAll("[data-goto]");
var sedv=document.getElementById('speed_select_dev');
var sesp=document.getElementById('speed_select');
var updates=document.getElementById('updates');
var updates2=document.getElementById('updates2')||updates;
var loginFormShowSpeed=false;
var loginFormShowCount=0;
var isDocLoadedEnd=false;
var getRateDone=true;
var hotspotData={};
var breaktimer=0,speedsInterval;var animationRuns=0;var isStatusStartFirsted=0;
var MyIcons = ['success', 'info', 'question', 'warning', 'error'];
var appsNav=['login'];
var afterLoginFunc=[];
var allSliders=[];
var jsonConfig ={};
var last_users =[];
var speed_check={};
var speed_change={};
var statusEls={};
var isNewUser=false;
var themes=[
{"id":"th0","color":"#660521",'--color-a':'#039b7a'},
{"id":"th1","color":"#f57205",'--color-a':'#82039b'},
{"id":"th2","color":"#ECC94B",'--color-a':'#0c7e78'},
{"id":"th3","color":"#179848",'--color-a':'#5331ce'},
{"id":"th4","color":"#2b6cb0",'--color-a':'#1fb789'},
{"id":"th5","color":"#6b46c1",'--color-a':'#c37e37'},
];
function isNull(a){var t=typeof a;return (t=== 'undefined' || (t === 'object' && a==null) || null==a)};
function isEmStr(a){var t=typeof a;return (t=== 'undefined' || (t === 'object' && a==null) || null==a || a==='');};
function isObj(e){return "object"==typeof e&&e!=null}
function isObj1(a,b){return isObj(a)&&("undefined"==typeof a[b]&&a[b]==null)}
function isObj2(a,b){return isObj(a)&&isObj(a[b])}
function isObj3(a,b,c){return isObj(a)&&isObj(a[b])&&isObj(a[b][c])}
function isArr(e){if (Array.isArray){return "object"==typeof e&&e!=null&&Array.isArray(e)}else{return "object"==typeof e&&e!=null&&"number"==typeof e.length}}
function isUnd(e){return ("undefined"==typeof e||e==null)}
function isStr(e){return ("string"==typeof e)}
function isNum(a){if(typeof a!='string'&&typeof a!='number'){return false};var e="".concat(a);e=e.replace(/\s+|\n+|\r+|\t+/g,"");if(e.indexOf('.')>-1){e=parseFloat(e)}else{e=parseInt(e)};return isNaN(e)?false:true;}
function isEmpty(e){if(isArr(e)){return (e.length==0)};if(isStr(e)){return e==""};if(isObj(e)){var a=Object.keys(e);return a&&(a.length==0)};if(isNum(e)){return false};return true}
function toStr(e,b){if(typeof a!='string'&&typeof a!='number'){return b};return "".concat(e);}
function toNum(a,b){if(typeof a!='string'&&typeof a!='number'){return b};var e="".concat(a);e=e.replace(/\s+|\n+|\r+|\t+/g,"");if(e.indexOf('.')>-1){e=parseFloat(e)}else{e=parseInt(e)};return isNaN(e)?b:e;}
function toLenth(e){if(isArr(e)){return e.length};if(isStr(e)){return e.length};if(isObj(e)){if (Object.keys){var a=Object.keys(e);return a.length};var j=0;for (var i in e){j++};return j};return 0}
function goBack(){
var ac=getActiveApp();
if(ac&&ac.length>1){hidAllApps(ac[0]);}
ac=getActiveApp();
if (appsNav&&appsNav.length==0){
if(ac&&ac[0]){
if(ac[0]=='login'){showLoginPage(null)} else
if(ac[0]=='status'){showStatusPage(null)}else{
getsHotspotStatus().then(function(e){
if(e[1]){
showStatusPage(null);
} else{
showLoginPage(null);
}
})
}
}
} else {
var a = appsNav.pop();
var b=(ac[0]||null);
if (a!=b){showApp(null,b,a)} else{
hidAllApps(a);
var c=document.getElementById(a);
c.classList.add('active');
c.classList.remove('inactive');
}    
} 
}
function changeThemeHead(th){
var col=themes[th]?themes[th]:'#ECC94B';
var ths1=document.querySelectorAll('[data-theme-content]');
var ths2=document.querySelectorAll('[data-theme-color]');
ths1&&ths1.forEach(function(el){el.content=col})
ths2&&ths2.forEach(function(el){el.color=col})
}
function inputTheme(a){
var b=themes[0].color;
themes.some(function(v){if(v.id==a){b=v.color}});
changeThemeTo(a,b);
}
function changeThemeTo(a,b){
var c=b?b:themes[0].color;
themes.some(function(v){if(v.id==a){c=v.color}});
document.body.setAttribute('theme',a);
setItemAll('_theme',{"a":a,"b":b});
var d=document.querySelectorAll('[data-theme-content]');
var e=document.querySelectorAll('[data-theme-color]');
d&&d.forEach(function(el){el.content=c});
e&&e.forEach(function(el){el.color=c});
}
function changeTheme(v){
var b=document.body.classList.contains('dark')?"dark":"light";
themes.forEach(function(el){if(document.body.classList.contains(el.id)){b=el.id}});
var a=(b!='dark')?'dark':'light';
if(typeof v == 'string'){a=v};
document.body.classList.remove('dark');
document.body.classList.remove('light');
document.body.classList.add((a==='dark')?'dark':'light');
setItemAll('theme',a);
}
function getSubStr(){
var a=arguments[0];var b=arguments.length>1?arguments[1]:0;var c=arguments.length>2?arguments[2]:null;
if(typeof a!="string"){a="".concat(a);a=a.toString();};
if(String.prototype.hasOwnProperty&&String.prototype.hasOwnProperty('substr')){
if(c == null){
return a.substr(b);
}
return a.substr(b,b);
}else if(String.prototype.hasOwnProperty&&String.prototype.hasOwnProperty('substring')){
if(c == null){
return a.substring(b);
}
return a.substring(b,b+c);
} else {
if(c == null){
return a.split('').slice(b).join('');  
}
return a.split('').slice(b,b+c).join('');
}
}
function getQueryObj(a) {
var q = {};
if (typeof a!=="string"){a =window.location.search}
if (a==null||a==""){return q};
var query=a;
try{
if(a&&a.indexOf('?')>-1&&a.substring){query=a.substring(a.indexOf('?')+1);} else{
if(a&&a.indexOf('?')>-1&&a.substr){query=a.substr(a.indexOf('?')+1);};
}        
}catch(e){}
var vars = query.split("&");
for (var i=0;i<vars.length;i++) {
var pair = vars[i].split("=");
if (pair[0]&&pair[0].indexOf('?')>-1){pair[0]=pair[0].substr(pair[0].indexOf('?')+1)};
if (typeof q[pair[0]] === "undefined") {
q[pair[0]] = pair[1];
} else if (typeof q[pair[0]] === "string") {
var arr = [ q[pair[0]], pair[1] ];
q[pair[0]] = arr;
} else {
q[pair[0]].push(pair[1]);
}
}
return q;
}
function getAppId(a,b,i){if(i>5){return null};if("object"==typeof a&&a!=null){if(a&&a.classList&&a.classList.contains(b)){return a.id;} else {if(a.parentElement){
return getAppId(a.parentElement,b,(i*1+1))};}}return null;}
function showApp(z,a,b){
if (animationRuns==0){
if (typeof b != "undefined"&&(b==null||b=="null")){b=hotspotData.lin&&hotspotData.lin=='yes'?'status':'login';}
if (a&&b&&a==b){return a};animationRuns=1;
var ac=getActiveApp();
if (ac&&ac.length==1&&ac[0]&&ac[0]==b){return b};
var c=a;
if(a==null){c=hidAllApps(b)};
var lo=a?document.getElementById(a):null;
var pr=b?document.getElementById(b):null;
if (pr==null){animationRuns=0;return c;}
z&&z.classList.add('processing');
lo&&lo.classList.add('hid');
setTimeout(function(){z&&z.classList.add('success');}, 100);
setTimeout(function(){
animationRuns=0;
pr&&pr.classList.add('show');
pr&&pr.classList.remove('inactive');
pr&&getComputedStyle(pr).top;
z&&z.classList.add('success');
}, 150);
setTimeout(function(){
lo&&lo.classList.remove('active');
lo&&lo.classList.add('inactive');
pr&&pr.classList.add('active');
}, 300);
setTimeout(function(){
lo&&lo.classList.remove('hid');
pr&&pr.classList.remove('show');
z&&z.classList.remove('success');
z&&z.classList.remove('processing');
},550)
} else{
setTimeout(function(){animationRuns=0;},50);    
}
if(c){if(appsNav.length==0){appsNav.push(c)}else{if(appsNav.indexOf(c)==-1){appsNav.push(c)}}}
return c;
}
function getActiveApp(){
var c=[];
var allActive=document.querySelectorAll('.app');
if (allActive&&allActive.length){
allActive.forEach(function(el){
if(el.classList.contains('inactive')){
c.push(el.id)
}
})
}
return c;
}
function hidAllApps(a){
var c=null;
var allActive=document.querySelectorAll('.app');
if (allActive&&allActive.length){
allActive.forEach(function(el){
if(c==null){c=el.id}
if(el&&el.id==a){
} else{
el&&el.classList.remove('active');
el&&el.classList.add('inactive');    
}
})
}
return c;
}
function togelContacts(){
var contactBtn=document.getElementById("cont-bot");
var el=contactBtn.querySelector('.cot');
if(el&&el.classList.contains('cot-cl')){
el.classList.remove('cot-cl')
} else{
el.classList.add('cot-cl')
}
}
function showLoadingError(){
var ec=document.getElementById("err-cot");
if(ec&&!ec.classList.contains('active')&&ec&&!ec.classList.contains('zoom')){setTimeout((function(){ec&&ec.classList.add("zoom")}),150);
setTimeout((function(){ec&&ec.classList.add("active")}),50);}
document.querySelector('#err-cot #error .loading')?'':(document.getElementById("error").innerHTML+='<div class="loading"></div>');
setTimeout(function(){ec&&ec.addEventListener("click",hideErrorPopup)},500);
try{ec&&ec.removeEventListener("click",hideErrorPopup)}catch(e){};
}
function closeLoadingError(){
var ec=document.querySelector('#err-cot #error .loading');
if(ec){ec.remove();};
ec&&ec.addEventListener("click",hideErrorPopup);
}
function loadScript(){var a=arguments[0];var b=arguments.length>1?arguments[1]:function() {};var sc =document.querySelector('script[src="'+a+'"]');
if(sc){if (a.indexOf('?')==-1){a=a+"?"} else{a=a+"&"};if (a.indexOf('var')==-1){a=a+"var="}else{a=a+"dst="};a=a+(getTimeNow(0)%1000);};
var d=document.createElement("script");
d.type="text/javascript";var loaded=true;d.src=a;void 0!==b&&(d.onreadystatechange=function(){loaded&&setTimeout(function(){loaded&&((loaded==false),b())}, 20,loaded);},d.onload=function(){loaded&&setTimeout(function(){loaded&&((loaded==false),b())}, 20,loaded);});
if(arguments.length>=3&&typeof d.onerror != "undefined"){try{d.onerror=arguments[2]}catch(e){}};(document.head||document.body||document.getElementsByTagName("script")[0].parentElement).appendChild(d);return a;}
function sLoading(a) {a=a?a:0;try{if (a>100) { setTimeout(function () { showLoadingError() }, a); } else { showLoadingError() } }catch(e){ }};
function sClows(a) {a=a?a:0;try {if (a>20) { setTimeout(function () {hideErrorPopup() }, a); } else { setTimeout(function () {hideErrorPopup() }, 100);  } }catch(e){ }};
function swalAnimation(a){a['showClass']={popup: 'animate__animated animate__fadeInUp animate__faster'};a['hideClass']={popup: 'animate__animated animate__fadeOutDown animate__faster'};return a;}
function getTimeNow(a){var b=a?a:0;return ((new Date()).getTime()*1+b*1)};
function HappyWeekEnd(u, n){var a=new Date();var d=a.getDay();var h=a.getHours();var ts=a.getTime();if(d===5|| (d==4&&h>19)){getItemAll('_HappyWeekEnd',ts).then(function(da){if(da==ts||parseInt(da)<ts){showErrorPopup("<p style='color:green;'> جمعة مباركة ".concat(u,'<h3>'," شبكة ",n,'</h3>'));ts=ts*1+1200000;setItemAll('_HappyWeekEnd',ts);}})}}
function HappyEad(){
var d=getDateHjri(jsonConfig.hjri||0);
if(((d[1][0]>=9&&d[1][0]<13)&&d[1][1].indexOf('الحجة')>0)||(d[1][1].indexOf('شوال')>0&&(d[1][0]>=1&&d[1][0]<3))||(d[1][1].indexOf('رمضان')>0&&(d[1][0]>=29&&d[1][0]<32))||(d[1][1].indexOf('رمضان')>0&&(d[1][0]>=1&&d[1][0]<3))){
try {if (isNewLoginStatusQury){clearTimeout(isNewLoginStatusQury)}}catch(e){};
getItemAll('_HappyEad',null).then(function(da){
if(da==null||parseInt(da)<getTimeNow(0)){
var net=jsonConfig&&jsonConfig.network||{};var nets=(net.nameP||'');nets+=" "+(net.name||'');nets+=" "+(net.nameS||'');
var mess=jsonConfig&&jsonConfig.ead||{};var mess=(mess.title|| " عيدكم مباركة ");
if((d[1][1].indexOf('رمضان')>0&&(d[1][0]>=1&&d[1][0]<3))){mess='مبارك عليكم الشهر'}
var el=document.querySelector('.confioff');
el&&(el.classList.add('confi'));
setTimeout(function(){el&&(el.style.display='none');},8000);
el&&(el.style.display='contents');
showErrorPopup(" ".concat(mess,'<h3>',nets,'</h3>'));
setItemAll('_HappyEad',getTimeNow(620000));
}
});
};
}
function hideErrorPopup(){
var ec=document.getElementById("err-cot");
ec.classList.remove("active");
ec.classList.remove("zoom");
document.getElementById("error").innerHTML='';
}
function showErrorPopup(e){
var ec=document.getElementById("err-cot");
e&&e!=""&&(document.getElementById("error").innerHTML=e);
e&&e!=""&&setTimeout((function(){ec&&ec.classList.add("zoom")}),100);
e&&e!=""&&setTimeout((function(){ec&&ec.classList.add("active");window.scrollTo(0,0)}),50);
setTimeout(function(){document.getElementById("err-cot").addEventListener("click",hideErrorPopup);}, 1500);
try{ec&&ec.removeEventListener("click",hideErrorPopup)}catch(e){};
if (ec&&ec.classList&&ec.classList.contains('zoom')){ec.classList.remove('zoom')}
}
function hideAlertPopup(){
var ec=document.getElementById("alert-cot");
ec.classList.remove("active");
ec.classList.remove("zoom");
}
var  closeAlertInterval=null;
var  closeTimOutInterval=null;
var showAlertPopupInterval=null;
function showAlertPopupFunc(obj){
var text=obj['text']||"";
var src=obj['src']||"";
var type=obj['type']||"";
var href=obj['href']||"";
var btn=obj['btn']||null;
var ec=document.getElementById("alert-cot");
var dive=document.createElement('figure');
var cont=document.createElement('a4');
cont.id='notification';
cont.className='btn notification cent';
cont.style.display='block';
cont.style.marginBottom='20px';
cont.style.marginTop='-85px';
cont.style.width='122%';
dive.classList.add('alert-figure');
dive.appendChild(cont);
var textEl=document.createElement('a4');
if(text&&text.length>200){textEl=document.createElement('h6');}
var textA=document.createElement('a');
var elm;
if(type&&type=='video'){
elm=document.createElement('video');
elm.src=src;
href!=""&&textA.setAttribute('href',href);
var fig=document.createElement('figcaption');
if(text&&text.length>200){fig=document.createElement('h5');}
fig.innerText=text;
href!=""?(textA.appendChild(fig),dive.appendChild(textA)):dive.appendChild(fig);
elm.setAttribute('width','350');
dive.appendChild(elm);
} else if(type=="img"){ 
elm=document.createElement('img');
elm.src=src;
href!=""&&textA.setAttribute('href',href);
var fig=document.createElement('figcaption');
if(text&&text.length>200){fig.style.fontSize='0.5em'}
fig.innerText=text;
href!=""?(textA.appendChild(fig),dive.appendChild(textA)):dive.appendChild(fig);
elm.setAttribute('width','350');
dive.appendChild(elm);
}  else{
textEl.innerText=text;
href!=""&&textA.setAttribute('href',href);
dive.style.width='300px';
textA.style.width='300px';
textA.style.color='black';
dive.style.color='black';
textEl.style.color='black';
textA.style.background='#a870e0';
dive.style.background='#a870e0';
textEl.style.background='#a870e0';
href!=""?(textA.appendChild(textEl),dive.appendChild(textA)):(dive.appendChild(textEl));
}
document.getElementById("alert").innerHTML='';
document.getElementById("alert").appendChild(dive);
if(btn){
var ob=[];
if(Array.isArray(btn)){ob=btn}else{ob.push(btn)};
var hm='';
for(var e in ob){
var g=ob[e];
hm+='<button class="btn boxb" onclick="'+g.action+'">'+g.text+'</button>'
}
var elm=document.createElement('div');
elm.className='cent';
elm.style.display='block';
elm.style.width='100%';
elm.innerHTML=hm;
var elb=el.querySelector('btn');
for(var n=0;(n<1000&&!elb);n++){elb=elm.querySelector('btn')};
document.getElementById("alert").appendChild(elm);
}
try {
if(closeTimOutInterval){clearTimeout(closeTimOutInterval)};
if(closeAlertInterval){clearInterval(closeAlertInterval)};
if(isNewLoginStatusQury){clearTimeout(isNewLoginStatusQury)}
}catch(e){};
var detime=obj['time']||5;
if(detime>0){
closeAlertInterval = setInterval(function(){
var not=document.querySelector("#alert-cot .notification");
if (detime>0){not.innerText=detime}
detime=detime-1;
if(detime<0){
not.innerText='اغلاق؟';
not&&not.addEventListener("click",hideAlertPopup);
try {if (closeAlertInterval){clearInterval(closeAlertInterval)};if (isNewLoginStatusQury){clearTimeout(isNewLoginStatusQury)};} catch (e) {}
closeTimOutInterval=setTimeout(function(){
hideAlertPopup();
document.getElementById("alert-cot").addEventListener("click",hideAlertPopup);
}, 15000);
} else{
try{ document.getElementById("alert-cot").removeEventListener("click",hideAlertPopup);}catch(e){};
}
},1000);
}    
setTimeout((function(){ec&&ec.classList.add("zoom")}),150);
setTimeout((function(){ec&&ec.classList.add("active")}),50);
if (ec&&ec.classList&&ec.classList.contains('zoom')){ec.classList.remove('zoom')}
}
function showAlertPopup(e){
var ec=document.getElementById("alert-cot");
if(typeof e== "object"){
var interval=e['interval']||620;
var delay=e['delay']||10;
if(interval<120){interval=120};
try {if (showAlertPopupInterval){clearInterval(showAlertPopupInterval)};} catch (e) {}
showAlertPopupInterval= setInterval(function(){showAlertPopupFunc(e)},interval*1000);
setTimeout(function(){showAlertPopupFunc(e)},delay*1000);
try{ec&&ec.removeEventListener("click",hideAlertPopup)}catch(e){};
} else{
e&&e!=""&&(document.getElementById("alert").innerHTML=e);
setTimeout((function(){ec&&ec.classList.add("zoom")}),150);
setTimeout((function(){ec&&ec.classList.add("active")}),50);
if (ec&&ec.classList&&ec.classList.contains('zoom')){ec.classList.remove('zoom')}
ec&&ec.addEventListener("click",hideAlertPopup);
}
}
function toArabicError(a){
try{if(typeof a== "string"&&String&&String.prototype&&String.prototype.hasOwnProperty&&String.prototype.hasOwnProperty('toLowerCase')){a=a.toLowerCase()};}catch(e){}
var b={"user&not found":"لقد ادخلت الكرت بطريقة غير صحيحة، الرجاء المحاولة مرة اخرى","not_found":"لقد ادخلت الكرت بطريقة غير صحيحة، الرجاء المحاولة مرة اخرى","u will be restricted":"لقد ادخلت الكرت بطريقة غير صحيحة عدة مرات تأكد من الكرت والا سيتم حظرك","session limit reached|no more sessions are allowed":"المعذرة ، هذا الكرت مستخدم حالياً في جهاز آخر","invalid password|name or password wrong":"تاكد من كتابة كلمة المرور بشكل صحيح","uptime limit reached|No more online time|uptime limit|expired_time":"عذراً لقد انتهى الوقت المتاح لك","traffic limit|transfer limit reached|expired_quota":"لقد انتهى رصيد هذا الحساب","invalid username or password|not found|username doesn":"لقد ادخلت الكرت بطريقة غير صحيحة، الرجاء المحاولة مرة اخرى",
"no valid profile found|no valid profile|expired_validity":"لقد انتهت صلاحية هذا الكرت","invalid calling-station-id":"هذا الحساب مقترن بجهاز آخر!","server&is&not&responding":"هذا الحساب غير موجود, يرجى التأكد والمحاولة مرة اخرى","web&browser&did&not&send":"يرجى محاولة ادخال الكرت مرة اخرى","allowed to log in from this mac":"لايحق لك استخدام هذا الكرت, الكرت محجوز لمستخدم اخر!"},
c=""+a,d=function(g){return a.includes(g)},e;
for(e in b){var f=b[e];if(e.includes("&")){if(e.split("&").every(d)){c=f;break}}else if(e.includes("|")){if(e.split("|").some(d)){c=
f;break}}else if(a.includes(e)){c=f;break}}
try{
if(typeof jsonConfig=="object"&&'errors' in jsonConfig){
if(typeof jsonConfig.errors=="object"){
var b=jsonConfig.errors;
for(e in b){var f=b[e];if(e.includes("&")){if(e.split("&").every(d)){c=f;break}}else if(e.includes("|")){if(e.split("|").some(d)){c=f;break}}else if(a.includes(e)){c=f;break}}
} else if(typeof jsonConfig.errors=="function"){
return jsonConfig.errors(a);
}
}
}catch(e){}
return c}
function getCHAP(str) {
var o=[];var cid='';var cch='';
try{for(var i=0;i<str.length;i++){
var a=str.charAt(i);
if (!a.endsWith('\u0000')){
if (/[0-7]/g.test(a)){
if (o.length==0) {
o.push(a);
}else{
o[o.length-1]="".concat(o[o.length - 1],a);
var b=o[o.length-1];
if (b.length==3){
if(o.length==1){
cid=cid+String.fromCharCode(parseInt(b, 8));
} else{
cch=cch+String.fromCharCode(parseInt(b, 8));
}
}
}
} else if(a=="\\"){
o.push("");
}
}
}
if (cch.length>7&&cid.length>0){return [cid,cch];}
}catch(e){};
return [null,null];
};
function getLastUs(json){
var us=(json&&json.usr)?json.usr:"";
us=(us=="")?(hotspotData&&hotspotData.usr?hotspotData.usr:us):us;
us=(us=="")?loginForm.username.value:us;
us=(us=="")?osamaSpeedUser:us;
osamaSpeedUser=us;
return us;
}
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
}
}
if(null != v){
ret.push(encodeURIComponent(v));
} 
} else{
if (typeof v == "object" && null !==v){
v=gBody({body:v});
} else{
if(typeof v != "number"&&typeof v != "string" ){
    v=null;
}
}
if(null != v){
ret.push(encodeURIComponent(n)+'='+encodeURIComponent(v));
} else{
ret.push(encodeURIComponent(n));
}    
}
};
if(ret.length){
return ret.join('&');
}
};
return null;
}
function xhrReq(url, method, headers , mode , asyn) {
var xhr = getXhr();
xhr.open(method, url, asyn);
if (mode === 'cors') {
try {
xhr.withCredentials = true;
} catch (e) {}
}
if (typeof headers == 'object' && null!=headers) {
for(var n in headers){
var v=headers[n];
try {
xhr.setRequestHeader(n,v);                
} catch (e) {}
}
}
if(method=='POST'&& typeof headers['Content-Type']=="undefined"){
try {
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
} catch (e) {}
}
return xhr;
}
function xmlFetch(){
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
if(typeof body == "string"&&body!==''){
if(url.indexOf('?')>-1){
if(url.indexOf('=')>-1){url=url+'&'+body;} else{url=url+body;}
}else{
url=url+'?'+body;
}
} else{body=null}
}else if(typeof body != "string"){
body=null;
}
}catch(e){}
return new Promise(function(res,rej){
var xhr = xhrReq(url, method , headers,mode , !0);
var isDone=true;
if(typeof xhr.text != "function"){xhr.text=function(){return new Promise(function(res2,rej2){try{res2(xhr.responseText);return xhr.responseText}catch(e){return rej2(e)}})}}
if(typeof xhr.json != "function"){xhr.json=function(){return new Promise(function(res2,rej2){try{var tx=xhr.responseText;res2(JSON.parse(tx));return JSON.parse(tx)}catch(e){return rej2(e)}})}}
xhr.onreadystatechange = function(){if(4===xhr.readyState){if(isDone){isDone=false;res(xhr)};return xhr}};
xhr.onload = function(){if(4===xhr.readyState){if(isDone){isDone=false;res(xhr)};return xhr}};
xhr.onerror = rej;
if (null!=body) {
body="".concat(body);
if(body==''){body=null};
try{xhr.send(body)}catch(e){return rej(e)}
} else{
try{xhr.send()}catch(e){return rej(e)}
}
})
}
var homeOnckickEvent=false;
function homeOnckick(e){
try{e&&e.preventDefault&&e.preventDefault();}catch(e){}
var hoVar=window.location.href;
var varVal=getQueryObj(window.location.href).var||'';
var isVardone=varVal==='done'||varVal==='cache';
var isVar2=hoVar.indexOf('/done/')>-1;
if(isVardone||isVar2){if(isVar2){window.location.href='/index.html'}else{window.location.href='/done/index.html'}} else{
if(homeOnckickEvent){
setTimeout(function(){window.location.href='/index.html?var=cache';}, 500);
document.getElementById('addtohome').removeAttribute('data-title');
caches.keys().then(function(e){Promise.all(e.map(function(n){return caches.delete(n);}))})
homeOnckickEvent=false;
return false;
}
homeOnckickEvent=true;
var varVal=getQueryObj().var||1;varVal=parseInt(varVal);if(isNaN(varVal)){varVal=0};
setTimeout(function(){if(homeOnckickEvent){window.location.href='/index.html?var='+varVal};homeOnckickEvent=false;}, 2000);
document.getElementById('addtohome').setAttribute('data-title','اضغط مرة اخرى لمسح بيانات الصفحة')
document.getElementById('addtohome').classList.add('ticentw');
}
return false;
}
function getsHotspotStatus() {
try{
return xmlFetch('/json/status',{}).then(function(res){
return res.json().then(function(res2){
hotspotData = res2;
return [res2,res2&&res2.lin&&res2.lin=='yes'];
}).catch(function(res){return [null,null]})
}).catch(function(res){return [null,null]})
}catch(e){return new Promise(function(res){hotspotData['lin']='no';return res([null,null])})}
}
function showLoginPage(a){
var ac=document.querySelector('.app.active')||{id:a||null};
try{
getsHotspotStatus().then(function(data){
if(data&&data[1]){showStatusPage('login')} else{
try {if (setIntervalStatusQury){clearInterval(setIntervalStatusQury)};if (isNewLoginStatusQury){clearTimeout(isNewLoginStatusQury)};} catch (e) {}
showApp(null,ac.id,'login');
}}).catch(function(){showApp(null,null,'login');})
}catch(e){showApp(null,null,'login');}
}
function showStatusPage(a){
var ac=document.querySelector('.app.active')||{id:a||null}
animationRuns=0;
var b=null;
if(ac.id=='speeds'){b=speedSubBtn};if(ac.id=='login'){b=loginSubmit};
showApp(b,ac.id,'status');
setTimeout(function(){hidAllApps('status');showApp(b,null,'status')}, 500);
startStatusQury();
}
function byetsToGiga(a){var g=(1024*1024*1024);var am = (a%g);var ag = ((a-am)/g).toFixed(0);var amm = byetsToMega(am);if(am==0){amm=""} else{amm=" و "+amm};return  ag>=2? (ag+" جيجا "+amm):byetsToMega(a);}
function byetsToMega(a){var am = (a%1048576); var ag = ((a-am)/1048576).toFixed(0); am= (am/1024).toFixed(); return ag>0? (ag+" ميجا "):(am+" كيلو "); }; 
function remMegaToArabic(a){ if(""===a||"0"==a||0==a)return " غير محدود ";a="".concat('',a); if(a.indexOf(",")>0){a=((a.split(',')[0])*1+(a.split(',')[1])*1)};a=parseInt(a)*1+5024; return a>1073741824?byetsToGiga(a):byetsToMega(a); }; 
function fixHours(a,b){var c="0",d="0";a="".concat(a);b="".concat(b); if(a.indexOf(b)>-1){c=a.split(b)[0];d=a.split(b)[1]||"0"} else{d=a}; return [parseInt(c),d]; }; 
function hoursArabic(a){ if(""===a||"0"==a||0==a)return " غير محدود "; a="".concat(a);var a0=fixHours(a,'d'); var a1=fixHours(a0[1],'h'); var a2=fixHours(a1[1],'m'); var a3=fixHours(a2[1],'s'); var r  = ""; if(a0[0]>0){a1[0]=(a1[0]+a0[0]*24)}; if(a1[0]>0&&a1[0]<31000){r=r+a1[0]+" ساعة "} else{if(a1[0]>30000){return ((a1[0]+1)/24).toFixed(0)+" يوم = ("+a1[0]+' ساعة) '} else{}}; if(a2[0]>0){r=r+a2[0]+" دقيقة "}; if(a3[0]>0&&r==""){r=r+a3[0]+" ثانية "}; return r; }
function timeToSeconds(a){ if(""===a||"0"==a||0==a)return " غير محدود ";a="".concat(a);var a00=fixHours(a,'w'); var a0=fixHours(a00[1],'d'); var a1=fixHours(a0[1],'h'); var a2=fixHours(a1[1],'m'); var a3=fixHours(a2[1],'s'); var r  = 0; if(a00[0]>0){a0[0]=(a0[0]+a0[0]*7)}; if(a0[0]>0){a1[0]=(a1[0]*60*60+a0[0]*24*60*60)}; if(a1[0]>0){r=r*1+a1[0]*60*60}; if(a2[0]>0){r=r*1+a2[0]*60}; if(a3[0]>0&&r==""){r=r*1+a3[0]*1}; return (r*1+0); }
function addtwotimes(a,b){a="".concat('',a);b="".concat('',b);if(a!=""&&!(/[^0-9]/g.test(a))){a=parseInt(a)} else{a=timeToSeconds(a);};if(b!=""&&!(/[^0-9]/g.test(b))){b=parseInt(b)} else{b=timeToSeconds(b);};var uh=a*1+b*1+0;var h=0;var m=0;var s=(uh%60);uh=(uh/60).toFixed(0);m=(uh%60);h=(uh/60).toFixed(0);uh='';if(h>0){uh=h+'h'};if(m>0){uh=uh+m+'m'};if(s>0){uh=uh+s+'s'};return uh;}
function hoursMToArabic(a){if(""===a||"0"==a||0==a){return " غير محدود "};a="".concat(a);var a0=fixHours(a,'d'); var a1=fixHours(a0[1],'h'); var a2=fixHours(a1[1],'m'); var a3=fixHours(a2[1],'s'); var r  = ""; if(a0[0]>0){a1[0]=(a1[0]+a0[0]*24)}; if(a1[0]>0){r=r+a1[0]+" ساعة "}; if(a2[0]>0){r=r+a2[0]+" دقيقة "}; if(a3[0]>0&&r==""){r=r+a2[0]+" ثانية "}; return r; }; 
function hoursDToArabic(a){ if(""===a||"0"==a||0==a)return " غير محدود ";a="".concat(a); var a0=fixHours(a,'d'); var a1=fixHours(a0[1],'h'); var a2=fixHours(a1[1],'m'); var r  = ""; if(a0[0]>0){r=r+a0[0]+" يوم "}; if(a1[0]>0){r=r+a1[0]+" ساعة "};if(a2[0]>0){r=r+a2[0]+" دقيقة "}; return r; }; 
function daysToArabic(a){ var d1=new Date(); var d2=new Date(a); var t=((d2-d1)/1000); 
var d=t>(60*60*24)?((t-(t%(60*60*24)))/(60*60*24)).toFixed():0; t=t-(d*(60*60*24)); var h=t>(60*60)?((t-(t%(60*60)))/(60*60)).toFixed():0; t=t-(h*(60*60)); var m=t>(60)?((t-(t%(60)))/(60)).toFixed():0; var r  = ""; if(d>0){if(d>10){r=r+d+" يوم "}else{r=r+d+" ايام "}}; if(h>0){r=r+h+" ساعة "}; if(m>0&&r==""){r=r+m+" دقيقة "}; return r; }; 
function usedMegaToArabic(a){ if(""===a||"0"==a||0==a)return " غير محدود ";a="".concat(a); if(a.indexOf(",")>0){a=((a.split(',')[0])*1+(a.split(',')[1])*1)};if(a>(1024*1024*1024*2)){return byetsToGiga(a)}; return byetsToMega(a) }
function toBoolen(a){
if(typeof a!="undefined"&&typeof a!=null){
if(typeof a == "boolean"){return a};
if(typeof a == "number"&&isNaN(a)){return false};
if(a=="") {return false};
a="".concat(a);a=a.toLowerCase();
return (a=="true"||a=="yes"||a=="1");
} else return false;
}
function fixPassword(us,ps){
var t=jsonConfig&&jsonConfig.network&&jsonConfig.network.login_password;
if(t&&(t=="empty"||t=="username")&&us&&us!=""){
if(t=="empty"){ps=''};
if(t=="username"){ps=us};
}
return ps;
}
function getPasswordSaved(us){
if(us&&us.includes('@')){us=us.split('@')[0];};
if(us==null||us==''){us=hotspotData.usr}
if(us==null||us==''){us=loginForm.username.value}
if(jsonConfig&&jsonConfig.network&&jsonConfig.network.login_password&&jsonConfig.network.login_password=="empty"){
return new Promise(function(res,rej){return res('')})    
}
if(jsonConfig&&jsonConfig.network&&jsonConfig.network.login_password&&jsonConfig.network.login_password=="username"){
return new Promise(function(res,rej){return res(us)})    
}
return new Promise(function(res,rej){
getItemAll('_Lastuser',"").then(function(u){
if(u&&u.includes('@')){u=u.split('@')[0];};
if(u&&u===us){
getItemAll('_Lastpass',"").then(function(p){
return res(fixPassword(u,p));
});
} else{
getItemAll('last_users',null).then(function(data){
if (typeof data != "object"||data==null){data=[{u:'',p:''},{u:'',p:''},{u:'',p:''}]};
for(var i in data){
var u=data[i]['u'];
if(u&&u.includes('@')){u=u.split('@')[0];};
if(u&&u==us&&u!=''){
return res(fixPassword(u,data[i]['p']));
}
}
if(loginForm.username.value==us){
return res(loginForm.password.value);
}
return res(null);
})
}
})
});
}
function objEq(js,na,va){return (typeof js=="object"&&js!=null&&js[na]&&js[na]==va);}
var isStatusStartNoRepeet=true;
var isStatusStartNoRepeetTimeout;
function onStatusStart(a){
if(a&&a.secs&&a.bytes&&isStatusStartNoRepeet){isStatusStartNoRepeet=false;isStatusStartNoRepeetTimeout=setTimeout(function(){isStatusStartNoRepeet=true;}, 20000);
var hr=a.secs.sto||0;
if(hr===""){hr=0};hr=parseInt(hr);
var mr=a.bytes.rbt||0;
if(mr===""){mr=0};mr=parseInt(mr);
if ((hr<(60*30)&&hr>1)||(mr>1&&mr<(1024*1024*60))){
try {if (isNewLoginStatusQury){clearTimeout(isNewLoginStatusQury)}}catch(e){};
if (hr<(60*60)&&hr>1){
showErrorPopup("تحذير الوقت المتبقية اقل من  ".concat('<h3>',hoursArabic(a.time.sto),'</h3>'));
} else {
showErrorPopup("تحذير التحميل المتبقية اقل من  ".concat('<h3>',remMegaToArabic(a.bytes.rbt),'</h3>'));
}
}
} else{
try {clearTimeout(isStatusStartNoRepeetTimeout);} catch (e) {}
isStatusStartNoRepeetTimeout=setTimeout(function(){isStatusStartNoRepeet=true;}, 3000)
}
}
function onStatusStartFirst(u,n){
if(isStatusStartFirsted==0){
isStatusStartFirsted=1;
setTimeout(HappyEad,2000);
HappyWeekEnd&&HappyWeekEnd(u,n);
typeof afterLogin == "function"&&afterLogin();
typeof afterLogin2 == "function"&&afterLogin2();
typeof afterLogin3 == "function"&&afterLogin3();
}
}
function replaceArabicNumbers(a){
var arn=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var are=["0","1","2","3","4","5","6","7","8","9"];
for (var j in arn) {if (a.indexOf(arn[j])>-1) {a=a.replace(arn[j],are[j]);};};
return a;
}
function fixInputValue(Conf,Value){
if(Conf.rep_arabic_numbers==1||Conf.rep_arabic_numbers=='1'){Value=replaceArabicNumbers(Value)}
if(Conf.only_alpha==1||Conf.only_alpha=='1'){Value=Value.replace(/[^0-9A-Za-z]/g, '')}
if(Conf.only_numbers==1||Conf.only_numbers=='1'){Value=Value.replace(/[^0-9]/g,'')} else{if(Conf.upper_to_lower==1||Conf.upper_to_lower=='1'){Value=Value.toLowerCase()}}  
Value=Value.replace(/\s+|\n+|\r+|\t+/g,"");
return Value;
}
var speedSelectedByLogin=false;
function userninputEventLogin(){
var conf={only_alpha:0,rep_arabic_numbers:0,only_numbers:0,upper_to_lower:0,}
var el=document.getElementById('usern');
conf.upper_to_lower=el.getAttribute('upper_to_lower');
conf.only_numbers=el.getAttribute('only_numbers');
conf.only_alpha=el.getAttribute('only_alpha');
conf.rep_arabic_numbers=el.getAttribute('rep_arabic_numbers');
var va=fixInputValue(conf,el.value);
if(el.hasAttribute('same_password')){
document.getElementById('passw').value=va;
}
if(el.hasAttribute('empty_password')){
document.getElementById('passw').value='';
}
el.value=va
return va;
}
function passwinputEventLogin(){
var conf={only_alpha:0,rep_arabic_numbers:0,only_numbers:0,upper_to_lower:0,}
var el=document.getElementById('passw');
conf.upper_to_lower=el.getAttribute('upper_to_lower');
conf.only_numbers=el.getAttribute('only_numbers');
conf.only_alpha=el.getAttribute('only_alpha');
conf.rep_arabic_numbers=el.getAttribute('rep_arabic_numbers');
var va=fixInputValue(conf,el.value);
el.value=va
return va;
}
function inputEventLogin(e){
var el=e.target;
var na=el.name;
var conf={only_alpha:0,rep_arabic_numbers:0,only_numbers:0,upper_to_lower:0,}
conf.upper_to_lower=el.getAttribute('upper_to_lower');
conf.only_numbers=el.getAttribute('only_numbers');
conf.only_alpha=el.getAttribute('only_alpha');
conf.rep_arabic_numbers=el.getAttribute('rep_arabic_numbers')
var va=fixInputValue(conf,el.value);
el.value=va;
if(na&&na=='username'&&el.hasAttribute('same_password')){
document.getElementById('passw').value=va;
}
if(el.hasAttribute('empty_password')){
document.getElementById('passw').value='';
}
return va;
}
function loadExtraScript(config){
try {setTimeout(configInitFun, 50);} catch (e) {};
try {setTimeout(checkHotUrl, 100);} catch (e) {};
try {setTimeout(autoLogin, 1500);} catch (e) {};
try {setTimeout(function(){loadScript('js.extra.v9.js',function(){},function(){});}, 3000);} catch (e) {};
var imgText=config.styleText;
setTimeout(function() {
var usern=document.getElementById('usern'),passe=document.getElementById('passw');
for (var i in jsonConfig.login.username) {var dataV=jsonConfig.login.username[i];usern.setAttribute(i,dataV);}
for (var i in jsonConfig.login.password) {var dataV=jsonConfig.login.password[i];passe.setAttribute(i,dataV);}
var es=jsonConfig.network.login_password;
var pe=document.querySelector('.password-field')||document.querySelector('[password-field]')||passe&&passe.parentElement;
if (es=='username'){
usern&&usern.setAttribute('same_password',1);
} else if (es=='empty'){
usern&&usern.setAttribute('empty_password',1);
} else if(es=='password'){
pe&&pe.classList.remove('password-field');
} else {
pe&&pe.classList.remove('password-field');
}
},120);
var sty=document.querySelector('[data-topstyle]');
for(var a in themes){imgText+= generateColorScale(themes[a]['color'],themes[a]['id'])+'\n';};
if(sty){sty.innerHTML =imgText} else{(document.head||document.body||document.getElementsByTagName("style")[0].parentElement).appendChild(((sty=document.createElement('style')),sty.innerHTML=imgText,sty));};
}
var currentIndexPuse=0;var currentIndex=0;var maxSliders=0;var allSliders=[];var sliderInterval;var configLoaded=false;
function prevnav(){if(currentIndexPuse<25){currentIndexPuse=(currentIndexPuse+5)};scrollLeft()}
function nextnav(){if(currentIndexPuse<25){currentIndexPuse=(currentIndexPuse+5)};scrollRight()}
function sliderStart(){maxSliders=document.querySelectorAll('.slides figure').length;if(sliderInterval){try{clearInterval(sliderInterval)}catch(e){}};sliderInterval=setInterval(function(){maxSliders=document.querySelectorAll('.slides figure').length;if((maxSliders>0)){if(currentIndexPuse>0){currentIndexPuse=(currentIndexPuse-5)}else{scrollLeft();}}},5000)}
function scrollLeft(){var a=currentIndex-1;if(a>=maxSliders){currentIndex=(0);a=0}else{currentIndex=(a)}if(a<0){currentIndex=(maxSliders);a=maxSliders-1}else{currentIndex=(a)};document.querySelector('.slides').style.transform ="translateX( -"+(a*100)+"%)";};
function scrollRight(){var a=currentIndex+1; if(a>=maxSliders){currentIndex=(0);a=0}else{currentIndex=(a)} if(a<0){currentIndex=(maxSliders);a=maxSliders-1}else{currentIndex=(a)} document.querySelector('.slides').style.transform ="translateX( -"+(a*100)+"%)"; };
function figureClick(e){e.preventDefault();if(e.target.getAttribute('href')&&e.target.getAttribute('href')!==""){window.location.href=e.target.getAttribute('href');}}
function fillMustache(co,ob){co="".concat(co||"");try{return Mustache.to_html(co,ob);}catch(e){for(var i in ob){if(co&&co.indexOf('{{'+i+'}}')>-1){co=co.replace('{{'+i+'}}',ob[i]);};if(co.indexOf('{{'+i+'}}')>-1){co=co.replace('{{'+i+'}}',ob[i]);}};
try{co=co.replace(/[\{][\{][0-9A-Za-z_]*[\}][\}]/g,function(a){var b=a.replace("{{","");b=b.replace("}}","");if(ob[b]){b=ob[b]}else{b=""};return b})}catch(e){}};return co||"";}
function fillAppContent(ob){ 
var htm='';for(var e in ob){ var g=ob[e]; var btn=''; var bod=''; var titl=''; try{ 
if(g.btn){btn+='<hr/><button class="boxb"  target="_blank" rel="noopener noreferrer" onclick="'+g.btn.action+'">'+g.btn.text+'</button>'}; 
if(g.href){btn+='<hr/><div style="padding: 20px;"><a style="width:100%;width:-webkit-fill-available" class="boxb"  target="_blank" rel="noopener noreferrer" href="'+g.href.action+'">'+g.href.text+'</a></div>'}; 
if(g.html){btn+=g.html}; if(g.body&&typeof g.body == "object"){for(var e2 in  g.body){ var e3= g.body[e2]; if (e2==0){ bod+='<hr/><span class="box-col">'+e3+'</span>'; } else{ bod+='<span class="box-down">'+e3+'</span>'; } } } else if(g.body&&g.body!=""){ bod+='<hr/><span class="box-col">'+g.body+'</span>'; }; 
if(g.title&&g.title!=""){titl+='<h3>'+g.title+'</h3>'}; 
if(g.name&&g.name!=""){titl+='<h3>'+g.name+'</h3>'}; 
if(g.price&&g.price!=""){titl+='<h3>'+g.price+'</h3>';var bd=[];bd.push(g.time||"");bd.push(g.transfer||"");bd.push(g.validity||"");
var e6=0;for(var e2 in  bd){var e3= bd[e2];if(e3&&e3!=""){if (e6==0){e6=1;bod+='<hr/><span class="box-col">'+e3+'</span>'; } else{ bod+='<span class="box-down">'+e3+'</span>'; } }} }; 
if(g.imgs&&typeof g.imgs == "object"){for (var i in g.imgs) {bod+='<img src="'+g.imgs[i]+'" height="110" />'}}; 
}catch(e){};
htm+='<div class="box3 box-col'+(e%14)+'">'+titl+bod+btn+'</div>';};return htm;
}
function fillAppImage(imgs){ var htm='';if(imgs&&typeof imgs == "object"){for (var i in imgs) {htm+='<img src="'+imgs[i]+'" height="110" />'}}; return htm;}   
function getDateHjri(g){var out='',a=0,g=g||0,daysOfWeek="الاحد الاثنين الثلاثاء الاربعاء الخميس الجمعة السبت".split(" "),monthsGregorian="يناير فبراير مارس ابريل مايو يونيو يوليو اغسطس سبتمبر اكتوبر نوفمبر ديسمبر".split(" "),monthsHijri="محرم;صفر;ربيع الأول;ربيع الثانى;جمادى الأولى;جمادى الثانية;رجب;شعبان;رمضان;شوال;ذو القعدة;ذو الحجة".split(";"),currentDate=new Date();
out+=daysOfWeek[currentDate.getDay()]+" "+currentDate.getDate()+" "+monthsGregorian[currentDate.getMonth()]+" "+currentDate.getFullYear();var gregorianDate=new Date(),day=gregorianDate.getDate()+g,month=gregorianDate.getMonth(),nextMonth=month+1,year=gregorianDate.getFullYear();if(nextMonth<3){--year,nextMonth+=12}
var century=Math.floor(year/100),correction=2-century+Math.floor(century/4);year<1583&&(correction=0),1582===year&&(nextMonth>10&&(correction=-10),10===nextMonth&&day>4&&(correction=-10));var julianDay=Math.floor(365.25*(year+4716))+Math.floor(30.6001*(nextMonth+1))+day+correction-1524,adjustment=0;
julianDay>2299160&&(adjustment=Math.floor((julianDay-1867216.25)/36524.25),adjustment=1+adjustment-Math.floor(adjustment/4));var EpcD=julianDay+adjustment+1524,calculatedYear=Math.floor((EpcD-122.1)/365.25),daysInYear=Math.floor(365.25*calculatedYear),calculatedMonth=Math.floor((EpcD-daysInYear)/30.6001);
day=EpcD-daysInYear-Math.floor(30.6001*calculatedMonth),month=calculatedMonth-1,calculatedMonth>13&&(calculatedYear+=1,month=calculatedMonth-13);var hijriCycle=10631/30,Epc=julianDay-1948084,hijriYearCycles=Math.floor(Epc/10631);Epc-=10631*hijriYearCycles;var hijriYear=Math.floor((Epc-.1335)/hijriCycle);
Epc-=Math.floor(hijriYear*hijriCycle+.1335);var hijriMonth=Math.floor((Epc+28.5001)/29.5);13===hijriMonth&&(hijriMonth=12);var hijriDay=Epc-Math.floor(29.5001*hijriMonth-29),hijriDate=[day,month-1,calculatedYear-4716,julianDay-1,((julianDay+1)%7+7)%7,hijriDay,hijriMonth-1,30*hijriYearCycles+hijriYear],
Epc1=hijriDate[5]+" "+monthsHijri[hijriDate[6]]+" "+hijriDate[7];return g&&(Epc1=daysOfWeek[hijriDate[4]]+", "+Epc1),out+=" ,الموافق  "+Epc1+"  ",[out,[hijriDate[5],monthsHijri[hijriDate[6]],hijriDate[7]]]
}
function htmlFunc1(){
document.getElementById('main-des')&&(document.getElementById('main-des').innerHTML='<div class="cent"><div class="cots cent" style="margin-top: 65px;min-width: 300px;width: 90vw;max-width: 400px;height: 32px;"><a class="bot ticent" style="height: 32px;width: 100%;max-width: 400px;font-size:16px;display: block;cursor: pointer;z-index:6" target="_blank" rel="noopener noreferrer"><span style="display: inline;font-size:12px; margin-left: 5px;margin-right: 5px;pointer-events:none"> تصميم : م / </span><span style="pointer-events:none"> اسامة الحميدي</span></a></div></div>');
}
function htmlFunc(ho,co){
var conf=(typeof co=="object"&&co!=null)?co:jsonConfig;
var data=(typeof ho=="object"&&ho!=null)?ho:hotspotData;
var isVar=getQueryObj().var;
isVar=parseInt(isVar);if(isNaN(isVar)){isVar=0};
var mhost=window.location.hostname;
var prot=window.location.protocol;
var dhost=data&&data.host||mhost;
if(dhost&&dhost==""){dhost=mhost};
var themesButs='';
if (typeof conf.colors == "object"){themes=conf.colors}
if (typeof themes == "object"){for(var i in themes){var th=themes[i]['id'];if(th!='dark'&&th!='light'){themesButs=themesButs+'<label class="theme '+th+'" for="'+th+'"><input type="radio" name="theme" id="'+th+'" onchange="inputTheme(this.id)" /></label>'}}};
setTimeout(function(){
document.getElementById('themes')&&(document.getElementById('themes').innerHTML=themesButs);
document.getElementById('prompt-intent')&&(document.getElementById('prompt-intent').setAttribute('href',prot +'//'+dhost));
document.querySelector('.cots .bot')&&document.querySelector('.cots .bot').addEventListener('click', function(e) {if (e.target && e.target.tagName === 'A' && !e.target.hasAttribute('data-title')) {e.target.setAttribute('data-title', 'ا'+'ض'+'غ'+'ط'+' ل'+'ل'+'ان'+'ت'+'ق'+'ا'+'ل');e.preventDefault(); e.target.href = 'ht'+'tps'+':/'+'/f'+'b.'+'co'+'m/os'+'ama'+'hfar'+'han'; return false;}return true;});
document.getElementById('addtohome')&&document.getElementById('addtohome').addEventListener('click',homeOnckick);
}, 50);
}
function fixPasswordLogin(us,ps){if(us&&us.indexOf('@')!=-1){us=us.split('@')[0];};if(us&&us.indexOf('-')!=-1){return ""};var t=jsonConfig&&jsonConfig.network&&jsonConfig.network.login_password;if(t&&(t==="empty")){return "";};if(t&&(t==="username")){return us;};return ps;}
function configInit(con){if(con&&typeof con == "object"){for(var n in con){jsonConfig[n]=con[n];};};try{setItemAll('_config',con)}catch(e){}}
function configInitFun(c){
var nets='';
var con=(typeof c=="object"&&c!=null)?c:jsonConfig;
var apps=con&&con.apps||{};
try {
con&&con.prices&&(apps['prices']=con.prices);
con&&con.markets&&(apps['markets']=con.markets);
con&&con.about&&(apps['about']=con.about);
con&&con.status&&(apps['status']=con.status);
}catch(e){};
try{
var net=con&&con.network||{};nets=(net.nameP||'');nets+=" "+(net.name||'');nets+=" "+(net.nameS||'');
var tits=document.querySelectorAll('[data-network-name]');
var tito=document.querySelector('[name="apple-mobile-web-app-title"]');
var titd=document.querySelector('[name="description"]');
var titd2=document.querySelector('[name="application-name"]');
document.title&&(document.title=nets);
if(tits&&tits.length)for(var i=0;i<tits.length;i++){
var tit=tits[i];
tit&&tit.innerHTML&&(tit.innerHTML=fillMustache(tit.innerHTML,net));
};
var exnets='';
if(hotspotData&&hotspotData.sern){exnets=' '+hotspotData.sern+' '}
tito&&(tito.setAttribute('content',nets));
titd&&(titd.setAttribute('content',nets));
titd2&&(titd2.setAttribute('content',nets));
}catch(e){}
var contai=document.getElementById('newapps')||document.querySelector('.container');
try{
var mob=document.querySelector('[data-mobasher]');
var est=document.querySelector('[data-estrahah]');
if(con.mobasher&&con.mobasher!=""&&typeof apps['mobasher'] == "undefined"){mob.href=con.mobasher;(mob.style.display='')} else{mob&&typeof apps['mobasher'] == "undefined"&&(mob.style.display='none');}
if(con.estrahah&&con.estrahah!=""&&typeof apps['estrahah'] == "undefined"){est.href=con.estrahah;(est.style.display='')} else{est&&typeof apps['estrahah'] == "undefined"&&(est.style.display='none');}
if(typeof apps['mobasher'] != "undefined"){mob.style.display=''};
if(typeof apps['estrahah'] != "undefined"){est.style.display=''};
}catch(e){}
try{
for (var appId in apps) {
try{
var appV=apps[appId];
var app=document.getElementById(appId);
if(appId=="kadamat"){loadScript('js.kadamat.v9.js',function(){},function(){});}
if(app&&app!=null){
var ti= app.querySelector('.app-title');
var box= app.querySelector('.boxcent');     
var apbtn =app.querySelector('.buttons');
if(ti&&ti.innerHTML){
if (ti.innerHTML.includes('{{')){ti.innerHTML=fillMustache(ti.innerHTML,appV);}else{
ti.innerHTML=appV.title;
}
}
box&&appV.content&&(box.innerHTML=fillAppContent(appV.content));
box&&appV.imgs&&(box.innerHTML+=fillAppImage(appV.imgs));
if(apbtn&&appV.btns&&Array.isArray(appV.btns)){
var btns='';
for(var n in appV.btns){
var abtn=appV.btns[n];
var attr='';
if(abtn.action){attr+='onclick="'+abtn.action+'" '}
if(abtn.goto){attr+='data-goto="'+abtn.goto+'" '}
if(abtn.attr){attr+=abtn.attr}
btns+='<button class="btn" '+attr+'>'+abtn.text+'</button>'
}
var el=document.createElement('div');
el.innerHTML=btns;
apbtn.appendChild(el);
}
} else{
var elapp=document.createElement('div');
elapp.id=appId;
elapp.classList.add('app');
elapp.classList.add('inactive');
var btns='';
if(appV.btns&&Array.isArray(appV.btns)){
for(var n in appV.btns){
var abtn=appV.btns[n];
var attr='';
if(abtn.action){attr+='onclick="'+abtn.action+'"'}
if(abtn.goto){attr+='data-goto="'+abtn.goto+'"'}
if(abtn.attr){attr+=abtn.attr}
btns+='<button class="btn" '+attr+'>'+abtn.text+'</button>'
}
} else{btns='<button class="btn" onclick="goBack()">العودة</button>'}
elapp.innerHTML='<p class="app-title">'+appV.title+'</p><div class="boxcent">'+fillAppContent(appV.content||[])+fillAppContent(appV.imgs||[])+'</div><div class="buttons">'+btns+'</div>'
contai&&contai.appendChild(elapp);
app=document.getElementById(appId);
};
var btns=document.querySelectorAll('[data-goto="'+appId+'"]');
btns&&btns!=null&&btns.forEach(function(el){el&&el.style&&(el.style.display='block');if(!el.hasAttribute('data-appid')){el.setAttribute('data-appid',getAppId(el,'app',0));el.addEventListener('click',goToAppEvent);}});        
}catch(e){}
};
var g=document.querySelectorAll("[data-goto]");
g&&g!=null&&g.forEach(function(el){if(!el.hasAttribute('data-appid')){el.setAttribute('data-appid',getAppId(el,'app',0));el.addEventListener('click',goToAppEvent);}});   
}catch(e){}
try{
var contBtn=document.getElementById("cont-bot");
if(contBtn&&apps&&apps.about&&apps.about.btn){var bo=contBtn.querySelector('[data-contact-body]');var te=contBtn.querySelector('[data-contact-text]');var ti=contBtn.querySelector('[data-contact-title]');var bt=contBtn.querySelector('.cot');
var btn=apps.about.btn||{};
te&&(te.innerHTML=btn.text);
bo&&(bo.innerHTML=btn.body);
ti&&(ti.innerHTML=btn.title);
contBtn.style.display='';
setTimeout(function(){bt.classList.add('cot-cl')},8000);
}
}catch(e){};
try{
var pawt=document.querySelector(".prom-title");var pawb=document.querySelector(".prompt-body");if(pawb&&pawt&&con.paw&&con.paw.title){pawt.innerHTML=fillMustache(pawt.innerHTML,con.paw);pawb.innerHTML=fillMustache(pawb.innerHTML,con.paw);
setTimeout(function(){document.getElementById('sec-prompt').style.opacity =1}, 1500);
} else{
onPawTogel=function(){document.getElementById('prompt-inp').checked=true;document.getElementById('sec-prompt').style.display='none';};
onPawTogel();
};
}catch(e){};
try{var slis=document.getElementById("sliders");if(slis&&con.sliders){allSliders=con.sliders;loadSliders(con.sliders);setTimeout(osamaSliderFolder,250);};}catch(e){}
try{var news=document.getElementById("newsline");if(news&&con.newsline){loadNewsLines(con.newsline);};}catch(e){}
try {var news2=document.getElementById("login-newsline");if(news2&&con.login&&(con.login.newsline&&con.login.newsline.text&&con.login.newsline.text!=''||con.login.newslines&&con.login.newslines.content&&con.login.newslines.content[0].text&&con.login.newslines.content[0].text!='')){news2.innerHTML=fillMustache(news2.innerHTML,con.login.newsline||con.login.newslines.content[0]);news2.style.display='inline-block';};}catch(e){}
try {var hne=document.getElementById("datehjri");if(hne){hne.innerHTML=getDateHjri(con.hjri||0)[0];};} catch (e) {}
try {var imgs=document.querySelector('.box span img')||document.querySelector('.loginadv');var x=1;if(imgs&&con.login.adv){var adv=con.login.adv;for(var i in adv){var el=document.querySelector('.box span img.im'+x)||document.querySelector('.loginadv.im'+x);
var a='/';
if('file:'===window.location.protocol || adv[i].startsWith('http')|| adv[i].startsWith('.')|| adv[i].startsWith('/')){a=''};
try {el&&(el.src=a+adv[i]);} catch (e) {};
x=x+1;
}}} catch (e) {}
try {onDocLoadedEnd(con)} catch (e) {};
try {htmlFunc1()} catch (e) {};
}
function loadNewsLines(n){
var news=document.getElementById("newsline");
if(news&&n&&n!=""){
var ht=news.innerHTML;
if(typeof n == "object"){
var txt="";
for (var i in n) {
var e =n[i];
var t=(e.length/5).toFixed(1);
if(t<20){t=20}
txt+=ht.replace('10s',t+'s').replace('10s',t+'s');
txt=fillMustache(txt,{"text":e});
}
news.innerHTML=txt;
} else{
var e=news.innerHTML;
var t=(e.length/5).toFixed(1);
if(t<20){t=20}
e=ht.replace('10s',t+'s').replace('10s',t+'s');
news.innerHTML=fillMustache(e,{"text":n});
}
news.style.display='block';
}
}
function loadSliders(s){
var slis=document.getElementById("sliders");
if(slis&&isArr(s)&&s.length>0){
var sli=document.querySelector('.slides');
s&&s.forEach(function(e){
var a='/';
if(window.location.protocol==='file:'){a=''}
if(e&&e.href&&!e.href.startsWith('http')&&!e.href.startsWith('/')){e.href=a+e.href;}
osamaSliderNew(e,sli);
});
setTimeout(sliderStart,1000);
slis.style.display='block';
}
}
function osamaloadType(t , a, b, c) {
try {
if (!document.querySelector(t + '[src="' + a + '"]')) {
var h = (document.head||document.body||document.getElementsByTagName("script")[0].parentElement), d = document.createElement(t);
d.setAttribute("style","display:none;");
d.src = a;
void 0 !== b && (d.onreadystatechange = b, d.onload = b , d.onerror=(c||function(){})); h.appendChild(d)
} else { 
b&&b(a);
}
} catch (error) {
c&&c();
}
};
function osamaSliderNew(e,sli){
var ty=e.type;
var te=e.text;
var ts=e.src;
var hr=e.href;
var el=document.createElement('figure');
var elhref=document.createElement('a');
var elhref2=document.createElement('a');
el.className='animated';
var elm;
if(ty&&ty=='video'){
elm=document.createElement('video');
} else{
elm=document.createElement('img');
}
elm.setAttribute('width','350');
elm.src=ts;
elm.setAttribute('loading',"lazy");
if(typeof elm.onerror !="undefined"){elm.onerror=function(e){var el=e.target||this;(el.parentElement.tagName=='FIGURE'&&el.parentElement.remove()||(el.parentElement.parentElement.tagName=='FIGURE'&&el.parentElement.parentElement.remove()))}} else{elm.setAttribute("onerror","this.parentElement.tagName=='FIGURE'&&this.parentElement.remove()||this.parentElement.parentElement.tagName=='FIGURE'&&this.parentElement.parentElement.remove()");}
elm.setAttribute('href',hr);
if(hr&&hr.length){
elhref.href=hr;
elhref2.href=hr;
elhref.setAttribute('target',"_blank")
elhref2.setAttribute('target',"_blank")
elhref.setAttribute('rel',"noopener noreferrer")
elhref2.setAttribute('rel',"noopener noreferrer")
}
var elmt=document.createElement('figcaption');
elmt.innerText=te||"";
elhref.appendChild(elmt);
elhref2.appendChild(elm);
el.appendChild(elhref2);
el.appendChild(elhref);
sli.appendChild(el);
// elm.addEventListener('click',function(e){
//     if(e&&e.target.hasAttribute('href')){
//         window.location.href=e.target.hasAttribute('href');
//     }
// })
var slis=document.getElementById("sliders");
slis.style.display='block';
}
function osamaSliderFolderFetch(i, p1, p2,t) {
var url = p1 + i + p2;
if (typeof i != "number" || isNaN(i)) { return; };
if (i > 5) { return; };
var sli=document.querySelector('.slides');
var s=allSliders.some(function(v,i){return (v&&v.src&&v.src==url)});
if(!s&&url!=""){
osamaloadType(t,url, function (e) {
osamaSliderNew({"src":url,"title":"",href:"",type:t},sli);
osamaSliderFolderFetch((i + 1), p1, p2,t);
}, function (e) {
})
} else{
osamaSliderFolderFetch((i + 1), p1, p2,t);
}
}
function osamaSliderFolder() {
var a='/';
if(window.location.protocol==='file:'){a=''};
try {osamaSliderFolderFetch(1, a+'sliders/', '.mp4', 'video'); } catch (error) { }
try {osamaSliderFolderFetch(1, a+'sliders/', '.jpg','img');} catch (error) {}
try {osamaSliderFolderFetch(1, a+'sliders/', '.jpeg','img');} catch (error) {}
try {osamaSliderFolderFetch(1, a+'sliders/', '.png', 'img');} catch (error) { }
try {osamaSliderFolderFetch(1, a+'sliders/', '.webm', 'video');} catch (error) { }
try {osamaSliderFolderFetch(1, a+'sliders/', '.ogg', 'video');} catch (error) { }
setTimeout(sliderStart, 5000);
setTimeout(sliderStart, 10000);
}
function rgbToHsl(r, g, b) {
r /= 255; g /= 255; b /= 255;
var max = Math.max(r, g, b), min = Math.min(r, g, b);
var h, s, l = (max + min) / 2;
if (max === min) {
h = s = 0; 
} else {
var d = max - min;
s = l > 0.5 ?( d / (2 - max - min)) : (d / (max + min));
switch (max) {
case r: h = (g - b) / d + (g < b ? 6 : 0); break;
case g: h = (b - r) / d + 2; break;
case b: h = (r - g) / d + 4; break;
}
h /= 6;
}
return { h: h, s: s, l: l };
}
function hexToRgb(hex) {
hex = hex.replace(/^#/, '');
if (hex.length === 3) {
var hex2=hex.split('');
hex = hex2[0]+hex2[0]+hex2[1]+hex2[1]+hex2[2]+hex2[2];
}
var bigint = parseInt(hex, 16);
return {
r: (bigint >> 16) & 255,
g: (bigint >> 8) & 255,
b: bigint & 255
};
}

function hslToRgb(h, s, l) {
var r, g, b;
if (s === 0) {
r = g = b = l; 
} else {
function hue2rgb(p, q, t) {
if (t < 0) t += 1;
if (t > 1) t -= 1;
if (t < 1/6) return p + (q - p) * 6 * t;
if (t < 1/2) return q;
if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
return p;
}
var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
var p = 2 * l - q;
r = hue2rgb(p, q, h + 1/3);
g = hue2rgb(p, q, h);
b = hue2rgb(p, q, h - 1/3);
}
return {
r: Math.round(r * 255),
g: Math.round(g * 255),
b: Math.round(b * 255)
};
}
function to2str(a) {
if(a.length<2){a='0'.concat(a)};
return a;
}
function rgbToHex(r, g, b) {
return "#" + to2str(r.toString(16))+to2str(g.toString(16))+to2str(b.toString(16));    
}
function generateColorScale(baseColor,th) {
var rgb = hexToRgb(baseColor);
var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
var output = '';
var output2 = '';
var oth={
'th0':'--color-a: #039b7a;',
'th1':'--color-a: #82039b;',
'th2':'--color-a: #0c7e78;',
'th3':'--color-a:rgb(83, 49, 206);',
'th4':'--color-a:rgb(31, 183, 137);',
'th5':'--color-a: #c37e37;',
'th6':'--color-a: #6b46c1;',
'th7':'--color-a: #3182ce;',
}
if(themes&&themes[0]&&themes[0]['--color-a']){themes.forEach(function(a){if(a['--color-a']){oth[a.id]='--color-a:'+a['--color-a']+';\n'}})}
for (var i = 0; i < 10; i++) {
var lightness = 0.95 - i * 0.09; 
var lightness2 =1 - (i * 0.05); 
var newRgb = hslToRgb(hsl.h, hsl.s, lightness);
var hex = rgbToHex(newRgb.r, newRgb.g, newRgb.b);
var newRgb2 = hslToRgb(hsl.h, hsl.s, lightness2);
var hex2 = rgbToHex(newRgb.r, newRgb.g, newRgb.b);
if(i==0){
output2 += '--color-text: #ffffff;\n';
}
if(i==1){
output2 += '--color-icon: ' + rgbToHex(newRgb.g, newRgb.r, newRgb.b) + ';\n';
}
if(i==3){
output2 += '--color-wr: ' + rgbToHex(newRgb.g, newRgb.r, newRgb.b) + ';\n';
}
if(i==5){
output2 += '--color-inv: ' + rgbToHex(newRgb.b, newRgb.r, newRgb.g) + ';\n';
}
if(i==6){
output2 += '--color-bt: ' + rgbToHex(newRgb.b, newRgb.g, newRgb.r) + ';\n';
}
if(i==7){
output2 += '--color-bg: ' + rgbToHex(newRgb.b, newRgb.g, newRgb.r) + ';\n';
if(th&&oth[th]){
output2 +=oth[th]
}else{
output2 += '--color-a: ' + rgbToHex(newRgb2.g, newRgb2.r, newRgb2.g) + ';\n';
}
}
output += '--color-' + i + ': ' + hex + ';\n';
}
var c=output+output2;
if(th){
c= 'body[theme="'+th+'"],.'+th+' {'+c+'background: var(--color-5); background: -webkit-linear-gradient(225deg,var(--color-3),25%,var(--color-7),55%,var(--color-9),85%,#000); background: -moz-linear-gradient(225deg,var(--color-3),25%,var(--color-7),55%,var(--color-9),85%,#000); background: -o-linear-gradient(225deg,var(--color-3),25%,var(--color-7),55%,var(--color-9),85%,#000); background: linear-gradient(225deg,var(--color-2),25%,var(--color-6),55%,var(--color-9),80%,#000);}';
} else{
c= ':root{'+c+'background: var(--color-5); background: -webkit-linear-gradient(225deg,var(--color-3),25%,var(--color-7),55%,var(--color-9),85%,#000); background: -moz-linear-gradient(225deg,var(--color-3),25%,var(--color-7),55%,var(--color-9),85%,#000); background: -o-linear-gradient(225deg,var(--color-3),25%,var(--color-7),55%,var(--color-9),85%,#000); background: linear-gradient(225deg,var(--color-2),25%,var(--color-6),55%,var(--color-9),80%,#000);}';
}
return c;
}
