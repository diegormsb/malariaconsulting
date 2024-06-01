function validateForm() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const occupation = document.getElementById('occupation');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    const requiredFields = [firstName, lastName, occupation, email, password, confirmPassword];
    let isValid = true;

    requiredFields.forEach(field => {
        const label = document.querySelector(`label[for="${field.id}"]`);
        if (field.value.trim() === '' || field.value === '--') {
            field.style.borderColor = 'red';
            label.classList.add('invalid');
            isValid = false;
        } else {
            field.style.borderColor = '#ccc';
            label.classList.remove('invalid');
        }
    });

    if (isValid) {
        // Submit the form or perform further actions
        alert('Formulario enviado exitosamente');
    }
}
