/*
* @Author: Marte
* @Date:   2017-06-09 03:16:05
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-09 03:17:01
*/
/*
contentBase : 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录。
port ：设置默认监听端口，如果省略，默认为”8080″
inline : 设置为true，当源文件改变时会自动刷新页面
colors ： 设置为true，使终端输出的文件为彩色的
historyApiFallback ：在开发单页时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
host ： 主机地址，如果是开发本机搭建，需要使用本机IP地址，否则会报错。
 */
module.exports = {
    entry: __dirname + '/main.js',
    output: {
        path: __dirname + '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './', //本地服务器所加载的页面所在的目录
        host: '192.168.1.158', //本地IP地址
        colors: true, //终端输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        port: '3333' //端口号

    }
}