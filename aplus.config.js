var jsonConfigAplus={
"network": {
    "nameP": "شبكة",
    "name": "لبيب نت",
    "nameS": "اللاسلكيه",
    "phone": "772882778",
    "login_password": "empty",
    "host": "labibnet.1sh.org",
    "dom": "1sh.org",
    "https": 1
},
"urls":{
  "local":"http://192.168.132.2",
  "global":"https://labib-client.apluswifi.com"
},
"api":{
  "auth_register":{"url":"global","method":"POST","path":"/api/v1/auth/register"},
  "auth_verify":{"url":"global","method":"POST","path":"/api/v1/auth/verify"},
  "auth_login":{"url":"global","method":"POST","path":"/api/v1/auth/login"},
  "auth_logout":{"url":"global","method":"POST","path":"/api/v1/auth/logout"},
  "auth_reset":{"url":"global","method":"POST","path":"/api/v1/auth/reset"},
  "auth_user":{"url":"global","method":"GET","path":"/api/v1/auth/user"},
  "auth_forgot":{"url":"global","method":"POST","path":"/api/v1/auth/forgot"},
  "auth_update":{"url":"global","method":"POST","path":"/api/v1/auth/user"},
  "auth_resend":{"url":"global","method":"POST","path":"/api/v1/auth/resend"},
  "auth_password":{"url":"global","method":"POST","path":"/api/v1/auth/password"},

  "speed_check":{"url":"global","method":"GET","path":"/api/v1/speed/check/{username}?ip={ip}&mac={mac}"},
  "speed_change":{"url":"global","method":"GET","path":"/api/v1/speed/change/{username}?rate={rate}"},
  "status_dayes":{"url":"global","method":"GET","path":"/api/v1/status/{username}?ip={ip}&mac={mac}"},

  "group_check":{"url":"global","method":"GET","path":"/api/v1/group/check"},
  "groups_get":{"url":"global","method":"GET","path":"/api/v1/group/get_groups/{username}"},
  "group_set":{"url":"global","method":"GET","path":"/api/v1/group/set_group/{username}/{group_id}"},


  "points":{"url":"global","method":"GET","path":"/api/v1/points"},
  "points_redeemed":{"url":"global","method":"POST","path":"/api/v1/points/redeemed"},
  "points_movements":{"url":"global","method":"GET","path":"/api/v1/points/movements"},
  "points_recharge":{"url":"global","method":"POST","path":"/api/v1/recharge"}

},
"paw": {
  "title": "استخدام تطبيق الشبكة؟",
  "body": " يمكنك الحصول على مميزات عند فتح التطبيق مثل تسجيل الدخول التلقائي متابعة استهلاك الرصيد اول باول و الحصول على تنبيهات عند اقتراب انتهاء الرصيد وغيرة من المزايا للتفاصيل اكثر قم بزيارة صفحة الخدمات"
},
"about":{
  "btn":{
        "text":"774490280",
        "body":"المزيد",
        "title":"للتواصل"
  },
  "content":[
    {"title":"الحصول على نقاط","body":["عند استخدام كرت جديد"]},
    {"title":"الحصول على نقاط","body":["عند المشاركة في المسابقات"]},
  ],
  "title":"مميزات وخدمات أبلس",
},
"colors":[
  {"id":"th0","color":"#660521",'--color-a':'#039b7a'},
  {"id":"th1","color":"#f57205",'--color-a':'#82039b'},
  {"id":"th2","color":"#ECC94B",'--color-a':'#0c7e78'},
  {"id":"th3","color":"#179848",'--color-a':'#5331ce'},
  {"id":"th4","color":"#2b6cb0",'--color-a':'#1fb789'},
  {"id":"th5","color":"#6b46c1",'--color-a':'#c37e37'},
  {"id":"th6","color":"#000000",'--color-a':'#6b46c1'},
  {"id":"th7","color":"#2c5282",'--color-a':'#3182ce'},
]
};
var AplusApi= new Aplus(jsonConfigAplus);
aplusConfigLoaded(jsonConfigAplus);
