const NUM_PASSWORDS = 4
const PASSWORD_LENGTH = 16

const generatePasswordsBtn = document.getElementById('generate-passwords-btn')

const passwordResult1 = document.getElementById('pw-1')
const passwordResult2 = document.getElementById('pw-2')
const passwordResult3 = document.getElementById('pw-3')
const passwordResult4 = document.getElementById('pw-4')

const copyBtn1 = document.getElementById('copy-1')
const copyBtn2 = document.getElementById('copy-2')
const copyBtn3 = document.getElementById('copy-3')
const copyBtn4 = document.getElementById('copy-4')

const charArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&", "(", ")", "[", "]", "{", "}"]
const num_chars = charArray.length

generatePasswordsBtn.addEventListener('click', function generatePasswords(){
    let passwords = []

    for(let i = 0; i < NUM_PASSWORDS; i++) {
        let temp = ''
        for(let j = 0; j < PASSWORD_LENGTH; j++) {
            temp += charArray[Math.floor(Math.random()*num_chars)]
        }
        passwords.push(temp)
    }

    renderPasswords(passwords)
})

function renderPasswords(arr) {
    passwordResult1.textContent = arr[0]
    passwordResult2.textContent = arr[1]
    passwordResult3.textContent = arr[2]
    passwordResult4.textContent = arr[3]
}

copyBtn1.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordResult1.textContent)
})
copyBtn2.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordResult2.textContent)
})
copyBtn3.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordResult3.textContent)
})
copyBtn4.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordResult4.textContent)
})