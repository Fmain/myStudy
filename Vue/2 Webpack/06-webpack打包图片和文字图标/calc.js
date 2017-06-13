//定义一个add方法
function add(x,y) {
	return x + y;
}
//提供接口addFun给外部使用
module.exports = {
	addFun:add
}