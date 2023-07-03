const btnEl = document.getElementById('calculate');
const billEl = document.getElementById('bill');
const tipEl = document.getElementById('tip');
const totalEl = document.getElementById('total');


function calculateTotal() {
    const billValue = billEl.value;
    const tipValue = tipEl.value;
    const total = billValue * (1 + tipValue/100);
    totalEl.innerText = total.toFixed(2);
}

btnEl.addEventListener('click', calculateTotal);