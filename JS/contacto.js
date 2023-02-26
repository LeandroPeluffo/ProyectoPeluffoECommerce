const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
event.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const message = document.getElementById('message').value;

if (!validateEmail(email)) {
    alert('Por favor, ingrese un email válido.');
    return;
}

const data = { name, email, phone, message };
localStorage.setItem('contactData', JSON.stringify(data));

alert('¡Gracias por contactarnos!');

form.reset();
});

function validateEmail(email) {
const regex = /^\S+@\S+\.\S+$/;
return regex.test(email);
}
