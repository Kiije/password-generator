let password = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")


function generate() {
    let passwordLength = 15
    let generatePasswordOne = "" 
    let generatePasswordTwo = "" 

    for (let i = 0 ; i < passwordLength; i++) {
        let generateRandom = Math.floor(Math.random() * password.length)
        generatePasswordOne += password[generateRandom] 
    }

    for (let i = 0 ; i < passwordLength; i++) {
        let generateRandom = Math.floor(Math.random() * password.length)
        generatePasswordTwo += password[generateRandom]
    }

    passwordOne.textContent = generatePasswordOne
    passwordTwo.textContent = generatePasswordTwo
}