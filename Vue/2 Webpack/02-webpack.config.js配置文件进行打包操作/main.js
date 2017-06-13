//想使用calc.js中的addFun方法,需要先请求
var calcExports = require('./calc.js');
//然后在请求的名称下,使用addFun方法
console.log(calcExports.addFun(1,2));