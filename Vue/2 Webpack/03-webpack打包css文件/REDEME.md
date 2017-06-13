# webpack本身是不支持css打包,它其实是加载相关的loader来进行不同文件的打包处理,其中要想打包css就必须依赖于style-loader和css-loader
	步骤:
		0. 
		1. 利用npm安装好style-loader和css-loader
		2. 在webpack.config.js中配置一下style-loader和css-loader,并且顺序一定是style-loader再是css-loader
		3. 调用webpack即可执行

	补充:
		1. 用cnpm init 初始化一个package.json文件
		2. 利用cnpm install style-loader css-loader --save-dev将这两个包在package.json中管理起来,将来就算这个项目中的包删除了
		3. 只需要利用cnpm install这个指令将package.json文件中存在的包自动安装好即可

autoprefixer-loader
	作用: 
		可以自动在打包过程中将css写法加上不同浏览器内核的前缀,达到不同浏览器的兼容
	步骤: 
		1. cnpm install autoprefixer-loader --save-dev
		2. 在webpack.config.js的css设定loader的地方,增加autoprefixer-loader的字符即可,注意点:autoprefixer-loader必须放在style-loader!css-loader后面
		3.在cmd中执行webpack打包