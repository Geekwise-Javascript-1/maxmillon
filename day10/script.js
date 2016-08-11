/*var btn = document.querySelectorAll('button');

for(var i = 0; i < btn.length; i++){

btn[i].addEventListener('click', function(){
    alert(this.dataset.response);
    });

    btn[i].addEventListener('mouseover', function(){
      this.style.color = 'magenta';
    });

    btn[i].addEventListener('mouseout', function(){
      this.style.color = 'black';
    })
}
*/
// +++++++++++++++++++++++
/*
var btn = document.querySelectorAll('button');
var a = document.querySelector('a');

for(var i = 0; i < btn.length; i++){
btn[i],addEventListner('click', changeColor);
a.addEventListener('click', removeColor);
function changeColor(){
  document.body.style.backgroundColor = this.id;
}
function removeColor(){
  var ranNum = Math.floor ((Math.random() * 3) + 1);
  console.log(ranNum);
  btn[ranNum]. removeEveryListener('click', function(){});

}
*/


 var btns = document.querySelectorAll('button');
var anchor = document.querySelector('a');

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', changeColor);
}

anchor.addEventListener('click', removeChange);

function changeColor(){
    document.body.style.backgroundColor = this.id;
}

function removeChange(){
    var ranNum = Math.floor((Math.random() * 3));
    btns[ranNum].removeEventListener('click', changeColor);
}
