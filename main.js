function formValidation() {
    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");
    const emailInput = document.getElementById("email");
    const coursesInput = document.getElementById("courses");
    const phoneInput = document.getElementById("phone");
    const addressInput = document.getElementById("address");

    const fnameError = document.getElementById("fname-error");
    const lnameError = document.getElementById("lname-error");
    const emailError = document.getElementById("email-error");
    const coursesError = document.getElementById("courses-error");
    const phoneError = document.getElementById("phone-error");
    const addressError = document.getElementById("add-error");

    let isValid = true;

    // fname validation
    const fnameValue = fnameInput.value.trim();
    const fnamePattern = /^[a-zA-Z\s]+$/;
    if (!fnamePattern.test(fnameValue)) {
        fnameInput.classList.add('invalid');
        fnameError.style.display = 'block';
        isValid = false;
    } else {
        fnameInput.classList.remove('invalid');
        fnameError.style.display = 'none';
    }

    // lname validation
    const lnameValue = lnameInput.value.trim();
    const lnamePattern = /^[a-zA-Z\s]+$/;
    if (!lnamePattern.test(lnameValue)) {
        lnameInput.classList.add('invalid');
        lnameError.style.display = 'block';
        isValid = false;
    } else {
        lnameInput.classList.remove('invalid');
        lnameError.style.display = 'none';
    }

    // email validation
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        emailInput.classList.add('invalid');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailInput.classList.remove('invalid');
        emailError.style.display = 'none';
    }

    // course validation
    const courseValue = coursesInput.value;
    if (courseValue === "") {
        coursesInput.classList.add('invalid');
        coursesError.style.display = 'block';
        isValid = false;
    } else {
        coursesInput.classList.remove('invalid');
        coursesError.style.display = 'none';
    }

    // phone validation
    const phoneValue = phoneInput.value.trim();
    const phonePattern = /^\+91\s\d{10}$/;
    if (!phonePattern.test(phoneValue)) {
        phoneInput.classList.add('invalid');
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneInput.classList.remove('invalid');
        phoneError.style.display = 'none';
    }

    // address validation
    const addressValue = addressInput.value.trim();
    if (addressValue === "") {
        addressInput.classList.add('invalid');
        addressError.style.display = 'block';
        isValid = false;
    } else {
        addressInput.classList.remove('invalid');
        addressError.style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        return true; 
    }

    return false; 
}
