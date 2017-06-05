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
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//module.exports = {
//	entry: {
//		mian: './src/script/main.js',
//		test: './src/script/test.js'
//	},
//	output: {
//		path: path.resolve(__dirname, './dist/js'),
//		filename: '[name]-[hash].js'    //区分文件有[name], [hash], [chunkhash]
//	}
//}


//使用plugins随机产生一个html
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//	entry: {
//		mian: './src/script/main.js',
//		test: './src/script/test.js'
//	},
//	output: {
//		path: path.resolve(__dirname, './dist/js'),
//		filename: '[name]-[hash].js'    //区分文件有[name], [hash], [chunkhash]
//	},
//	plugins: [
//		new htmlWebpackPlugin()
//	]
//}


//使用plugins将根目录下面html打包产生一个固定的html
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//	entry: {
//		mian: './src/script/main.js',
//		test: './src/script/test.js'
//	},
//	output: {
//		path: path.resolve(__dirname, './dist/js'),
//		filename: '[name]-[hash].js'    //区分文件有[name], [hash], [chunkhash]
//	},
//	plugins: [
//		new htmlWebpackPlugin({
//			template: 'index.html'
//		})
//	]
//}


//使用plugins将生成的js和css文件分类
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//	entry: {
//		mian: './src/script/main.js',
//		test: './src/script/test.js'
//	},
//	output: {
//		path: path.resolve(__dirname, './dist'),
//		filename: 'js/[name]-[hash].js'    //区分文件有[name], [hash], [chunkhash]
//	},
//	plugins: [
//		new htmlWebpackPlugin({
//			template: 'index.html'
//		})
//	]
//}


//使用html-webpack-plugin这种plugins的更多options和使用htmlWebpackPlugin.files.chunks.模块名.entry
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//	entry: {
//		mian: './src/script/main.js',
//		test: './src/script/test.js'
//	},
//	output: {
//		path: path.resolve(__dirname, './dist'),
//		filename: 'js/[name]-[hash].js'    //区分文件有[name], [hash], [chunkhash]
//	},
//	plugins: [
//		new htmlWebpackPlugin({
//		  	filename: 'index-[hash].html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			inject: 'body',    //打包生成的js,css和其他东西插入的位置
//			title: 'i am girl'
//		})
//	]
//}


// 用publicPath配置打包后生成线上地址
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//	entry: {
//		mian: './src/script/main.js',
//		test: './src/script/test.js'
//	},
//	output: {
//		path: path.resolve(__dirname, './dist'),
//		publicPath: 'https://cdn.example.com/',
//		filename: 'js/[name]-[hash].js'    //区分文件有[name], [hash], [chunkhash]
//	},
//	plugins: [
//		new htmlWebpackPlugin({
//		  	filename: 'index-[hash].html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			inject: false,    //打包生成的js,css和其他东西插入的位置
//			title: 'i am girl'
//		})
//	]
//}

// 多页面打包
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//	entry: {
//		a: './src/script/a.js',
//		b: './src/script/b.js',
//		c: './src/script/c.js',
//		d: './src/script/d.js'
//	},
//	output: {
//		path: path.resolve(__dirname, './dist'),
//		filename: 'js/[name].js'    //区分文件有[name], [hash], [chunkhash]
//	},
//	plugins: [
//		new htmlWebpackPlugin({
//		  	filename: 'a.html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			title: '我是a'
//		}),
//		new htmlWebpackPlugin({
//		  	filename: 'b.html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			title: '我是b'
//		}),
//		new htmlWebpackPlugin({
//		  	filename: 'c.html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			title: '我是c'
//		}),
//		new htmlWebpackPlugin({
//		  	filename: 'd.html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			title: '我是d'
//		})
//	]
//}


// 给打包生成的html指定固定的chunks载入
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//	entry: {
//		a: './src/script/a.js',
//		b: './src/script/b.js',
//		c: './src/script/c.js',
//		d: './src/script/d.js'
//	},
//	output: {
//		path: path.resolve(__dirname, './dist'),
//		filename: 'js/[name].js'    //区分文件有[name], [hash], [chunkhash]
//	},
//	plugins: [
//		new htmlWebpackPlugin({
//		  	filename: 'a.html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			title: '我是a',
//			chunks: ['a']  //注意是数组
//		}),
//		new htmlWebpackPlugin({
//		  	filename: 'b.html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			title: '我是b',
//			chunks: ['b']
//		}),
//		new htmlWebpackPlugin({
//		  	filename: 'c.html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			title: '我是c',
//			chunks: ['c']
//		}),
//		new htmlWebpackPlugin({
//		  	filename: 'd.html', //生成的文件名字
//			template: 'index.html',  //生成文件的 模板
//			title: '我是d',
//			chunks: ['d']
//		})
//	]
//}


// 给打包生成的html排除某些的chunks载入
var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js',
		d: './src/script/d.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/[name].js'    //区分文件有[name], [hash], [chunkhash]
	},
	plugins: [
		new htmlWebpackPlugin({
		  	filename: 'a.html', //生成的文件名字
			template: 'index.html',  //生成文件的 模板
			title: '我是a',
			excludeChunks: ['b', 'c', 'd']  //注意是数组
		}),
		new htmlWebpackPlugin({
		  	filename: 'b.html', //生成的文件名字
			template: 'index.html',  //生成文件的 模板
			title: '我是b',
			excludeChunks: ['a', 'c', 'd']  //注意是数组
		}),
		new htmlWebpackPlugin({
		  	filename: 'c.html', //生成的文件名字
			template: 'index.html',  //生成文件的 模板
			title: '我是c',
			excludeChunks: ['a', 'b', 'd']  //注意是数组
		}),
		new htmlWebpackPlugin({
		  	filename: 'd.html', //生成的文件名字
			template: 'index.html',  //生成文件的 模板
			title: '我是d',
			excludeChunks: ['a', 'b', 'c']  //注意是数组
		})
	]
}









