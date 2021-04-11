// DOM

// get all keypress into an array
const keypress = [...document.querySelectorAll('.key')];
// console.log(keypress);

// get all keycode in an array
const listKeyCode = keypress.map(key => key.dataset.key);
// console.log(listKeyCode);

const screen = document.querySelector('.screen');
//console.log(screen);


// get the value of the keycode

document.addEventListener('keydown', (e) => {
  const value = e.keyCode.toString();
  // console.log(value, typeof value);
  calculate(value);
});

// rget the elmt which has been clicked
document.addEventListener('click', (e) => {
  const value = e.target.dataset.key;
  //console.log(value, typeof value);
  calculate(value);
})

// function for calcul
const calculate = (value) => {
  if (listKeyCode.includes(value)) {
    switch (value) {
      case '46' : 
        screen.textContent = "";
        break;
      case '61':
        const calcul = eval(screen.textContent);
        screen.textContent = calcul;
        break;
      default: 
        const indexKeycode = listKeyCode.indexOf(value);
        const keyPress = keypress[indexKeycode];
        screen.textContent += keyPress.innerHTML;
    }
  }
}

// deal with an error
window.addEventListener('error', (e) => {
  // console.log(e);
  alert('an error has occured in your calcul : ' + e.message);
})
