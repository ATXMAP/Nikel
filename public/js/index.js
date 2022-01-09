const mymodal = new bootstrap.Modal( "#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checklogge();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e) {
e.preventDefault();

const email = document.getElementById("email-input").value;
const Password = document.getElementById("Password-input").value;
const checksession =  document.getElementById("session-check").checked;

const account = getAccount(email);

if(!account) {
   alert("verefique o usuario ou senha.");
   return;
}

if(account) {
    if(account.Password !== Password) {
        alert("verefique o usuario ou senha.");
   return;

    }

    saveSession (email, checksession);
    
    window.location.href = "home.html";
}

});

// CRIAR CONTA
document.getElementById("creat-form").addEventListener("submit", function(e) {
    e.preventDefault();

   const email = document.getElementById("email-creat-input").value;
   const Password = document.getElementById("Password-creat-input").value;

   if(email.length < 5) {
       alert("preencha o campo com email valido.");
       return;
   }

   if(Password.length <4) {
       alert("Preencha a senha com no minimo 4 digitos");
       return
   }
   
   saveAccount({
       login: email,
       Password: Password,
       transactions: [] 
   })
    
   mymodal.hide();

   alert("Conta criada com sucesso.");
});

function checklogge() {
    if(session) {
        sessionStorage.setItem("logged",session); 
        logged = session; 
    }

    if(logged) {
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}


function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
    if(saveSession) {
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged",data);
}

function getAccount(key) {
    const account = localStorage.getItem(key);

    if(account) {
        return JSON.parse(account);
    }

    return"";
}

