var breaktimer=0;
var chaptry=0;
var whenKick={};
var getRateDone=true;
var hotspotData={};
var setIntervalStatusQury;
var speedsInterval;
var osamaSpeedName='';
var osamaSpeedUser='';
var osamaSpeedValue='';
var osamaSpeedIndex=0;
var osamaUpdateChecked=0;
var last_users =[];
var speed_check={};
var speed_change={};
var speed_last={};
var statusEls={};
var isNewUser=false;
var isNewLogin=false;
var updates=document.getElementById('updates');
var updates2=document.getElementById('updates2')||updates;
var isNewLoginStatusQury;var isNewLoginStatusQury2=true;var isNewLoginStatusQury3=true;
var loginSubmit=document.querySelector(".login-btn");
var loginForm=document.querySelector(".login-form");
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
var us='';
function getDateStr(a){
var d=a;
if(typeof a === "number" || typeof a ==="string" || void 0==a){d=new Date(a)}
var m=d.getMonth()*1+1;
var o=''.concat(d.getDate(),'-',m,'-',d.getFullYear());
return o;
}
function showTimerSpeeds(json){
var notif=document.getElementById('notification');
notif&&(notif.style.display='block');
if(json&&json.speed_levels_waiting){
    var conter=json.speed_levels_waiting||30;breaktimer=0;
    if (speedsInterval){try{clearInterval(speedsInterval)}catch(e){}}
    if (setIntervalStatusQury){try{clearInterval(setIntervalStatusQury)}catch(e){}}
    speedsInterval = setInterval(function () {
        notif.innerText='سيتم إختيار السرعة الإفتراضية بعد '.concat(conter);
        conter=conter-1;
        if (breaktimer == 1) {
            return clearInterval(speedsInterval);
        }
        if (conter < 0) {
            var speedsub=document.getElementById('speedsub');
            setTimeout(showStatusPage,1000);
            setTimeout(hideErrorPopup,1200);
            speedsub&&speedsub.click();
            clearInterval(speedsInterval);
        }
    },1000);
} else{
    if(animationRuns){animationRuns=0;}
    showStatusPage(null);
}
}
function saveSpeedCheck(json){
us=getLastUs(hotspotData);
getItemAll('speed_check',null).then(function(a){
    if(!isObj(a)||isArr(a)||a==null){a={}};
    var o={};
    var j=0;
    for(var i in a){if(a[i]&&a[i]['_T']&&getTimeNow(0)<a[i]['_T']&&j<10){o[i]=a[i];j=j+1}}
    o[us]=json||{};
    o[us]['_T']=getTimeNow(7*24*60*60*1000);
    setItemAll('speed_check',o);
    speed_check=o;
    return o;
});
}
function saveStatusDayes(dd,ty){
us=getLastUs(hotspotData);
var mess=' تاريخ الانتهاء  ';
getItemAll('_dayes',null).then(function(a){
    if(typeof a != "object"||a==null){a={}};
    var df=0,de=0;
    if(a[us]){
        df=a[us]['f'];
        de=a[us]['d']
    } else{
        df=getTimeNow(0);
        de=dd;
    }
    if(ty!=='h'){
        if(de<dd){de=dd};
    }
    a[us]={m:mess,d:de,f:df};
    var obj={};
    for(var i in a){var d =a[i]['d'];if((d+7*24*60*60*1000)>getTimeNow(0)){obj[i]=a[i]}};
    obj[us]={m:mess,d:de,f:df};
    setItemAll('_dayes',obj);
})
}    
function fillPointsFromAplus(json){
if(json&&toBoolen(json.rad)){
if(jsonConfig&&jsonConfig.login&&jsonConfig.login&&jsonConfig.login.points){
aplusDoGetPointsApi().then(function(data){
if (data&&data!=null){
if(data&&typeof data.remaining_points!=="undefined"){
    pointsV.innerText=" النقاط "+data.remaining_points;
    pointsNoAcc.innerText='';
    pointsA.style.display='';
};
if(typeof aplusDataRet['api_doLogin'] === "undefined"){
    pointsN.innerText=" النقاط غير مفعلة";
    pointsNoAcc.innerText=' قم بتسجيل في حساب أي بلاس ';
    pointsA.style.display='';
} else{
    var ap=aplusDataRet['auth_login']&&aplusDataRet['auth_login'].user||aplusDataRet['auth_user']||{name:""};
    pointsN.innerText=" مرحبا "+ap.name;
    pointsNoAcc.innerText='';
    pointsA.style.display='';    
}
} else{
    pointsN.innerText=" النقاط غير مفعلة";
    pointsNoAcc.innerText=' قم بتسجيل في حساب أي بلاس ';
    pointsA.style.display='';
}});
} else{
pointsA.style.display='none';
pointsNoAcc.innerText='';
}
} else{
    pointsA.style.display='none';
    pointsNoAcc.innerText='';    
}
}
function setLoginSelectSpeedItems(json){
    us=getLastUs(hotspotData);
    speed_check[us]=json;
    fillSpeedFromAplus({rad:'yes',usr:us});
}
function setLoginSelectSpeed(sps){
    var sedv=document.getElementById('speed_select_dev');
    var sesp=document.getElementById('speed_select');
    if(sedv){
        if(sps&&sps['speed_levels']&&sps['speed_levels'].length>0){
            setLoginSelectSpeedItems(sps)
        } else{
            sedv.style.display='none';
            getItemAll('speed_check',null).then(function(a){
                if(!isObj(a)||isArr(a)||a==null){a={}};
                speed_check=a;
                us=getLastUs(hotspotData);
                if(a&&a[us]&&a[us]['speed_levels']&&a[us]['speed_levels'].length>0){
                    setLoginSelectSpeedItems(a[us])
                }
                return a;
            });
        }
    }
}
function fillSpeedFromAplus(a){
var sedv=document.getElementById('speed_select_dev');
var sesp=document.getElementById('speed_select');
var us=getLastUs(a);
var don=true;
var rate=a&&a.attr&&a.attr.rate&&a.attr.rate||'';
var rateEx=a&&a.attr&&a.attr.rate&&a.attr.rate||'';
if(rate&&rate==''){rate=osamaSpeedValue};
var frate=true;
var Drate=false;
var vrate='';
var vDrate='';
var vDVrate={};
var up=(updates&&updates.checked)?"<p style='color:red;font-size: 10px;'> (التحديثات موقفة) </p>":"";
if(a&&toBoolen(a.rad)){
var json=speed_check[us];
var ret = speed_check[us] || { radius_reply: {} };
var rep = ret.radius_reply||{};
if(json&&json.speed_levels&&json.speed_levels.length){
    json.speed_levels.forEach(function(a,i){vDVrate[a.value]=a.name;if(a.default){Drate=a.name;vDrate=a.value;};if(a.value.toUpperCase()===rate.toUpperCase()){
        rate=a.name;vrate=a.value;
        frate=false;
    }});

    if(frate&&ret.username_data_rate){
        json.speed_levels.forEach(function(a,i){vDVrate[a.value]=a.name;if(a.default){Drate=a.name;vDrate=a.value;};if(a.value.toUpperCase()===(ret.username_data_rate+"").toUpperCase()){
            rate=a.name;vrate=a.value;
            frate=false;
        }})
    }
    if(frate&&rep['Mikrotik-Rate-Limit']){
        json.speed_levels.forEach(function(a,i){vDVrate[a.value]=a.name;if(a.default){Drate=a.name;vDrate=a.value;};if(a.value.toUpperCase()===(rep['Mikrotik-Rate-Limit']+"").toUpperCase()){
            rate=a.name;vrate=a.value;
            frate=false;
        }})
    }
    if(frate){
        if(Drate){rate=Drate;vrate=vDrate}else{rate=rateEx}
    };
    speedV.innerHTML=rate+up;
    speedA.style.display='';  
    don=false;   
    if(sedv){
        if(vrate!=""){
            sedv.style.display='block';
            sesp.innerHTML='';
            var el=new Option('اختر سرعتك',vrate);
            sesp.appendChild(el);
            var x=0;
            for (var i in vDVrate) {
                var spn=vDVrate[i];
                var spd=i;
                var el=new Option(spn,spd);
                if(vDrate==i){el.selected=true}
                el.setAttribute('data-speedi',x);
                el.setAttribute('data-speedn',spn);
                el.setAttribute('data-speedv',spd);
                spn&&spn!=""&&sesp&&sesp.appendChild(el);
                x=x+1;
            }
    
        }
    }
    saveSpeedCheck(json);
}else{
AplusApi.newReq('speed_check',{username:us,mac:a.mac,ip:a.ip}).then(function(ret){
if(ret){
var json=ret[0];
var status=ret[1];
if(json&&json.speed_levels&&json.speed_levels.length){
    json.speed_levels.forEach(function(a,i){vDVrate[a.value]=a.name;if(a.default){Drate=a.name;vDrate=a.value;};if(a.value.toUpperCase()===rate.toUpperCase()){
        rate=a.name;vrate=a.value;
        frate=false;
    }});

    if(frate&&ret.username_data_rate){
        json.speed_levels.forEach(function(a,i){vDVrate[a.value]=a.name;if(a.default){Drate=a.name;vDrate=a.value;};if(a.value.toUpperCase()===(ret.username_data_rate+"").toUpperCase()){
            rate=a.name;vrate=a.value;
            frate=false;
        }})
    }
    if(frate&&rep['Mikrotik-Rate-Limit']){
        json.speed_levels.forEach(function(a,i){vDVrate[a.value]=a.name;if(a.default){Drate=a.name;vDrate=a.value;};if(a.value.toUpperCase()===(rep['Mikrotik-Rate-Limit']+"").toUpperCase()){
            rate=a.name;vrate=a.value;
            frate=false;
        }})
    }
    if(frate){if(Drate){rate=Drate;vrate=vDrate}else{rate=rateEx}};
    speedV.innerHTML=rate+up;
    speedA.style.display='';  
    don=false;   
    speed_check[us]=json;
    saveSpeedCheck(json);
if(sedv){
    if(vrate!=""){
        sedv.style.display='block';
        sesp.innerHTML='';
        var el=new Option('اختر سرعتك',vrate);
        sesp.appendChild(el);
        var x=0;
        for (var i in vDVrate) {
            var spn=vDVrate[i];
            var spd=i;
            var el=new Option(spn,spd);
            if(vDrate==i){el.selected=true}
            el.setAttribute('data-speedi',x);
            el.setAttribute('data-speedn',spn);
            el.setAttribute('data-speedv',spd);
            el.addEventListener('click',function(el){
                if(el&&el.target&&el.target.getAttribute){
                    osamaSpeedIndex=parseInt(el.target.getAttribute('data-speedi'))*1;
                    osamaSpeedName= el.target.getAttribute('data-speedn');
                    osamaSpeedValue= el.target.getAttribute('data-speedv');
                    setItemAll('spv',osamaSpeedValue);
                    setItemAll('spn',osamaSpeedName);
                    setItemAll('spi',osamaSpeedIndex);
                }
            });
            spn&&spn!=""&&sesp&&sesp.appendChild(el);
            x=x+1;
        }
    }
}
}}
if(rateEx&&rateEx!=''){if(don){speedA.style.display='';speedV.innerHTML=rateEx;}}else if(don){speedA.style.display='none';}
})
}} else if(a&&a.attr&&a.attr.rate&&a.attr.rate!=""){
    speedV.innerHTML=a.attr.rate+up;
}else{
    speedA.style.display='none';
    if(rateEx&&rateEx!=''){speedA.style.display='';speedV.innerHTML=rateEx;}
}
}
function fillDayesFromAplus(json){
var us=getLastUs(json);
var don=true;
if(json&&toBoolen(json.rad)){
var days=json.attr&&json.attr.days&&json.attr.days;
if(days&&days!=""){
daysV.innerHTML= daysToArabic(days);
daysA.style.display='';
saveStatusDayes((new Date(days)).getTime(),'m');
} else {
try {
if(jsonConfig&&jsonConfig.login&&jsonConfig.login&&jsonConfig.login.dayes){
AplusApi.newReq('status_dayes',{username:us,mac:json.mac,ip:json.ip}).then(function(ret){
if(ret){
var json=ret[0];
var status=ret[1];
if((status==200||json.status=="ok")&&json.expiration_date&&json.expiration_date.date){
    days=json.expiration_date.date.substr(0,19);
    daysV.innerHTML= daysToArabic(days);
    daysA.style.display='';
    saveStatusDayes((new Date(days)).getTime(),'a');
    don=false;   
}}
if(don){daysA.style.display='none';}
})
}} catch (error) {
var da=getStatusDayes(json);
if(da&&da[1]>111){
daysV.innerHTML= daysToArabic(da[0]);
daysA.style.display='';
saveStatusDayes((new Date(da[0])).getTime(),'m');
}    
}
}} else{
    if (json&&(json.time&&json.time.rto&&json.time.rto.indexOf('s')>-1&&(json.time.rto.indexOf('m')>-1||json.time.rto.indexOf('h')>-1))){
        var da=getStatusDayes(json);
        var days=da[0];
        if(days>1){
        days=getTimeNow(days*24*60*60*1000);
        daysV.innerHTML= daysToArabic(days);
        daysA.style.display='';    
        saveStatusDayes(days,'h');
        } else{
            daysA.style.display='none';
        }
    } else{
        daysA.style.display='none';
    }
}
}
function fillProfileFromAplus(json){
var us=getLastUs(json);
var don=true;
if(json&&toBoolen(json.rad)){
var group=json.attr&&json.attr.days&&json.attr.group;
var pro="";
var ret = speed_check[us] || { radius_reply: {} };
var rep = ret.radius_reply||{};
if (ret&&ret.username_type&&ret.username_type!=""){pro=" ("+ret.username_type+") ";}
if(rep&&rep['Mikrotik-Group']&&rep['Mikrotik-Group']!=""){
    profileV.innerText=rep['Mikrotik-Group']+pro;
    profileA.style.display='';
} else if(group!=""){
        profileV.innerText=group+pro;
        profileA.style.display='';
}
} else{
if (json&&(json.time&&json.time.rto&&json.time.rto.indexOf('s')>-1&&(json.time.rto.indexOf('m')>-1||json.time.rto.indexOf('h')>-1))){
    var dp=parseInt(json.secs.rto);
    if(dp>=60){
        if(json.time.rto.indexOf('m')>-1){
            dp=json.time.rto.split('m')[0];
        }else{
            dp=json.time.rto.split('h')[0]+'00';
        }
        dp=dp.replace('m','');
        dp=dp.replace('h','');
        dp=dp.replace('d','');
        dp=dp.replace('w','');
        dp=parseInt(dp);
        if(!isNaN(dp)){
            dp=(dp*100);
            profileV.innerText=dp +' ريال ';
            profileA.style.display='';
        }
    }else{
        daysA.style.display='none';
    }
    } else{
        daysA.style.display='none';
    }
    
}
}
function toBoolen(a){
if(typeof a!="undefined"&&typeof a!=null){
if(typeof a == "boolean"){return a};
if(typeof a == "number"&&isNaN(a)){return false};
if(a=="") {return false};
a="".concat(a);a=a.toLowerCase();
return (a=="true"||a=="yes"||a=="1");
} else return false;
}
function getStatusProfile(a){
var json=a&&a!=null?a:hotspotData;
var attr=json.attr||{days:"",group:"",rate:"",addr:"",messg:""};
var grop=attr&&attr['group']||"";
var addrArr;
try{
addrArr=getStatusExtra(json);
if(addrArr['PR']){if(grop&&(grop.includes('0r')||grop.includes('0R')||grop.includes('0YR'))&&(!addrArr['PR'].includes('0r')&&!addrArr['PR'].includes('0R')&&!addrArr['PR'].includes('0YR'))){}else{grop=addrArr['PR']}};
}catch(e){};
try{
if(typeof grop == "undefined" || grop==null || grop==""){
if(json.time&&json.time.rto&&json.time.rto!=""&&json.time.rto.indexOf('s')>-1&&json.time.rto.indexOf('m')>-1){
var dp=parseInt(json.secs.rto);
if(dp>=60){
dp=json.time.rto.split('m')[0];
dp=dp.replace('m','');
dp=dp.replace('h','');
dp=dp.replace('d','');
dp=parseInt(dp);
if(!isNaN(dp)){
dp=(dp*100);
grop=dp +' ريال ';
}
}
}
};
}catch(e){};
return grop;
}
function getStatusExtra(a){
var json=a&&a!=null?a:hotspotData;
var attr=json.attr||{days:"",group:"",rate:"",addr:"",messg:""};
var isRad=isRadius(json);
var addrArr ={};
var out ={};
try{var addr=attr.addr||"";if(addr.indexOf('=')>-1){var addrrr=addr+'_';var ad=addrrr.split('_');addrArr={};for(var n in ad){var adi=ad[n];if(adi.indexOf('=')>-1){var adnr =adi.split('=');addrArr[adnr[0]]=adnr[1];}}};}catch(e){};
if(isRad==0){
if(json&&json.time&&json.time.ito&&json.time.ito.indexOf('s')>-1){
    var s =json.time.ito;
    if (jsonConfig&&jsonConfig.apps&&jsonConfig.apps.status&&jsonConfig.apps.status[s]){
        addrArr['CF']=s;
    }
}
} 
if (typeof attr=="object"){for(var n in attr){var v=attr[n];out[n]=v;}};
if (typeof addrArr=="object"){for(var n in addrArr){var v=addrArr[n];out[n]=v;}};
if (typeof attr=="object"&&attr.group&&attr.group!=""){
    if (typeof addrArr=="object"&&addrArr['CF']){

    }else{
            addrArr['CF']=attr.group;
    }
}
if (typeof addrArr=="object"&&addrArr['CF']){
var s =addrArr['CF'];
if (s&&jsonConfig&&jsonConfig.apps&&jsonConfig.apps.status&&jsonConfig.apps.status[s]){
    var addv=jsonConfig.apps.status[s];
    if (typeof addv=="object"){for(var n in addv){var v=addv[n];out[n]=v;}
    out['CN']=addv;
    };
}
}
if (typeof addrArr=="object"){for(var n in addrArr){var v=addrArr[n];out[n]=v;}};

return out;
}    
function getStatusDayes(a){
var json=a&&a!=null?a:hotspotData;
var attr=json.attr||{days:"",group:"",rate:"",addr:"",messg:""};
var exdate=attr&&attr['days']||"";
var days=-1;
var kadamat='';
var kadamatPL='';
try{
addrArr=getStatusExtra(json);
if(addrArr['DA']){days=parseInt(addrArr['DA'])};
if(addrArr['HA']){var ts=(parseInt(json.secs.sto)+parseInt(json.secs.ut)+60*60);exdate=getTimeNow(ts*1000);days=(ts/(24*60*60)).toFixed(0)};
if(addrArr['KA']){kadamat=addrArr['KA']};
if(addrArr['PL']){kadamatPL=addrArr['PL']};
}catch(e){};
try{
if((typeof exdate == "undefined" || exdate==null || exdate==='')&&days<1){
if(json.time&&json.time.rto!=""&&json.time.rto.indexOf('s')>-1&&json.time.rto.indexOf('m')>-1){
var dp=parseInt(json.secs.rto);
if(dp>=60){
dp=(dp % 60);
dp=parseInt(dp);
if(!isNaN(dp)){
days=(dp*1);
};
};
} else{
if(json.secs&&json.secs.sto){
var t1=parseInt(json.secs.sto)+parseInt(json.secs.ut)+60*60;
if(t1>(24*60*60*7)){
var da=(t1/(24*60*60)).toFixed(0);
if(da>(24*60*60*7)){days=da}
}
}
}
};
}catch(e){};
var ex=false;
try{
if(typeof exdate != "undefined"&&exdate!=""){
var d=new Date(exdate);
exdate=d.getTime();
ex=true;
}else{
if(days>0){
var d=new Date();
exdate=days*24*60*60*1000+d.getTime();
} else{
var ap=jsonConfig.apps;
var ps=jsonConfig.prices;
if(ap.prices){ps=ap.prices};
if(ps&&typeof ps.content == "object"&&ps.content){
myprs=getStatusProfile(a);
if (myprs&&myprs!=""){
if(myprs){myprs=myprs.replace(/\s/,'');};
if(myprs){myprs=myprs.replace('ريال','');};
if(myprs){myprs=myprs.replace('Y','');};
if(myprs){myprs=myprs.replace('y','');};
if(myprs){myprs=myprs.replace('r','');};
if(myprs){myprs=myprs.replace('R','');};
if(myprs){myprs=myprs.replace(/[^0-9]/g,'');};
ps.content.forEach(function(e){
prs=e.price||e.title||'';
if(prs){prs=prs.replace(/\s/,'');};
if(prs){prs=prs.replace(/[^0-9]/g,'');}
if(prs==myprs){
if(e.body){
e.body.forEach(function(e1){
if(e1){e1=e1.replace(/\s/,'');};
if(e1.includes('سبوعين')){days=14} else
if(e1.includes('سبوع')){days=7}else
if(e1.includes('شهر')){days=30}else
if(e1.includes('يومان')){days=2}else
if(e1=="يوم"){days=1}else{  
if(e1){days=e1.replace(/[^0-9]/g,'');};
}
})
}else{
var e1=e.validity;
if(e1){e1=e1.replace(/\s/,'');};
if(e1.includes('سبوعين')){days=14} else
if(e1.includes('سبوع')){days=7}else
if(e1.includes('شهر')){days=30}else
if(e1.includes('يومان')){days=2}else
if(e1=="يوم"){days=1}else{  
if(e1){days=e1.replace(/[^0-9]/g,'');};
}
}
}
});
days=parseInt(days)*1;
if(days>0){
var d=new Date();
exdate=days*24*60*60*1000+d.getTime();
}
}}
}
}
}catch(e){};
return [days,exdate,ex];
}
function getStatusQury(){
getsHotspotStatus().then(function(data){
if(data){
var json=data[0];
var isLogin=data[1];
if(json==null){
showLoginPage(null);
try{clearInterval(setIntervalStatusQury);}catch(e){};
} else{
if(!isLogin){
showLoginPage(null);
try{clearInterval(setIntervalStatusQury);}catch(e){};
return;
};
var us=getLastUs(json);
var usm=usedMegaToArabic(json.bytes.bi+","+json.bytes.bo);
var usmu=usedMegaToArabic(json.bytes.bi);
var usmd=usedMegaToArabic(json.bytes.bo);
var ush=hoursArabic(json.time.ut);
var attr=json.attr||{days:"",group:"",rate:"",addr:"",messg:""}
try{
if(attr&&attr.messg&&attr.messg!=""&&attr.messg.indexOf('%')>-1){
var mess=JSON.parse(decodeURIComponent('{"a":"'+attr.messg+'"}'));
if(mess.up&&mess.up!=""&&mess.up!="0"){
usmu=usedMegaToArabic(parseInt(mess.up)+parseInt(json.bytes.bi));
usm=usedMegaToArabic(parseInt(mess.up)+parseInt(mess.ud))
};
if(mess.ud&&mess.ud!=""&&mess.ud!="0"){
usmd=usedMegaToArabic(parseInt(mess.ud)+parseInt(json.bytes.bo));
usm=usedMegaToArabic(parseInt(mess.up)+parseInt(mess.ud))
};
if(mess.uh&&mess.uh!=""&&mess.uh!="0"){
ush=hoursArabic(addtwotimes(json.time.ut,mess.uh));
};
if(usmu.indexOf('و')>0){usmu=usmu.split('و')[0]};
if(usmd.indexOf('و')>0){usmd=usmd.split('و')[0]};
};
getMonotoring(json);
}catch(e){};
statusEls.usedMega&&(statusEls.usedMega.innerText=usm);
statusEls.usedMegaUp&&(statusEls.usedMegaUp.innerText=usmu);
statusEls.usedMegaDown&&(statusEls.usedMegaDown.innerText=usmd);
statusEls.usedHours&&(statusEls.usedHours.innerText=ush);
statusEls.remHours&&(statusEls.remHours.innerText=hoursArabic(json.time.sto));
statusEls.remMega&&(statusEls.remMega.innerText=remMegaToArabic(json.bytes.rbt));
if(us&&us!=""){
var ms=json.mac||"";
var mspl='';if(ms.indexOf(':')>1){mspl=ms.split(':').join('');mspl.replace(/[A-Za-z]/g,function(a){a=a.toUpperCase();var p = parseInt(a,16);return p.toString();});};
var msco='1'.concat(mspl);
if(us==("T-"+ms)){
usernameV.innerHTML='<span style=\'color:green\'> تجربة مجانية';
profileA.style.display='none';
setItemAll('_Lastuser',us);
setItemAll('_Lastpass','');
}else if(us==("S-"+ms)){
usernameV.innerHTML='<span style=\'color:green\'> سلفة'; 
profileA.style.display='none';
setItemAll('_Lastuser',us);
setItemAll('_Lastpass','');
}else if(us==("C-"+ms)||us===msco){
usernameV.innerHTML ="<span style='color:green'> كرت مجاني من خدمة اجمع واربح";
setItemAll('_Lastuser',us);
setItemAll('_Lastpass','');
} else{
var l=us.length;
us="*".repeat(l<4?3:(l-4))+us.substring(0, 4);
usernameV.innerHTML=us;
}
usernameA.style.display='';
}
}
}  else{
showLoginPage();
try{clearInterval(setIntervalStatusQury);}catch(e){};
}
}).catch(function(data){
clearInterval(setIntervalStatusQury)
})
}
var lastsetIntervalStatusQury=false;
function startStatusQury(){
if (setIntervalStatusQury){clearInterval(setIntervalStatusQury)} else{}
var statust=document.querySelectorAll('[data-statust]');
statusEls={};
statust&&statust.forEach(function(el){
    statusEls[el.getAttribute('data-statust')]=el;
})
setTimeout(function(){lastsetIntervalStatusQury=true}, 5000);
if(lastsetIntervalStatusQury){
lastsetIntervalStatusQury=false;
if(pointsA){
    pointsA.style.display='none';
}
if(profileA){
    profileA.style.display='none';
}
if(speedA){
    speedA.style.display='none';
}
if(usernameA){
    usernameA.style.display='none';
}
if(daysA){
    daysA.style.display='none';
}
if(pointsNoAcc){
pointsNoAcc.innerText='';
}
}
getsHotspotStatus().then(function(data){
var json=data[0];
var isLogin=data[1];
var us=getLastUs(json);
setTimeout(function(){
try{fillPointsFromAplus(json);}catch(e){console.log('catch fillPointsFromAplus',e)}
try{fillDayesFromAplus(json);}catch(e){console.log('catch fillDayesFromAplus',e)}
}, 1000);
setTimeout(function(){
try{fillSpeedFromAplus(json);}catch(e){console.log('catch fillSpeedFromAplus',e)}
try{fillProfileFromAplus(json);}catch(e){console.log('catch fillProfileFromAplus',e)}
onStatusStart(json);
onStatusStartFirst(us,jsonConfig.network.name);
}, 200);
})
setIntervalStatusQury = setInterval(getStatusQury,10000);
setTimeout(getStatusQury, 1000); 
}
function showThisSpeeds(json){
var selectSpeeds=document.getElementById('speedn');
var speeds=json.speed_levels;
selectSpeeds.innerHTML='';
if(speeds){
    if(speeds.sort){
        speeds=speeds.sort(function(a, b){return a.order - b.order});
    }
    var radRep=json.radius_reply||{};
    var dSpeed=json.username_data_rate||radRep['Mikrotik-Rate-Limit'];
    if(osamaSpeedValue&&(osamaSpeedValue!="")){dSpeed=osamaSpeedValue}
    if(dSpeed){
         speeds.forEach(function(a,i){speeds[i].default=false;if(a.value==dSpeed){speeds[i].default=true;osamaSpeedName=a.name};})
    }else{
        speeds.forEach(function(a,i){if(a.default){dSpeed=a.value;osamaSpeedName=a.name};})
    }
    speeds.forEach(function(op,key){
        var id='value'+'-'+key;
        newInputRadio(id,key,op.value,op.name,op.default,eventSelectSpeedRadio,selectSpeeds);
    });
    osamaSpeedValue=dSpeed;
}
}
function eventSelectSpeedRadio(e) {
var el=e.target;
osamaSpeedName= el.getAttribute('data-speedn');
osamaSpeedValue= el.getAttribute('data-speedv');
osamaSpeedIndex=  parseInt(el.getAttribute('data-speedi'))*1;
setItemAll('spv',osamaSpeedValue);
setItemAll('spn',osamaSpeedName);
setItemAll('spi',osamaSpeedIndex);
}
function newInputRadio(a,b,val,z,f,c,d){
var ell=document.createElement('label');
ell.setAttribute('for',a);
ell.innerHTML=z;
var el=document.createElement('input');
el.name='speednv';
el.value=val;
el.id=a;
el.type='radio';
if (f){el.setAttribute('checked','');}
el.setAttribute('data-speedv',val);
el.setAttribute('data-speedn',z);
el.setAttribute('data-speedi',b);
ell.className='bot';
el.addEventListener('change',c);
d.appendChild(el);
d.appendChild(ell);
return d;
}
function showAplusSpeeds(data){
    us=getLastUs(data);
    if(isRadius(data)==0){return  showStatusPage('speeds');}
    AplusApi.newReq('speed_check',{username:us,mac:data.mac,ip:data.ip}).then(function(ret){
        if(ret){
            var json=ret[0];
            var status=ret[1];
            if (json.radius_reply&&json.radius_reply.status&&json.radius_reply.status == 'Access-Reject'){
                if (json.radius_reply["Reply-Message"]){
                    showErrorPopup(JSON.stringify(json.radius_reply["Reply-Message"]))
                }else{
                    showErrorPopup("الدخول غير مسموح");
                }
                sClows(3100)
                return  showStatusPage('speeds');
            } else {
            if (json.status == 'off' || json.status == 'null'){
                sClows(3100)
                return  showStatusPage('speeds');
            }
            if (json.status == 'error'){
                if(json.reply == 'quota'){
                showErrorPopup('إنتهى رصيد التحميل');
                }else if(json.reply == 'validity'){
                    showErrorPopup('إنتهت الصلاحية');
                }else if(json.reply == 'uptime'){
                    showErrorPopup('إنتهى رصيد الوقت');
                } else {
                    showErrorPopup(JSON.stringify(json.reply))
                }
                sClows(3100)
                return  showStatusPage('speeds');
            } else if (json.status === 'on' || json.status === 'ok'){
                if(json.speed_levels){
                    sClows(100);
                    speed_check[us]=json;
                    showTimerSpeeds(json);
                    showThisSpeeds(json);
                    saveSpeedCheck(json);
                } else{
                    sClows(3100)
                    return  showStatusPage('speeds');
                }
            } else{
                sClows(3100)
                return  showStatusPage('speeds');
            }
        }}else{showStatusPage('speeds');}
    }).catch(function(ret){
        showErrorPopup(JSON.stringify(ret));
        return  showStatusPage('speeds');
    })
}
function getAllSpeeds(data){
    sLoading(0);
    setTimeout(function(){
        if(getActiveApp().length==0){
            showStatusPage();
        }
    },5000);
    selectSpeeds.innerHTML='';
    breaktimer=0;
    var us=getLastUs(data);
    var ret=speed_check[us];
    if(ret&&ret!=null&&ret['speed_levels']&&ret['speed_levels'].length>0){
        showThisSpeeds(ret);
        sClows(300);
    }
    showAplusSpeeds(data);
}
function changeSpeed(rate,rateName){
    sLoading(0);
    setTimeout(showStatusPage,2500,null);
    breaktimer=1;
    if(rate==""){
        sClows(0);
        showStatusPage(null);
        return;
    }
    var us=getLastUs(hotspotData);
    return AplusApi.newReq('speed_change',{username:us,mac:hotspotData.mac,ip:hotspotData.ip,rate:rate}).then(function(ret){
        if(ret){
        var json=ret[0];
        var status=ret[1];
       if(json.status==="done"||json.status==="ok"){
            var rep=json.reply||" تم اختيار سرعة ".concat(rateName);
            setItemAll('spv',rate);
            setItemAll('spn',rateName);
            showErrorPopup("<span style='color:green'>".concat(rep,'</span>'));
            doNewLogin("/json/logout?erase-cookie=on").then(function(res2){                
                setTimeout(function(){
                    doNewLogin("/json/login?username="+us).then(startStatusQury)
                }, 100);
            })
            setTimeout(function(){
                showStatusPage(null);
            }, 200);
            setTimeout(sClows,1500,0);
            try{
            speed_check[us].radius_reply['Mikrotik-Rate-Limit']=rate;
            }catch(e){}
         } else{
            sClows(0);
            showStatusPage();
        }
    } else{
        sClows(0);
        showStatusPage();
    }
});
}
function saveThisUser(v){return getItemAll('last_users',false).then(function(data){var found=false;if (typeof v == "object"&&v!=null){var us=v['u'];if (typeof data != "object"||data==null){data=[{u:'',p:'',d:'',r:'',i:'',z:{}}]};for(var i in data){if("object"==typeof data[i] && data[i]!==null){var usv =data[i]['u'];if(usv==us&&usv!=''){found=true;for(var x in v){data[i][x]=v[x]};setItemAll('last_users',data);return data}}};try{if(!found){if(typeof data==="object"){for(var i in data){if("object"==typeof data[i] && data[i]!==null && typeof found!=="number"){var usv =data[i]['u'];if(usv==''){found=i}}};if(typeof found==="number"){data[found]=v} else{data.push(v)};setItemAll('last_users',data)}};}catch(e){}};return data;})}
function getThisUser(us){return getItemAll('last_users',false).then(function(data){if (typeof data != "object"||data==null){data=[{u:'',p:'',d:'',r:'',i:'',z:{}}]};for(var i in data){if("object"==typeof data[i] && data[i]!==null){var usv =data[i]['u'];if(usv==us&&usv!=''){return [data[i],data]}}};return [false,data]})}
function getThisUserSPD(us){return getItemAll('speed_change',false).then(function(data){if (typeof data != "object"||data==null){return false};for(var i in data){if("object"==typeof data[i] && data[i]!==null && i==us){return data[i]}};return [false,data]})}
function saveNewUser(us,ps) {
getItemAll('last_users',null).then(function(data){
var dz={ft:getTimeNow(0),lt:getTimeNow(0)};
if (typeof data != "object"||data==null){data=[{u:'',p:'',d:'',r:'',i:'',z:dz},{u:'',p:'',d:'',r:'',i:'',z:dz},{u:'',p:'',d:'',r:'',i:'',z:dz},{u:'',p:'',d:'',r:'',i:'',z:dz},{u:'',p:'',d:'',r:'',i:'',z:dz}]}
data.push({u:'',p:'',d:'',r:'',i:'',z:dz});
data.push({u:'',p:'',d:'',r:'',i:'',z:dz});
data.push({u:'',p:'',d:'',r:'',i:'',z:dz});
data.push({u:'',p:'',d:'',r:'',i:'',z:dz});
data.push({u:'',p:'',d:'',r:'',i:'',z:dz});
var fond=false;
for(var x in data){if(data[x]&&data[x]['u']&&data[x]['u']==us){fond=true;} else{}};
if (!fond){
var usv={u:us,p:ps,d:ds,z:dz,r:rad,"E":false};
var v=[];
v.push(usv);
for(var x in data){if(x<4&&data[x]&&data[x]['u']&&data[x]['u']==us){} else{v.push(data[x]);}};
isNewUser=us;
v=v.slice(0,15);
setItemAll('last_users',v);
data=v;
last_users=data;
} else{
if(data){
var usv={u:us,p:ps,d:ds,z:dz,r:rad,"E":false};
for(var x in data){if(data[x]&&data[x]['u']&&data[x]['u']==us){usv=data[x];usv['d']=ds;usv['E']=false;usv['p']=ps;usv['r']=rad;if(usv['z']){usv['z']['lt']=getTimeNow(0)}} else{}};  
var v=[];
v.push(usv);
for(var x in data){if(data[x]&&data[x]['u']&&data[x]['u']==us){} else{if(x<15){v.push(data[x]);}}};
data=v.slice(0,15);
};
data.push({u:'',p:'',d:'',r:'',i:'',z:dz});
data.push({u:'',p:'',d:'',r:'',i:'',z:dz});
data.push({u:'',p:'',d:'',r:'',i:'',z:dz});
data.push({u:'',p:'',d:'',r:'',i:'',z:dz});
data.push({u:'',p:'',d:'',r:'',i:'',z:dz});    
data=data.slice(0,15);
setItemAll('last_users',data);
last_users=data;
isNewUser=false;
}
setLastUsersSelect(data);
});
setItemAll('_Lastuser',us);
setItemAll('_Lastpass',ps);
}
function isNotFoundUser(e){
try {
var a=(e||{});
var ers=a.ers||"";
var ero=a.ero||"";
var ert=a.ert||"";
var er=''.concat(ero,ert,ers);
er=er.toLowerCase();
ert=ert.toLowerCase();
if(ert.includes("radius-reply")&&(er.includes('found')||er.includes('sername doesn')||er.includes('اسم المستخدم'))||ert.includes('invalid-username')){
return true;
}} catch (e) {};
return false;    
}
function isKickFoundUser(e){
try {
var a=(e||{});
var ers=a.ers||"";
var ero=a.ero||"";
var ert=a.ert||"";
var er=''.concat(ero,ert,ers);
er=er.toLowerCase();
ert=ert.toLowerCase();
if(ert.includes("user-session-limit")||ert.includes("radius-reply")&&((er.includes('session')&&!er.includes('time'))||er.includes('already+logged+in')||er.includes('already logged in')||(er.includes('جهاز')&&!er.includes('mac')&&er.includes('خر')))){
return true;
}
} catch (e) {}
return false;    
}
function isTrafficOrTimeOrDayesEnds(e){
try {
var a=(e||{});
var ers=a.ers||"";
var ero=a.ero||"";
var ert=a.ert||"";
var er=''.concat(ero,ert,ers);
er=er.toLowerCase();
ert=ert.toLowerCase();
if((ert.includes("traffic-limit")||ert.includes("invalid-mac")||ert.includes("wrong-mac-username")||ert.includes("uptime-limit")||ert.includes("uptime-limit"))||(ert.includes("radius-reply")&&(er.includes('traffic')||er.includes('validity')||er.includes('quota')||er.includes('time')||er.includes('profile')||er.includes('صلاحي')))){
return true;
}
} catch (e) {}
return false;    
}
function isTrafficEnds(e){
try {
var a=(e||{});
var ers=a.ers||"";
var ero=a.ero||"";
var ert=a.ert||"";
var er=''.concat(ero,ert,ers);
er=er.toLowerCase();
ert=ert.toLowerCase();
if((ert.includes("traffic-limit"))||(ert.includes("radius-reply")&&(er.includes('raffic')||er.includes('quota')))){
return true;
}
} catch (e) {}
return false;    
}    
function isTimeEnds(e){
try {
var a=(e||{});
var ers=a.ers||"";
var ero=a.ero||"";
var ert=a.ert||"";
var er=''.concat(ero,ert,ers);
er=er.toLowerCase();
ert=ert.toLowerCase();
if((ert.includes("uptime-limit"))||(ert.includes("radius-reply")&&(er.includes('time')))){
return true;
}
} catch (e) {}
return false;    
}    
function isDayesEnds(e){
try {
var a=(e||{});
var ers=a.ers||"";
var ero=a.ero||"";
var ert=a.ert||"";
var er=''.concat(ero,ert,ers);
er=er.toLowerCase();
ert=ert.toLowerCase();
if((ert.includes("invalid-mac")||ert.includes("wrong-mac-username")||ert.includes("invalid-username"))||(ert.includes("radius-reply")&&(er.includes('sername doesn')||(er.includes('not')&&er.includes('found'))||er.includes('validity')||er.includes('profile')||er.includes('صلاحي')))){
return true;
}
} catch (e) {}
return false;    
}
function loginByLastUserssUBMIT(us,ps){
var ur1='/json/login?username='.concat(us);
if(submitDoneDoLogin){setTimeout(function(){submitDoneDoLogin=false},300);return false};setTimeout(function(){submitDoneDoLogin=false},1000);submitDoneDoLogin=true;
sLoading(10);
try{if(jsonConfig&&jsonConfig.login&&jsonConfig.login&&jsonConfig.login.dst&&jsonConfig.login.dst!=''){ur1=ur1.concat('&dst=',jsonConfig.login.dst)}}catch(e){};
doNewLogin(ur1).then(function(json1){
var islog1=json1&&json1.lin&&json1.lin==="yes";
if(islog1){
sClows(100);
try{setItemAll('block-count',1);} catch(e){};
try{removeItemAll('block-count')} catch(e){};
submitDoneDoLogin=false;
if(isRadius(json1)){getAllSpeeds(json1);showApp(loginSubmit,'login','speeds');}else{showStatusPage(null);}
} else{
loginForm.username.value='';
loginForm.password.value='';
var ert=(json1||{}).ert||"";
var isEnds=isTrafficOrTimeOrDayesEnds(json1);
var isKick=isKickFoundUser(json1);
if(ert==='auth-in-progress'){return sClows(2000);}
if(ert==='radius-timeout'){return sClows(2000);}            
if(isEnds&&!isKick){return sClows(0);}
if(isKickFoundUser(json1)){
return showKickUser(us,ps);
} else {
sClows(0);
}}
});
var n=getTimeNow(5000);
setItemAll('_logout',n);
}
function loginByLastUsers(){
return getItemAll('_Lastuser',"").then(function(dataU){
if(dataU&&dataU!=''&&dataU!=null){
var us=dataU;
var ps='';
getItemAll('_Lastpass',"").then(function(dataP){
    ps=dataP;
    getItemAll('spv',"").then(function(dv){
        var dataV=dv?dv.toUpperCase():'';
            var ur1='/json/login?username='.concat(dataU);
            if(dataP&&dataP!=""){ur1=ur1.concat('&password=',dataP);};
            sLoading(10);
            try{if(jsonConfig&&jsonConfig.login&&jsonConfig.login&&jsonConfig.login.dst&&jsonConfig.login.dst!=''){ur1=ur1.concat('&dst=',jsonConfig.login.dst)}}catch(e){};
            doNewLogin(ur1).then(function(json1){
            var islog1=json1&&json1.lin&&json1.lin==="yes";
            if(islog1){
                sClows(100);
                showStatusPage(null);
                try{
                if(isRadius(json1)){
                AplusApi.newReq('speed_check',{username:us,mac:a.mac,ip:a.ip}).then(function(ret){
                    if(ret&&ret[0]){
                        if(ret[0].speed_levels&&ret[0].speed_levels.length){
                            var speeds=ret[0].speed_levels;
                            for(var x in speeds){
                                var v=speeds[x].value;
                                var n=speeds[x].name;
                                if (v&&v.toUpperCase()==dataV){
                                     changeSpeed(v,n);
                                     return setTimeout(showStatusPage,1000);
                                }
                            }
                        } 
                    }
                getAllSpeeds(json1);
                showApp(loginSubmit,'login','speeds');
                sClows(100);
            })
            }
            } catch(e){};
            try{setItemAll('block-count',1);} catch(e){};
            } else{
            loginForm.username.value='';
            loginForm.password.value='';
            var ert=(json1||{}).ert||"";
            var isEnds=isTrafficOrTimeOrDayesEnds(json1);
            var isKick=isKickFoundUser(json1);
            if(ert==='auth-in-progress'){return sClows(500);}
            if(ert==='radius-timeout'){return sClows(500);}            
            if(isEnds&&!isKick){return sClows(0);}
            if(isKickFoundUser(json1)){
            return showKickUser(us,ps);
            } else {
            sClows(0);
            }}
            var n=getTimeNow(5000);
            setItemAll('_logout',n);
    });
})
})
} else{
    showLoginPage();
}
})
}
function isSPD(a){
if (typeof a=="object"&&a!=null){return (a&&a['speed_levels']&&a['speed_levels'].length>0)};
if (typeof jsonConfig == "object"&&jsonConfig.login&&jsonConfig.login.speeds){a=jsonConfig.login.speeds;return (a&&a['speed_levels']&&a['speed_levels'].length>0);};
return false;
}
function saveSpeed(n,v,us) {if(n=='speed_change'){speed_change[us]=v;};if(n=='speed_check'){speed_check[us]=v;};return getItemAll(n,{}).then(function(a){if("object"!=typeof a&&a!=null){a={}};var o={},j=0;for(var i in a){if(a[i]&&a[i]['_T']&&getTimeNow(0)<a[i]['_T']&&j<10){o[i]=a[i];j=j*1+1}};o[us]=v||{};o[us]['_T']=getTimeNow(7*24*60*60*1000);speed_last=v;setItemAll(n,o);return o;})}
function doKickUser(){
sLoading(550);
doNewLogin("/json/login?username=KICKUSER").then(function(ss){
if(ss&&ss.lin&&ss.lin==='yes'){
setTimeout((function(){
errElem.innerHTML='<h3>جاري اعادة تسجيل الدخول</h3>';
setTimeout((function(){errCont&&errCont.classList.add("zoom")}),150);
setTimeout((function(){errCont&&errCont.classList.add("active")}),50);
sLoading(0);sClows(5000);
}),150);
setTimeout(function(){submitDoneDoLogin=false;loginFormOnSubmit();},1000);
var dataU=whenKick['u']||"";var dataP=whenKick['p']||"";
if(!dataU.includes(':')){loginForm.username.value=dataU;loginForm.password.value=dataP;}
}else setTimeout(function(){
errElem.innerHTML='<h3>اعد المحاولة لاحقا</h3>';
loginForm.username.value='';
loginForm.password.value='';
sClows(5000);
},2000)
});
}
function showKickUser(us,ps){
whenKick={u:us,p:ps};
setTimeout((function(){errCont&&errCont.classList.add("zoom")}),150);
setTimeout((function(){errCont&&errCont.classList.add("active")}),50);
errElem.innerHTML+='<br /><br /><div><h3>هل تريد استخدام الكرت في هذا الجهاز ؟</h3><button type="button" class="btn" style="display: inline-block;width:70px;margin-left:15px" onclick="doKickUser()">نعم </button><button type="button" class="btn" style="display: inline-block;width:70px;margin-left:15px" onclick="hideErrorPopup()">لا</button></div>';
}
function isBlockEd(us,ps){
getItemAll('block-count',1).then(function(na){
if(na==null){na=0};
na=parseInt(na||'1');
if(isNaN(na)){na=0} else{na=na*1;};
var message="<div class='err-warn'><br /><br /><h4>تحذير !! عدد محاولاتك الخاطئة اصبح {{na}} محاولاتك</h4><h4>اذا تجاوزت العدد المسموح للمحاولات {{count}} سيتم حظرك لمدة {{time}} دقائق</h4></div>";
var conf=jsonConfig&&jsonConfig.block||{block:1,time:3,count:15,warn:10,message:message }
conf.message=conf.message||message;
if(conf&&conf.block&&(na||na==0)){
if(na>conf.count){
var t=conf.time||3;
removeItemAll('block-count').then(function(a){setItemAll('block-count',1).then(function(a){var ur1='/json/login?username=BLOCKED';doNewLogin(ur1).then(function(a){window.location.href='/status?var='+t+'&target=block';});});
});
}else if(conf.warn&&na>conf.warn) {
var n=(na*1+1);
setItemAll('block-count',n);
setTimeout(function(){
conf['na']=na;
errElem.innerHTML+= fillMustache(conf.message,conf);
setTimeout(function(){document.getElementById("err-cot").addEventListener("click",hideErrorPopup);}, 3000);
}, 2000);
setTimeout(function(){document.getElementById("err-cot").addEventListener("click",hideErrorPopup);}, 5000);
try{document.getElementById("err-cot").removeEventListener("click",hideErrorPopup)}catch(e){};
}  else{var n=(na*1+1);setItemAll('block-count',n);}
}});
}
function isRadius(a){
var b;if(typeof a== "undefined"||a==null){a=hotspotData};
if(typeof a== "string"&&(a=='yes'||a=='true')){return 1};
if(typeof a== "string"&&(a=='no'||a=='false'||a=='')){return 0};
if(typeof a== "object"){if(a==null||typeof a.rad== "undefined"){return -1;};b=a.rad;};
if(b){if(typeof b== "string"&&(b=='yes'||b=='true')){return 1};if(typeof b== "string"&&(b=='no'||b=='false'||b=='')){return 0};};
return -1
}
function doNewLogin(ur){
return xmlFetch(ur,{}).then(function(res){
return res.json().then(function(res2){
hotspotData = res2;
return res2;
}).catch(function(res){hotspotData['ers']=res;hotspotData['ert']=res;hotspotData['ero']=res;return hotspotData})
}).catch(function(res){hotspotData['ers']=res;hotspotData['ert']=res;hotspotData['ero']=res;return hotspotData})
}
function onloginFi222ndErrors(json2,us,ps){
var ers=(json2||{}).ers||"";
var ero=(json2||{}).ero||"";
var ert=(json2||{}).ert||"";
if(ert==='auth-in-progress'){return true};
if(ert==='radius-timeout'){return true};
if(ert!=""){var erss=toArabicError(ero);if(erss.length<3){erss=toArabicError(ers);};if(erss.length<3){erss=ers;};showErrorPopup(erss);}
if(isKickFoundUser(json2)){
showKickUser(us,ps);
return false;
} else if(isDayesEnds(json2)){
getItemAll('_dayes',null).then(function(up){
var isdateEx=false;
if(up&&up!=null&&up[us]&&up[us]['d']&&up[us]['d']<getTimeNow(0)&&up[us]['d']>10000){isdateEx=true;var d2=new Date(up[us]['d']);var dd=d2.getDate()+'-'+(d2.getMonth()*1+1)+'-'+d2.getFullYear();var ms="".concat(up[us]['m']," ",dd);setTimeout(function(){errElem.innerHTML+='<h5> '+ms+' </h5>';}, 1500);}
saveThisUser({u:us,"E":true}).then(function(data){
if(!isdateEx&&data){
    if(data['z']&&data['z']['ft']&&data['z']['ft']<getTimeNow(-60*60*24*1000*3)){
    var d2=new Date(data['z']['ft']);
    var dd=d2.getDate()+'-'+(d2.getMonth()*1+1)+'-'+d2.getFullYear();
    var ms=" تاريخ اول استخدام ".concat(dd);
    errElem.innerHTML+='<h4> او ان الكرت منتهي الصلاحية </h4>'+'<h5> '+ms+' </h5>';
}
};
last_users=data;
isNewUser=false;
setLastUsersSelect(data);
});
});
} else{
if(isTimeEnds(json2)||isTrafficEnds(json2)){saveThisUser({u:us,"E":true}).then(function(data){last_users=data;isNewUser=false;setLastUsersSelect(data);})}
} 
try{
loginForm.username.value='';
loginForm.password.value='';
return isBlockEd(us,ps);
} catch(e){};
return false;
}
function onloginFindErrors(json2,us,ps){
var ers=(json2||{}).ers||"";
var ero=(json2||{}).ero||"";
var ert=(json2||{}).ert||"";
var isdateEx=false;
if(ert!=""){var erss=toArabicError(ero);if(erss.length<3){erss=toArabicError(ers);};if(erss.length<3){erss=ers;};showErrorPopup(erss);}
if(isKickFoundUser(json2)){
showKickUser(us,ps);
return false;
} else if(isDayesEnds(json2)){
getItemAll('_dayes',null).then(function(up){if(up&&up!=null&&up[us]&&up[us]['d']&&up[us]['d']<getTimeNow(0)&&up[us]['d']>10000){isdateEx=true;setTimeout(function(){errElem.innerHTML+='<h5> '.concat("".concat(up[us]['m']," ",getDateStr(up[us]['d'])),' </h5>');}, 1500);};
saveThisUser({u:us,"E":true}).then(function(a){if(!isdateEx&&a){for(var n in a){if(a[n]['u']==us){var data=a[n];if(data['z']&&data['z']['ft']&&data['z']['ft']<getTimeNow(-60*60*24*1000*2)){errElem.innerHTML+='<h4> او ان الكرت منتهي الصلاحية </h4>'.concat('<h5> '," تاريخ اول استخدام ".concat(getDateStr(data['z']['ft'])),' </h5>');}}}};last_users=a;isNewUser=false;setLastUsersSelect(a);});
});
} else if(isTimeEnds(json2)||isTrafficEnds(json2)){saveThisUser({u:us,"E":true}).then(function(data){last_users=data;isNewUser=false;setLastUsersSelect(data);})
} else { 
getItemAll('_dayes',null).then(function(up){if(up&&up!=null&&up[us]&&up[us]['d']&&up[us]['d']<getTimeNow(0)&&up[us]['d']>10000){isdateEx=true;setTimeout(function(){errElem.innerHTML+='<h5> '.concat("".concat(up[us]['m']," ",getDateStr(up[us]['d'])),' </h5>');}, 1500);saveThisUser({u:us,"E":true}).then(function(a){last_users=a;setLastUsersSelect(a);});}});
}
try{
loginForm.username.value='';
loginForm.password.value='';
if(!isKickFoundUser(json2)&&!isTimeEnds(json2)&&!isTrafficEnds(json2)&&(json2.ert!=='radius-timeout'&& json2.ert!=='auth-in-progress')){
return isBlockEd(us,ps);
}
} catch(e){};
return false;
}
var submitDoneDoLogin=false;
setInterval(function(){submitDoneDoLogin=false},20000);
function doTLogin(ur1,us,ps){
setTimeout(function(){
doNewLogin(ur1).then(function(json1){
var islog1=json1&&json1.lin&&json1.lin==="yes";
if(islog1){
try{setItemAll('block-count',1);} catch(e){};
try{(us==json1.usr)&&saveNewUser(us,ps);} catch(e){};
submitDoneDoLogin=false;
if(isRadius(json1)){getAllSpeeds(json1);showApp(null,null,'speeds');}else{showStatusPage(null);}
}else{
onloginFindErrors(json1,us,ps);
}
})
}, 250);
}
function doLoginOnFormOnSubmit(us,ps){
var ur1='/json/login?username='.concat(us||'');
if(submitDoneDoLogin){setTimeout(function(){submitDoneDoLogin=false},600);return false};setTimeout(function(){submitDoneDoLogin=false},2000);submitDoneDoLogin=true;
if(ps&&ps!=""){ur1=ur1.concat('&password=',ps);};
try{if(jsonConfig&&jsonConfig.login&&jsonConfig.login&&jsonConfig.login.dst&&jsonConfig.login.dst!=''){ur1=ur1.concat('&dst=',jsonConfig.login.dst)}}catch(e){};
if(jsonConfig&&jsonConfig.login&&jsonConfig.login&&jsonConfig.login.points){
try{aplusDoGetpointsRechargeApi(us).then(function(ret){
if(ret&&ret!=null){
    var json=ret[0];var status=ret[1];
    if (status==200){
        var points=json.points;
        if(points&&points>0){
            Toast.fire(swalAnimation({text:' صحيح '.concat(" حصلت على ",points," نقطة "),timer:13000,icon:'success'})).then(function(){
                pointsAdded.innerText=' + '.concat(points,'  ');
                pointsNoAcc.innerText='';
                pointsA.style.display='';
            });
        }
    }
    console.log(ret);
    return ret
}}).then(function(){doTLogin(ur1,us,ps)});
}catch(e){return  doTLogin(ur1,us,ps);}
} else{
    return  doTLogin(ur1,us,ps);
}
}
var getMonotoringData={"m":0.0,"t":0.0,"l":[0.0,0.0,0.0],"r":0.0,'TS':0.0};
var getMonotoringMSG=false;
var getMonotoringUSERS={};
function getMonotoring(data){
var json=data&&data!=null?data:hotspotData;
var usr=json.usr;
var up=parseFloat(json.bytes.bi);if(isNaN(up)){up=1.0}
var bo=parseFloat(json.bytes.bo);if(isNaN(bo)){bo=1.0}
if(up<1024){up=1025.0};if(bo<1024){bo=1025.0}
var mg=parseFloat(up)+parseFloat(bo);
if (json.bytes.rbt&&json.bytes.rbt!='0'&&json.bytes.rbt!=''){if(getMonotoringUSERS[usr]){getMonotoringUSERS[usr]['M']=json.bytes.rbt;getMonotoringUSERS[usr]['T']=json.secs.sto;}else{getMonotoringUSERS[usr]={"MX":json.bytes.rbt,"ST":json.secs.sto}}}
mg=mg/80.0;
if(mg<2.0){mg=2.0};
mg=parseFloat(mg);
mg=mg.toFixed(1);
var ut=parseFloat(json.secs.ut)*1.0;
if(ut<1){ut=1}
if (!getMonotoringMSG&&json.bytes.rbt&&json.bytes.rbt!='0'&&json.bytes.rbt!=''&&json.bytes.lbt&&json.bytes.lbt!='0'&&json.bytes.lbt!=''){
var my=((parseFloat(up)*1.01)+(parseFloat(bo)*1.01))*1.01;
var mx=parseFloat(json.bytes.lbt)*1.01;
if(mx>(1024.1*1024.1*1024.1*3.1)){mx=(1024.1*1024.1*1024.1*3.1);}
var mr=(my/mx);
var mo=(mg/ut);
if ((mg > (1024*30) && ut >20 && (my>(1024.1*1024.1*10.1)) && (mr>0.08) && mo>4000.1)||(my > (1024.1*1024.1*80.1) && ut <520)){
getMonotoringMSG=true;
my=((parseFloat(up)+parseFloat(bo)) / (1024.01*1024.01)).toFixed(1);
var utz=(ut / 60.001).toFixed(0);if(utz<1){utz=1};
var ms=" اكثر من ".concat(my," ميجا خلال اقل من ",utz,' دقيقة ');
document.querySelector("[data-speed-value]").innerHTML=''.concat(document.querySelector("[data-speed-value]").innerHTML,'<p style="color:red;font-size:9px">تحذير انت تستهلك الرصيد بشكل كبير جدا </p>');
showErrorPopup(' تحذير انت تستهلك الرصيد بشكل كبير جدا <p>'.concat(ms));
}    
}
var lsmg=getMonotoringData['m'];
var lsut=getMonotoringData['t'];
var lts=getMonotoringData['TS'];
var ts=parseFloat(ut*1.0-lsut*1.0);
if(ts<1.0){ts=1.0};
var nts=((getTimeNow(0)*1.00000001)-(lts*1.0000001))/1000;
ts=parseFloat(parseFloat(ts)+(parseFloat(nts)*2.0))/3.0;
getMonotoringData['TS']=getTimeNow(0);
var thisSp=1.0;
thisSp=parseFloat(parseFloat(parseFloat(mg) - parseFloat(lsmg))/ ts).toFixed(2);
var lsl=getMonotoringData['r'];
getMonotoringData['m']=mg;
getMonotoringData['t']=ut;
getMonotoringData['l1']=thisSp;
getMonotoringData['l2']=getMonotoringData['l1']||thisSp;
getMonotoringData['l3']=getMonotoringData['l2']||thisSp;
getMonotoringData['l'].push(thisSp);
if (getMonotoringData['l'].length>=20){getMonotoringData['l']=getMonotoringData['l'].slice(1,20);}
thisSp=parseFloat(parseFloat(getMonotoringData['l2']*1.0) + parseFloat(getMonotoringData['l3']*1.0) + (thisSp*3.0)) / 5.0;
thisSp=thisSp.toFixed(1);
if(thisSp<0){thisSp=thisSp*-1.0}
getMonotoringData['r']=thisSp;
var smb='K',smr='K';
var rt=((lsl - thisSp)/2.0);
if(rt<0){rt=rt*-1.0};
var col='green';
if(thisSp>5048.0||getMonotoringMSG){col='red';};
if(thisSp>2048.0){smb='M';thisSp=(thisSp/1024.0).toFixed(1)};
if(thisSp>2048.0){smb='G';thisSp=(thisSp/1024.0).toFixed(1)};
if(rt>2048){smr='M';rt=(rt/1024).toFixed(1)};
if(rt>2048){smr='G';rt=(rt/1024).toFixed(1)};
document.querySelector('[data-speed-name]').innerText="  ".concat(thisSp,smb,"  ");
document.querySelector('[data-speed-name]').style.color=col;
document.querySelector('[data-speed-name]').style.padding='5px';
document.querySelector('[data-speed-name]').style.fontSize='10px';
document.querySelector('[data-speed-name]').style.marginLeft='-30px';
return [thisSp+smb,rt+smr];
}