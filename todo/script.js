// Each item should look like this:
//<li><input type="checkbox" />
function updateItemStatus(){
  var cbId = this.id.replace("cb_", "");
  var itemText = document.getElementById("item_" + cbId);

  if(this.checked){
      itemText.className = "checked";
  }else{
      itemText.className = "";
  }
}

function renameItem(){
  //This == span
  var newText = prompt("What should this item be renamed to?");

  if (!newText || newText == "" || newText == " ") {
      return false;
  }

  this.innerText = newText;
}

function removeItem(){
  // this == span

this.style.display = "none";
}



function addNewItem(list, itemText){
    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var listItem = document.createElement('li');
    listItem.id = "li_" + id;
    listItem.onblclick = removeItem;

    var checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.id = "cb_" + id;
    checkBox.onclick = updateItemStatus;

     var deleteBtn = document.createElement('button');
     deleteBtn.textContent = 'delete me';

      //deleteBtn.onclick = removeItem;
    // var btns = document.getElementsByTagName('button');
    // console.log(btns);
    // for(var i = 0; i < btns.length; i++){
    //   btns[i].addEventListener('click', deleteBtnClick);
    // }




    var span = document.createElement('span');
    span.id = "item_" + id;
    span.innerText = itemText;
    span.onclick = renameItem;
      listItem.appendChild(checkBox);
      listItem.appendChild(span);
      listItem.appendChild(deleteBtn);
      list.appendChild(listItem);


}

var ul = document.getElementById('todoList');
/* Add an event listener to the button ONLY when you hover over an item */
ul.addEventListener('mouseover', hoverItem);
ul.addEventListener('mouseout', hoverOutItem);
function hoverItem(e){
  e.target.lastChild.addEventListener('click', deleteBtnClick);
}
/* Removes the listener after you mouseout of the item */
function hoverOutItem(e){
  e.target.removeEventListener('click', deleteBtnClick);
}
function deleteBtnClick(e){
  console.log(e.target);
  e.target.parentElement.remove();
}

var totalItems = 0;
var inItemText = document.getElementById("inItemText");
inItemText.focus();
inItemText.onkeyup = function(event){
  //events.which (13) -> ENTER
  //Only proceed if key press is ENTER Key
  if (event.which == 13){
    var itemText = inItemText.value;
    if (  itemText == "" || itemText == " ") {

    }
      addNewItem(ul, itemText);

      inItemText.focus();
      inItemText.select();
  }
};










/*function get_todos() {
   var todos = new Array;
   var todos_str = localStorage.getItem('todo');
   if (todos_str !== null) {
       todos = JSON.parse(todos_str);
   }
   return todos;
}

function add() {
   var task = document.getElementById('task').value;

   var todos = get_todos();
   todos.push(task);
   localStorage.setItem('todo', JSON.stringify(todos));

   show();

   return false;
}

function remove() {
   var id = this.getAttribute('id');
   var todos = get_todos();
   todos.splice(id, 1);
   localStorage.setItem('todo', JSON.stringify(todos));

   show();

   return false;
}

function show() {
   var todos = get_todos();

   var html = '<ul>';
   for(var i=0; i<todos.length; i++) {
       html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
   };
   html += '</ul>';

   document.getElementById('todos').innerHTML = html;

   var buttons = document.getElementsByClassName('remove');
   for (var i=0; i < buttons.length; i++) {
       buttons[i].addEventListener('click', remove);
   };
}

document.getElementById('add').addEventListener('click', add);
show();

*/





// want textbox
// push array
// move items
// remove items
// clear out
// check box
// special slash
// empty orderlist
// add nothing
