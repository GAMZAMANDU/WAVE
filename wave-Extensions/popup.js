let numbers = []; 
const numberList = document.getElementById('numberList');

document.addEventListener('keydown', function (event) {
  if (event.key >= '0' && event.key <= '9') {
    if (numbers.length < 6) {
      numbers.push(event.key);
    }
  } else if (event.key === 'Backspace') {
    numbers.pop();
  }else if (event.key === 'Enter') {
    numbers.pop();
  } else {
    event.preventDefault();
  }

  renderNumbers();
});

function renderNumbers() {
  numberList.innerHTML = ''; 
  for (let i = 0; i < 6; i++) {
    const li = document.createElement('li');
    li.textContent = numbers[i] || '';
    numberList.appendChild(li);
  }
}
