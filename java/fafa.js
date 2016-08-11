/*var goBtn = document.getElementById('goBtn'),
  dupOut = document.getElementById('dupOut'),
  fn = document.getElementById('firstName'),
  form = document.getElementById('form');
goBtn.onclick = getInputs;



function getInputs(){
  var formArr = [],
      formLen = form.elements.length;
  for(var i = 0; i < formLen; i++){
    formArr.push(form.elements[i].value);
  }
    checkForDups(formArr);
}

function checkForDups(arr){
  var sortArr = arr.slice().sort(),
    dupsArr = [];

  for( var i=0; i < arr.length; i++){
    if( sortArr[i + 1] == sortArr[i]){
    dupsArr.push(sortArr[i]);
  }
  }
  console.log(arr);
  console.log(sortArr);
  console.log(dupsArr);
  outputDups(dupsArr);

}



function outputDups(arr){
  dupOut.innerHTML = arr.join(', ');
}
*/


/*var crap = new Array (3);

for(i=0;i<3;i++){
    crap [i] = prompt('Hey type in a List of your favorite foods!');
}

console.log(crap);
document.write();*/

// ============================
/*var h1 = document.getElementById("myHdr");

var hasClass = h1.hasAttribute("class");
console.log(" ", hasClass);*/

// ==========
/*var h1 = document.getElementById("myHdr");

var hasClass = h1.hasAttribute("class");
console.log("The h1 tag has a class attribute: ", hasClass);

h1.setAttribute("rel", "something");
console.log(h1);*/

// =============================


/*var h1 = document.getElementById("myHdr");

var hasClass = h1.hasAttribute("class");
console.log("The h1 tag has a class attribute: ", hasClass);

h1.setAttribute("rel", "something");
console.log(h1);

h1.removeAttribute("rel");
console.log(h1);
*/

// THIS IS AN EXPERIMENT+++++++++++++++++++++++


/*var wallOne = calculateArea (3, 5);
var wallTwo = calculateArea (8, 5);
var  =

function calculateArea(width, height){
  var area = width * height;
  return area;
}

console.log(wallOne);
console.log(wallTwo);
*/


// +++++++=THIS IS A VARIABLE SCOPE+++++++

/*function getArea(width, height){
  var area = width * height;
  return area;
}
var wallSize = getArea (6, 2);
document.write(wallSize);
*/
// ++++++++++++++ENDED+++++++++++++++
/*
var number1 = prompt('Type in a number.');
var number2 = prompt('Type in a second Number.');


if(isNaN(number1) || isNaN(number2)){
  alert('You need to have a number!')
}else{
  alert(number1 * number2);
}

console.log(number1);
console.log(number2);
*/

//var number = parseInt(prompt("Enter a Number."));
// var numbber = prompt("Enter a second Number.");
//
// if(isNaN(number) || isNaN(numbber)){
//   alert("U nned to enter a number!!!!!")
// }else{
//   alert(number * numbber);
//   alert(number / numbber);
// }
// ==================================================


///This ia function that has signuture numCompare(num1, num2)that takes two number arguments. If the first number is larger, return the string "larger". If the number are equal, return the string "equal". If the first number is smaller, return the string "smaller". Bascially compare them.

function numCompare(num1, num2){
    if(num1 > num2){
      return 'larger';
    }else if(num1 < num2){
      return 'smaller';
    }else{
      return 'equal';
    }

}
console.log(numCompare(5, 10));



function numCompare(num1, num2){
  if(num1 > num2){
    return 'larger';
  }else if (num1 < num2){
    return 'smaller'
  }else{
    return 'equal';
  }
}
console.log(numCompare(90,5));
