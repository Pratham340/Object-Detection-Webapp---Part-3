  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDH52VtRqVIB7DqbUTGcnnPuIN5m4l3Sws",
    authDomain: "sign-in-sign-up-5c98d.firebaseapp.com",
    databaseURL: "https://sign-in-sign-up-5c98d-default-rtdb.firebaseio.com",
    projectId: "sign-in-sign-up-5c98d",
    storageBucket: "sign-in-sign-up-5c98d.appspot.com",
    messagingSenderId: "593320296786",
    appId: "1:593320296786:web:b2955e74b1fc9d95a5ba8b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
        const auth = firebase.auth();
        
        
        function signUp(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            alert("Signed Up");
        }
        
        
        
        function signIn(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.signInWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            
        }
        
        
        function signOut(){
            
            auth.signOut();
            alert("Signed Out");
            
        }
        
        
        
        auth.onAuthStateChanged(function(user){
            
            if(user){
                
                var email = user.email;
                alert("Welcome: " + email+"!");
                
                //Take user to a different or home page
                window.location ="index.html";
                //is signed in
                
            }else{
                
                alert("You Are Not Signed In!");
                //no user is signed in
            }
            
            
            
        });
        function addUser(){
            email1 = document.getElementById("email1").value;
            localStorage.setItem("email1", email1);
        }