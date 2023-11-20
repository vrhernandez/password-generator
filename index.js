const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = ""
let pass2 = ""
let passLength = 15 // STRETCH: make length dynamic
let password1EL = document.getElementById("password1-el")
let password2EL = document.getElementById("password2-el")

// Displays two newly generated passwords
function newPasswords() {
    pass1 = getRandomPassword()
    pass2 = getRandomPassword()
    password1EL.textContent = pass1
    password2EL.textContent = pass2
}

// Returns a random password
function getRandomPassword() {
    let password = ""
    for (let i=0; i<passLength; i++){
        password += characters[Math.floor(Math.random()*characters.length)]
    }
    return password
}