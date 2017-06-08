/*
* @Author: Marte
* @Date:   2017-06-09 02:18:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-09 02:29:11
*/

module.exports=({
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'}
        ]
    }
})