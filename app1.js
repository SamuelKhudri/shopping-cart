
function updateProductNum(product, price, increDecre) {
    const takeInpVal = document.getElementById(product + '-value');
    let getValue = takeInpVal.value;
    if (increDecre == true) {
        getValue = parseInt(getValue) + 1;

    }
    else if (getValue > 0) {
        // takeInpVal.value = parseInt(getValue) - 1;
        getValue = parseInt(getValue) - 1;
    }

    takeInpVal.value = getValue;

    //-----------add value price according to quantity------------
    const valuePrice = document.getElementById(product + '-price');
    valuePrice.innerText = getValue * price;
}
//------------------- CASE FIRLD VALUE-------------------

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNum('case', 60, true);

});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNum('case', 60, false);
});


// -------------------- PHONE FIELD VALUE------------------------

document.getElementById('phone-plus').addEventListener('click', function () {
    // console.log('plus clicked')
    updateProductNum('phone', 1000, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    // console.log('minus clicked')
    updateProductNum('phone', 1000, false)
});
