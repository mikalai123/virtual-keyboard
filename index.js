let div = document.createElement('div');
  div.className = "title";
  div.id = "title"
  div.innerHTML = "<strong>RSS Виртуальная клавиатура</strong>";
  document.body.append(div);

  // 1 line

const newDiv = document.createElement('div');
newDiv.className = "line1 keyboard";
newDiv.id = "line1"
newDiv.innerHTML = "<button class='key' id='three'>3</button>";
document.body.append(newDiv);

const two = document.querySelector('#three');
newDiv.insertAdjacentHTML('afterBegin', '<button class="key" id="Digit2">2</button>'); 

const one = document.querySelector('#two');
newDiv.insertAdjacentHTML('afterBegin', '<button class="key" id="Digit1">1</button>');

const yo = document.querySelector('#one');
newDiv.insertAdjacentHTML('afterBegin', '<button class="key" id="yo key">`</button>');

const four = document.querySelector('#yo');
newDiv.insertAdjacentHTML('beforeEnd', '<button class="key" id="Digit4">4</button>');

const five = document.querySelector('#four');
newDiv.insertAdjacentHTML('beforeEnd', '<button class="key" id="Digit5">5</button>');

const six = document.querySelector('#five');
newDiv.insertAdjacentHTML('beforeEnd', '<button class="key" id="Digit6">6</button>');

const seven = document.querySelector('#six');
newDiv.insertAdjacentHTML('beforeEnd', '<button class="key" id="Digit7">7</button>');

const eight = document.querySelector('#seven');
newDiv.insertAdjacentHTML('beforeEnd', '<button class="key" id="Digit8">8</button>');

const nine = document.querySelector('#eight');
newDiv.insertAdjacentHTML('beforeEnd', '<button class="key" id="Digit9">9</button>');

const zero = document.querySelector('#nine');
newDiv.insertAdjacentHTML('beforeEnd', '<button class="key" id="Digit0">0</button>');

const minus = document.querySelector('#zero');
newDiv.insertAdjacentHTML('beforeEnd', '<button class="key" id="minus">-</button>');

const plus = document.querySelector('#minus');
newDiv.insertAdjacentHTML('beforeEnd', '<button class="key" id="plus">+</button>');

const backspace = document.querySelector('#plus');
newDiv.insertAdjacentHTML('beforeEnd', '<button class="key" id="backspace">Backspace</button>');



