# webpack打包less文件
	步骤:
		1. cnpm install 安装package.json中的包
		2. cnpm install less-loader less --save-dev 安装less依赖包
		3. 配置webpack.config.js添加
			{test:/\.less$/,loader:'style-loader!css-loader!autoprefixer-loader!less-loader'}
		4. 调用webpack即可执行
