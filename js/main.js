function login() {

    var email = document.getElementById('email');
    var password = document.getElementById('password');

    if (email.value === '' || !email.value.includes('@')) {
        showSnackbar('Please enter valid email');
        return;
    }

    if (password.value === '' || password.value.length < 6) {
        showSnackbar('Password length >= 6');
        return;
    }

    window.location.assign('../../index.html');

}



function register() {

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var cpassword = document.getElementById('cpassword');

    if (name.value === '') {
        showSnackbar('Please enter valid Full Name');
        return;
    }

    if (email.value === '' || !email.value.includes('@')) {
        showSnackbar('Please enter valid email');
        return;
    }

    if (password.value === '' || password.value.length < 6) {
        showSnackbar('Password length >= 6');
        return;
    }

    if (cpassword.value === '' || cpassword.value != password.value) {
        showSnackbar('Password not matched');
        return;
    }

    window.location.assign('../../index.html');

}


function sendMessage() {
    
    var name = document.getElementById('name');
    var subject = document.getElementById('subject');
    var email = document.getElementById('email');
    var message = document.getElementById('msg');

    if (name.value === '') {
        showSnackbar('Please enter valid Name');
        return;
    }

    if (subject.value === '') {
        showSnackbar('Please enter valid subject');
        return;
    }

    if (email.value === '' || !email.value.includes('@')) {
        showSnackbar('Please enter valid email');
        return;
    }

     if (message.value === '' || message.value.length < 10) {
        showSnackbar('Please enter valid message >= 10');
        return;
     }
    
    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';

    

    showSnackbar('Thank You for sending message.')

}



function showSnackbar(message) {
    let snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = message;
    snackbar.className = "show";
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}