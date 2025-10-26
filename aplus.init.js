var aloginForm=document.querySelector('.alogin');
var signupForm=document.querySelector('.signup');
var verifyForm=document.querySelector('.verify');
var setnameForm=document.querySelector('.setname');
var setpasswordForm=document.querySelector('.setpassword');
var resetpasswordForm=document.querySelector('.resetpassword');
var resendcode=document.getElementById('resendcode');
var resetcode=document.getElementById('resetcode');
function clearMessegError(){
    var allerr=document.querySelectorAll('.input-messege');
    allerr&&allerr.forEach(function(el){
        el.innerHTML='';
    })
}
function showMessegError(er,id){
    clearMessegError();
    for(var e in er){
       var el =document.getElementById(id+'-'+e);
        if (el){
            var innr='';
            if (typeof er[e] =="object"){
                for(var es in er[e]){
                    innr+='<p>'+er[e][es]+'</p>'
                }
            }else{
                innr+='<p>'+er[e]+'</p>'
            }
            el.innerHTML=innr;
        } else {
            Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(er[e]),timer:6000,icon:'error'}));
        }
    }
}
function openSetting(){
    var ac=document.querySelector('.app.active')||{id:a||null}
    showApp(null,ac.id,'setting')
    setTimeout(function(){
        hidAllApps('setting')
    }, 300);
}
function onCopyCard(ca){
setTimeout(showPointsPage,10000);
Swal.fire({title: "قم بنسخ الكرت",html:'<input class="input-form" type="text" value="'+ca+'" id="mynewcard"> <button class="boxb" onclick="navigator.clipboard.writeText(document.getElementById(\'mynewcard\').value)">Copy text</button>',timer:26000})
navigator.clipboard.writeText(ca);
}
function redeemed_points(id,el){
    sLoading(0);
    AplusApi.newReq('points_redeemed',{group_id:id}).then(function(ret){
        var json=ret[0];
        var status=ret[1];
        if (status==200){
              Swal.fire(swalAnimation({title:json.message,html:'<input class="input-form" type=text value="'+json.card_no+'" id="mynewcard"> <button  class="boxb" onclick="navigator.clipboard.writeText(document.getElementById(\'mynewcard\').value)">قم بنسخ الكرت</button>',icon:'success'})).then(function(a){                                
            })
            el.innerText=json.card_no; 
			el.setAttribute('onclick','onCopyCard("'+json.card_no+'")')
            el.disabled=false;
			setTimeout(function(){
				navigator.clipboard.writeText(document.getElementById('mynewcard').value);
			},300)
        } else{
            Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json),timer:6000,icon:'error'}))
            sClows(6000);
        }
    })
}
function showPoints(ob){
    var elp =document.getElementById('point-div');
    var el =document.getElementById('point-title');
    if (elp){
        el.innerHTML='';
        elp.innerHTML='';
        el.innerHTML+='<div class="box3 box-col0"><h3>صافي النقاط</h3><hr/><span class="box-col">'+ob.remaining_points+' نقطة </span></div>';
        el.innerHTML+='<div class="box3 box-col1"><h3>نقاط ثماري</h3><hr/><span class="box-col">'+ob.charging_points+' نقطة </span></div>';
        el.innerHTML+='<div class="box3 box-col2"><h3>نقاط المسابقة</h3><hr/><span class="box-col">'+ob.competition_points+' نقطة </span></div>';
        el.innerHTML+='<div class="box3 box-col3"><h3>النقاط المحسوبة</h3><hr/><span class="box-col">'+ob.redeemed_points+' نقطة </span></div>';
        el.innerHTML+='<div class="box3 box-col4"><h3>الحد الادنى لسحب النقاط</h3><hr/><span class="box-col">'+ob.min_req_points+' نقطة </span></div>';
        var mpoint=parseInt(ob.remaining_points);
        var min=parseInt(ob.min_req_points);
        for(var e in ob.groups_list){
            var g=ob.groups_list[e];
            elp.innerHTML+='<div class="box3 box-col'+e+'" id="group_id_'+g.id+'"><h3>'+g.name+'</h3><hr/><span class="box-col">'+g.points+' نقطة </span><hr/></div>';
                  var elbut=document.createElement('button');
                  elbut.innerText='استبدال؟'
                  elbut.setAttribute('data-group_id',g.id);
                  elbut.setAttribute('onclick','redeemed_points(this.getAttribute(\'data-group_id\'),this)');
                    if(g.points&&parseInt(g.points)<=mpoint&&mpoint>=min){
                        elbut.className="boxb";
                    } else {
                        elbut.className="boxb disabled";
                        elbut.disabled=true;
                    }
            document.getElementById('group_id_'+g.id).appendChild(elbut)
        }
    }
}
function showPointsMovments(ob){
    var elp =document.getElementById('point-movment-table');
    if (elp){
        elp.innerHTML='';
        for(var e in ob){
            var g=ob[e];
            var date=g.date;
            date=date.split('T')[0];
            elp.innerHTML+='<div class="box3 box-col'+e+'"><h3>'+g.process_name+'</h3><hr/><span class="box-col">'+g.points+' نقطة في '+date+'</span><hr/><h5>'+g.notice+' </h5></div>';
        }
    }
}
function showLoginPage(a){
    var ac=document.querySelector('.app.active')||{id:a||null};
     showApp(null,ac.id,'login');
     sClows(300);
}
function showPointsPage(a){
    var ac=document.querySelector('.app.active')||{id:a||null}
    showApp(null,ac.id,'points')
    setTimeout(function(){
        hidAllApps('points')
    }, 300);
    startPointsQury();
}
function showPointsMovmentsPage(a){
    var ac=document.querySelector('.app.active')||{id:a||null}
    showApp(null,ac.id,'point-movment')
    setTimeout(function(){
        hidAllApps('point-movment')
    }, 300);
    startPointsMovmentsQury();
}
function startPointsMovmentsQury(){
    sLoading(0);
    AplusApi.newReq('points_movements',{}).then(function(ret){
        var json=ret[0];
        var status=ret[1];
        setItemAll('points_movements',json);
        if(status==200&&json&&json.length==0){
            Swal.fire(swalAnimation({title: "لايوجد اي حركة للنقاط بعد",timer:6000}))
            sClows(3000);
            showApp(null,'point-movment','points');
        }else{
            sClows(1000);
            showPointsMovments(json);
        }
    })
}
function startPointsQury(){
    sLoading(0);
    sClows(5000);
    getItemAll('api_doLogin',null).then(function(a){
        if (a&&a!=null&&a.phone){
            AplusApi.newReq('auth_login',{phone:a.phone,password:a.password}).then(function(ret){
                if(ret){
                var json=ret[0];
                var status=ret[1];
                if (status==200){
                    AplusApi.newReq('points',{}).then(function(ret){
                        var json=ret[0];
                        var status=ret[1];
                        if (status==200){
                            setItemAll('points',json);
                        }
                        showPoints(json)
                    })
                } else{
                    Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json),timer:8000,icon:'error'})).then(function(a){
                        window.location.reload();
                    })
                }
                } else{
                    window.location.reload();
                }
            })
        }})
}
function getNetCode(phone){
AplusApi.newReq('auth_resend',{phone:phone}).then(function(ret){
    var json=ret[0];
    var status=ret[1];
    sClows(6000);
    if (status==200){
        Swal.fire(swalAnimation({title: " OK ",text:json.message,timer:6000,icon:'success'}));

    } else{
        Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json),timer:6000,icon:'error'}));
        if(json.errors){
            showMessegError(json.errors,'verify')
        }
        verifyForm.phone.disabled=false;
        verifyForm.password.disabled=false;
        resendcode.disabled=false;
    }
});
}
function phoneNumberNotVeryfy(phone,pass){
setTimeout(function(){
showApp(null,null,'verify');
verifyForm.phone.value=phone;
verifyForm.password.value=pass;
verifyForm.phone.disabled=true;
verifyForm.password.disabled=true;
resendcode.disabled=true;
}, 500);
getNetCode(phone);
}
resendcode&&resendcode.addEventListener('click',function(e){
    var phone=verifyForm.phone.value;
    resendcode.disabled=true;
    sLoading(0);
    AplusApi.newReq('auth_resend',{phone:phone}).then(function(ret){
        var json=ret[0];
        var status=ret[1];
        sClows(6000)
        if (status==200){
            Swal.fire(swalAnimation({title: " تم ارسال الكود بنجاح",text:JSON.stringify(json),timer:6000,icon:'success'}));        
        } else{
            Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json),timer:6000,icon:'error'}));
            if(json.errors){
                showMessegError(json.errors,'verify')
            }
        }
    })
})
resetcode&&resetcode.addEventListener('click',function(e){
    var phone=setpasswordForm.phone.value;
    resetcode.disabled=true;
    sLoading(0);
    AplusApi.newReq('auth_forgot',{phone:phone}).then(function(ret){
        var json=ret[0];
        var status=ret[1];
        sClows(6000)
        if (status==200){
            Swal.fire(swalAnimation({title: " تم ارسال الكود بنجاح",text:json.message||JSON.stringify(json),timer:6000,icon:'success'}));        
        } else{
            Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json),timer:6000,icon:'error'}));
            if(json.errors){
                showMessegError(json.errors,'setpassword')
            }
        }
    })
});
aloginForm&&aloginForm.addEventListener('submit',function(e){
    try{ e&&e.preventDefault&&e.preventDefault();}catch(e){}
    var phone=aloginForm.phone.value;
    var pass=aloginForm.password.value;
    sLoading(0);
    AplusApi.newReq('auth_login',{phone:phone,password:pass}).then(function(ret){
        var json=ret[0];
        var status=ret[1];
        sClows(6000);
        if (status==200){
            setItemAll('auth_login',json);
            setItemAll('api_doLogin',{phone:phone,password:pass});
            setItemAll('auto_login',true);
              Swal.fire(swalAnimation({title: " تم التسحيل بنجاح ",text:json.message,timer:6000,icon:'success'},showPointsPage)).then(function(a){
                showPointsPage();
            })
            AplusApi.newReq('auth_user',{}).then(function(ret){
                var json=ret[0];
                setItemAll('auth_user',json);
            })
        } else if (status==401){
             Swal.fire(swalAnimation({title: " خطاء في الرقم او كلمة السر ",text:JSON.stringify(json),timer:6000,icon:'error'}));
        } else if (status==404){
            Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json.error),timer:6000,icon:'error'}));
        } else if (status==403){
            Swal.fire(swalAnimation({title: "  رقم الهاتف غير موكد ",text:JSON.stringify(json.error),timer:6000,icon:'warning'}));
            phoneNumberNotVeryfy(phone,pass);
       } else if(json.errors){
            showMessegError(json.errors,'login');
        }else {
            Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json),timer:6000,icon:'error'}));
        }
    })
    return false;
})
signupForm&&signupForm.addEventListener('submit',function(e){
    try{ e&&e.preventDefault&&e.preventDefault();}catch(e){}
    var uName=signupForm.name.value;
    var phone=signupForm.phone.value;
    var pass=signupForm.password.value;
    var passC=signupForm.password_confirmation.value;
    sLoading(0);
    AplusApi.newReq('auth_register',{name:uName,phone:phone,password:pass,password_confirmation:passC}).then(function(ret){
        var json=ret[0];
        var status=ret[1];
        if(status==200){
            setItemAll('api_doLogin',{phone:phone,password:pass,name:uName})
            setItemAll('auto_login',true);
            phoneNumberNotVeryfy(phone,pass);      
            Swal.fire(swalAnimation({title: " تم التسحيل بنجاح ",text:json.message,timer:6000,icon:'success'},function(){
                showApp(null,null,'verify');
            })).then(function(a){
                showApp(null,null,'verify');
            })
        } else if(json.errors){
            showMessegError(json.errors,'signup')
        }else{
            Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json),timer:6000,icon:'error'}));
        }
    })
    return false;
})
verifyForm&&verifyForm.addEventListener('submit',function(e){
    try{ e&&e.preventDefault&&e.preventDefault();}catch(e){}
    var phone=verifyForm.phone.value;
    var pass=verifyForm.password.value;
    var code=verifyForm.code.value;
    sLoading(0);
    AplusApi.newReq('auth_verify',{phone:phone,password:pass,code:code}).then(function(ret){
        var json=ret[0];
        var status=ret[1];
        if (status==200){
            setItemAll('api_doLogin',{phone:phone,password:pass});
            Swal.fire(swalAnimation({title: " تم التسحيل بنجاح ",text:json.message,timer:6000,icon:'success'},showPointsPage)).then(function(a){
                showPointsPage();
            })
        }else if (status==422){
            Swal.fire(swalAnimation({title: "خطاء",text:json.error,timer:6000,icon:'error'}));

        } else{
            Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json),timer:6000,icon:'error'}));
        }
        showMessegError(json.errors,'verify')
    })
    return false;
})
setnameForm&&setnameForm.addEventListener('submit',function(e){
    try{ e&&e.preventDefault&&e.preventDefault();}catch(e){}
    var uName=setnameForm.name.value;
    var uEmail=setnameForm.email.value;
    var phone=setnameForm.phone.value;
    var pass=setnameForm.password.value;
    sLoading(0);
    aplusDoLoginApi(phone,pass).then(function(res){
    AplusApi.newReq('auth_update',{phone:phone,email:uEmail,name:uName}).then(function(ret){
        var json=ret[0];
        var status=ret[1];
        if (status==200){
            setItemAll('auth_update',json);
            setItemAll('api_doLogin',{phone:phone,password:pass});
            setItemAll('auto_login',true);
              Swal.fire(swalAnimation({title: " تم بنجاح ",text:json.message,timer:6000,icon:'success'})).then(function(a){
                showPointsPage();
            })
            if (json.user&&json.user.phone){
                setItemAll('auth_user',json.user);
            } else{
            AplusApi.newReq('auth_user',{}).then(function(ret){
                var json=ret[0];
                var status=ret[1];
                if (status==200){
                  setItemAll('auth_user',json);
                }
            })
        }
        } else if (status==401){
             Swal.fire(swalAnimation({title: " خطاء في الرقم او كلمة السر ",text:JSON.stringify(json),timer:6000,icon:'error'}));
        } else if (status==403){
            Swal.fire(swalAnimation({title: "  رقم الهاتف غير موكد ",text:JSON.stringify(json.error),timer:6000,icon:'warning'}));
            phoneNumberNotVeryfy(phone,pass);      
        } else if(json.errors){
            showMessegError(json.errors,'setname')
        }else {
            Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json),timer:6000,icon:'error'}));
        }
    })
})
    return false;
})
resetpasswordForm&&resetpasswordForm.addEventListener('submit',function(e){
    try{ e&&e.preventDefault&&e.preventDefault();}catch(e){}
    var phone=resetpasswordForm.phone.value;
    var current_password=resetpasswordForm.current_password.value;
    var pass=resetpasswordForm.password.value;
    var passc=resetpasswordForm.password_confirmation.value;
    sLoading(0);
    AplusApi.newReq('auth_password',{phone:phone,current_password:current_password,password:pass,password_confirmation:passc}).then(function(ret){
        var json=ret[0];
        var status=ret[1];
        sClows(6000)
        if (status==200){
            setItemAll('auth_password',json);
            setItemAll('api_doLogin',{phone:phone,password:pass});
            setItemAll('auto_login',true);
              Swal.fire(swalAnimation({title: " تم التسحيل بنجاح ",text:json.message,timer:6000,icon:'success'})).then(function(a){
                showPointsPage();
            })
            if (json.user&&json.user.phone){
                setItemAll('auth_user',json.user);

            } else{
            AplusApi.newReq('auth_user',{}).then(function(ret){
                var json=ret[0];
                var status=ret[1];
                if (status==200){
                  setItemAll('auth_user',json);
                }
            })
        }
        } else if (status==401){
             Swal.fire(swalAnimation({title: " خطاء في الرقم او كلمة السر ",text:JSON.stringify(json),timer:6000,icon:'error'}));
        } else if (status==403){
            Swal.fire(swalAnimation({title: "  رقم الهاتف غير موكد ",text:JSON.stringify(json.error),timer:6000,icon:'warning'}));
            phoneNumberNotVeryfy(phone,pass);      
        } else if(json.errors){
            showMessegError(json.errors,'resetpassword')
        }else {
            Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json),timer:6000,icon:'error'}));
        }
    })
    return false;
})
setpasswordForm&&setpasswordForm.addEventListener('submit',function(e){
    try{ e&&e.preventDefault&&e.preventDefault();}catch(e){}
    sLoading(0);
    var code=setpasswordForm.code.value;
    var phone=setpasswordForm.phone.value;
    var pass=setpasswordForm.password.value;
    var passC=setpasswordForm.password_confirmation.value;
    AplusApi.newReq('auth_reset',{phone:phone,code:code,password:pass,password_confirmation:passC}).then(function(ret){
        var json=ret[0];
        var status=ret[1];
        sClows(6000);
        if (status==200){
            setItemAll('auth_reset',json);
            setItemAll('api_doLogin',{phone:phone,password:pass});
            setItemAll('auto_login',true);
              Swal.fire(swalAnimation({title: " تم بنجاح ",text:json.message,timer:6000,icon:'success'})).then(function(a){
                showPointsPage();
            })
            if (json.user&&json.user.phone){
                setItemAll('auth_user',json.user);
            } else{
            AplusApi.newReq('auth_user',{}).then(function(ret){
                var json=ret[0];
                var status=ret[1];
                if (status==200){
                  setItemAll('auth_user',json);
                }
            })
          }
        } else if (status==401){
             Swal.fire(swalAnimation({title: " خطاء في الرقم او كلمة السر ",text:JSON.stringify(json),timer:6000,icon:'error'}));
        } else if (status==403){
            Swal.fire(swalAnimation({title: "  رقم الهاتف غير موكد ",text:JSON.stringify(json.error),timer:6000,icon:'warning'}));
            phoneNumberNotVeryfy(phone,pass);      
        } else if(json.errors){
            showMessegError(json.errors,'setpassword')
        } else{
            Swal.fire(swalAnimation({title: "خطاء",text:JSON.stringify(json),timer:6000,icon:'error'}));
        }
    })
    return false;
})
document.getElementById("aplusDologout")&&document.getElementById("aplusDologout").addEventListener("click",function(e){
    AplusApi.newReq('auth_logout',{}).then(function(ret){
        setItemAll('api_doLogin',{});
        setItemAll('auto_login',{});
    })
    showApp(null,null,'login');
})
function getSubStr(){ var a=arguments[0];var b=arguments.length>1?arguments[1]:0;var c=arguments.length>2?arguments[2]:null; if(typeof a!="string"){a="".concat(a);a=a.toString();}; if(String.prototype.hasOwnProperty&&String.prototype.hasOwnProperty('substr')){ if(c == null){ return a.substr(b); } return a.substr(b,b); }else if(String.prototype.hasOwnProperty&&String.prototype.hasOwnProperty('substring')){ if(c == null){ return a.substring(b); } return a.substring(b,b+c); } else { if(c == null){ return a.split('').slice(b).join(''); } return a.split('').slice(b,b+c).join(''); } } function getQueryObj(a) { var q = {}; if (typeof a!=="string"){a =window.location.search} if (a==null||a==""){return q}; var query=a; try{ if(a&&a.indexOf('?')>-1&&a.substring){query=a.substring(a.indexOf('?')+1);} else{ if(a&&a.indexOf('?')>-1&&a.substr){query=a.substr(a.indexOf('?')+1);}; } }catch(e){} var vars = query.split("&"); for (var i=0;i<vars.length;i++) { var pair = vars[i].split("="); if (pair[0]&&pair[0].indexOf('?')>-1){pair[0]=pair[0].substr(pair[0].indexOf('?')+1)}; if (typeof q[pair[0]] === "undefined") { q[pair[0]] = pair[1]; } else if (typeof q[pair[0]] === "string") { var arr = [ q[pair[0]], pair[1] ]; q[pair[0]] = arr; } else { q[pair[0]].push(pair[1]); } } return q; }
function MyURLSearchParams(data){
try{var ur=new URLSearchParams(data).toString();return ur}catch(e){};var ur="";if(typeof data=="object"){var uro=[];for(var n in data){var v=data[n];try{v=v.toString();}catch(e){v="".concat(v)};if (v&&v!=""){uro.push("".concat(encodeURIComponent(n),"=",encodeURIComponent(v)));}};if(uro.length>0){ur=uro.join('&')}}else{ur=encodeURIComponent(ur.concat(data))};return ur;};
function Aplus(configData) {
    var ConfigData=configData;
    var Api=configData.api;
    var Access_Tocken='';
    function _setAccess_token(a) {
        if(a&&a!=""){
            Access_Tocken = a;
            setItemAll('access_token',a);
        }
    };
    this.setAccess_token=_setAccess_token;
    this.retJson=function(e){
        if (e&&e.access_token&&e.access_token!="") {
            _setAccess_token(e.access_token);
        };
        return e
    }
    this.returnJsonFetch=function(res) {
        if(res){
            return res.json().then(function(a){
                if (a&&a.access_token&&a.access_token!="") {
                    _setAccess_token(a.access_token);
                };
                return [a,res.status]
            }).catch(function(e){return [{ status: 'error4', reply: e }, 'catch2']})
        } else{
            return [{ status: 'error1', reply: res }, 'catch2'];
        }
    };
    this.doPostReq = function (data, Surl) {
        var header = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        if (Access_Tocken != "") {
            header['Authorization'] = 'Bearer '.concat(Access_Tocken);
        }
        try{
        return fetch(Surl, {
            method: 'POST',
            headers: header,
            mode: 'cors',
            body: MyURLSearchParams(data)
        }).then(this.returnJsonFetch).catch(function(e){return [{ status: 'error2', reply: e }, 'catch1']});
    } catch(e){return new Promise(function(res){return res([e,'catch3'])});}
    };
    this.doGetReq = function (Surl) {
        var header = {};
        if (Access_Tocken != "") {
            header['Authorization'] = 'Bearer '.concat(Access_Tocken);
        };
        try{return fetch(Surl, { method: 'GET', headers: header, mode: 'cors' }).then(this.returnJsonFetch).catch(function(e){return [{ status: 'error3', reply: e }, 'catch1']});} catch(e){return new Promise(function(res){return res([e,'catch3'])});}
    };
    this.newReq = function (path, data) {
        var api = Api[path];
        if(typeof api == "undefined"||api==null){return new Promise(function(res){res(["no url called"+path,'error']);return ["no url called"+path,'error']})}
        var urL = ConfigData.urls[api.url] + api.path;
        if (window.location.protocol === 'https:' && api.url==="local") {
            urL = ConfigData.urls['global'] + api.path;
        };
        if (urL.indexOf('{') > -1) {
            for (var n in data) {
                if (urL.includes('{' + n + '}')) {
                    urL = urL.replace('{' + n + '}', data[n]);
                }
            }
        }
        if (api.method.toUpperCase() == 'POST') {
            return this.doPostReq(data, urL);
        } else {
            return this.doGetReq(urL);
        }
    };
    Object.defineProperty(this, '__esModule', { value: true });
};
var aplusDataRet={};
function aplusDoGetPointsApi(){
return aplusDoLoginApi(null).then(function(res){
if (res&&res!=null){
    var loginRes=res[0];
    var isLoggedIn=res[1];
    if (isLoggedIn){
   return AplusApi.newReq('points',{ }).then(function(ret){
        var json=ret[0];var status=ret[1];
        if (status==200){
            aplusDataRet['points']=json;
            return json;
        }
        return null;
    })
}}
return null;
})
}
function aplusDoGetpointsRechargeApi(us){
return aplusDoLoginApi(null).then(function(res){
    if (res&&res!=null){
    var loginRes=res[0];
    var isLoggedIn=res[1];
    if (isLoggedIn){
   return AplusApi.newReq('points_recharge',{card:us}).then(function(ret){
        if(ret&&ret!=null){
        var json=ret[0];var status=ret[1];
        if (status==200){
            aplusDataRet['points_recharge']=json;
            getItemAll('points_recharge',null).then(function(a){
                if (typeof a != "object" || a==null){a={}};
                if (typeof a[us] != "object"){
                    var o={},j=0;for(var i in a){if(a[i]&&a[i]['_T']&&getTimeNow(0)<(a[i]['_T'] + 7*24*60*60*1000)&&j<6){o[i]=a[i];j=j+1}};
                    o[us]={};
                    o[us]["ret"]=ret||{};
                    o[us]["_T"]=getTimeNow(0);
                    setItemAll('points_recharge',o);
                }
            });
            return ret;
        }}
        return ret;
    })
}}
return null;
})
}
function aplusDoGetUserDataApi(){
return aplusDoLoginApi(null).then(function(res){
if (res&&res!=null){
    var loginRes=res[0];
    var isLoggedIn=res[1];
    if (isLoggedIn){
   return AplusApi.newReq('auth_user',{ }).then(function(ret){
        var json=ret[0];var status=ret[1];
        if (status==200){
            aplusDataRet['auth_user']=json;
            return json;
        }
        return null;
    })
}}
return null;
})
}
function aplusDoLoginApi(pho,pass){
if(pho==null){if(aplusDataRet['api_doLogin']&&aplusDataRet['api_doLogin'].phone){pho= aplusDataRet['api_doLogin'].phone;pass= aplusDataRet['api_doLogin'].password;} else{return  getItemAll('api_doLogin',null).then(function(a){if (a&&a!=null&&a.phone&&a.password){pho=a.phone;pass=a.password;aplusDataRet['api_doLogin']=a;aplusDataRet['hasAcounte']=true;return aplusDoLoginApi(pho,pass);};return null})}} 
if(aplusDataRet['isLoggedIn']&&aplusDataRet['auth_login'].ts&&aplusDataRet['auth_login'].ts<getTimeNow(-30000)){
return new Promise(function(res){res([aplusDataRet['auth_login'],true]);return [aplusDataRet['auth_login'],true];})
}
return AplusApi.newReq('auth_login',{phone:pho,password:pass}).then(function(res){
    if(res&&res[0]){
        var json=res[0];var status=res[1];
        if(status==200){
            aplusDataRet['auth_login']=json;
            aplusDataRet['auth_login'].ts=getTimeNow(0);
            aplusDataRet['hasAcounte']=true;
            aplusDataRet['isLoggedIn']=true;
            return [json,true];
        } else{
            aplusDataRet['isLoggedIn']=false;
            return [json,false];
        }
    }
    return [res||null,false];
});
}
function showOnhtmlStartMesg(usName){
    if(window.location.pathname.includes('index')){
return aplusDoGetPointsApi().then(function(points){
        var msg= " مرحبا "+usName+" ";
        var msgt= " ";
        if(points&&typeof points.remaining_points !="undefined"){
            msgt=msgt.concat(" النقاط الحالية "+ points.remaining_points );
        }
        Toast.fire(swalAnimation({title:msg,text:msgt}));
    });
}
}
function Toast(){};
function aplusConfigLoaded(jsonConfigAplus){
try {if(typeof Swal==="undefined"){loadScript('aplus.swal.js',function(){},function(){});}else{Swal.fire(' ');Swal.showLoading();Swal.close()}} catch(e){loadScript('aplus.swal.js',function(){},function(){});};
try{
Toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    position: "top-end",
    timer: 2000,
    didOpen:function (toast){
    }
});
}catch(e){};
setTimeout(function() {
getItemAll('access_token','').then(function(e){
AplusApi.setAccess_token(e);
getItemAll('api_doLogin',null).then(function(a){
getItemAll('StartMesg',1).then(function(m){
aplusDataRet['api_doLogin']=a;
var path=window.location.pathname||"";m=m?m:1;
if (a&&a!=null&&a.phone){
  var phones=document.querySelectorAll('input[name=phone]');
  if(!path.includes('index')&&phones){
    phones&&phones.forEach(function(el){el.value=a.phone});
  }
  aplusDoLoginApi().then(function(ret){
      if(ret){
        var json=ret[0];var isLoggedIn=ret[1];
        if (isLoggedIn){
            if(!path.includes('index')&&typeof showPointsPage == "function"){
              showPointsPage()
            };
            setItemAll('auth_login',json);
            if (json.user&&json.user.name){
                setItemAll('auth_user',json.user);
                showOnhtmlStartMesg(json.user.name);
            } else{
            aplusDoGetUserDataApi().then(function(json){
                if (json&&json.name){
                    showOnhtmlStartMesg(json.name);
                    setItemAll('auth_user',json);

                }
            })
          }
        } else{
          if(path.includes('index')&&m>getTimeNow(0)){
            setItemAll('StartMesg',getTimeNow(120000));
            setTimeout(function(){
                if(jsonConfig&&jsonConfig.login&&jsonConfig.login&&jsonConfig.login.points){
                    Toast.fire(swalAnimation({ title: " عزيزي العميل ", text: " انت حاليا غير مسجل في حساب أي بلاس  قم بالتسجيل قبل ادخال الكرت للحصول على نقاط", timer: 7000,icon:"question"}));
                }
            }, 8000);
          }
        }
}})
} else{
  if(path.includes('index')&&m>getTimeNow(0)){
    setItemAll('StartMesg',getTimeNow(120000));
    setTimeout(function(){
        if(jsonConfig&&jsonConfig.login&&jsonConfig.login&&jsonConfig.login.points){
            Toast.fire(swalAnimation({ title: " عزيزي العميل ", text: " انت حاليا غير مسجل في حساب أي بلاس  قم بالتسجيل قبل ادخال الكرت للحصول على نقاط", timer: 7000,icon:"question"}));
        }
    }, 8000);
  }
}})})});
if(!window.location.href.includes('index')){
configInitFun(jsonConfigAplus);
}
}, 150);
}
try {loadScript('aplus.config.js',function(){},function(){});} catch(e){};
setTimeout(function(){
getItemAll('speed_check',false).then(function(upd){
    if(upd&&upd!='false'){var j=0;for(var n in upd){if(j<10){speed_check[n]=upd[n];j++}}}
    getItemAll('speed_change',false).then(function(upd){
        if(upd&&upd!='false'){var j=0;for(var n in upd){if(j<10){speed_change[n]=upd[n];j++}}}
    });
});
}, 500);