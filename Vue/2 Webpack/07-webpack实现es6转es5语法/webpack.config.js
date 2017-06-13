//这个文件就是webpack的默认配置文件,默认名称为webpack.config.js
//将来只需要在cmd面板上执行,webpack就会自动查找webpack.config.js中的内容执行相关打包操作
module.exports = ({
	entry:'./main.js',//webpack要打包的源文件
	output:{
		path:'./dist/', //告诉webpack将来所有的打包文件都要放到这个目录下
		filename:'build.js' //打包以后输出的文件名称,./dist/build.js 代表在当前目录下输出
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:'style-loader!css-loader!autoprefixer-loader'},// 先执行css-loader,顺序不能颠倒
			{test:/\.js$/,loader:'babel-loader?presets[]=es2015',exclude:/node_modules/}//转换js文件中的es6语法,这种写法不推荐,exclude表示node_modules中的文件不转换
			{test:/\.less$/,loader:'style-loader!css-loader!autoprefixer-loader!less-loader'},
			{test:/\.scss$/,loader:'style-loader!css-loader!autoprefixer-loader!sass-loader'},
			{test:/\.(png|jpg|ttf)$/,loader:'url?limit=20000'},
		]
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime'] //为了保证变异.vue文件也能够正常
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'index', //生成的页面标题
			filename: 'index.html', //生成的文件名称
			template: 'index.html' //根据index.html这个模板来生成
		})
	]
})
