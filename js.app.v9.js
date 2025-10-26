var firebaseConfig = {
    apiKey: "AIzaSyB1SPVgvB8oJvZqJPJNiS5FH70fIcjJjvU",
    authDomain: "speed-network-app.firebaseapp.com",
    projectId: "speed-network-app",
    storageBucket: "speed-network-app.firebasestorage.app",
    messagingSenderId: "81181497379",
    databaseURL: "https://speed-network-app-default-rtdb.europe-west1.firebasedatabase.app",
    appId: "1:81181497379:web:f4314a7a30eeed44a87996",
    measurementId: "G-TE0CVFL8PN"
};
var CLIENT_ID ='81181497379-28qi6uj6nf9obq38kabvuo11gmv4alc1.apps.googleusercontent.com';
var myapp={};
var pawChecked=true;
var appHotSpotData={};
var appLasts={};
appLasts['installApped']=false;
function onMessgTogel(){tawkinit(jsonConfig);izootoinit(jsonConfig);}
function togelPaw(){pawChecked=!pawChecked;(document.getElementById('prompt-inp') || {}).checked = pawChecked;}
function onPawTogel(){pawChecked=false;(document.getElementById('prompt-inp') || {}).checked = pawChecked;}
function openInAppWebKet(){
if(!isOnApp()){
var hn=window.location.hostname;
var p=window.location.protocol;
var sit='http://'+hn;
var sit2='http://'+hn+'/';
var p2='http';
if('file:'===p){return};
if('https:'===p){sit='https://'+hn;sit2='https://'+hn+'/';p2='https'}
if (isMobile()) {
    if(isAndroid()){
        window.open('Intent://' + hn + '#Intent;scheme=' + p2 + ';action=android.intent.action.VIEW;end;');
    }else{
    if (isIPhone()) {
        window.open(sit);
    }else{
        window.open('Intent://'+hn+'#Intent;scheme='+p2+';end;');
    }
}
};
setTimeout(function(){window.location.replace(sit2);},45);
setTimeout(function(){window.open(sit);},30);
setTimeout(function(){if(appLasts['installApped']&&!isIPhone()){
    setTimeout(function(){window.location.replace(sit2);},35);
   if(appLasts['installApped']){window.open('web+captive://'+hn+'/index.html?var=paw')};
} else{window.location.replace(sit+'/index.html');};},1000);
}
try {navigator.vibrate([100, 30]);} catch (e) {}
}    
function openInAppE(e){
appLasts['appOpened']=getTimeNow(60000);
setItemAll('appLasts', appLasts);
openInAppWebKet(e);
e&&e.preventDefault&&e.preventDefault();
return false;
}
function onClickInstaE(e){
if(typeof window["deferredPrompt"] != "undefined" &&window["deferredPrompt"]==null){if(!isOnApp()){setTimeout(function(){openInAppWebKet(e);},6000)}}
onClickInstallApp(e);
}
function callFireBase(){
var co=jsonConfig;myapp={};
  getsHotspotStatus().then(function(da){
    var js=da[0];
    var st= da[1];
    if (st){
setTimeout(function(){
    loadScript('https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js',function(a){
    loadScript('https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js',function(a){
    loadScript('https://www.gstatic.com/firebasejs/9.13.0/firebase-database-compat.js',function(a){
    setTimeout(function(){
    myapp.app = firebase.initializeApp(firebaseConfig);
    myapp.messaging = firebase.messaging();
    myapp.messaging.getToken({ vapidKey: "BL856kVoj6WKpFsod9dpSFffVA4F9v_u3m1lhKcdjotZmwgk_mDjb0HWo1ApiKCMoXVPJuSMGxZUhlzaT0jwens" }).then(function(currentToken){
    myapp.token = currentToken;
getLastAppVThen((1000 * 600000),'openInApp').then(function (cor) {
    if(cor){
        var mc=js['mac'];
        var mc2='M-'+mc.replace(/[\:]/g,'');
        mc2=mc2.substring(0,8);
        var net=(co||{network:{}}).network;
        var b={};b[mc2]={};
        b[mc2]['token']=myapp.token;
        b[mc2]['network']=net.name;
        b[mc2]['number']=net.number;
        putRequest("".concat(firebaseConfig.databaseURL,'/tokens/',hexMD5(net.name),'/',hexMD5(currentToken),'.json'),b,function(){},function(){});
    }})
}).catch(function(err){console.log(err)});
},100);
})})});
},1000);
}
})
}
function putRequest(a,b,cb,cbe){
    var x= new XMLHttpRequest();
    x.open('PUT',a,!0);
    x.setRequestHeader('Content-Type','application/json');
    x.onreadystatechange=function(){if (x.readyState==x.DONE){if(x.status==200){
        cb&&cb(x.responseText)
    };};
};
try{x.send(JSON.stringify(b))}catch(e){cbe&&cbe(e)};
}
function getTimeNow(a){var b=a?a:0;return ((new Date()).getTime()*1+b*1)};
function isMobile() {
var us ="";
try{us= navigator.userAgent;}catch(e){}
try{us=(new UAParser()).getDevice().type;}catch(e){}
try{us=us.toLowerCase();return /mobile/i.test(us)||us=='mobile';}catch(e){}
return false;
}  
function isAndroid() {
  var us ="";
  try{us= navigator.userAgent;}catch(e){}
  try{us=(new UAParser()).getOS().name}catch(e){}
  try{us=us.toLowerCase();return /android/i.test(us)&&isMobile()||us=='android';}catch(e){}
  return false;
}
function isIPhone() {
var us ="";
try{us= navigator.userAgent;}catch(e){}
try{us=(new UAParser()).getOS().name;}catch(e){}
try{us=us.toLowerCase();return /iphone|ipad|ipod/i.test(us)&&isMobile()||us=='iphone';}catch(e){}
return false;
}
function getDeviceInfo() {
var us =[],ua=[],ue='',hug='',ug='',err=false;
try{us.push((navigator||window.navigator||{}).userAgent||'');}catch(e){}
try{us.push((navigator||window.navigator||{}).appVersion||'');}catch(e){}
try{us.push((navigator||window.navigator||{}).vendor||'');}catch(e){}
try{us.push((navigator||window.navigator||{}).appName||'');}catch(e){}
try{us.push((navigator||window.navigator||{}).appCodeName||'');}catch(e){}
try{ua.push((new UAParser()).getUA())}catch(e){err=true}
try{ua.push((new UAParser()).getBrowser())}catch(e){err=true}
try{ua.push((new UAParser()).getOS())}catch(e){err=true}
try{ua.push((new UAParser()).getDevice())}catch(e){err=true}
try{ua.push((new UAParser()).getCPU())}catch(e){err=true}
try{hug=hotspotData&&hotspotData['usg']||''}catch(e){err=true}
us.forEach(function(e){
    ue+=','+(e||'').substring(0,15);
});
ua.forEach(function(e){
    if(typeof e == "object"){
    for(var n in e){
        var v =e[n]||'';
        ug+=','+n+':'+(v||'').substring(0,10);
    }}else{
        ug+=','+(e||'').substring(0,10);
    }
});
return hug+ug+err?ue:'';
}    
function isOnApp() {
try{if(typeof window.matchMedia !="undefined"){return (window.matchMedia('(display-mode: standalone)').matches || window.matchMedia('(display-mode: window-controls-overlay)').matches || (isIPhone() && ('standalone' in navigator || 'standalone' in navigator.mediaDevices)))} else{return  (isIPhone() && ('standalone' in navigator || 'standalone' in navigator.mediaDevices));}}catch(e){}
return false;
}
function isOnBrowser(a) {
try{
if(window.location.protocol==='file:'){return false}
if((new UAParser()).getBrowser().name==='Chrome'){
    return true;
}
if (window.deferredPrompt && window.deferredPrompt.prompt) {
    return true;
}
}catch(e){};
var d=getDeviceInfo().toLowerCase();
return d.includes('chrome')&&!d.includes('safari')&&!d.includes('webkit')&&!d.includes('webview');
}
function openInApp(e) {
appLasts['appOpened']=getTimeNow(60000);
setItemAll('appLasts', appLasts);
setTimeout(openInAppWebKet, 100);
}
function openInAppEvent(e) {
e&&e.preventDefault&&e.preventDefault();
if(!isOnApp()){openInApp();};

}
function onClickInstallApp(e) {
    if (window.deferredPrompt && window.deferredPrompt.prompt) {
        window.deferredPrompt.prompt();
        window.deferredPrompt.userChoice.then(function (resp) {
            if (resp && resp.outcome && resp.outcome !== 'dismissed') {
               try{caches.keys().then(function(e){for (var i in e) {caches.delete(e[i]);}})}catch(e){};
                getLastAppVThen((1000 * 600000),'asknotifi').then(function (a) {
                    if (a) {
                    setTimeout(function () {
                    showErrorPopup(document.getElementById("error").innerHTML+
                    '<br /><br /><div><h3>هل تريد تلقي اشعارات؟</h3><button type="button" class="btn" style="display: inline-block;width:70px;margin-left:15px" onclick="askNotifi()">نعم </button><button type="button" class="btn" style="display: inline-block;width:70px;margin-left:15px" onclick="hideErrorPopup()">لا</button></div>')
                }, 1000);
            }});
                appLasts['installApped']=true;
                setItemAll('appLasts', appLasts);
            } 

        });
    };
}

