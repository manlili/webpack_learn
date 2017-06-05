//将单个文件打包生成一个文件的配置
//var path = require("path");  //webpack升级到2.0以后，路径需要引用这个模块
//module.exports = {
//	entry: './src/script/main.js',
//	output: {
//		path: path.resolve(__dirname, './dist/js'),
//		filename: 'bundle.js'
//	}
//}


//将多个文件打包生成一个文件的配置
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//module.exports = {
//	entry: ['./src/script/main.js', "./src/script/test.js"],
//	output: {
//		path: path.resolve(__dirname, './dist/js'),
//		filename: 'bundle.js'
//	}
//}


//将多个文件打包生成多个文件的配置
var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
module.exports = {
	entry: {
		mian: './src/script/main.js',
		test: './src/script/test.js'
	},
	output: {
		path: path.resolve(__dirname, './dist/js'),
		filename: '[name]-[hash].js'    //区分文件有[name], [hash], [chunkhash]
	}
}