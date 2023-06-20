const   btnEl = document.getElementById('btn');
const   birthdayEl = document.getElementById('birthday')
const   resultEl = document.getElementById('result');

function getAge(birthdayValue) {
    const   currentDate = new Date(),
            birthdayDate = new Date(birthdayValue);
    let     age = currentDate.getFullYear() - birthdayDate.getFullYear(),
            month = currentDate.getMonth() - birthdayDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate()))
     {
        age--;
    }
  return age; 
}

function calculateAge() {
    const   birthdayValue = birthdayEl.value;
            
    if (birthdayValue === '') {
        resultEl.innerText = 'Please enter a valid year of birth';
    } else {
        
        const age = getAge(birthdayValue);
        resultEl.innerText = `You are ${age} years old`;
    }
}

btnEl.addEventListener('click', calculateAge);