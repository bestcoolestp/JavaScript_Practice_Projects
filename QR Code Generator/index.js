const wrapper = document.querySelector('.container'),
        btn = document.querySelector('.form button'),
        input = document.querySelector('.form input'),
        qrImg = document.querySelector('.qr-code img');

btn.addEventListener('click', () => {
    let inputValue = input.value;
    if(!inputValue) return;
    btn.innerText = 'Generating...';
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrImg.alt = `QR Code for ${inputValue}`;
    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        btn.innerText = 'Generate QR Code';
    });
    
});
input.addEventListener('keyup', (e) => {
    if(!input.value) {
        wrapper.classList.remove('active');
        qrImg.src = '';
        qrImg.alt = '';
    }else if(e.keyCode === 13) btn.click();

});