let addBtn = document.getElementById("addBtn")


addBtn.addEventListener("click", function(e){
    e.preventDefault();
    let firstNum = Number(document.getElementById("firstNum").value)
    let secondNum = Number(document.getElementById("secondNum").value)

    let total = firstNum + secondNum
    let answer = document.getElementById("addOutput")
    answer.innerHTML = total
})

let subBtn = document.getElementById("subBtn")

subBtn.addEventListener("click", function(e){
    e.preventDefault();
    let firstSub = Number(document.getElementById("subNum").value)
    let secondSub = Number(document.getElementById("subNum2").value)

    let subTotal = firstSub - secondSub
    let subAnswer = document.getElementById("subOutput")
    subAnswer.innerHTML = subTotal
})

let multiplyBtn = document.getElementById("multiplyBtn")

multiplyBtn.addEventListener("click", function(e){
    e.preventDefault();
    let multiNum = Number(document.getElementById("multiNum").value)
    let multiNum2 = Number(document.getElementById("multiNum2").value)

    let multiSum = multiNum * multiNum2
    let multiplyAnswer = document.getElementById("multiOutput")
    multiplyAnswer.innerHTML = multiSum
})


