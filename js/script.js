let annualPrice = document.querySelectorAll('.annual');
let monthlyPrice = document.querySelectorAll('.monthly');
let checkBox = document.querySelector('#input'); 

function showPrices() {
    if (checkBox.checked) {
        annualPrice.toggle('active');
        monthlyPrice.toggle('remove');
    } else {
        monthlyPrice.toggle('active');
        annualPrice.toggle('remove');
    };
};