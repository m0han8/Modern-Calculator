function cleaner() {
  let display = document.getElementById('display');
  display.value = "";
}

function add(value) {
  let display = document.getElementById('display');
  display.value += value;
}

function answer() {
  let display = document.getElementById('display');
  let expression = display.value;

  if (expression.includes('++') || expression.includes('**') || expression.includes('//') || expression.includes('--')) {
    display.value = "Error";
  } else {
    display.value = eval(expression);
  }
}
