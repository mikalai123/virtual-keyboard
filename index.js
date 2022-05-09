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



//2 line

const line = document.createElement('div');
  line.className = "line2 keyboard";
  line.id = "line2"
  line.innerHTML = "<button class='key' id='tab'>Tab</button>";
  document.body.append(line);

const q = document.querySelector('#tab');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="KeyQ" click=consol.log=("q")>Q</button>');

const w = document.querySelector('#q');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="KeyW">W</button>');

const e = document.querySelector('#w');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="e">E</button>');

const r = document.querySelector('#e');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="r">R</button>');

const t = document.querySelector('#r');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="t">T</button>');

const y = document.querySelector('#t');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="y">Y</button>');

const u = document.querySelector('#y');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="u">U</button>');

const i = document.querySelector('#u');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="i">I</button>');

const o = document.querySelector('#i');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="o">O</button>');

const p = document.querySelector('#o');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="p">P</button>');

const bracket1 = document.querySelector('#p');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="bracket1">[</button>');

const bracket2 = document.querySelector('#bracket1');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="bracket2">]</button>');

const slash = document.querySelector('#bracket2');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="slash">\\ </button>');

const del = document.querySelector('#slash');
  line.insertAdjacentHTML('beforeEnd', '<button class="key" id="del">Del</button>');

  //3 line

const line3 = document.createElement('div');
line3.className = "line3 keyboard";
line3.id = "line3"
line3.innerHTML = "<button class='key' id='capslock'>Capslock</button>";
document.body.append(line3);

const a = document.querySelector('#capsLock');
line3.insertAdjacentHTML('beforeEnd', "<button class='key' id='a'>A</button>");

const s = document.querySelector('#a');
line3.insertAdjacentHTML('beforeEnd', "<button class='key' id='s'>S</button>");

const d = document.querySelector('#s');
line3.insertAdjacentHTML('beforeEnd', "<button class='key' id='d'>D</button>");

const f = document.querySelector('#d');
line3.insertAdjacentHTML('beforeEnd', "<button class='key' id='f'>F</button>");

const g = document.querySelector('#f');
line3.insertAdjacentHTML('beforeEnd', "<button class='key' id='g'>G</button>");

const h = document.querySelector('#g');
line3.insertAdjacentHTML('beforeEnd', "<button class='key' id='h'>H</button>");

const j = document.querySelector('#h');
line3.insertAdjacentHTML('beforeEnd', "<button class='key' id='j'>J</button>");

const k = document.querySelector('#j');
line3.insertAdjacentHTML('beforeEnd', "<button class='key' id='k'>K</button>");

const l = document.querySelector('#k');
line3.insertAdjacentHTML('beforeEnd', "<button class='key' id='l'>L</button>");

const semicolon = document.querySelector('#l');
line3.insertAdjacentHTML('beforeEnd', "<button class='key' id='semicolon'>;</button>");

const apostrophe = document.querySelector('#semicolon');
line3.insertAdjacentHTML('beforeEnd', '<button class="key" id="apostrophe"> " </button>');

const enter = document.querySelector('#apostrophe');
line3.insertAdjacentHTML('beforeEnd', "<button class='key' id='enter'>Enter</button>");


  //4 line

  const line4 = document.createElement('div');
  line4.className = "line4 keyboard";
  line4.id = "line4"
  line4.innerHTML = "<button class='key' id='shift_left'>Shift</button>";
  document.body.append(line4);

const z = document.querySelector('#shift_left');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='z'>Z</button>");

const x = document.querySelector('#z');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='x'>X</button>");

const c = document.querySelector('#x');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='c'>C</button>");

const v = document.querySelector('#c');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='v'>V</button>");

const b = document.querySelector('#v');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='b'>B</button>");

const n = document.querySelector('#b');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='n'>N</button>");

const m = document.querySelector('#n');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='m'>M</button>");

const comma = document.querySelector('#m');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='comma'>,</button>");

const period = document.querySelector('#comma');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='period'>.</button>");

const slash1 = document.querySelector('#period');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='slash1'>/</button>");

const tp = document.querySelector('#slash1');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='tp'>▲</button>");

const shift_right = document.querySelector('#tp');
  line4.insertAdjacentHTML('beforeEnd', "<button class='key' id='shift_right'>Shift</button>");
