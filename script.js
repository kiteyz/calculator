let count = [];

function calculate([a, operation, b]) {
  const numberOne = new Decimal(a);
  const numberTwo = new Decimal(b);
  
  switch (operation) {
    case '+': return numberOne.plus(numberTwo);
    case '-': return numberOne.minus(numberTwo);
    case '*': return numberOne.times(numberTwo);
    case '/': return numberOne.dividedBy(numberTwo);
  }
}

for (const btn of document.getElementsByClassName('number')) {
  btn.onclick = (e) => {
    const value = document.getElementById('value').innerHTML;

    if (value == '0')
      document.getElementById('value').innerHTML = e.target.innerHTML;
    else document.getElementById('value').innerHTML += e.target.innerHTML;

    count[count[1] ? 2 : 0] = document.getElementById('value').innerHTML;
  }
}

for (const action of ['plus', 'minus', 'multiply', 'divide']) {
  document.getElementById(action).onclick = (e) => {
  if (!count[0]) return;

  const util = {
    plus: '+',
    minus: '-',
    multiply: '*',
    divide: '/'
  }

  if (count[0] && (count[1] && count[1] == util[action])) return;

  count[1] = util[action];

  document.getElementById('count').innerHTML = count.join(' ');
  document.getElementById('value').innerHTML = '0';
  }
}

document.getElementById('back').onclick = (e) => {
  count = [];
  
  document.getElementById('count').innerHTML = '';
  document.getElementById('value').innerHTML = '0';
}

document.getElementById('point').onclick = (e) => {
  const number = count[2] ? count[2] : count[0];

  if (number.includes('.')) return;

  document.getElementById('value').innerHTML = number + '.';
}

document.getElementById('equal').onclick = (e) => {
  if (document.getElementById('value').innerHTML == '0' || !count[1]) return;

  const result = calculate(count);

  count = [result];

  document.getElementById('count').innerHTML = '';
  document.getElementById('value').innerHTML = result;
}