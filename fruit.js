var fruit = [{"apple":"red"}, {"pear":"green"},{"plum":"purple"},{"kiwi":"green"},{"strawberry":"red"}];

var num =[];
var color ={"thing":"1"};
var objNums={};
var counter = 1;
var temp;
var arry = [];

for ( var i=0; i<fruit.length; i++ ){

 Object.getOwnPropertyNames(fruit[i]).forEach(function(val, idx, array) {
//   console.log(val + ' -> ' + fruit[i][val]);
    num.push(fruit[i][val]);
});
}
  for (var i=0, j=num.length; i<j; i++ ) {
    objNums[num[i]] = (objNums[num[i]] || 0) + 1;

    console.log(objNums[num[i]]);
  console.log(objNums);
 }

