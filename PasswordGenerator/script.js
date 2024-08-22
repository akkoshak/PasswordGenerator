const slider = document.querySelector('.slider');
const length = document.querySelector('.length');

const includeUppercase = document.querySelector('#upper');
const includeLowercase = document.querySelector('#lower');
const includeNumbers = document.querySelector('#numbers');
const includeSymbols = document.querySelector('#symbols');

const generateButton = document.querySelector('.btn-generate');
const passwordDisplay = document.querySelector('.password');
const copyButton = document.querySelector('.password-copy');

document.addEventListener('DOMContentLoaded', () => {
    const passwordOptions = {
        length: slider.value,
        uppercase: includeUppercase.checked,
        lowercase: includeLowercase.checked,
        numbers: includeNumbers.checked,
        symbols: includeSymbols.checked,
    };

    const password = createPassword(passwordOptions)
    passwordDisplay.textContent = password;
});

slider.addEventListener('input', () => {
    length.textContent = slider.value
})

const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+[]{}|;:,.<>?'
};

const createPassword = (options) => {
    let charset = '';

    if (options.uppercase) {
        charset += characters.uppercase
    }

    if (options.lowercase) {
        charset += characters.lowercase
    }

    if (options.numbers) {
        charset += characters.numbers
    }

    if (options.symbols) {
        charset += characters.symbols
    }

    if (charset.length === 0) {
        alert('Please select at least one character type.')
        return '';
    }

    let password = '';
    for (let i = 0; i < options.length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length)
        password += charset.charAt(randomIndex)
    }

    return password;
}

generateButton.addEventListener('click', () => {
    const passwordOptions = {
        length: slider.value,
        uppercase: includeUppercase.checked,
        lowercase: includeLowercase.checked,
        numbers: includeNumbers.checked,
        symbols: includeSymbols.checked,
    };

    const password = createPassword(passwordOptions)
    passwordDisplay.textContent = password;
})

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordDisplay.textContent);
})