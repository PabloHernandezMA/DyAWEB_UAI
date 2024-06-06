document.getElementById('full-name').addEventListener('input', function() {
    document.getElementById('form-title').innerText = 'HOLA ' + this.value.toUpperCase();
});

function showError(field, message) {
    document.getElementById(field + '-error').innerText = message;
}

function clearError(field) {
    document.getElementById(field + '-error').innerText = '';
}

function validateFullName() {
    var fullName = document.getElementById('full-name').value;
    if (fullName.length <= 6 || !/\s/.test(fullName)) {
        showError('full-name', 'El nombre completo debe tener más de 6 letras y al menos un espacio.');
        return false;
    }
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('email', 'El email no tiene un formato válido.');
        return false;
    }
    return true;
}

function validatePassword() {
    var password = document.getElementById('password').value;
    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        showError('password', 'La contraseña debe tener al menos 8 caracteres, con letras y números.');
        return false;
    }
    return true;
}

function validateConfirmPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        showError('confirm-password', 'Las contraseñas no coinciden.');
        return false;
    }
    return true;
}

function validateAge() {
    var age = parseInt(document.getElementById('age').value, 10);
    if (isNaN(age) || age < 18) {
        showError('age', 'Debe ser mayor o igual a 18 años.');
        return false;
    }
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phone').value;
    if (!/^\d{7,}$/.test(phone)) {
        showError('phone', 'El teléfono debe tener al menos 7 dígitos y no puede contener espacios, guiones ni paréntesis.');
        return false;
    }
    return true;
}

function validateAddress() {
    var address = document.getElementById('address').value;
    if (address.length < 5 || !/\s/.test(address)) {
        showError('address', 'La dirección debe tener al menos 5 caracteres, con letras, números y un espacio.');
        return false;
    }
    return true;
}

function validateCity() {
    var city = document.getElementById('city').value;
    if (city.length < 3) {
        showError('city', 'La ciudad debe tener al menos 3 caracteres.');
        return false;
    }
    return true;
}

function validatePostalCode() {
    var postalCode = document.getElementById('postal-code').value;
    if (postalCode.length < 3) {
        showError('postal-code', 'El código postal debe tener al menos 3 caracteres.');
        return false;
    }
    return true;
}

function validateDni() {
    var dni = document.getElementById('dni').value;
    if (!/^\d{7,8}$/.test(dni)) {
        showError('dni', 'El DNI debe ser un número de 7 u 8 dígitos.');
        return false;
    }
    return true;
}

function validateForm() {
    clearError('full-name');
    clearError('email');
    clearError('password');
    clearError('confirm-password');
    clearError('age');
    clearError('phone');
    clearError('address');
    clearError('city');
    clearError('postal-code');
    clearError('dni');

    var isFullNameValid = validateFullName();
    var isEmailValid = validateEmail();
    var isPasswordValid = validatePassword();
    var isConfirmPasswordValid = validateConfirmPassword();
    var isAgeValid = validateAge();
    var isPhoneValid = validatePhone();
    var isAddressValid = validateAddress();
    var isCityValid = validateCity();
    var isPostalCodeValid = validatePostalCode();
    var isDniValid = validateDni();

    return isFullNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid &&
        isAgeValid && isPhoneValid && isAddressValid && isCityValid && isPostalCodeValid && isDniValid;
}

function submitForm() {
    if (validateForm()) {
        var formData = {
            fullName: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            age: document.getElementById('age').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            postalCode: document.getElementById('postal-code').value,
            dni: document.getElementById('dni').value
        };
        alert('Información del formulario:\n' + JSON.stringify(formData, null, 2));
    } else {
        alert('Hay errores en el formulario. Por favor, corríjalos e intente nuevamente.');
    }
}

document.getElementById('full-name').addEventListener('blur', validateFullName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('confirm-password').addEventListener('blur', validateConfirmPassword);
document.getElementById('age').addEventListener('blur', validateAge);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('address').addEventListener('blur', validateAddress);
document.getElementById('city').addEventListener('blur', validateCity);
document.getElementById('postal-code').addEventListener('blur', validatePostalCode);
document.getElementById('dni').addEventListener('blur', validateDni);

document.getElementById('full-name').addEventListener('focus', function() { clearError('full-name'); });
document.getElementById('email').addEventListener('focus', function() { clearError('email'); });
document.getElementById('password').addEventListener('focus', function() { clearError('password'); });
document.getElementById('confirm-password').addEventListener('focus', function() { clearError('confirm-password'); });
document.getElementById('age').addEventListener('focus', function() { clearError('age'); });
document.getElementById('phone').addEventListener('focus', function() { clearError('phone'); });
document.getElementById('address').addEventListener('focus', function() { clearError('address'); });
document.getElementById('city').addEventListener('focus', function() { clearError('city'); });
document.getElementById('postal-code').addEventListener('focus', function() { clearError('postal-code'); });
document.getElementById('dni').addEventListener('focus', function() { clearError('dni'); });
