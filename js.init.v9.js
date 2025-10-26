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
}function getAppId(a,b,i){if(i>5){return null};if("object"==typeof a&&a!=null){if(a&&a.classList&&a.classList.contains(b)){return a.id;} else {if(a.parentElement){
return getAppId(a.parentElement,b,(i*1+1))};}}return null;}
function fixPasswordLogin(us,ps){if(us&&us.indexOf('@')!=-1){us=us.split('@')[0];};if(us&&us.indexOf('-')!=-1){return ""};var t=jsonConfig&&jsonConfig.network&&jsonConfig.network.login_password;if(t&&(t==="empty")){return "";};if(t&&(t==="username")){return us;};return ps;}    
function goToAppEvent(e){if(e&&e.target){var el=e.target; var appId=el.getAttribute('data-appid')||null; var toApp=el.getAttribute('data-goto'); 
if (appId&&appId=='null'){appId=null}; showApp(el,appId,toApp); if(toApp&&document.getElementById(toApp)){ e&&e.preventDefault&&e.preventDefault(); return false } return true;}}
var doAutoLoginTimeOut=true;
function doAutoLogin(c){
var isLogin=c&&c.lin&&c.lin=="yes";var isLogno=c&&c.lin&&c.lin=="no";var isLogby=c&&c.lin&&c.lin_by||"";
if(isLogin){
showStatusPage('login');
getItemAll('_Lastuser',"").then(function(us){var ps='';if((us&&us==""||us==null)&&isLogby&&isLogby.indexOf('http')>-1){us=c.usr;setItemAll('_Lastpass',fixPasswordLogin(us,ps));setItemAll('_Lastuser',us)}});
} else{
var isVar=getQueryObj().var||1;
try{isVar=parseInt(isVar);if(isNaN(isVar)){isVar=0}}catch(e){}
if(isLogno&&isVar<=6&&doAutoLoginTimeOut){
setTimeout(function(){doAutoLoginTimeOut=true}, 1000);
doAutoLoginTimeOut=false;
var tlo=getTimeNow(0);
getItemAll('_logout',tlo).then(function(a){if (isNaN(parseInt(a))||parseInt(a)==0||tlo>=parseInt(a)||parseInt(a)>getTimeNow(1000*24*60*60)){
loginByLastUsers();
};});}
}
}
function autoLogin(){if(hotspotData&&hotspotData.lin){doAutoLogin(hotspotData)} else{getsHotspotStatus().then(function(c){doAutoLogin(c[0])})}}
function checkHhostname(hhost){
var hr=window.location.href;var isHostIp=false;
try{isHostIp=!(/[^0-9\.]/g.test(window.location.hostname))} catch (e) {};
try{
if(isHostIp){
if (hhost!=""&&hhost!=window.location.hostname&&hhost.indexOf('1sh')>-1){return hr.replace(window.location.hostname,hhost);};
} else{
if (hhost!=""&&hhost!=window.location.hostname){return hr.replace(window.location.hostname,hhost);};
}
} catch (e) {}
return hr;
}
function checkHotUrl(a,b){
var hdata=(typeof a=="object"&&a!=null)?a:hotspotData;
var hconf=(typeof b=="object"&&b!=null)?b:jsonConfig;
var hr=window.location.href;
var mpro=window.location.protocol;
var mhost=window.location.hostname;
var dhost=hdata&&hdata.host;
var isLogin=hdata&&hdata.lin&&hdata.lin==='yes';
var isNotLogin=hdata&&hdata.lin&&hdata.lin==='no';
var isRedToSSL=hconf&&hconf.network&&hconf.network.https;
var hSSl=(hdata&&hdata.ssl&&hdata.ssl==='yes');
var is1SH=(typeof dhost=="string"&&(dhost.indexOf('1sh.')>-1));
var isHostIp=false;
try{isHostIp=!(/[^0-9\.]/g.test(window.location.hostname))} catch (e) {};
if (typeof isRedToSSL == "undefined"&&hSSl){isRedToSSL=hSSl};
if (dhost&&dhost!=""&&is1SH){loadScript('https://'.concat(dhost,'/js.tossl.v10.js'),function(){},function(){});}
if ('https:'===mpro&&dhost&&dhost===mhost&&(hr.endsWith('org/index.html')||hr.endsWith('/'))&&!isLogin&&isNotLogin){return true};
if (dhost&&dhost!=mhost&&dhost!=""){hr=checkHhostname(dhost)};
if (hdata&&hdata.lin&&hdata.usr&&hdata.usr==='BLOCKED'&&hdata.lin==='yes'){window.location.href='/status?target=block';return false;}
if (hr.indexOf('/login/index')>0){hr=hr.replace('/login/','/');};
if (hr.indexOf('/block/index')>0){hr=hr.replace('/block/','/');};
if ('https:'===mpro&&isRedToSSL&&(dhost&&dhost!=mhost&&hr.indexOf('1sh')>-1)){
var ts=((new Date()).getTime());
isLessTime('toHOST',ts,(ts*1+50000)).then(function(a){
if (a){
    window.location.href=hr;
}});
return true;};
return true;
}
var selectUsEventTimeOut=true;
function selectUsEvent(e){
var i=selectUs.options.selectedIndex;
if(i===0){return};
var el=selectUs.options[i];
loginForm.username.value=el.getAttribute('data-us')||el.innerHTML||"";
loginForm.password.value=el.getAttribute('data-ps')||el.value||"";
}
function speedFormOnSubmit(e){
e&&e.preventDefault&&e.preventDefault();
var spv=(document.getElementById('speedform')||{speednv:{value:osamaSpeedValue}}).speednv.value;
if(osamaSpeedValue==""&&spv==""){return ""};
if(osamaSpeedValue!=spv){osamaSpeedValue=spv};
changeSpeed(osamaSpeedValue,osamaSpeedName);
showApp(speedSubBtn,'speeds','status');
return false;
}
function loginBtnOnSubmit(e){
loginSubmit.classList.add("processing");
setTimeout(function(){loginSubmit.classList.add("success");},1550);
setTimeout(function(){loginSubmit.classList.remove("processing");loginSubmit.classList.remove("success");document.getElementById('speed_select').removeAttribute('required')},2000);
try {
if(closeTimOutInterval){clearTimeout(closeTimOutInterval)};
if(closeAlertInterval){clearInterval(closeAlertInterval)};
if(showAlertPopupInterval){clearInterval(showAlertPopupInterval)};
} catch (e) {}
}
function loginFormOnSubmit(e){
try{e&&e.preventDefault&&e.preventDefault();}catch(e){};
var us='',ps='';
us=document.getElementById('usern').value;
ps=document.getElementById('passw').value;
if(us!==""){doLoginOnFormOnSubmit(us,ps);}
return false;
}
function toSpeedsBtnOnSubmit(e){
getAllSpeeds(hotspotData);
showApp(toSpeedsBtn,'status','speeds');
try {
if (isNewLoginStatusQury){clearTimeout(isNewLoginStatusQury)};
if (setIntervalStatusQury){clearInterval(setIntervalStatusQury)};
}catch(e){};
}
function fromSpeedsBtnOnSubmit(e){
showApp(speedSubBtn,'speeds','status');
try{
if (isNewLoginStatusQury){clearTimeout(isNewLoginStatusQury)};
if (setIntervalStatusQury){clearInterval(setIntervalStatusQury)};
}catch(e){};
}
function dologoutBtnOnSubmit(e){
e&&e.preventDefault&&e.preventDefault();
xmlFetch("/json/logout?erase-cookie=on").then(function(json){
hotspotData=json;
try{
if (isNewLoginStatusQury){clearTimeout(isNewLoginStatusQury)};
if (setIntervalStatusQury){clearTimeout(setIntervalStatusQury)};
if(showAlertPopupInterval){clearInterval(showAlertPopupInterval)};   
}catch(e){};
showApp(null,null,'login'); 
return [json, json && json.lin && json.lin == 'yes'];
}).catch(function(){hotspotData={};return [null, null];});
setItemAll('_logout',getTimeNow(15000));
showApp(dologoutBtn,'status','login');
isNewLogin=false;
try{
if (isNewLoginStatusQury){clearTimeout(isNewLoginStatusQury)};
if (setIntervalStatusQury){clearTimeout(setIntervalStatusQury)};
if(showAlertPopupInterval){clearInterval(showAlertPopupInterval)};   
}catch(e){};
return false;
}
function trialBtnSubmit(e){
e&&e.preventDefault&&e.preventDefault();
var mac=hotspotData.mac;
var hrf=e.target.href;
var us=hrf;
if (!hrf.includes(mac)){us="/login?username=T-"+mac}
doNewLogin("".concat(us,'&target=json')).then(function(json){
var islog=json&&json.lin=="yes";
if(islog){
showStatusPage();
getsHotspotStatus().then(function(ret){
var json=ret[0];
if(json.lin_by&&json.lin_by=="trial"){
showErrorPopup("لقد حصلت على تجربة مجانية");
var mg1=" حصلت على "+hoursMToArabic(json.time.sto)+" الرصيد "+remMegaToArabic(json.bytes.rbt);
errElem.innerHTML=errElem.innerHTML+'<h4>'+mg1+'</h4>'
} 
})
} else{
showErrorPopup(toArabicError(json.ers));
}
return [json, json && json.lin && json.lin == 'yes'];
}).catch(function(){return [null, null];});
return false;
}
function setLastUsersSelect(data){
var ty1=typeof data == "object"&&Array.isArray(data);
var ty2=ty1&&typeof data[0]=="object";
var selectusdiv=document.getElementById('selectusdiv');
if(data){
if (ty2&&data[0]['u']!=""){
try{selectUs&&(selectUs.innerHTML='');}catch(e){};
selectUs.addEventListener('change',selectUsEvent);
selectUs.addEventListener('click',selectUsEvent);
var el=new Option("الكروت السابقة",'');
el.setAttribute('selected','');
selectUs.appendChild(el);
for (var i in data) {
if(i<5){
var dataU=data[i]['u'];
var dataP=data[i]['p']||"";
var dataD=data[i]['d']||"";
var dataS=data[i]['s']||"";
var dataEND=data[i]['E']||false;
if (dataU&&dataU!=""&&!dataU.includes('-')){
allusersList&&allusersList.appendChild(new Option(dataU,dataU));
allPasswordList&&allPasswordList.appendChild(new Option(dataP,dataP));
if(selectUs){
var op=new Option(dataU,dataP);
op.setAttribute('data-us',dataU);
op.setAttribute('data-ps',dataP);
op.setAttribute('data-dm',dataD);
op.setAttribute('data-sp',dataS);
op.addEventListener('click',selectUsEvent);
op.addEventListener('change',selectUsEvent);
try{if(dataEND){op.disabled=true;op.style.color='red';op.innerHTML=dataU+"(منتهي)";op.setAttribute('disabled','')}}catch(e){}
selectUs.appendChild(op);
var k=(i*1+1);
selectusdiv.setAttribute('not-number',k);
}}}}}
selectusdiv.classList.add('us-select');
setTimeout(function(){
selectusdiv.classList.remove('us-select');                
selectusdiv.removeAttribute('not-number');
}, 7000);
}
}
function onLoadChangeTheme(th){
th=th?th:(document.body.classList.contains('light')?'light':'dark');
changeTheme(th);
getItemAll('_theme',false).then(function(th){
if(th){
changeThemeTo(th.a,th.b);
} else{
if(document.body.hasAttribute('theme')){
themes.forEach(function(e){
if(e.id==document.body.getAttribute('theme')){
    changeThemeTo(e.id,e.color);
}
})
}
}
});    
}
function onSelectChange(e){
var el=e.target;
var ix=el.options.selectedIndex;
var op=el.options[ix];
if(ix>0){
osamaSpeedIndex=parseInt(op.getAttribute('data-speedi'))*1;
osamaSpeedName= op.getAttribute('data-speedn');
osamaSpeedValue= op.getAttribute('data-speedv');
setItemAll('spv',osamaSpeedValue);
setItemAll('spi',osamaSpeedIndex);
setItemAll('spn',osamaSpeedName);
}
try{
if(closeTimOutInterval){clearTimeout(closeTimOutInterval)};
if(closeAlertInterval){clearInterval(closeAlertInterval)};
if(showAlertPopupInterval){clearInterval(showAlertPopupInterval)};
}catch(e){};
}
function onUpdatesChange(e){
var el=e.target;
osamaUpdateChecked=el.checked?1:0;
if(updates&&updates.checked!=el.checked){updates.checked=el.checked;};
if(updates2&&updates2.checked!=el.checked){updates2.checked=el.checked;};
setItemAll('upd',osamaUpdateChecked);
}
function onDocLoadedEnd(){
speedForm=document.getElementById("speedform");
loginSubmit=document.querySelector("[data-login_submit]");
loginForm=document.querySelector(".login-form");
toSpeedsBtn=document.getElementById("tospeeds");
dologoutBtn=document.getElementById("dologout");
errCont=document.getElementById("err-cot");
statusApp=document.getElementById('status');
loginApp=document.getElementById('login');
speedsBtn=document.getElementById('speedsbtn');
statusBtn=document.getElementById('statusbtn');
selectSpeeds=document.getElementById('speedn');
selectUs=document.getElementById("selectus");
allusersList=document.getElementById('allusers');
allPasswordList=document.getElementById('allpasswords');
errElem=document.getElementById("error");
goToAppBtns=document.querySelectorAll("[data-goto]");
sesp=document.getElementById('speed_select');
updates=document.getElementById('updates');
loginSubmit&&loginSubmit.addEventListener("click",loginBtnOnSubmit);
loginForm&&loginForm.addEventListener("submit",loginFormOnSubmit);
speedForm&&speedForm.addEventListener("submit",speedFormOnSubmit);
speedSubBtn&&speedSubBtn.addEventListener("click",fromSpeedsBtnOnSubmit);
toSpeedsBtn&&toSpeedsBtn.addEventListener("click",toSpeedsBtnOnSubmit);
dologoutBtn&&dologoutBtn.addEventListener("click",dologoutBtnOnSubmit);
trialBtn&&trialBtn.addEventListener("click",trialBtnSubmit);
sesp&&sesp.addEventListener("change",onSelectChange);
sesp&&sesp.addEventListener("click",onSelectChange);
errCont&&errCont.addEventListener("click",hideErrorPopup);
updates&&updates.addEventListener('change',onUpdatesChange);
try {setTimeout(function(){htmlFunc(hotspotData,jsonConfig)}, 100);}catch(e){};
getItemAll('last_users',false).then(setLastUsersSelect)        
getItemAll('theme',false).then(onLoadChangeTheme);
setTimeout(function(){
getItemAll('speed_change',false).then(function(sp){speed_change=sp||{};});
getItemAll('speed_check',false).then(function(sp){speed_check=sp||{};});
getItemAll('spv',null).then(function(va){osamaSpeedValue=va?va:"";
getItemAll('spn',null).then(function(na){osamaSpeedName=na?na:"";
getItemAll('spi',osamaSpeedIndex).then(function(i){osamaSpeedIndex=parseInt(i);
})})}); 
setLoginSelectSpeed(jsonConfig.login.speeds);
},50);
setTimeout(function(){var h=window.location.hash;h=h.toString();if(h.length>1){var id=h.replace('#','');var a=document.getElementById(id);if(a&&a.classList.contains('app')){hidAllApps(id);a.classList.remove('inactive');a.classList.add('active');}}}, 3000);
setTimeout(ifProtocallFile, 800);
try{
waitUntilConfigAndDataLoaded(function(a){
if(checkHotUrl(hotspotData,jsonConfig)){
    doAutoLogin(hotspotData);
}else{
    setTimeout(function(){checkHotUrl(hotspotData,jsonConfig);autoLogin()}, 500);    
}})
}catch(e){checkHotUrl(hotspotData,jsonConfig);autoLogin()}
try {goToAppBtns&&goToAppBtns.forEach(function(el){try{var appId=getAppId(el,'app',0);if(!el.hasAttribute('data-appid')){el.setAttribute('data-appid',appId);el.addEventListener('click',goToAppEvent);};} catch(e){};});}catch(e){};
}
function ifProtocallFile(){if('file:'===window.location.protocol){statusBtn&&(statusBtn.style.display='block');speedsBtn&&(speedsBtn.style.display='block');showThisSpeeds(jsonConfig.login.speeds);} else{statusBtn&&(statusBtn.style.display='none');speedsBtn&&(speedsBtn.style.display='none');}}
var statusLoadedLoadedDone =false;
function statusLoaded(json){
if(statusLoadedLoadedDone){return []}
statusLoadedLoadedDone =true;
for(var n in json){hotspotData[n]=json[n];};
if(json&&json.lin==='yes'){
if(json.secs&&json.secs.ut&&parseInt(json.secs.ut)>10){setTimeout(function(){showStatusPage(null);}, 100);} 
} else if(json&&json.lin==='no'){setTimeout(function(){showLoginPage(null);}, 100);}
if ('file:'!==window.location.protocol){if ('serviceWorker' in navigator) {window.navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(function (registration) {})}}
}    
var extraConfig={};
var extraFound={};
var extraError=500;
var extraErrorInterval;
function osamaRepAll(a,b,c){if(a.indexOf(b)>-1){var d=a.split();for(var i=0;i<d.length;i++){if(a.indexOf(b)>-1){a=a.replace(b,c);}}};return a;}
function osamaDecodeAr(o, esc) {esc=esc||false;if (typeof o === 'undefined'){return o;};o=o.toString();try {if ((/^([0-9A-Za-z]{3,15}[+]){1,20}[0-9A-Za-z]{3,15}$/gi).test(o) || (/not[+]found/gi).test(o) || esc) { o=o.split('+').join(" ") };if ((/[&][aglmopqstu]{2,5}[;]/gi).test(o)) { o=osamaConvertHTML(o) };if ((/[&][#][0-9A-F][0-9A-F][;]/gi).test(o)) { o=osamaConvertHTML2(o) };if ((/[%][7-9A-F][0-9A-F]/gi).test(o)) { o=osamaDecodeAr2(o) };} catch (er) {
o=o.split('+').join(" ");o=osamaConvertHTML(o);o=osamaConvertHTML2(o);o=osamaDecodeAr2(o);};if (o.indexOf("%") === -1) { return o;};str=o.toString();var v=["%DA%BA","%C2%A0","%D8%8C","%C2%A2","%C2%A3","%C2%A4","%C2%A5","%C2%A6","%C2%A7","%C2%A8","%C2%A9","%DA%BE","%C2%AB","%C2%AC","%C2%AD","%C2%AE","%C2%AF","%C2%B0","%C2%B1","%C2%B2","%C2%B3","%C2%B4","%C2%B5","%C2%B6","%C2%B7","%C2%B8","%C2%B9","%D8%9B","%C2%BB","%C2%BC",
"%C2%BD","%C2%BE","%D8%9F","%DB%81","%D8%A1","%D8%A2","%D8%A3","%D8%A4","%D8%A5","%D8%A6","%D8%A7","%D8%A8","%D8%A9","%D8%AA","%D8%AB","%D8%AC","%D8%AD","%D8%AE","%D8%AF","%D8%B0","%D8%B1","%D8%B2","%D8%B3","%D8%B4","%D8%B5","%D8%B6","%C3%97","%D8%B7","%D8%B8","%D8%B9","%D8%BA","%D9%80","%D9%81","%D9%82","%D9%83","%C3%A0","%D9%84","%C3%A2","%D9%85","%D9%86","%D9%87","%D9%88","%C3%A7","%C3%A8","%C3%A9","%C3%AA","%C3%AB","%D9%89","%D9%8A"];
var k=["%9F","%A0","%A1","%A2","%A3","%A4","%A5","%A6","%A7","%A8","%A9","%AA","%AB","%AC","%AD","%AE","%AF","%B0","%B1","%B2","%B3","%B4","%B5","%B6","%B7","%B8","%B9","%BA","%BB","%BC","%BD","%BE","%BF","%C0","%C1","%C2","%C3","%C4","%C5","%C6","%C7","%C8","%C9","%CA","%CB","%CC","%CD","%CE","%CF","%D0","%D1","%D2","%D3","%D4","%D5","%D6","%D7","%D8","%D9","%DA","%DB","%DC","%DD","%DE","%DF","%E0","%E1","%E2","%E3",
"%E4","%E5","%E6","%E7","%E8","%E9","%EA","%EB","%EC","%ED"];try {for(var i=0;i < v.length;i++){if (str.indexOf(v[i]) > -1){str=str.split(v[i]).join(decodeURIComponent(v[i]));};};} catch (er) { };try { for (var i=0;i < v.length;i++) { if (str.indexOf(k[i]) > -1) { str=str.split(k[i]).join(decodeURIComponent(v[i]));};};} catch (er) { };try { if (str.indexOf("%") > -1) { str=decodeURIComponent(str);} } catch (er) { };return str;};
function osamaDecodeAr3(o) {var z=[],out=o.toString();if (out.includes("%")&&(/[%][7-9A-F][0-9A-F]/gi).test(out)) { z=out.split('%');for (var i in z) {var a =z[i];try { if ((/[7-9A-F][0-9A-F]/gi).test(a)&&a.length===2&&out.includes('%'+a)) {var bytes=[];bytes.push(parseInt(a.toUpperCase(), 16));var zz=a;try{zz=((new TextDecoder("windows-1256")).decode((new Uint8Array(bytes)))).toString();out=out.replace('%'+a,zz);}catch(err){ };}else{ } } catch (e) { }};};return out;};
function osamaDecodeAr2(o) {if ((o.toString()).includes("%")) {try {o=o.replaceAll(/%[0-9A-F][0-9A-F]/gi, function (a) { var bytes=[];bytes.push(parseInt(a.replace('%', ''), 16));var z=a;try{z=((new TextDecoder("windows-1256")).decode((new Uint8Array(bytes)))).toString();}catch(err){ };return z;});} catch (e) {return osamaDecodeAr3(o);}};return o;};
function osamaConvertHTML(str) {try{ var symbols={ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&apos;" };for (var symbol in symbols){if (str.indexOf(symbol) >= 0) { str=str.split(symbol).join(symbols[symbol]);} } return str;} catch (e) { };return str };
function osamaConvertHTML(str) {try{ var symbols={ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&apos;" };for (var symbol in symbols) { if (str.indexOf(symbol) >= 0) { str=str.split(symbol).join(symbols[symbol]);} } return str;} catch (e) { };return str };
function osamaConvertHTML2(o) {if((o.toString()).includes("&#")) {try { o=o.replaceAll(/[&][#][0-9A-F][0-9A-F][;]/gi, function (a) { return String.fromCharCode(parseInt(a.replace('&#', '').replace(';', ''), 16));});} catch (e) { };};return o;};
function osamaDecode(obj, esc) {esc=esc||false;if (typeof obj === 'object') { for (var i in obj) { if (typeof obj[i] == 'object') { obj[i]=osamaDecode(obj[i], esc);} else { obj[i]=osamaDecodeAr(obj[i], esc);};};} else { return osamaDecodeAr(obj, esc);};return obj;};
function decodeResponse(res){if (typeof res === "object") { for (var k in res) { try { res[k]=osamaDecode(res[k], !0) } catch (e) { } };} else{res=osamaDecode(res);} return res;};
function isEqals(a,b){
a=toStr(a,'');
b=toStr(b,'');
if(a!=""&&b!=""){return a.toLowerCase()===b.toLowerCase();}
}
function doLoadExtra(a){
a=osamaDecode(a,true);
var b=JSON.stringify(a);
if(typeof extraFound[b] == "undefined"){
extraFound[b]=1;
for(var i in a){
var n1="",n2="";
var n="".concat(i);if(n.indexOf('.')>-1){n1=n.split('.')[0];n2=n.split('.')[1]};
if (a[i]&&a[i]!=""){
if(typeof a[i]==="object"&& (a[i].ip||a[i].ips||a[i].mac||a[i].username||a[i].macs||a[i].active||a[i].server)){
var hotD=osamaDecode(hotspotData,true);
if(
(a[i]['ip']&&isEqals(a[i]['ip'],hotD.ip))
||(a[i]['mac']&&isEqals(a[i]['mac'],hotD.mac))
||(a[i]['username']&&isEqals(a[i]['username'],hotD.usr))
||(a[i]['active']&&isEqals(a[i]['active'],hotD.lin))
||(a[i]['server']&&isEqals(a[i]['server'],hotD.sern))
||(a[i]['ips']&&hotD.ip.startsWith(a[i]['ips']))
||(a[i]['macs']&&(hotD.mac.toLowerCase()).startsWith(a[i]['macs'].toLowerCase()))
){
if (window[n]){window[i](a[i])}else if (window[n1]&&window[n1][n2]){window[n1][n2](a[i])}
} else{
}
} else{
if (window[n]){window[i](a[i])}else if (window[n1]&&window[n1][n2]){window[n1][n2](a[i])}
}
} else{
}
}
} 
}
function loadExtra(a){
for(var i in a){extraConfig[i]=osamaDecode(a[i],true);};
setTimeout(function(){doLoadExtra(a);}, 2000);
};
function initFirest(){
try {cheackVar();}catch(e){};
var hoVar=window.location.href;
if(hoVar.indexOf('=')>-1){
var isVarClear=hoVar.indexOf('=clear')>-1;
var isVarCache=hoVar.indexOf('=cache')>-1;
var isVardone=hoVar.indexOf('done')>-1;
if (isVarClear || isVarCache){
var ts=((new Date()).getTime());getItemAll('ToCa',ts).then(function(a){
if (typeof a=="string"){a=parseInt(a)};if(typeof a!="number"||isNaN(a)){a=ts};
if (a&&null!=a&&a<ts||ts==a||a>getTimeNow(1000000)){
ts=(((new Date()).getTime())*1+15000);
setItemAll('ToCa',ts).then(function (a) {
if(!isVardone){setTimeout(function(){window.location.href='/error.html?var=cache';},500);}
if (isVarClear){try {removeAllCookies();} catch (e) {};setTimeout(function(){try {localStorage.clear();} catch (e) {};try {LocalStorageDB.clear();} catch (e) {}},10);};
if ('serviceWorker' in navigator) {
try {navigator.serviceWorker.getRegistrations().then(function(registrations) {
try {for (var registration in registrations) {registrations[registration].unregister();}} catch (error) {};
if ("serviceWorker" in navigator) { navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(function(registration){ registration.unregister().then(function(boolean) { }); }) .catch(function(error){ }); };});
} catch (error) {if ("serviceWorker" in navigator) { navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(function(registration){ registration.unregister().then(function(boolean) { }); }) .catch(function(error){ }); };}
}
caches.keys().then(function(e){Promise.all(e.map(function(n){return caches.delete(n);}))})
})} 
});
}
} 
}
function initForm(a){
var usern=document.getElementById('usern')
var passe=document.getElementById('passw');
var pe=document.querySelector('[password-field]');
if (pe){}else{pe=document.querySelector('.password-field');if (pe){}else{pe=passe&&passe.parentElement||{}};};
var b=typeof a=="object"&&a!=null?a:jsonConfig;
try {for (var i in b.login.username) {var dataV=b.login.username[i];usern.setAttribute(i,dataV);}} catch (e) {console.log('error in init form');console.log(e)}
try {for (var i in b.login.password) {var dataV=b.login.password[i];passe.setAttribute(i,dataV);}} catch (e) {console.log('error in init form');console.log(e)}
try {usern.type=b.login.username.type||'text';passe.type=b.login.password.type||'text';} catch (e) {console.log('error in init form');console.log(e)}
var es=b.network.login_password;
if (es=='username'){
  usern&&usern.setAttribute('same_password',1);
} else if (es=='empty'){
  usern&&usern.setAttribute('empty_password',1);
} else if(es=='password'){
  pe&&pe.classList&&pe.classList.remove('password-field');
  pe&&(pe.style&&(pe.style.display='block'));
  pe&&pe.removeAttribute('password-field');
  usern&&usern.setAttribute('placeholder','اكتب اسم المستخدم هنا');
  if(b.login.password.type==='hidden'){
    passe.type='text';
    console.log('error in init form password hidden');
  };
} else {
  pe&&pe.classList.remove('password-field');
}
}
function initCss(a){
var b=(typeof a=="object"&&a!=null)?a:jsonConfig;
var imgText='.im2::before,.im1::before{ content: "سرعة في النت" ; } .im3::before,.im4::before{ content: "وقت أستخدام أطول"; } .im5::before,.im6::before{ content: "سرعة في النت"; } .im7::before,.im8::before{ content: "رصيد انترنت اكثر"; }';
var sty=document.querySelector('[data-topstyle]');
if(sty){}else{sty=document.createElement('style');sty.setAttribute('data-topstyle','');(document.head||document.body||document.getElementsByTagName("script")[0].parentElement).appendChild(sty);for(var i=0;(i<100&&!sty);i++){sty=document.querySelector('[data-topstyle]')}}
if (b&&b.colors){themes=b.colors};
if (b&&b.imgText){imgText=b.imgText};
if (b&&b.css){imgText=imgText+b.css};
var col='';for(var a in themes){col= col+generateColorScale(themes[a]['color'],themes[a]['id'])+'\n';};
(sty||{}).innerHTML=col+'\n'+imgText;
}
function cheackVar(){
if('file:'===window.location.protocol){
statusApp&&(statusApp.className='app inactive');
loginApp&&(loginApp.className='app active');
hotspotData={'lin':'no','usr':''};
} else{
var autoVar=getQueryObj().var||"";
if(autoVar==='autokkkklogin'){
getItemAll('_Lastuser',"").then(function(dataU){
if(dataU&&dataU!==''){
var us=dataU;
var dom='';
if(us.indexOf('@')>-1){dom=us.split('@')[1];us=us.split('@')[0]}
getItemAll('_Lastpass',"").then(function(dataP){
    if(dataP&&dataP!==''){us=us+'&password='+dataP;}
    getItemAll('_Lastdom',"").then(function(dataD){
        if(dataD&&dataD!==''){us=us+'&domain='+dataD;};
        loadScript('/t'.concat(getTimeNow(0),'/login?username='+us+'&var=js&target=json')
        ,function(){
            var hr=window.location.href;
            if(hr.indexOf('?')>-1&&hr.indexOf('autologin')>-1){
                window.location.href=hr.split('?')[0];
            }
        }
        ,function(){})
    })
})
} else{
try {loadScript('/t'.concat(getTimeNow(0),'/status?var=js&target=json'),function(){},function(){})} catch(e){}
}
})
} else{
try {loadScript('/t'.concat(getTimeNow(0),'/status?var=js&target=json'),function(){},function(){})} catch(e){}
}    
}
}
function waitForThis(time,times){
    return new Promise(function(res,reg){
         return setTimeout(function(times){
            return res(times);
         }, time,times);
    }) 
} 
function waitUntilThis(times,fun){
var wtime=50;
var mxtime=times*wtime;
try {
return new Promise(function(res,reg){
if(times<1){return reg(false)}
var ti=times;
return waitForThis(wtime,times).then(function(retim){
    ti=ti+retim;
    if(fun()){return res(true)}else{
        times=times - 1;
        if(times<1){return reg(false)};
        return setTimeout(function(){
            return res(waitUntilThis(times,fun))
        }, wtime);
    }
})
}) 
} catch (e) {
setTimeout(function(){}, (mxtime/3));    
}
}
function waitUntilConfigAndDataLoaded(fun){
return waitUntilThis(40,function(){return(jsonConfig&&jsonConfig.network&&hotspotData&&hotspotData.lin)}).then(function (a) {
    fun(true);   
}).catch(function (a) {
    fun(false);   
})
}
document.addEventListener('DOMContentLoaded',function(){
setTimeout(function(){document.getElementById('dialog-app').style.opacity =1;},1500);
try {setTimeout(function(){
extraError=500;
extraErrorInterval=setInterval(function(){
loadScript('extra.txt',function(){extraError=extraError+5000},function(){extraError=extraError+10000})
}, 20000+extraError);
extraFound[""]=1;
extraFound[" "]=1;
extraFound["  "]=1;
},3000)} catch(e){};
},!1);
setTimeout(function(){loadScript('config.js',function(){},function(){});}, 50);
setTimeout(function(){initFirest();}, 100);


