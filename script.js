let input = document.getElementById("text-input");
let button = document.getElementById("check-btn");
let result = document.getElementById("result");



function check() {
    if (input.value === "") {
        alert("Please input a value")
    } else {
        remake();
    }
}

function remake() {
    let inputArr = input.value.toLowerCase().split("")
    let letters = "abcdefghijklmnopqrstuvwxyz1234567890"
    let newArr = []
    for (let i = 0; i < inputArr.length; i++) {
        if (letters.includes(inputArr[i])) {
            newArr.push(inputArr[i])
        } else if (!letters.includes(inputArr[i])) {
            result.innerText = `${input.value} is a palindrome`
        }
    }
    let normalWord = newArr.join("")
    let reversedWord = newArr.reverse().join("")
    if (reversedWord == normalWord) {
        result.innerText = `${input.value} is a palindrome`
    } else if (reversedWord != normalWord) {
        result.innerText = `${input.value} is not a palindrome`
    }
    console.log(reversedWord)
}

button.onclick = check