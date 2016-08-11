/*var input1 = document.getElementById('input1'),
input2 = document.getElementById('input2'),
input3 = document.getElementById('input3'),
input4 = document.getElementById('input4'),
input5 = document.getElementById('input5');
btn = document.getElementById('btn')
btn.onclick = batman;

var = bat['input1', 'input2', 'input3','inout4', 'input5']

function batman(){
  for(var i = 0; i< 10; i++;)
}


// ===========================

var btn = document.getElementById('btn'),
input1 = document.getElementById('input1'),
input2 = document.getElementById('input2'),
input3 = document.getElementById('input3'),
input4 = document.getElementById('input4'),
input5 = document.getElementById('input5')
span = document.getElementById('span');
// these inputs catch the html id tags and link to the
//console.log(btn);
btn.onclick = handleGoBtnClick;
function handleGoBtnClick(){
// btn.onclick means when buttion is click this function will run only when the html buttion is hit


 var val1 = input1.value,
     val2 = input2.value,
     val3 = input3.value,
     val4 = input4.value,
     val5 = input5.value;
//this links up our htlm id's to a variable so its easyer to use
 if(val1 === ""|| val2 === "" || val3 == "" || val4 == "" || val5 == ""){
   return '';
   //console.log('its blank');
 }

*/

// ++++++++++++++++++++++++++++++++===============MY TEACHERS WORKS=======

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

// ==============This Work above is Complete

/*
function food(){
  var a = "inside function foo";
  return a;
}

// console.log(a)DID NOT WORK
// console.log(foo());//DID WORK
var name = 'max';
function captialize(){
  return name[0].toUpperCase() + name.slice(1);
}

var capitalizedName = capitalize();
//console.log(capitalizedName);====IT DID WORK
//THE TOP AND BOTTOM ARE DIFFERENT WAYS TO CAPITALIZE YOUR NAME IN JAVA
var capitalize = function(str){
  return str[0].toUpperCase() + str.slice(1);
}

// console.log(capitalize('max'));// IT DID WORK

logName("max");

function logName(name){
  console.log(name);
}

//----------

logAgain("Matt");

var logAgain = function(name){
  console.log(name);
}

//======

var name ="Adam";

function alertName(){
  alert(name)

  var name = "Eve";
  alert(name);
}
*/

// alertName();==== undifine
///=====


/*var h1 = document.getElementById('h1');
var hasClass = h1.hasAttribute('class');
h1.setAttribute('rel', 'whatever');
console.log(h1);

h1.removeAttribute('rel');
console.log(h1);*/


/////$Recycle.Bin\

var anchors = document.querySelectorAll('ul li a');
console.log(anchors.length[1]);
  for(var i=0, i < anchors.length; i++){
    var anchor = anchors.item(i);
    console.log()
  }
