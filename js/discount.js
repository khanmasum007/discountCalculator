// console.log("js file aded")

// Note: I used function just for practice ,, cz this project don't need this type of  function

function getValueById (inputValue){
    const inputFeild= document.getElementById(inputValue);
    const inputValueString= inputFeild.value ;
    // const returnNumberInput= parseFloat(inputValueString);
    return inputValueString;
}

document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button clicked')
    const inputCupon= getValueById('input-cupon')
    const inputNumber= parseFloat(getValueById('input-number'));
    // console.log(typeof(inputNumber));
    const check = isNaN(inputNumber);
    if(inputCupon == "DOM" && check== false){
       const lessAmount = (inputNumber*70)/100;
    //    console.log(lessAmount);
        const finalLessAmount= document.getElementById('final-lessAmount');
        finalLessAmount.innerText = lessAmount;
        document.getElementById('input-number').value= "";
        document.getElementById('input-cupon').value= "";
    }
    else{
        alert('input valid number and cupon code')
    }
})