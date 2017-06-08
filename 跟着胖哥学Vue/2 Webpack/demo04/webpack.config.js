/*
* @Author: Marte
* @Date:   2017-06-09 02:40:25
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-09 02:47:24
*/

module.exports={
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
    module:{
        loaders:[{
            test:/\.(png|jpg)$/,loader:'url-loader?limit=209341W'
        }]
    }
}