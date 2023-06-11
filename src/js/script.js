let registerBtn = document.querySelector('.formulaire .register-btn');
let loginBtn = document.querySelector('.formulaire .login-btn');
registerBtn.onclick = () =>{
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.formulaire .login-form').classList.remove('active');
    document.querySelector('.formulaire .register-form').classList.add('active');

};
loginBtn.onclick = () =>{
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.formulaire .login-form').classList.add('active');
    document.querySelector('.formulaire .register-form').classList.remove('active');

};
let accountForm = document.querySelector('.formulaire');
document.querySelector('#user-btn').onclick = () =>{
    accountForm.classList.add('active');
}
document.querySelector('#close-form').onclick = () =>{
    accountForm.classList.remove('active');
}