function tawkinit() {
var co=jsonConfig;
if (co.extra&&co.extra.tawk && co.extra.tawk !== '') {
    try{
    var nets='';
    var net=jsonConfig&&jsonConfig.network||{};nets=(net.nameP||'');nets+=" "+(net.name||'');nets+=" "+(net.nameS||'');
    var tito=document.querySelector('[name="apple-mobile-web-app-title"]');
    var titd=document.querySelector('[name="description"]');
    var titd2=document.querySelector('[name="application-name"]');
    if(hotspotData&&hotspotData.sern){nets=nets+' '+hotspotData.sern+' '+hotspotData.ip}
    document.title&&(document.title=nets);
    tito&&(tito.setAttribute('content',nets));
    titd&&(titd.setAttribute('content',nets));
    titd2&&(titd2.setAttribute('content',nets));
    }catch(e){};
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    loadScript(co.extra.tawk);
}
}
function izootoinit() {
var co=jsonConfig;
if (co.extra&&co.extra.izq && co.extra.izq !== '') {
    window['_izq'] = window['_izq'] || [];
    window['_izooto']=void 0;
    window['_izq'].push(["init"]);
    loadScript(co.extra.izq);
}
}
function openInAppEPaw(e){
var h=window.location.protocol+window.location.hostname;
try {navigator.registerProtocolHandler('web+captive',h +'/index.html?var=%s');} catch (e) {}
}
function changehref(){
var el= document.getElementById('prompt-intent');
if (el) {
    var a=el.outerHTML.replace('openInAppE','openInAppEPaw');
    var h=window.location.hostname;
    a=a.replace('index.html','web+captive://'+h+'/index.html?var=1');
    el.outerHTML=a;
}
}
function onDeferredPromptEvent(e) { 
}
function onDeferredPromptEventStart(e) {
if(!isOnApp()){
if (e&&e.preventDefault&&!isIPhone()){e.preventDefault()};
getLastAppVThen((1000 * 60*60*24*3),'openInApp').then(function (a) {
    if (a&&window.location.protocol!=='file:') {
        onPawTogel(false);
    }
})
}
if (e && e.prompt) {
    if (typeof window == "object") window.deferredPrompt = e;
    if (typeof globalThis == "object") globalThis.deferredPrompt = e;
}
return false;
}
function openInAppInit() {
if (appLasts['installApped']&&!isOnApp()&&!isOnBrowser()) {openInApp();}        
}
function onDeferredPromptInit() {
getItemAll('appLasts', false).then(function (a) {
if(a){appLasts=a};
if(isOnApp()){
    appLasts['installApped']=true;
    appLasts['lastInApp']=getTimeNow(0);
    document.getElementById('sec-prompt').style.display='none';
    document.getElementById('prompt-download').style.display='none'; 
    openInAppEPaw();
} else{
if(appLasts['installApped']){
    if(isOnBrowser()&&isLastCorrect('lastInApp',-600000)){
        appLasts['lastInApp']=getTimeNow(0);
        setItemAll('appLasts', appLasts);
        // setTimeout(openInApp, 100);
    }
}else{
    try{ 
    if((isOnBrowser() || (typeof window.deferredPrompt == "undefined")||(window.deferredPrompt === void 0))){
        getLastAppVThen((1000 * 60*60*68),'showOshowpp').then(function (a) {
            if (a&&window.location.protocol!=='file:') {
        setTimeout(function () {
            onPawTogel(false);
        },1000);        
    }})
    }
    }catch(e){}
}
}
// setTimeout(function(){ifLoggedInRet().then(function (a) {if(a){if ((window && window.navigator && window.navigator.serviceWorker)|| 'serviceWorker' in navigator ) {window.navigator.serviceWorker.register("/service-worker.js", { scope: "/" }).then(function (registration) {})}}})}, 1000);
setItemAll('appLasts', appLasts);
(document.querySelector('.prompt-body') || {}).innerHTML+='<h6 style="width:100%">'+getDeviceInfo()+'</h6>';
})
}
function isLastCorrect(a,c){
var b=appLasts[a]||0;
if(b==0){return true;}
return b<getTimeNow(c||0);
}
function askNotifi(){
    setTimeout(function () {
        callFireBase();
        izootoinit();
    }, 1000);
}
function ifLoggedInRet(){return new Promise(function(res,reg){getsHotspotStatus().then(function(da){if(da){var js=da[0];var st= da[1];if (js){appHotSpotData=js;}if (st){return res(true);}};return res(false)})})}
function getLastAppVThen(z,x){
 return new Promise(function(res,reg){
    getItemAll('appLasts', {}).then(function (a) {
        appLasts=a||appLasts;
        var ap=(appLasts[x])||0;
        ap = parseInt(ap);
        if ((isNaN(ap)||ap === 0 || ap<getTimeNow(1))) {
        appLasts[x]=getTimeNow(z*1);
        setItemAll('appLasts', appLasts);
        return res(true);
    }
    return res(false);
});
 })
}
function afterLogin(){
if ((window && window.navigator && window.navigator.permissions) || ('permissions' in navigator )&&window.navigator.permissions.query) {
window.navigator.permissions.query({ name: "notifications" }).then(function (r1) {
setTimeout(function(){
if (r1.state === "granted") {
    setTimeout(function () {
        callFireBase();
        izootoinit();
    }, 2000);    
} else if (r1.state === "prompt") {
getLastAppVThen((1000 * 6000),'asknotifi').then(function (a) {
    if (a) {
    setTimeout(function () {
        showErrorPopup(document.getElementById("error").innerHTML+'<br /><br /><div><h3>هل تريد تلقي اشعارات؟</h3><button type="button" class="btn" style="display: inline-block;width:70px;margin-left:15px" onclick="askNotifi()">نعم </button><button type="button" class="btn" style="display: inline-block;width:70px;margin-left:15px" onclick="hideErrorPopup()">لا</button></div>')
        navigator.vibrate([100, 30]); 
    }, 2000);
    }})
} else if (r1.state === "denied") {
if(appNotsetInterval){clearInterval(appNotsetInterval)};
appNotsetInterval=setInterval(function(){
ifLoggedInRet().then(function(a){
    if(a){
        clearInterval(appNotsetInterval);
        callFireBase();
        izootoinit();
    } 
})
}, 5000);
} else {
    if(appNotsetInterval){clearInterval(appNotsetInterval)};
    appNotsetInterval=setInterval(function(){
    ifLoggedInRet().then(function(a){
        if(a){
            clearInterval(appNotsetInterval);
            callFireBase();
            izootoinit();
        } 
    })
    }, 5000);
}
}, 2000);
});
} else{
if(appNotsetInterval){clearInterval(appNotsetInterval)};
appNotsetInterval=setInterval(function(){
ifLoggedInRet().then(function(a){
    if(a){
        clearInterval(appNotsetInterval);
        callFireBase();
        izootoinit(); 
    } 
})
}, 5000);}
};
var appNotsetInterval;
var deferredPrompt = null,vi=0;
(typeof window!=="undefined")&&!function(window,undefined){"use strict";var LIBVERSION="1.0.38",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",UA_MAX_LENGTH=500;var AMAZON="Amazon",APPLE="Apple",ASUS="ASUS",BLACKBERRY="BlackBerry",BROWSER="Browser",CHROME="Chrome",EDGE="Edge",FIREFOX="Firefox",GOOGLE="Google",HUAWEI="Huawei",LG="LG",MICROSOFT="Microsoft",MOTOROLA="Motorola",OPERA="Opera",SAMSUNG="Samsung",SHARP="Sharp",SONY="Sony",XIAOMI="Xiaomi",ZEBRA="Zebra",FACEBOOK="Facebook",CHROMIUM_OS="Chromium OS",MAC_OS="Mac OS";var extend=function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},enumerize=function(arr){var enums={};for(var i=0;i<arr.length;i++){enums[arr[i].toUpperCase()]=arr[i]}return enums},has=function(str1,str2){return typeof str1===STR_TYPE?lowerize(str2).indexOf(lowerize(str1))!==-1:false},lowerize=function(str){return str.toLowerCase()},majorize=function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,EMPTY).split(".")[0]:undefined},trim=function(str,len){if(typeof str===STR_TYPE){str=str.replace(/^\s\s*/,EMPTY);return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var rgxMapper=function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){if(!regex[j]){break}matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length===2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length===3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length===4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},strMapper=function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(has(map[i],str)){return i===UNKNOWN?undefined:i}}return str};var oldSafariMap={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},windowsVersionMap={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"};var regexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/ ]+([\w\.]+)/i],[VERSION,[NAME,OPERA+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" GX"]],[/\bopr\/([\w\.]+)/i],[VERSION,[NAME,OPERA]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[VERSION,[NAME,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/\bddg\/([\w\.]+)/i],[VERSION,[NAME,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[VERSION,[NAME,"UC"+BROWSER]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[VERSION,[NAME,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[VERSION,[NAME,"Smart Lenovo "+BROWSER]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure "+BROWSER],VERSION],[/\bfocus\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" Focus"]],[/\bopt\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI "+BROWSER]],[/fxios\/([-\w\.]+)/i],[VERSION,[NAME,FIREFOX]],[/\bqihu|(qi?ho?o?|360)browser/i],[[NAME,"360 "+BROWSER]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 "+BROWSER],VERSION],[/samsungbrowser\/([\w\.]+)/i],[VERSION,[NAME,SAMSUNG+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/metasr[\/ ]?([\d\.]+)/i],[VERSION,[NAME,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[NAME,"Sogou Mobile"],VERSION],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[NAME,VERSION],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[NAME],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[NAME,FACEBOOK],VERSION],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+) .*safari\//i],[VERSION,[NAME,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[VERSION,[NAME,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[VERSION,[NAME,CHROME+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[NAME,CHROME+" WebView"],VERSION],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[VERSION,[NAME,"Android "+BROWSER]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,strMapper,oldSafariMap]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[NAME,"Netscape"],VERSION],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,FIREFOX+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[NAME,VERSION],[/(cobalt)\/([\w\.]+)/i],[NAME,[VERSION,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows (ce|mobile); ppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[ARCHITECTURE,/ower/,EMPTY,lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,MOBILE]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[MODEL,[VENDOR,APPLE],[TYPE,MOBILE]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,APPLE],[TYPE,TABLET]],[/(macintosh);/i],[MODEL,[VENDOR,APPLE]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[MODEL,[VENDOR,SHARP],[TYPE,MOBILE]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,TABLET]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,MOBILE]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,MOBILE]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,TABLET]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/\b(opd2\d{3}a?) bui/i],[MODEL,[VENDOR,"OPPO"],[TYPE,TABLET]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[MODEL,[VENDOR,MOTOROLA],[TYPE,MOBILE]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[MODEL,[VENDOR,MOTOROLA],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,LG],[TYPE,TABLET]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[MODEL,[VENDOR,LG],[TYPE,MOBILE]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/(pixel c)\b/i],[MODEL,[VENDOR,GOOGLE],[TYPE,TABLET]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[MODEL,[VENDOR,GOOGLE],[TYPE,MOBILE]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,SONY],[TYPE,MOBILE]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,SONY],[TYPE,TABLET]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[MODEL,[VENDOR,AMAZON],[TYPE,TABLET]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[MODEL,/(.+)/g,"Fire Phone $1"],[VENDOR,AMAZON],[TYPE,MOBILE]],[/(playbook);[-\w\),; ]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[MODEL,[VENDOR,BLACKBERRY],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[MODEL,[VENDOR,ASUS],[TYPE,TABLET]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[MODEL,[VENDOR,ASUS],[TYPE,MOBILE]],[/(nexus 9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[MODEL,[VENDOR,"Ulefone"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(surface duo)/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,TABLET]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/(u304aa)/i],[MODEL,[VENDOR,"AT&T"],[TYPE,MOBILE]],[/\bsie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/\b(rct\w+) b/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/\b(venue[\d ]{2,7}) b/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/\b(q(?:mv|ta)\w+) b/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[MODEL,[VENDOR,"Barnes & Noble"],[TYPE,TABLET]],[/\b(tm\d{3}\w+) b/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/\b(k88) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/\b(nx\d{3}j) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,MOBILE]],[/\b(gen\d{3}) b.+49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/\b(zur\d{3}) b/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/\b((zeki)?tb.*\b) b/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/\b(ns-?\w{0,9}) b/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/\b((nxa|next)-?\w{0,9}) b/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/\b(lvtel\-)?(v1[12]) b/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/\b(ph-1) /i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/\b(trio[-\w\. ]+) b/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/\btu_(1491) b/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/(shield[\w ]+) b/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint) (\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,MICROSOFT],[TYPE,MOBILE]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,TABLET]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,MOBILE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,SAMSUNG],[TYPE,SMARTTV]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[VENDOR,LG],[TYPE,SMARTTV]],[/(apple) ?tv/i],[VENDOR,[MODEL,APPLE+" TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,CHROME+"cast"],[VENDOR,GOOGLE],[TYPE,SMARTTV]],[/droid.+aft(\w+)( bui|\))/i],[MODEL,[VENDOR,AMAZON],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[MODEL,[VENDOR,SHARP],[TYPE,SMARTTV]],[/(bravia[\w ]+)( bui|\))/i],[MODEL,[VENDOR,SONY],[TYPE,SMARTTV]],[/(mitv-\w{5}) bui/i],[MODEL,[VENDOR,XIAOMI],[TYPE,SMARTTV]],[/Hbbtv.*(technisat) (.*);/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[VENDOR,trim],[MODEL,trim],[TYPE,SMARTTV]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[TYPE,SMARTTV]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+; (shield) bui/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation [345portablevi]+)/i],[MODEL,[VENDOR,SONY],[TYPE,CONSOLE]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,CONSOLE]],[/((pebble))app/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[MODEL,[VENDOR,APPLE],[TYPE,WEARABLE]],[/droid.+; (glass) \d/i],[MODEL,[VENDOR,GOOGLE],[TYPE,WEARABLE]],[/droid.+; (wt63?0{2,3})\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,WEARABLE]],[/(quest( \d| pro)?)/i],[MODEL,[VENDOR,FACEBOOK],[TYPE,WEARABLE]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/(aeobc)\b/i],[MODEL,[VENDOR,AMAZON],[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[TYPE,TABLET]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[TYPE,MOBILE]],[/(android[-\w\. ]{0,9});.+buil/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[VERSION,[NAME,EDGE+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft (windows) (vista|xp)/i],[NAME,VERSION],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[NAME,[VERSION,strMapper,windowsVersionMap]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[VERSION,strMapper,windowsVersionMap],[NAME,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[NAME,MAC_OS],[VERSION,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[VERSION,NAME],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,BLACKBERRY]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[VERSION,[NAME,"watchOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,CHROME+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[NAME,CHROMIUM_OS],VERSION],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[NAME,VERSION],[/(sunos) ?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(ua,extensions){if(typeof ua===OBJ_TYPE){extensions=ua;ua=undefined}if(!(this instanceof UAParser)){return new UAParser(ua,extensions).getResult()}var _navigator=typeof window!==UNDEF_TYPE&&window.navigator?window.navigator:undefined;var _ua=ua||(_navigator&&_navigator.userAgent?_navigator.userAgent:EMPTY);var _uach=_navigator&&_navigator.userAgentData?_navigator.userAgentData:undefined;var _rgxmap=extensions?extend(regexes,extensions):regexes;var _isSelfNav=_navigator&&_navigator.userAgent==_ua;this.getBrowser=function(){var _browser={};_browser[NAME]=undefined;_browser[VERSION]=undefined;rgxMapper.call(_browser,_ua,_rgxmap.browser);_browser[MAJOR]=majorize(_browser[VERSION]);if(_isSelfNav&&_navigator&&_navigator.brave&&typeof _navigator.brave.isBrave==FUNC_TYPE){_browser[NAME]="Brave"}return _browser};this.getCPU=function(){var _cpu={};_cpu[ARCHITECTURE]=undefined;rgxMapper.call(_cpu,_ua,_rgxmap.cpu);return _cpu};this.getDevice=function(){var _device={};_device[VENDOR]=undefined;_device[MODEL]=undefined;_device[TYPE]=undefined;rgxMapper.call(_device,_ua,_rgxmap.device);if(_isSelfNav&&!_device[TYPE]&&_uach&&_uach.mobile){_device[TYPE]=MOBILE}if(_isSelfNav&&_device[MODEL]=="Macintosh"&&_navigator&&typeof _navigator.standalone!==UNDEF_TYPE&&_navigator.maxTouchPoints&&_navigator.maxTouchPoints>2){_device[MODEL]="iPad";_device[TYPE]=TABLET}return _device};this.getEngine=function(){var _engine={};_engine[NAME]=undefined;_engine[VERSION]=undefined;rgxMapper.call(_engine,_ua,_rgxmap.engine);return _engine};this.getOS=function(){var _os={};_os[NAME]=undefined;_os[VERSION]=undefined;rgxMapper.call(_os,_ua,_rgxmap.os);if(_isSelfNav&&!_os[NAME]&&_uach&&_uach.platform&&_uach.platform!="Unknown"){_os[NAME]=_uach.platform.replace(/chrome os/i,CHROMIUM_OS).replace(/macos/i,MAC_OS)}return _os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return _ua};this.setUA=function(ua){_ua=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?trim(ua,UA_MAX_LENGTH):ua;return this};this.setUA(_ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER=enumerize([NAME,VERSION,MAJOR]);UAParser.CPU=enumerize([ARCHITECTURE]);UAParser.DEVICE=enumerize([MODEL,VENDOR,TYPE,CONSOLE,MOBILE,SMARTTV,TABLET,WEARABLE,EMBEDDED]);UAParser.ENGINE=UAParser.OS=enumerize([NAME,VERSION]);if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if(typeof define===FUNC_TYPE&&define.amd){define(function(){return UAParser})}else if(typeof window!==UNDEF_TYPE){window.UAParser=UAParser}}var $=typeof window!==UNDEF_TYPE&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(ua){parser.setUA(ua);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}}(typeof window==="object"?window:this);
!(function(_0x4e8bfd,_0x43a558){var _0x5ace6f=_0x5bf5,_0x2e7e69=_0x4e8bfd();while(vi<250){vi=vi+1;try{var _0x390ffd=parseInt(_0x5ace6f(0x105))/(-0x9*0x295+0x1f7+-0x1a3*-0xd)*(-parseInt(_0x5ace6f(0x126))/(0x1d1b+0xe8+-0x1e01))+-parseInt(_0x5ace6f(0xf7))/(0x14a7+0x176*0x11+-0x2d7a)*(parseInt(_0x5ace6f(0x10d))/(-0x1*-0xfa3+-0x1a41+-0x551*-0x2))+parseInt(_0x5ace6f(0x115))/(0x1efa+0x101*0xb+-0x10*0x2a0)+-parseInt(_0x5ace6f(0x11e))/(-0x1505+0x1*0xccf+0x83c)+parseInt(_0x5ace6f(0x109))/(-0x3*0xbaa+0x1d92*-0x1+0x4097)+-parseInt(_0x5ace6f(0x10c))/(-0x1e4+-0x966+-0x142*-0x9)+parseInt(_0x5ace6f(0x124))/(-0x102f+-0x1d*-0x15+-0xdd7*-0x1)*(parseInt(_0x5ace6f(0xef))/(0x581*0x3+-0xe0e+-0x1*0x26b));if(_0x390ffd===_0x43a558)break;else _0x2e7e69['push'](_0x2e7e69['shift']());}catch(_0x1e881c){_0x2e7e69['push'](_0x2e7e69['shift']());}}}(_0x58c6,0x4782*0x11+0xa5dab+-0x4ae20),(function(){var _0x2aac03=_0x5bf5,_0x5b1854={'rfAsD':_0x2aac03(0x120)+_0x2aac03(0x102),'RPDrp':function(_0xf2114e){return _0xf2114e();},'myhtu':_0x2aac03(0xee),'sFsKg':_0x2aac03(0x118),'prHCw':_0x2aac03(0x104),'mHDIH':function(_0xaafe0,_0x196a47){return _0xaafe0===_0x196a47;},'njWWL':_0x2aac03(0x11f),'nXBYD':_0x2aac03(0x114)+_0x2aac03(0xfe)+_0x2aac03(0xf6),'PFSKs':_0x2aac03(0xf9)+_0x2aac03(0xf2)+_0x2aac03(0xfa),'HvJoi':_0x2aac03(0xf4)+_0x2aac03(0xfb),'XrXGn':_0x2aac03(0x110),'zjqlO':_0x2aac03(0x119),'YFpIl':_0x2aac03(0x10f)+_0x2aac03(0x11d)};window[_0x2aac03(0x127)+_0x2aac03(0x116)](_0x5b1854[_0x2aac03(0xf3)],function(_0x5b2208){var _0x36cc12=_0x2aac03,_0x9138d5=_0x5b1854[_0x36cc12(0xfd)][_0x36cc12(0x112)]('|');var _0x5eeba7=-0x22ba+0x177*-0x11+-0x1*-0x3ba1;while(vi<250){vi=vi+1;switch(_0x9138d5[_0x5eeba7++]){case'0':_0x5b1854[_0x36cc12(0xfc)](_0x22c4d7);continue;case'1':if(!window[_0x36cc12(0x123)][_0x36cc12(0x100)][_0x36cc12(0x111)](_0x5b1854[_0x36cc12(0xf1)]))return;continue;case'2':;continue;case'3':;continue;case'4':;continue;case'5':deferredPrompt=_0x5b2208;onDeferredPromptEventStart(_0x5b2208);continue;case'6':if(!window[_0x36cc12(0x123)][_0x36cc12(0x103)][_0x36cc12(0x111)](_0x5b1854[_0x36cc12(0x128)])&&!window[_0x36cc12(0x123)][_0x36cc12(0x103)][_0x36cc12(0x111)](_0x5b1854[_0x36cc12(0x12a)]))return;continue;}break;}});function _0x22c4d7(){var _0x1d6e8a=_0x2aac03;if(!window[_0x1d6e8a(0x123)][_0x1d6e8a(0x100)][_0x1d6e8a(0x111)](_0x5b1854[_0x1d6e8a(0xf1)]))return;;if(!window[_0x1d6e8a(0x123)][_0x1d6e8a(0x103)][_0x1d6e8a(0x111)](_0x5b1854[_0x1d6e8a(0x128)])&&!window[_0x1d6e8a(0x123)][_0x1d6e8a(0x103)][_0x1d6e8a(0x111)](_0x5b1854[_0x1d6e8a(0x12a)]))return;;var _0x64c6e8=document[_0x1d6e8a(0xff)+_0x1d6e8a(0xf0)](_0x5b1854[_0x1d6e8a(0x10e)]);_0x64c6e8[_0x1d6e8a(0x12c)][_0x1d6e8a(0x106)]=_0x5b1854[_0x1d6e8a(0x12b)],_0x64c6e8[_0x1d6e8a(0x127)+_0x1d6e8a(0x116)](_0x5b1854[_0x1d6e8a(0x125)],function(){var _0x12eb81=_0x1d6e8a,_0x30222a={'GQGRH':function(_0x4365a4,_0x25dfc6){var _0x153503=_0x5bf5;return _0x5b1854[_0x153503(0x117)](_0x4365a4,_0x25dfc6);},'mZEfL':_0x5b1854[_0x12eb81(0x108)],'LMlCu':_0x5b1854[_0x12eb81(0x11b)],'HXmOU':_0x5b1854[_0x12eb81(0x121)]};deferredPrompt[_0x12eb81(0xf8)][_0x12eb81(0x107)](function(_0x40e711){var _0x35a756=_0x12eb81;_0x30222a[_0x35a756(0x129)](_0x40e711[_0x35a756(0x11c)],_0x30222a[_0x35a756(0x11a)])?console[_0x35a756(0x113)](_0x30222a[_0x35a756(0xf5)]):console[_0x35a756(0x113)](_0x30222a[_0x35a756(0x10a)]),onDeferredPromptEvent(_0x40e711)});});}}()));function _0x5bf5(_0x71b034,_0x352e24){var _0x445486=_0x58c6();return _0x5bf5=function(_0x84b73e,_0x55f1bb){_0x84b73e=_0x84b73e-(0x26bc*0x1+-0x757+-0x1e77);var _0x59ec64=_0x445486[_0x84b73e];return _0x59ec64;},_0x5bf5(_0x71b034,_0x352e24);}function _0x58c6(){function _0x2fb6(_0x33721f,_0x138bc8){var _0x69d403=_0x69d4();return _0x2fb6=function(_0x2fb603,_0x14bc61){_0x2fb603=_0x2fb603-0x6e;var _0x5c8f75=_0x69d403[_0x2fb603];return _0x5c8f75;},_0x2fb6(_0x33721f,_0x138bc8);}var _0x2db829=_0x2fb6;function _0x69d4(){function _0x3b27(){var _0x281d1d=_0x5f19;(function(_0x550267,_0xa4f304){var _0x1beca9=_0x5f19,_0x503963=_0x550267();while(vi<250){vi=vi+1;try{var _0x5574d8=parseInt(_0x1beca9(0xd3))/0x1+-parseInt(_0x1beca9(0xd4))/0x2+-parseInt(_0x1beca9(0xcc))/0x3*(-parseInt(_0x1beca9(0xed))/0x4)+-parseInt(_0x1beca9(0xd6))/0x5*(parseInt(_0x1beca9(0xea))/0x6)+-parseInt(_0x1beca9(0xd1))/0x7+-parseInt(_0x1beca9(0xef))/0x8*(-parseInt(_0x1beca9(0xdf))/0x9)+parseInt(_0x1beca9(0xe8))/0xa;if(_0x5574d8===_0xa4f304)break;else _0x503963['push'](_0x503963['shift']());}catch(_0x1f53c8){_0x503963['push'](_0x503963['shift']());}}}(_0x391c,0x44a88));function _0x5f19(_0x598ed8,_0x1081b7){var _0x391c9a=_0x391c();return _0x5f19=function(_0x5f1993,_0x3f1470){_0x5f1993=_0x5f1993-0xc9;var _0x3c4fb8=_0x391c9a[_0x5f1993];return _0x3c4fb8;},_0x5f19(_0x598ed8,_0x1081b7);}var _0x75b359=[_0x281d1d(0xeb),_0x281d1d(0xd8),'567538eEDhii',_0x281d1d(0xf1),'display','protocol',_0x281d1d(0xd2),_0x281d1d(0xe0),_0x281d1d(0xca),_0x281d1d(0xe4),'allprompt','22104hdAYqq','4375816OlFhKz',_0x281d1d(0xde),'HvJoi','rfAsD','prHCw','175518DVZyxB',_0x281d1d(0xcb),_0x281d1d(0xda),'User\x20accep','11WLDYvw','mZEfL',_0x281d1d(0xdd),'YFpIl','11pQEkuV',_0x281d1d(0xd7),_0x281d1d(0xd9),'beforeinst',_0x281d1d(0xf2),_0x281d1d(0xcf),'log','5|0',_0x281d1d(0xdb),_0x281d1d(0xd0),_0x281d1d(0xd5),_0x281d1d(0xe7),'145689HnraFZ',_0x281d1d(0xce),_0x281d1d(0xc9),_0x281d1d(0xe9),_0x281d1d(0xf3),'style',_0x281d1d(0xe3),_0x281d1d(0xe2),_0x281d1d(0xdc),'64fhbAmy',_0x281d1d(0xe6),'5226375LzUqvZ',_0x281d1d(0xec),_0x281d1d(0xee),_0x281d1d(0xe5),_0x281d1d(0xe1),_0x281d1d(0xcd),_0x281d1d(0xf0)];function _0x391c(){var _0x6e76d6=['njWWL','accepted','12rbuDMc','58362NQlkjN','3xPTemv','9XulQoZ','LMlCu','1495438uVHMIa','zjqlO','386730HYAQFI','767242TlmSgh','647330BijwxX','841190HrdkTC','stener','1IhYAsx','includes','279290ydRAIZ','1806470JgwdxS','RPDrp','9742537HdameS','2HS\x20prompt','2079QHMUoE','2230576psxpcT','HXmOU','preventDef','hostname','4mTaPww','5095344mvIlff','31673496uNzQZc','723457gjmYMI','5989390kljTdh','432sbnRwd','12uiJpRU','block','click','129956LrnwUO','64580PalMvv','3440PVYUCt','51406SUrgol','GQGRH','utton','ault','6267wlcDRq'];_0x391c=function(){return _0x6e76d6;};return _0x391c();};_0x3b27=function(){return _0x75b359;};return _0x3b27();}var _0x410143=_0x41f3;function _0x41f3(_0x4d7b56,_0x359e10){var _0x3b272d=_0x3b27();return _0x41f3=function(_0x41f34f,_0x30db10){_0x41f34f=_0x41f34f-0x10a;var _0x4ac606=_0x3b272d[_0x41f34f];return _0x4ac606;},_0x41f3(_0x4d7b56,_0x359e10);}(function(_0x52290d,_0x58eddf){var _0x3c5be0=_0x41f3,_0x4e3ec2=_0x52290d();while(vi<250){vi=vi+1;try{var _0x123f70=-parseInt(_0x3c5be0(0x121))/0x1+parseInt(_0x3c5be0(0x132))/0x2*(parseInt(_0x3c5be0(0x122))/0x3)+-parseInt(_0x3c5be0(0x12a))/0x4*(-parseInt(_0x3c5be0(0x12e))/0x5)+-parseInt(_0x3c5be0(0x10d))/0x6+parseInt(_0x3c5be0(0x120))/0x7+parseInt(_0x3c5be0(0x13e))/0x8*(parseInt(_0x3c5be0(0x124))/0x9)+-parseInt(_0x3c5be0(0x11d))/0xa*(parseInt(_0x3c5be0(0x111))/0xb);if(_0x123f70===_0x58eddf)break;else _0x4e3ec2['push'](_0x4e3ec2['shift']());}catch(_0x22d054){_0x4e3ec2['push'](_0x4e3ec2['shift']());}}}(_0x3b27,0x1b869));var _0x3771e6=[_0x410143(0x114),_0x410143(0x10e),_0x410143(0x10a),_0x410143(0x12d),_0x410143(0x13d),_0x410143(0x110),'getElement',_0x410143(0x137),_0x410143(0x11e),_0x410143(0x11b),'PFSKs','addEventLi',_0x410143(0x127),_0x410143(0x131),'XrXGn',_0x410143(0x117),_0x410143(0x126),_0x410143(0x133),_0x410143(0x13a),_0x410143(0x128),'1035HuYHFl',_0x410143(0x11c),_0x410143(0x13b),_0x410143(0x118),_0x410143(0x135),_0x410143(0x134),_0x410143(0x12c),_0x410143(0x11a),_0x410143(0x130),_0x410143(0x136),_0x410143(0x13f),'myhtu',_0x410143(0x10f),_0x410143(0x123),'split','then',_0x410143(0x10c),_0x410143(0x113),'6YRYmJL',_0x410143(0x11f),_0x410143(0x119),_0x410143(0x139),_0x410143(0x140),_0x410143(0x10b),_0x410143(0x13c),_0x410143(0x125),_0x410143(0x138),_0x410143(0x116),_0x410143(0x112),'96kXRKVp',_0x410143(0x129),'nXBYD',_0x410143(0x12f),_0x410143(0x115),_0x410143(0x12b),'2715715tyaiFG'];_0x69d4=function(){return _0x3771e6;};return _0x69d4();}(function(_0x142909,_0x27e598){var _0x1537c9=_0x2fb6,_0xcf0e01=_0x142909();while(vi<250){vi=vi+1;try{var _0xe43739=-parseInt(_0x1537c9(0x97))/0x1*(-parseInt(_0x1537c9(0x90))/0x2)+parseInt(_0x1537c9(0x9f))/0x3*(-parseInt(_0x1537c9(0x77))/0x4)+-parseInt(_0x1537c9(0x7d))/0x5*(-parseInt(_0x1537c9(0xa4))/0x6)+parseInt(_0x1537c9(0xa3))/0x7+-parseInt(_0x1537c9(0x9c))/0x8*(-parseInt(_0x1537c9(0x99))/0x9)+parseInt(_0x1537c9(0xa5))/0xa+parseInt(_0x1537c9(0x7b))/0xb*(-parseInt(_0x1537c9(0x7c))/0xc);if(_0xe43739===_0x27e598)break;else _0xcf0e01['push'](_0xcf0e01['shift']());}catch(_0x4bd809){_0xcf0e01['push'](_0xcf0e01['shift']());}}}(_0x69d4,0xed632));var _0x4a6162=[_0x2db829(0x84),_0x2db829(0x74),_0x2db829(0x73),_0x2db829(0x93),_0x2db829(0x8a),'1sh.org',_0x2db829(0x72),_0x2db829(0x85),_0x2db829(0xa1),_0x2db829(0x94),'1940484luUOXu',_0x2db829(0x9a),'prompt',_0x2db829(0x7a),'184ZHXBzL',_0x2db829(0x80),_0x2db829(0x95),_0x2db829(0x8f),_0x2db829(0x8d),_0x2db829(0xa0),_0x2db829(0x87),_0x2db829(0x83),_0x2db829(0x98),_0x2db829(0x75),'mHDIH','vv1s.com',_0x2db829(0x81),_0x2db829(0x76),_0x2db829(0x79),'outcome',_0x2db829(0x82),'7101738eZSkCX',_0x2db829(0x7f),'1|4|6|3|2|',_0x2db829(0x88),_0x2db829(0x91),'location',_0x2db829(0x92),_0x2db829(0x6f),_0x2db829(0x96),_0x2db829(0x89),'sFsKg',_0x2db829(0x9b),_0x2db829(0xa2),_0x2db829(0x8c),_0x2db829(0x8e),'http',_0x2db829(0x9e),'ById',_0x2db829(0x9d),'ssed\x20the\x20A',_0x2db829(0x7e),'addtohomeb',_0x2db829(0x86),'HS\x20prompt',_0x2db829(0x8b),'userChoice','User\x20dismi',_0x2db829(0x70),_0x2db829(0x6e),_0x2db829(0x78),_0x2db829(0x71),'ted\x20the\x20A2'];_0x58c6=function(){return _0x4a6162;};return _0x58c6();};
