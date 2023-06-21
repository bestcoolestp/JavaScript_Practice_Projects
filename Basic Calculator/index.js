const buttonsEl = document.querySelectorAll('button');
const displayEl = document.getElementById('display');

// for (let i = 0; i < buttonsEl.length; i++) {
//   buttonsEl[i].addEventListener('click', () => {
//     const buttonValue = buttonsEl[i].textContent;

//     if(buttonValue === "C") {
//         clearResult();
//     }else if(buttonValue === "=") {
//         calculateResult();
//     }else {
//         appendValue(buttonValue);
//     }    
//   });
// }

buttonsEl.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if(buttonValue === "C") {
            clearResult();
        }else if(buttonValue === "=") {
            calculateResult();
        }else {
            appendValue(buttonValue);
        }    
    });
});


function clearResult() {
    displayEl.value = "";
}

function calculateResult() {
    displayEl.value = eval(displayEl.value);
    //eval()function evaluates JavaScript code as a string returning its completion value
}

function appendValue(buttonValue) {
    displayEl.value += buttonValue;
}