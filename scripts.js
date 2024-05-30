function profile(event) {
    event.preventDefault();
    var isValid = true;

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const supportReason = document.getElementById('supportReason').value.trim();

    if (!firstName) {
        isValid = false;
        document.getElementById('firstNameError').textContent = '* required';
    } else {
        document.getElementById('firstName').textContent = '*';
    }

    if (!lastName) {
        isValid = false;
        document.getElementById('lastNameError').textContent = '* required';
    } else {
        document.getElementById('lastNameError').textContent = '*';
    }

    if (!email) {
        isValid = false;
        document.getElementById('emailError').textContent = '* required';
    } else {
        document.getElementById('emailError').textContent = '*';
    }

    if (!password) {
        isValid = false;
        document.getElementById('passwordError').textContent = '* required';
    } else {
        document.getElementById('passwordError').textContent = '*';
    }

    if (!gender) {
        isValid = false;
        document.getElementById('genderError').textContent = '* required';
    } else {
        document.getElementById('genderError').textContent = '*';
    }

    if (!supportReason) {
        isValid = false;
        document.getElementById('supportReasonError').textContent = '* required';
    } else {
        document.getElementById('supportReasonError').textContent = '*';
    }

    if (isValid) {
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('gender', gender.value);
        localStorage.setItem('supportReason', supportReason);
        window.location.href = 'profile.html';
    }
};