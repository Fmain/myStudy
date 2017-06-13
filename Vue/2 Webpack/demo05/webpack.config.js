/*
* @Author: Marte
* @Date:   2017-06-09 02:57:51
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-09 03:10:10
*/
var webpack = require('webpack');
module.exports={
    entry: './main.js',
    output:{
        path: __dirname+'/',
        filename:'bundle.js'
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}