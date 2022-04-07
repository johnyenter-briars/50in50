const resultEl = document.getElementById('result');
const lenghtEl = document.getElementById('length');
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) return;

    textarea.value = password;

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("Copied to clipboard");

});

generateBtn.addEventListener('click', () => {
    const length = +lenghtEl.value;
    const hasLower = lowerEl.checked;
    const hasUpper = upperEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbols = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length);
});

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 46);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(lower, upper, number, symbol, length) {
    let pwd = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}]
        .filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i+= typesCount) {
        console.log("hellpo");
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            pwd += randomFunc[funcName]();
        });
    }

    return pwd;
}