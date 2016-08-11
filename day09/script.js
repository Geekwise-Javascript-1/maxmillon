// METHOD


/*var myCar = {
  make: 'Jeep',
  model: 'Wrangler',
  year: 2000,
  color: 'red'
};


var me = {
  name:'Max',
  sayName:function(name){
    alert(this.name);
  }
}
*/
// +++++++=FRUITS SALAD BELOW+++++=
/*
var fruits = ['apple',
  'mango', 'strawberry'];


function displayFruit(){
  console.log(fruits);
}
function addFruit(fruit){
  fruits.push(fruit);
  displayFruit();
}

function changeFruit(position,value){
  fruits[position] = value;
  displayFruit();
}
function deleteFruit(position){
  fruits.splice(position, 1);
  displayFruit();

}
*/
// +++++++++++++++++FUNCTION IS THE TOP+++++++++++++++++++++++++++
// ++++++++++++++++++++METHOD IS AT THE BOTTOM++++++++++++++++

var fruitList = {
    fruits: ['apples', 'kiwi', 'bananas'],
    displayFruit:function(){
      console.log(this.fruits);
    },
    addFruit: function(fruit){
      this.fruits.push(fruit);
      this.displayFruit();
    },
    changeFruit: function(postion, value){
      this.fruits[postion] = value;
      this.displayFruit();
    },
     deleteFruit:function (postion){
      this.fruits.splice(postion, 1);
      this.displayFruit();
    }
};
