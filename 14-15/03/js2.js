function get_result(){
    console.log("S, R, K");
    let S = parseInt(elementS.value);
    let R = parseInt(elementR.value);
    let K = parseInt(elementK.value);
    console.log(S, R, K);

    let side = Math.sqrt(S); 
    

    let canFit = (2 * R + 2 * K) <= side;
    
    if (canFit) {
        result = "Да, можно";
        check = true;
    } else {
        result = "Нет, нельзя";
        check = false;
    }

    document.getElementById("result").value = result;
}

function send() {
    if (check === true) { 
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод");
    }
}

let result;
let check;

let elementS = document.getElementById("S");
let elementR = document.getElementById("R");
let elementK = document.getElementById("K");

let verify = document.getElementById("verify");
verify.addEventListener('click', get_result);

const sendbtn = document.getElementById('send');
sendbtn.addEventListener('click', send);