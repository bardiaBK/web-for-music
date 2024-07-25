  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
  import {getFirestore, setDoc, doc} from  "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCCQIUSdvpv3k9eg8Jfyg9tXtyI3-ZHPIo",
    authDomain: "sign-up-form-a1add.firebaseapp.com",
    projectId: "sign-up-form-a1add",
    storageBucket: "sign-up-form-a1add.appspot.com",
    messagingSenderId: "190736349886",
    appId: "1:190736349886:web:b14152836847214417fcef"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
  }
  const signUp=document.getElementById('submitSignUp')
  signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const confirmPassword=document.getElementById('rConfirmPassword').value;

    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userdata={
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        showMessage('Account Created Successfuly', 'signUpMessage');
        const docRef=doc(db, "users", user.uid);
        setDoc(docRef,userdata)
        .then(()=>{
            window.location.href='Buy Beats.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);
        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email Address Already Exists !!!', 'signUpMessage');
        }
        else{
            showMessage('unable to create User', 'signUpMessage');
        }
    })
  });

