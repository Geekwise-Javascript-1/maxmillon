// Create a <button> tag that prompts the user to enter their phone number

var btn = document.createElement('button');
btn.textContent = 'Click ME';
document.body.appendChild(btn);
// btn.className = "classname";

function getNumber(){
  var msg = prompt('Type in your phone NUmber');
  console.log(msg);
}

btn.onclick = getNumber;
// ================================================
