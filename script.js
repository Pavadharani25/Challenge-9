const checkBtn = document.querySelector("#check")
const outPut = document.querySelector("#output")

var ramData = {
    name: " ram",
    age: "25",
    yuga: " Treta ",
}
var krishnaData = {
    name: " Krishna ",
    age: "31",
    yuga: " Dwapar ",
}

checkBtn.addEventListener("click",function () {
    checkAge(ramData,krishnaData) } )

function checkAge(ramData, krishnaData) {
    if (ramData.age > krishnaData.age) {
        outPut.innerText = krishnaData.name
    } else {
        outPut.innerText = ramData.name
    }
}
