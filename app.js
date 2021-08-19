// // console.log('I am in a separate file');
// document.getElementById('case-plus').addEventListener('click', function () {
//     //  console.log('clicked')
//     const takeInpVal1 = document.getElementById('case-value');
//     const getPlusValue1 = takeInpVal1.value;
//     // console.log(getPlusvalue1)
//     const output1 = parseFloat(getPlusValue1) + 1;
//     // console.log(output1);
//     takeInpVal1.value = output1;

// });
// // add event listener for minus button
// document.getElementById('case-minus').addEventListener('click', function () {
//     //  console.log('clicked')
//     const takeInpValMinu1 = document.getElementById('case-value');
//     const getMinuValue1 = takeInpValMinu1.value;
//     // console.log(getPlusvalue1)
//     const outputMinu1 = parseFloat(getMinuValue1) - 1;
//     // console.log(output1);
//     takeInpValMinu1.value = outputMinu1;
// });
// ----------------------1st way done--------------


// -----------------we are going to do the same things by using function;-----
// amra duita parametar add kore alada call koreu korte parie true false add korar dorkar nai.
function updateCaseNum(increDecre) {
    const takeInpVal = document.getElementById('case-value');
    let getValue = takeInpVal.value;
    // takeInpVal.value = parseInt(getValue) + 1;
    if (increDecre == true) {
        // takeInpVal.value = parseInt(getValue) + 1;
        getValue = parseInt(getValue) + 1;
        // upore akhaneu true dite paro abar call korar somoyeu dite paro
    }
    else if (getValue > 0) {
        // takeInpVal.value = parseInt(getValue) - 1;
        getValue = parseInt(getValue) - 1;
    }

    takeInpVal.value = getValue;
    // we did upper line cz the calculation was not sequentialy
    //-----------add value price according to quantity------------
    const valuePrice = document.getElementById('case-price');
    valuePrice.innerText = getValue * 60;
    // nicher niyome try korechie hoynie
    // // const getValPrice = valuePrice.innerText;
    // // const getValPriceP = parseInt(getValPrice);
    // const TotalValPri = parseFloat(valuePrice.innerText) * getValue;
    // valuePrice.innerText = TotalValPri;

}
//------------------- phone field value-------------------

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNum(true);

});
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNum(false);
    // takeInpVal.value = parseInt(getValue) - 1;
});






//-------------------- case Field value------------------------

// document.getElementById('phone-plus').addEventListener('click', function () {
//     // console.log('plus clicked')
//     updateCaseNum(true);
// });
// document.getElementById('phone-minus').addEventListener('click', function () {
//     // console.log('minus clicked')
// });


