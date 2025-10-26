var jsonConfig={
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
  "about":{
    "btn":{
          "text":"772882778",
          "body":"المزيد",
          "title":"للتواصل"
    },
    "content":[
      {"title":"الادارة","body":"772882778","href":{"action":"https://wa.me/967772882778","text":"وتساب"}},
      {"title":"الصيانة","body":"772882778","href":{"action":"https://wa.me/967772882778","text":"وتساب"}},
      {"title":"الكروت","body":"772882778","href":{"action":"https://wa.me/967772882778","text":"وتساب"}},
    ],
    "title":"عن الشبكة",
  },
  "apps":{
    "status":{
      "title":"صفحة المعلومات ",
	  "btns":[{"action":"window.location='/aplus.html'","text":"تسجيل بحساب  اي بلاس"}]
    },
    "prices":{
      "content":[ 
          {"title": "200 ريال","body":["9 ساعات","650  ميجا","يومين"]},
          {"title": "500 ريال","body":["20 ساعة","1600 ميجا","5 أيام"]},
          {"title": "1000 ريال","body":["مفتوح","3400 ميجا","10 أيام"]},
          {"title": "1500 ريال","body":["مفتوح","4500 ميجا","30 يوم"]},
          {"title": "5000 ريال","body":["مفتوح","16 جيجا","30 يوم"]},
		  {"title": "10000 ريال","body":["مفتوح","35 جيجا","30 يوم"]},
          {"title": "عرض خاص 15000 ريال","body":["مفتوح","60 جيجا","60 يوم"]},

      ],
      "title":"أسعار الكروت",
  },
  "markets":{
    "content":[

            {"title":" جميع البقالات المحيطة بالشبكة    "},
        ],
    "title":"نقاط البيع",
  },
},
        "newsline":["...::: ⚡ مرحباً بكم في شبكة لبيب نت ! 🚀 🌟 :::... اخي لا تستخدم الانترنت الا فيما يرضي الله"],
  "sliders":[
       //  {"src":"sliders/3.jpg","type":"img","text":"يوجد خدمة توصيل انترنت الى المنازل"},

  ],
  "paw": {
          "title": "استخدام تطبيق الشبكة؟",
          "body": " يمكنك الحصول على مميزات عند فتح التطبيق مثل تسجيل الدخول التلقائي متابعة استهلاك الرصيد اول باول و الحصول على تنبيهات عند اقتراب انتهاء الرصيد وغيرة من المزايا للتفاصيل اكثر قم بزيارة صفحة الخدمات"
    },
  "login": {
      "newsline": {
            "text":  "قم بانشاء حساب في أبلس واكسب نقاط واستبدلها بكروت",
            "color": "#d91048"
      },
      "username": {
          "type": "tel",
          "only_numbers": 1,
          "upper_to_lower": 1,
          "only_alpha": 1,
          "rep_arabic_numbers": 1
        },
        "password": {
          "type": "hidden",
          "only_numbers": 0,
          "upper_to_lower": 1,
          "only_alpha": 1,
          "rep_arabic_numbers": 1
      },
      "domain":{
        "rad":"",
      },
      "points":1,
      "dayes":0,
      "adv":['adv/1.jpg','adv/2.jpg','adv/3.jpg','adv/3.jpg','adv/1.jpg','adv/2.jpg','adv/2.jpg','adv/3.jpg'],
    },
    "mobasher":"http://10.10.10.10:3333/",
    "estrahah":"http://10.10.10.10:81/web/#/splash",
    "extra":{
      "izq":"",
      "tawk":"",
  },
  "block":{
    "block":1,
    "time": 4,
    "count": 10,
    "warn": 5,  
    "message":"<div><br /><br /><br /><h4>تحذير !! عدد محاولاتك الخاطئة اصبح {{na}} محاولاتك</h4><h4>اذا تجاوزت العدد المسموح للمحاولات {{count}} سيتم حظرك لمدة {{time}} دقائق</h4></div>"
  },
  "hjri":0,  
  "colors":[
    {"id":"th0","color":"#660521",'--color-a':'#039b7a'},
    {"id":"th1","color":"#f57205",'--color-a':'#fb8d32'},
    {"id":"th2","color":"#ECC94B",'--color-a':'#0c7e78'},
    {"id":"th3","color":"#179848",'--color-a':'#3182ce'},
    {"id":"th4","color":"#2b6cb0",'--color-a':'#0d755f'},
    {"id":"th5","color":"#6b46c1",'--color-a':'#c37e37'},
  ],
  'css':'.im2::before,.im1::before{ content: "سرعة في النت" ; } .im3::before,.im4::before{ content: "وقت أستخدام أطول"; } .im5::before,.im6::before{ content: "سرعة في النت"; } .im7::before,.im8::before{ content: "رصيد انترنت اكثر"; }',
  'funcs':[],
};
try {configInitFun(jsonConfig)} catch (e) {};
try {initForm(jsonConfig)} catch (e) {};
try {initCss(jsonConfig)} catch (e) {};
try {setTimeout(autoLogin,1900,jsonConfig);} catch (e) {};
if(jsonConfig.funcs&&jsonConfig.funcs.length){for(var i in jsonConfig.funcs){var fun =jsonConfig.funcs[i];var funname='';var funpars=[];if(typeof fun == "object"){funpars=fun.slice(1);funname=fun[0]} else{funname=fun;};if(window[funname])window[funname](jsonConfig,funpars)}}

document.getElementById('speed_select_dev').style.visibility='hidden';
document.getElementById('speed_select_dev').style.position='absolute';
document.getElementById('speed_select').removeAttribute('required');
document.getElementById('speed_select').style.visibility='hidden';
// document.getElementById('tospeeds').style.visibility='hidden';

