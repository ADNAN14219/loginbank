document.getElementById('login-submit').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if ((userEmail == 'samia.akter237@gmail.com' || userEmail == 'adnanal717@gmail.com') && userPassword == 'sadmia14219') {
        window.location.href = 'banking.html';
    }

})