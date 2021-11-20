

const jp = {
    "login_message": "Click Empire Gameへようこそ",
    "login_username": "アカウント名",
    "login_password": "パスワード",
    "login_register": "新規登録",
    "login_login" : "ログイン"
}

const us = {
    "login_message": "Welcome to Click Empire Game",
    "login_username": "Username",
    "login_password": "Password",
    "login_register": "REGISTER",
    "login_login" : "LOG IN",
}

let loginPage_lang = document.querySelectorAll(".lang");



const usButton = document.getElementById("us");
const jpButton = document.getElementById("jp")



usButton.addEventListener("click",function(){
    translate(us);
})

jpButton.addEventListener("click",function(){
    translate(jp);
})


function translate(lang){
    console.log(lang.login_message);
    loginPage_lang[0].innerHTML =　lang.login_message ;
    loginPage_lang[1].placeholder = lang.login_username;
    loginPage_lang[2].placeholder = lang.login_password;
    loginPage_lang[3].innerHTML = lang.login_register;
    loginPage_lang[4].innerHTML = lang.login_login;
}