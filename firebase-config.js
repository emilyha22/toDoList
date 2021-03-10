// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB3wCp5HdEGgAsJGBlSWzGioLlh32nv4gE",
    authDomain: "to-do-list-356e6.firebaseapp.com",
    projectId: "to-do-list-356e6",
    storageBucket: "to-do-list-356e6.appspot.com",
    messagingSenderId: "1082345589771",
    appId: "1:1082345589771:web:0d391073b650420d34cb0e",
    measurementId: "G-D35J4TMDCY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var db = firebase.firestore();
