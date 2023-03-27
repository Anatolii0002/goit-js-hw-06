const input = document.getElementById('validation-input');

const requiredLength = input.getAttribute('data-length');

function checkInputLength() {
const inputValue = input.value.trim();
const isValid = inputValue.length === parseInt(requiredLength);

if (isValid) {
input.classList.remove('invalid');
input.classList.add('valid');
} else {
input.classList.remove('valid');
input.classList.add('invalid');
}
}
input.addEventListener('blur', checkInputLength);
