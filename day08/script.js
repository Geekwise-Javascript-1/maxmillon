 var body = document.querySelector('body');
var a = document.createElement("a");

a.textContent = "I'm a link to Google";

//a.setAttribute("href", "http://www.google.com");
a.href = "http://yahoo.com";

//console.log(a);

document.body.appendChild(a);

//$Recycle.Bin\
document.body.appendChild(a);
setTimeout(function()
{document.body.removeChild(a);}, 2000);



 a.setAttribute('style', 'background-color: red; color:white;');
a.style.backgroundColor = 'green'*/

//
// var h1 = document.querySelector('h1');
// var  anchor = document.createElement('a');
// anchor.textContent = "Click Here";
// anchor.href = "http://apple.com";
// anchor.target = "_blank";
// h1.appendChild(ba);

// ++++++++++++++++++++++


function e(elementType, text, attributes, styles) {
  // Complete the function
  var el = document.createElement(elementType);
  el.textContext = text;

  for(var i = 0; i < attributes.length; i++){
    var attr = attributes[i];
    el.setattribute(attr[0], attr[1]);
  }

  for(var j = 0; j < styles.length; j++){
    var style = styles[j];
    el.style[style[0]] = style[1];
  }


  return el;             //This is the element
}


var a = e("a", "link to google", [['href', "http://www.google.com"],['target', '_blank']] [['color', "red"] [font-size]);

document.body.appendChild(a);
