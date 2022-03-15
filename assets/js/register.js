import {getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";

import app from './config.js';

const database=getDatabase(app);
const auth=getAuth();

const btnReg=document.getElementById("regBtn");

btnReg.addEventListener("click", e=>{
    const addUserInputUI=document.getElementsByClassName("user-input");
    //kreiranje objekta za smestanje podataka o korisniku
    let newUser={};
    //proveravamo da li su input polja prazna
    if(
    addUserInputUI[0].value==null||addUserInputUI[0]==''||
    addUserInputUI[1].value==null||addUserInputUI[1]==''||
    addUserInputUI[2].value==null||addUserInputUI[2]==''||
    addUserInputUI[3].value==null||addUserInputUI[3]==''||
    addUserInputUI[4].value==null||addUserInputUI[4]==''||
    addUserInputUI[5].value==null||addUserInputUI[5]==''||
    addUserInputUI[6].value==null||addUserInputUI[6]==''||
    addUserInputUI[7].value==null||addUserInputUI[7]==''||
    addUserInputUI[8].value==null||addUserInputUI[8]==''||
    addUserInputUI[9].value==null||addUserInputUI[9]==''||
    addUserInputUI[10].value==null||addUserInputUI[10]==''

    ){
        return false;
    }
    else{
     for(let i=0; i<addUserInputUI.length; i++){
         let keyData=addUserInputUI[i].getAttribute("data-key");
         let value=addUserInputUI[i].value;
         newUser[keyData]=value;
     }
     //dve bitne vrednosti iz inputa za autentifikaciju
     let email=document.getElementById("email").value;
     let password=document.getElementById("password").value;
     
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential)=>{
         const user =userCredential.user;

         set(ref(database, 'Customers/'+user.uid), newUser);
         setTimeout(()=>{
             window.location='login.html';
         },1000);
     })
     .catch((error)=>{
         const errorCode=error.code;
         const errorMessage=error.message;
         alert(errorMessage);
     });
    }

})