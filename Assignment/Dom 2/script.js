let userDetails = document.getElementsByClassName('form-control');
// console.log(userDetails);
let arr = Array.from(userDetails);
console.log(arr);

arr.forEach((ele)=>{
    let labelDetail = document.createElement('label');
    labelDetail.setAttribute("for", ele.id);
    labelDetail.textContent = `${ele.id}`;
    ele.setAttribute("required","true");
    ele.parentNode.insertBefore(labelDetail, ele);
})

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let btn = document.querySelector(".btn");

btn.addEventListener("click",passCheck);
confirmPassword.addEventListener("click",dis);

function dis(){
    btn.disabled = false;
}


function passCheck(){
    if (password.value !== confirmPassword.value) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
        console.log("Correct");
    }
}