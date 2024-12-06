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
function addDonateAmount (id1, id2,id3){
    const PictureInputValue = getInputFieldValueById(id1)
    console.log(PictureInputValue);

    const showAmount = getTextFieldValueById(id2)
    const myAmount = getTextFieldValueById(id3)

    if (isNaN(PictureInputValue) || PictureInputValue < 0 || myAmount < PictureInputValue) {
        const modal = document.getElementById("unSuccessModal");
        modal.classList.remove("hidden"); // Show the modal
    
        // event listener for the close button
        document.getElementById("close-unsuccess-modal").addEventListener("click", function () {
          modal.classList.add("hidden"); // Hide the modal
        });
        return;
    }

    else{
        const total = showAmount + PictureInputValue;
        document.getElementById(id2).innerText = total;
        
        const modal = document.getElementById("successModal");
        modal.classList.remove("hidden"); // Show the modal
        // Attach event listener to the close button
        document.getElementById("close-success-modal").addEventListener("click", function () {
              modal.classList.add("hidden"); // Hide the modal
        });
    }


}

// get 2 id and add there value then show  in id2
function subtractDonateAmount (id1, id2){
    const PictureInputValue = getInputFieldValueById(id1)
    console.log(PictureInputValue);

    const myAmount = getTextFieldValueById(id2)
    console.log(myAmount);


    if (isNaN(PictureInputValue) || PictureInputValue < 0 || myAmount < PictureInputValue) {
        const modal = document.getElementById("unSuccessModal");
        modal.classList.remove("hidden"); // Show the modal
    
        // event listener for the close button
        document.getElementById("close-unsuccess-modal").addEventListener("click", function () {
          modal.classList.add("hidden"); // Hide the modal
        });
        return;
    }

    else{
        const total = myAmount - PictureInputValue;
        document.getElementById(id2).innerText = total;
        
        const modal = document.getElementById("successModal");
        modal.classList.remove("hidden"); // Show the modal
        // Attach event listener to the close button
        document.getElementById("close-success-modal").addEventListener("click", function () {
              modal.classList.add("hidden"); // Hide the modal
        });
    }

}


function showSectionById(id){
    // add hidden of all section 
    document.getElementById('donate-section').classList.add('hidden')
    // remove hidden by id 
    document.getElementById(id).classList.remove('hidden');
}
