//这个文件就是webpack的默认配置文件,默认名称为webpack.config.js
//将来只需要在cmd面板上执行,webpack就会自动查找webpack.config.js中的内容执行相关打包操作
module.exports = ({
	entry:'./main.js',//webpack要打包的源文件
	output:{
		filename:'./build.js' //打包以后输出的文件名称,./代表在当前目录下输出
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:'style-loader!css-loader!autoprefixer-loader'},// 先执行css-loader,顺序不能颠倒
			{test:/\.less$/,loader:'style-loader!css-loader!autoprefixer-loader!less-loader'},
			{test:/\.scss$/,loader:'style-loader!css-loader!autoprefixer-loader!sass-loader'},
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?limit: 10000'//limit值不能太大,否则会导致build.js文件过大影响性能
      }
		]
	}
})
