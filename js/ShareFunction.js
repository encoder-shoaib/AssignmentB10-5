console.log('i am from share function ')    

// get input field value by id 
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}

// get input field text by id 
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    return parseFloat(textValue);
}

// get 2 id and add there value then show  in id2
function addDonateAmount (id1, id2){
    const PictureInputValue = getInputFieldValueById(id1)
    console.log(PictureInputValue);

    const showAmount = getTextFieldValueById(id2)
    console.log(showAmount);
    
    const total = showAmount + PictureInputValue;
    console.log(total)
    
    document.getElementById(id2).innerText = total;
    
}

