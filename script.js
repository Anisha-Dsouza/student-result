function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('errorMessage').value;
if
(username !== 'admin' ) {
        errorMessage.innerText = 'Invalid username and password.Please try again';
    }else if(password !== 'admin@123'){
        errorMessage.innerText = 'Invalid username and password.Please try again';
    }else{
        alert('Login successful');
    }
}