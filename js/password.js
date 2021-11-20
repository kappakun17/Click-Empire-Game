

let passwordEye = document.getElementById("password-eye");
let iconEye = document.getElementById("icon-eye")
let password = document.getElementById("password")

// passwordEye.addEventListener("click",function(){
//     let eye = passwordEye.getAttribute("eye");
//     console.log(eye)
//     if(eye === 0){
//         passwordEye.innerHTML = `<i class="fas fa-eye-slash"></i>`
//         password.type = "password";
//         passwordEye.setAttribute("eye","1");
//     }else if(eye === 1){
//         passwordEye.innerHTML = `<i class="fas fa-eye"></i>;`
//         password.type = "text";
//         passwordEye.setAttribute("eye","0");

//     }
// })

passwordEye.addEventListener("click",function(){
    let eye = passwordEye.getAttribute("eye");
    if("1" === eye){
        password.type = "text";
        passwordEye.setAttribute("eye","0")
        iconEye.classList.remove("fa-eye-slash")
        iconEye.classList.add("fa-eye")
    }else{
        password.type = "password";
        passwordEye.setAttribute("eye","1")
        iconEye.classList.add("fa-eye-slash")
        iconEye.classList.remove("fa-eye")
    }
    
});

// function togglePassword(){
    
//     let password = document.getElementById("password")
//     password.type = "text";
//     passwordEye.innerHTML = `<i class="fas fa-eye"></i>;`
// }

