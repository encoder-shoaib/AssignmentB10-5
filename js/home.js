// for picture 1 button 1
document.getElementById('picture-1-button-1').addEventListener('click',function(){
    addDonateAmount ('picture-1-input-1','display-amaount-button-1','my-total-amount','Donate for Flood at Noakhali, Bangladesh');

    subtractDonateAmount('picture-1-input-1','my-total-amount')


})

// for picture 2 button 2
document.getElementById('picture-2-button-2').addEventListener('click',function(){
    addDonateAmount ('picture-2-input-2','display-amaount-button-2','my-total-amount','Donate for Flood Relief in Feni,Bangladesh')

    subtractDonateAmount('picture-2-input-2','my-total-amount')

})

// for picture 3 button 3
document.getElementById('picture-3-button-3').addEventListener('click',function(){
    addDonateAmount ('picture-3-input-3','display-amaount-button-3','my-total-amount','Aid for Injured in the Quota Movement')

    subtractDonateAmount('picture-3-input-3','my-total-amount')
})


// for history button work 
document.getElementById('history-btn').addEventListener('click',function(){
        // add hidden of all section 
        document.getElementById('donate-section').classList.add('hidden')
        // remove hidden by id 
        document.getElementById('hide-section').classList.remove('hidden');
})

// for Donation button work 
document.getElementById('donation-btn').addEventListener('click',function(){
        // add hidden of all section 
        document.getElementById('hide-section').classList.add('hidden')
        // remove hidden by id 
        document.getElementById('donate-section').classList.remove('hidden');
})










