//用babel-loader将js文件转义为浏览器可识别的js
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//	entry: {
//		app: './src/app.js',
//	},
//	output: {
//		path: path.resolve(__dirname, './dist'),
//		filename: 'js/[name].bundle.js'    //区分文件有[name], [hash], [chunkhash]
//	},
//	module: {
//		rules: [
//		    {
//		      test: /\.js$/,   //用正则匹配找到所有的js文件
//		      exclude: /node_modules/,  //排除node_modules文件下js
//		      use: {
//		        loader: 'babel-loader',  //使用babel-loader处理找到js文件
//		        options: {      //采用babel-loader的"es2015"规则将找的js为浏览器可识别的js
//		          presets: ["es2015"],
//		          plugins: ["transform-remove-strict-mode"]
//		        }
//		      }
//		    }
//		]
//	},
//	plugins: [
//		new htmlWebpackPlugin({
//		  	filename: 'index.html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			inject: 'body',    //打包生成的js,css和其他东西插入的位置
//			title: 'i am girl'
//		})
//	]
//}


//用package.json配置babel里面的参数打包
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//	entry: {
//		app: './src/app.js',
//	},
//	output: {
//		path: path.resolve(__dirname, './dist'),
//		filename: 'js/[name].bundle.js'    //区分文件有[name], [hash], [chunkhash]
//	},
//	module: {
//		rules: [
//		    {
//		      test: /\.js$/,   //用正则匹配找到所有的js文件
//		      exclude: /node_modules/,  //排除node_modules文件下js
//		      use: {
//		        loader: 'babel-loader'
//		      }
//		    }
//		]
//	},
//	plugins: [
//		new htmlWebpackPlugin({
//			filename: 'index.html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			inject: 'body',    //打包生成的js,css和其他东西插入的位置
//			title: 'i am girl'
//		})
//	]
//}


//用.babelrc结尾的文件配置后打包
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//	entry: {
//		app: './src/app.js',
//	},
//	output: {
//		path: path.resolve(__dirname, './dist'),
//		filename: 'js/[name].bundle.js'    //区分文件有[name], [hash], [chunkhash]
//	},
//	module: {
//		rules: [
//		    {
//		      test: /\.js$/,   //用正则匹配找到所有的js文件
//		      exclude: /node_modules/,  //排除node_modules文件下js
//		      use: {
//		        loader: 'babel-loader'
//		      }
//		    }
//		]
//	},
//	plugins: [
//		new htmlWebpackPlugin({
//			filename: 'index.html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			inject: 'body',    //打包生成的js,css和其他东西插入的位置
//			title: 'i am girl'
//		})
//	]
//}


//优化打包时间
var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		app: './src/app.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].bundle.js'    //区分文件有[name], [hash], [chunkhash]
	},
	module: {
		rules: [
		    {
		      test: /\.js$/,   //用正则匹配找到所有的js文件
		      include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
		      exclude: path.resolve(__dirname, 'node_modules'),  //排除node_modules文件下js，注意需是绝对路径
		      use: {
		        loader: 'babel-loader'
		      }
		    }
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html', //生成的文件名字
			template: 'index.html',  //生成文件的 模板
			inject: 'body',    //打包生成的js,css和其他东西插入的位置
			title: 'i am girl'
		})
	]
}