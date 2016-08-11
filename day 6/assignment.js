var btn = document.getElementById('btn'),
 input1 = document.getElementById('input1'),
 input2 = document.getElementById('input2'),
 span = document.getElementById('span');

btn.onclick = handleGoBtnClick;

function handleGoBtnClick(){

var val1 = input1.value,
  val2 = input2.value;
if(val1 === '' && val2 === ''){
  console.log('its blank');
  return '';
}

   val1= 'hello JavaScript';
  alert(val1);
  span.innerHTML = input2.value;
  //updateOutput();
}

// 5 inputs, go button, onclick grab values, for loop---> push into array, check for
// duplicates---> alert , switch(), rose"red":----> innerHTML/if else/ if else/innerHTML
