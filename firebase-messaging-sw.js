const CACHE_VERSION = 0;
const CACHE_NAME = 'Cache_Files'.concat('-v',CACHE_VERSION);
const myAppUrl='https://1sh.org/';
const FILES_TO_CACHE = [
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js', 
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js', 
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-database-compat.js', 
];
self.addEventListener('install', function(event){
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache){
          console.log('Caching files...');
          return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});
importScripts('https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js');
const firebaseConfig = {
  apiKey: "AIzaSyB1SPVgvB8oJvZqJPJNiS5FH70fIcjJjvU",
  authDomain: "speed-network-app.firebaseapp.com",
  projectId: "speed-network-app",
  storageBucket: "speed-network-app.firebasestorage.app",
  messagingSenderId: "81181497379",
  databaseURL: "https://speed-network-app-default-rtdb.europe-west1.firebasedatabase.app",
  appId: "1:81181497379:web:f4314a7a30eeed44a87996",
  measurementId: "G-TE0CVFL8PN"
};
const CLIENT_ID ='81181497379-28qi6uj6nf9obq38kabvuo11gmv4alc1.apps.googleusercontent.com';
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onMessage(function(payload){
    console.log(' fbsw messaging = Message received', payload);
    // const notificationTitle = 'Background Message Title';
    // const notificationOptions = {
    //     body: 'شبكة  نت',
    //     icon: myAppUrl+'favicon.svg.txt?var=96&dst=96',
    //     image: myAppUrl+'img/status',
    //   };  
    //   self.registration.showNotification(notificationTitle, notificationOptions);  
    
});
messaging.onBackgroundMessage(function(payload){
console.log(' fbsw onBackgroundMessage = Message received ', payload);
  // const notificationTitle = 'Background Message Title';
  // const notificationOptions = {
  //   body: 'شبكة  نت',
  //   icon: myAppUrl+'favicon.svg.txt?var=96&dst=96',
  //   image: myAppUrl+'img/status',
  // };  
  // self.registration.showNotification(notificationTitle, notificationOptions);  
});
  