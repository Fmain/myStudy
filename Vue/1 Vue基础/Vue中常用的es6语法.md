# Vue中常用的es6语法

## 1.0 利用import...from...代替require()
```
	第一种方式: (导入一个css文件)
	es5语法:	require('site.css')
	es6语法:	import 'site.css'

	第二种方式: (导入一个js模块并且要接受一个对象)
	es5写法:	var calc = require('calc.js')
	es6写法:	import clac from 'cala.js'

	es6按需获取
	import {add} from './calc.js'

```

## 2.0 导出一个模块对象的写法
```
	es5语法:	
		module.exports={
			add:add,
			substrict:substrict
		}
	es6语法
		module.exports={
			add,
			substrict
		}
	注意点: es6这种写法必须是属性名和属性值变量是同一个,否则要分开
```

## 3.0 导出一个对象中方法的写法
```
	es5语法:
		module.exports={
			addFun:function(x,y){
				return x+y;
			}
		}
	es6语法:
		module.exports={
			addFun(x,y){
				return x+y;
			}
		}
```

## 4.0 导出对象的写法
```
例:calc.js中存在function add(){}和function substrict(){}两个方法

	//1.0 写法一
	es5语法:
		导出:
		module.exports.add = add;
		module.exports.substrict = substrict;
		使用:
		var calc = require('./calc.js');
	es6语法:
		export function add(){}
		export function substrict(){}
	
	//2.0 写法二
	es5语法:
		module.exports = {
			add:add,
			substrict:substrict
		}
	es6语法:
		expotr defaule{
			add,substrict
		}

	//表示去的calc.js中所有暴露出来的对象
	import calc from './calc.js'
	//只获取到calc.js中的add方法(按需获取)
	import {add} from './calc.js'
```

## 用export 和 import 的写法注意点
```
1. 如果模块中使使用 export default {} 方式导出的对象
	只能通过 import 对象名称 from '模块路径'
	不能通过 import {单个对象名称} from '模块路径'

2. 如果想用import {单个对象名称} from '模块路径' 通过这种方式按需获取导入对象中的某个属性,那么就应该使用 export 跟着要导出的对象或者方法名称
	export function add(){}
	export function substrct(){}
	那么就可以使用:
	import {add,substrct} from '模块路径'
	只需要直接使用 add()方法即可
	注意这里不能直接使用: import calc from '模块路径' 这种方法导入,会报错

```