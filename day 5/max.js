/*var name = prompt("What is your Name?");
// name = capitalize(name);
function capitalize(str){
var stre = str.toLowerCase();
  console.log(str.charAt(0).toUpperCase() + str.slice(1));
  }
console.log(capitalize(name));*/

// =====================

/*var happy = prompt ("What would you like to do?");
var trim = happy.trim();
function something(){
    if(happy === ""){
      alert('Please write Something');
    }
}*/
// ================================
/*function someThing(){
  var gotSomething = prompt('Type something.');
  console.log(gotSomething);
  console.log(typeof(gotSomething));

  if(!gotSomething){
    alert('you must type');
    someThing();

  }else{
    alert('Gezz! Its about Time'  );
    console.log(gotSomething);
  }
  /*if((gotSomething == "") || (gotSomething == null) ){
    console.log('its true');
  }*/


// someThing();

// ========================================================


// var colors = 'red, orange, yellow, green';
// console.log(colors.length);


/*var myFruits['apple', 'mango', 'cherry' ,'pomegranate' , 'watermelon']
var firstfruit = fruit[0];
var secondfruit = fruit[1];
var notAfruit = fruit[5];

console.log(firstFruits);
console.log(secondFruit);
console.log(notAfruit);*/


// ===================


/*var fruitColors = [];
var cherry = ['cherry', 'red'];
var banana = ['banana', 'yellow'];
var apple = ['apple', 'green'];

fruitColors.push(cherry);
fruitColors.push(banana);
fruitColors.push(apple);

console.log(fruitColors[0][1] + ',' + fruitColors[1] [1]);*/








// ==========================

/*var fruits = ['cherry', 'grapefruit', 'strawberry']
var lastFruits = fruits.pop();

console.log(lastFruit);
console.log(fruits);*/

// ====================


/*var fruits = ['cherry', 'grapefruit', 'strawberry', 'banana', 'coco']

var getFruit = fruits.splice(1,2, 'grapes', 'lolo');
console.log(getFruit);
console.log(fruits);*/


// =======================




//THIS IS THE FIRST TASK DONE!!!!!!!!!!!!!!////====================================
/*var numberFirst = parseInt(prompt('Pick a Number'));
var secondNumber= parseInt(prompt('Pick a Second Number'))

if (isNaN(numberFirst) || isNaN(secondNumber)){
  alert('You need to type in a Number.');
}else{
  var add = numberFirst + secondNumber;
  console.log(add);
  var times = alert(add * add );
}*/


//IT ENDS HERE11111111111111!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================

// PART 2222222222222222222222222222222222222222/////////////////////////

/*var letter = propmt('What is your name?');
function captalize(str){
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++){


    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStri[i].substring(1);
  }
  return splitStr.join("") + ".";
}

document.write(captalize(letter));*/


// It Ends HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// PART 3333333333333333333333333333333333333 BEGINS HERE//////////////////////

/*var atom = prompt("whats a good song?")
// this asks for user info
var splitAtom = atom.length / 2;
// i split the user info in half
if ((atom.length > 2) && isNaN(atom)) {
//the if statement is to make sure they don't put a number in and the what i'm asking from them
var flame = atom.substring(0,splitAtom);
// i pull the first half of a string under a new var
var rain = atom.substring(splitAtom);
//this is the second half of the string
console.log(rain + flame);
// then i pull the user info in backwards
}*/

// PART 4//////////////////////////////
// part 4 is like 2 i think except you add them together instead of finding the square root
/*var firstNum = parseInt(prompt('pick a number'));
var secondNum = parseInt(prompt('pick a second number'));
var thridNum = parseInt(prompt('pick a third number'));
var fourthNum = parseInt(prompt('pick a fourth number'));
if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thridNum) || isNaN(fourthNum)) {
alert("One of those is not a number!")
}else {
 var nums = firstNum + secondNum + thridNum + fourthNum;
 console.log(nums);}*/
///////////////My first javascript example!1

/*var mary = prompt('Mary’s mom has four children. Their names are north, south, east. What’s the fourth child’s name?');
if( mary === "Mary"){
  alert('You are correct!');
}else{
  alert('You are a Wrong!');
}
console.log(mary);
*/
/*var happy = prompt ("What would you like to do?");
var trim = happy.trim();
function something(){
    if(happy === ""){
      alert('Please write Something');
    }
}*/


// ==========The HOMEWORK===================================

var btn = document.getElementById('btn'),
input1 = document.getElementById('input1'),
input2 = document.getElementById('input2'),
input3 = document.getElementById('input3'),
input4 = document.getElementById('input4'),
input5 = document.getElementById('input5')
span = document.getElementById('span');
//console.log(btn);
btn.onclick = handleGoBtnClick;
function handleGoBtnClick(){

 //alert('does this work');
 //console.log(input1.value);
 //var userInput = input1.value;
 console.log(typeof input1);
 var val1 = input1.value,
     val2 = input2.value,
     val3 = input3.value,
     val4 = input4.value,
     val5 = input5.value;
 if(val1 === ""|| val2 === "" || val3 == "" || val4 == "" || val5 == ""){
   return '';
   //console.log('its blank');
 }
var fruits =[];
fruits.push(val1, val2, val3, val4, val5);
console.log(fruits);
for (var i = 0; i < fruits.length; i++) {
 if(fruits[0] === fruits[1] || fruits[0] === fruits[2] || fruits[0] === fruits[3] || fruits[0] === fruits[4]  ){
   alert('your first input matches another');
   var change1 = prompt("please put a change for input 1");
   if (change1 === false) {
     fruits[0] = val1 +"01";
   }
   fruits[0] = change1;
 }else if (fruits[1] === fruits[0] || fruits[1] === fruits[2] || fruits[1] === fruits[3] || fruits[1] === fruits[4]) {
   alert("your second input matches another");
   var change2 = prompt("please put a change for input 2");
   if (change2 === false) {
     fruits[1] = val2 + "01";
   }
   fruits[1] = change2;
 }else if (fruits[2] === fruits[1] || fruits[2] === fruits[0] || fruits[2] === fruits[3] || fruits[2] === fruits[4]) {
   alert("your 3rd input matches another");
   var change3 = prompt("please put a change for input 3");
   if (change3 === false) {
     fruits[2] = val3 + "01";
   }
   fruits[2] = change3;
 }else if (fruits[3] === fruits[1] || fruits[3] === fruits[2] || fruits[3] === fruits[0] || fruits[3] === fruits[4]) {
   alert("your 4th input matches another");
   var change4 = prompt("please put a change for input 4");
   if (change4 === false) {
     fruits[3] = val4 + "01";
   }
   fruits[3] = change4;
 }else if (fruits[4] === fruits[1] || fruits[4] === fruits[2] || fruits[4] === fruits[3] || fruits[4] === fruits[0]) {
   alert("your 5th input matches another");
   var change5 = prompt("please put a change for input 5");
   if (change5 === false) {
     fruits[4] = val5 + "01";
   }
   fruits[4] = change5;
 }else {
   console.log(fruits);
 }

}
span.innerHTML = fruits;

/*
5 inputs
go! buttion
onclick grab values of the 5 inputs
push into an array          ("hint") for loop
check for duplicates        "alert something"
switch()        /      if/elseif/else ---> inter.html
rose "red"; innerHTML

*/
