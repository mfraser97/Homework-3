const form = document.getElementById('passwordForm')
const lengthEl = document.getElementById('passLength')
const uppercaseEl = document.getElementById('inclUpper')
const symbolsEl = document.getElementById('inclSymb')
const numbersEl = document.getElementById('inclNum')
const UPPERCASE_CHAR = lowToHighArray(65, 90)
const NUMBER_CHAR = lowToHighArray(48, 57)
const LOWERCASE_CHAR = lowToHighArray(97, 122)
const SYMBOLS_CHAR = lowToHighArray(33, 47)
const passDisplay = document.getElementById('password')
const generateBTN = document.getElementById('generatePass')
passDisplay.value = "Password"

generateBTN.addEventListener('click', function(event) {
    event.preventDefault();
    const includeNumbers = numbersEl.checked
    const totalLength = lengthEl.value
    const includeCapitals = uppercaseEl.checked
    const includeSymbols = symbolsEl.checked
    const password = generatePassword(includeNumbers, includeSymbols, totalLength, includeCapitals)
    passDisplay.value = password
    
});

function generatePassword(includeNumbers, includeSymbols, totalLength, includeCapitals) {
    let charCodes = LOWERCASE_CHAR
    if (includeCapitals) charCodes = charCodes.concat(UPPERCASE_CHAR);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR);

    const passwordChar = []
    for (let i = 0; i < totalLength; i ++) {
        const character = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordChar.push(String.fromCharCode(character))
    }
    return passwordChar.join('')
}

function lowToHighArray(low, high) {
    const array = []
    for (let i = low; i <=high; i++) {
        array.push(i)
    }
    return array
}

