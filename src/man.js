var moduleA=require("./a");
var moduleB=require("./b");
console.log(moduleB)
moduleA.aa();
moduleB.bb();
console.log("aa");
function m(){
	console.log("来自main.js")
}
m();
require('./style.css');
require('./font/iconfont.css');