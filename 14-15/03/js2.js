



function get_result(){
console.log("S, R, K");
let S = parseInt(elementS.value);
let R = parseInt(elementR.value);
let K = parseInt(elementK.value);
console.log(S, R, K)

let a = Math.sqrt(S);

let valid, notValid;
if (a>= 2*(R+K) && R>0) {R=valid}
else {R=notValid}

if ((a - 2*R) >=K ) {
    result = "Да, можно";
    check= true;
}
 
else{
    result = "Нет, нельзя";
    check= false;
}


function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}


}


let result;
let check;

let elementS = document.getElementById("S");
let elementR = document.getElementById("R");
let elementK = document.getElementById("K");

let verify = document.getElementById("verify");
console.log(verify.value)
verify.addEventListener('click', get_result)