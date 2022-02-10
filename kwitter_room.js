
 const firebaseConfig = {
      apiKey: "AIzaSyDfMnkZJc1mFk2gxJexbwndGm81YgLwasY",
      authDomain: "kwitter-336a7.firebaseapp.com",
      databaseURL: "https://kwitter-336a7-default-rtdb.firebaseio.com",
      projectId: "kwitter-336a7",
      storageBucket: "kwitter-336a7.appspot.com",
      messagingSenderId: "586397980714",
      appId: "1:586397980714:web:a942e4909e715096aa4b53"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
