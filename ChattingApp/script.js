
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDtxx6DfOSPIsmHr5vhb3Ge5_Fz2a81Ygw",
authDomain: "chatapp-d1fe1.firebaseapp.com",
databaseURL: "https://chatapp-d1fe1-default-rtdb.firebaseio.com",
projectId: "chatapp-d1fe1",
storageBucket: "chatapp-d1fe1.appspot.com",
messagingSenderId: "64022668825",
appId: "1:64022668825:web:70f529f62e52de8a886c88",
measurementId: "G-NK62812T1Y"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();


function createAccount(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // var cPass = document.getElementById("c_password").value;
    var btn = document.getElementById("btn");
    btn.innerHTML = `<i class="fa-solid fa-spinner"></i> <br /><small>Please wait..!</small>`;


    auth.createUserWithEmailAndPassword(email, password)

    .then(function(userCredentials){

        alert("account has been created👍");
        btn.innerHTML = "account created";

    })
    .catch(function(error){
        alert("something went wrong please try again later..!")
        btn.innerHTML = "error";
    })

}