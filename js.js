let btnLog = document.querySelector(".login-text");
let login = document.querySelector(".box2");
let signup = document.querySelector(".box1");
let forgotPass = document.querySelector(".box3");
let btnsign = document.querySelector(".signinlog");
let btnforgot = document.querySelector(".passforgot");
let btnForgotLogin = document.querySelector(".goLogin");
let btnForgotSignup = document.querySelector(".goSignup");

btnLog.addEventListener('click', function () {
    login.style.display = "block";
    signup.style.display = "none";
    forgotPass.style.display = "none";
    btnsign.style.fontSize = .9 + "rem";
})

btnsign.addEventListener('click', function () {
    login.style.display = "none";
    signup.style.display = "block";
    forgotPass.style.display = "none";
})

btnforgot.addEventListener('click', function() {
    login.style.display = "none";
    signup.style.display = "none";
    forgotPass.style.display = "block";
})

btnForgotLogin.addEventListener('click', function() {
    login.style.display = "block";
    signup.style.display = "none";
    forgotPass.style.display = "none";
})

btnForgotSignup.addEventListener('click', function() {
    login.style.display = "none";
    signup.style.display = "block";
    forgotPass.style.display = "none";
})

function check() {
    const user = document.querySelector(".inp-1").value;
    const email = document.querySelector(".inp-2").value;
    const pass = document.querySelector(".inp-3").value;

    let p1 = document.querySelector(".m1");
    let p2 = document.querySelector(".m2");
    let p3 = document.querySelector(".m3");

    //  check username
    if (user == "" && email == "" && pass == "") {
        p1.innerHTML = "Username cannot be empty !";
        p1.style.color = "darkred";
        p2.innerHTML = "email cannot be empty !";
        p2.style.color = "darkred";
        p3.innerHTML = "password cannot be empty !";
        p3.style.color = "darkred";

        return false;
    }
    else {
        p1.innerHTML = "is valid.";
        p1.style.color = "green";
    }
    // end check username
    // check email
    if (email == "" && pass == "") {
        p2.innerHTML = "email cannot be empty !";
        p2.style.color = "darkred";
        p3.innerHTML = "password cannot be empty !";
        p3.style.color = "darkred";

        return false;
    }
    else {
        p2.innerHTML = "is valid.";
        p2.style.color = "green";
    }
    // end check email
    // check password
    if (pass == "") {
        p3.innerHTML = "please enter your password !";
        p3.style.color = "darkred";

        return false;
    } else if (isNaN(pass)) {
        p3.innerHTML = "password canbe only numbers.";
        p3.style.color = "darkred";

        return false;

    } else if (pass.length < 5 || pass.length > 15) {
        p3.innerHTML = "Password must be between 5 and 14 characters.";
        p3.style.color = "darkred";
        p3.style.fontSize = .58 + "rem";

        return false;
    }
    else {
        p3.innerHTML = "is valid.";
        p3.style.color = "green";

        return true;
    }
    // end check password
}

function checkLogin() {
    const emailLog = document.querySelector(".inplog-1").value;
    const passLog = document.querySelector(".inplog-2").value;

    let p1 = document.querySelector(".mlog1");
    let p2 = document.querySelector(".mlog2");

    //  check email
    if (emailLog == "" && passLog == "") {
        p1.innerHTML = "email cannot be empty !";
        p1.style.color = "darkred";
        p2.innerHTML = "password cannot be empty !";
        p2.style.color = "darkred";

        return false;
    }
    else {
        p1.innerHTML = "is valid.";
        p1.style.color = "green";
    }
    // end check email
    // check password
    if (passLog == "") {
        p2.innerHTML = "please enter your password !";
        p2.style.color = "darkred";

        return false;
    } else if (isNaN(passLog)) {
        p2.innerHTML = "password canbe only numbers.";
        p2.style.color = "darkred";

        return false;
    } else {
        p2.innerHTML = "is valid.";
        p2.style.color = "green";

        return true;
    }
    // end check password
}

function forgot() {
    const input = document.querySelector(".inpforgot").value;

    let message = document.querySelector(".mforgot");

    if(input == ""){
        message.innerHTML = "email cannot be empty !";
        message.style.color = "darkred";
        
        return false;
    }
    else{
        message.innerHTML = "is valid.";
        message.style.color = "green";
    }
}