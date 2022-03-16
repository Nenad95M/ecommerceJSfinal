//importujemo funkcije sa firebasa
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
//importujemo app sa konfiguracije
import app from "./config.js";
const auth=getAuth();

//pristupamo login dugmetu
const btnLogin=document.getElementById('loginBtn');

//dodajemo login dugmetu osluskivac dogadjaja
btnLogin.addEventListener('click', e=>{
    //uzimamo mejl i password
let email=document.getElementById('email').value;
let password=document.getElementById('pass').value;

//firebase funkcija za logovanje sa mejlom i sifrom
signInWithEmailAndPassword(auth, email, password)
.then((userCredential)=>{
    const user=userCredential.user;
    //smestamo u informacije u sesiju
    sessionStorage.setItem('keyUsername', email);
    sessionStorage.setItem('keyPassword', password);
    sessionStorage.setItem('daLiJeAktivnaSesija', true);
    location.href="index.html";


})
.catch((error)=>{
    const errorCode=error.code;
    const errorMessage=error.message;
    //ajax tekst
    $("#messageError").text("Niste uneli adekvatne podatke za username i password");
    alert(errorMessage);
})
})

onAuthStateChanged(auth, (user)=>{
    if(user){
        const uid=user.uid;
        console.log(user)
    }
    else{
        console.log('User is signed out');
    }
})
