// UI Elements

//Income
let inRent = document.querySelector('#rental-income')
let inOther = document.querySelector('#other-income')
let inTotal = document.querySelector('#total-income')

//Expenses

//Cash Flow

//CoC ROI


document.querySelector('#calculateBtn').addEventListener('click', function (e) {
    let inRentValue = parseFloat(inRent.value)
    let inOtherValue = parseFloat(inOther.value)
    
    inTotal.value = inRentValue + inOtherValue

    e.preventDefault()
})