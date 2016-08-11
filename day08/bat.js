///This is a function that takes two numbers arguments and returns an ARRAY. The first number in the array should be the two numbeers added togther,and the second number in the array should be the two number multiplied togther.

function num2arr (num1,num2){
    return[num1+num2, num1*num2];
}
console.log(num2arr(5, 10));
//SSSSTTUUDDYYYY IT MMAX RAMOS/


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

//////////////////////THIS IS WHAT YOU MUST STUDY mAX RAmOs


///Create a function that takes a single character as an input and returns true is the chracter is capitalized and false if the chracter is lowercase.

function caseCompare (){
  var getChar = prompt('Please enter a letter. Uppercase ')
  if(getChar === getChar.toupperCase()){
    return true;
  }else{
    return false;
  }
}
console.log(caseCompare());

// =======STUDY MAX RAMOS=====================

//Create a function that takes a string as an input and returns an array of the chracter in the string.



function str2arr(){
  var arr = [];
  var getsStr = prompt('Please enter a word.');
  for(var i = 0; i < getStr.length; i++){
     arr.push(getStr[i]);
  }
    return arr;
}

console.log(str2arr() );

// ??????STUDY THIS MAX RAMOS MAYBE TRICKY?//

//Create a loop that prints out 1 - 100.
  //If a number is divisable by 3 , print "Fizz" instead of a number.
//  If a number is divisable by 5 , print "Buzz" instead of a number.
//  If a number is divisable by 3 and 5 , print "FizzBuzz" instead of a number.

  function fizzbuzz(){
    for(var i = 1; i <= 100; i++){
          //% this is a modulus
          if (i % 3 == 0 && i % 5 == 0){
            console.log('fizz');
          }else if(i % 3 == 0){
            console.log('buzz');
          }else if(i % 5 == 0){
            console.log('fuzzbuzz');
          }else{
            console.log(i);
          }
    }
  }
  console.log(fizzbuzz());




  // ++++++STUDY THIS MAX :)



  function addFunction(x, y){
    var z = x + y;
    return z;
  }

  var add = addFunction(5, 5);
  document.write(add);
