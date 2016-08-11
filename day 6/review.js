/*var getNum = parseInt(prompt('type a number'));

function pwrTwo(num1){
  if(!num1){
    return Nan;
  }
  return num1 * num1;
}*/
//alert(pwrTwo(getNum));




/// CHALLAGE 2//////
/*var getStr = prompt("type a sentence");
var result = capPeriodStr(getStr);

function capPeriodStr(str){
  var upped = str.charAt(0).toUpperCase() + str.slice(1);
  var lastChar = upped.length -1;
  console.log(str[lastChar]);
  if(lastChar !== '.'){
    return str + '.'
  }
  return str;
}
*/
//alert(res);


// CHALLANGE 3////////////////////////////////
/*
var getStr = prompt('type a sentence');
var flipped = flipThatStr(getStr);

function flipThatStr(str){
  if(!str){
    return '';
  }else if(str.length % 2 !== 0){
    var calc = Math.ceil(str.length / 2);
    var firstHalf = str.substring(0, str.length/2);
    var secondHalf = str.substring(calc);
    return secondHalf + firstHalf;
  }else{
    var firstHalf = str.substring(0, str.length/2);
    var secondHalf = str.substring(str.length/2);
    return secondHalf + firstHalf;
  }
}

alert(flipped);
*/



// =========WHILE LOOP================

/*var num = 0;
while(num < 10) {
  console.log(num);
  num++;
}
*/
// ==============While LOOP End=============

/*Do / While Loop*/
/*var num = 1;
do{
  console.log(num);
  num++;
}while(num < 1);
*/
// Do /While Loop End///



// THe FOR LOOP
/*for(var i = 0; i < 10; i++)
 console.log(i+0);
// Ends FOR LOOP

/*Continue KEYWoRD*/

/*var num = 0;
while(num < 10){
  if(num === 5 || num === 7){
    num++;
    continue;
  }
  console.log(num);
  num++;
}
/*BREAK KEYWORD*/
/*for(var i = 0; i < 10; i++){
  console.log(i);
  if(i === 6){
    break;
  }
}
/* ++++++++++++++ ARRAYS*/


var fruits = ['apple', 'banana' , 'grapes', 'mango', 'orange']
// console.log(fruits[3]);
for(var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}
