//想使用calc.js中的addFun方法,需要先请求
var calcExports = require('./calc.js');
//为了是css文件能够被打包,所以在入口文件中使用一下
//或者在入口文件所依赖的其他文件中有使用也可以
require('./site.css');

//1 获取页面上的按钮和文本框对象
var oV1 = document.getElementById('v1');
var oV2 = document.getElementById('v2');
var oBt = document.getElementById('bt');
var oRe = document.getElementById('re');
var aInput = document.getElementsByTagName('input');

console.log(aInput.length);
for (var i = 0; i < aInput.length; i++) {
	aInput[i].onfocus = function () {
		this.value = ''
	}
}

//在oBt上挂在一个click事件
oBt.onclick = function () {
	oRe.value = Number(oV1.value) + Number(oV2.value);
}


//然后在请求的名称下,使用addFun方法
console.log(calcExports.addFun(1,2));