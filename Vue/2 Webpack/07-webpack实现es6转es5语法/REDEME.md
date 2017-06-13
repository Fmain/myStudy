# webpack实现es6转es5语法
	步骤:
		1. cnpm install 安装package.json中的包
		2. 安装相关依赖包
			cnpm install babel-core babel-loader babel-preset-es2015 babel-plugin-transform-runtime --save-dev 
		3. 配置webpack.config.js添加

			{test:/\.js$/,loader:'babel?presets[]=es2015'}
		4. 调用webpack即可执行
