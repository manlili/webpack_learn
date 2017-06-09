//使用html-loader
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//entry: {
//  app: './src/app.js',
//},
//output: {
//  path: path.resolve(__dirname, './dist'),
//  filename: 'js/[name].bundle.js' //区分文件有[name], [hash], [chunkhash]
//},
//module: {
//  rules: [{
//    test: /\.js$/, //用正则匹配找到所有的js文件
//    include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
//    exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
//    use: {loader: 'babel-loader'}
//  },
//  {
//    test: /\.css$/,
//    include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
//    exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
//    use: [
//    	{loader: 'style-loader'}, //注意先后顺序，一般都要先用css-loader处理完然后用style-loader生成style标签,但webpack读取的顺序是从右到左
//      {loader: 'css-loader'}
//    ]
//  },
//  {
//    test: /\.html$/,
//    use: {loader: 'html-loader'}
//  }
//]
//},
//plugins: [
//  new htmlWebpackPlugin({
//    filename: 'index.html', //生成的文件名字
//    template: 'index.html', //生成文件的 模板
//    inject: 'body', //打包生成的js,css和其他东西插入的位置
//    title: 'i am girl',
//    inject: 'body'
//  })
//]
//}


//使用ejs-loader
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//entry: {
//  app: './src/app.js',
//},
//output: {
//  path: path.resolve(__dirname, './dist'),
//  filename: 'js/[name].bundle.js' //区分文件有[name], [hash], [chunkhash]
//},
//module: {
//  rules: [{
//    test: /\.js$/, //用正则匹配找到所有的js文件
//    include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
//    exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
//    use: {loader: 'babel-loader'}
//  },
//  {
//    test: /\.css$/,
//    include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
//    exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
//    use: [
//    	{loader: 'style-loader'}, //注意先后顺序，一般都要先用css-loader处理完然后用style-loader生成style标签,但webpack读取的顺序是从右到左
//      {loader: 'css-loader'}
//    ]
//  },
//  {
//    test: /\.html$/,
//    use: {loader: 'ejs-loader'}
//  }
//]
//},
//plugins: [
//  new htmlWebpackPlugin({
//    filename: 'index.html', //生成的文件名字
//    template: 'index.html', //生成文件的 模板
//    inject: 'body', //打包生成的js,css和其他东西插入的位置
//    title: 'i am girl',
//    inject: 'body'
//  })
//]
//}


//使用file-loader
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//entry: {
//  app: './src/app.js',
//},
//output: {
//  path: path.resolve(__dirname, './dist'),
//  filename: 'js/[name].bundle.js' //区分文件有[name], [hash], [chunkhash]
//},
//module: {
//  rules: [{
//    test: /\.js$/, //用正则匹配找到所有的js文件
//    include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
//    exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
//    use: {loader: 'babel-loader'}
//  },
//  {
//    test: /\.css$/,
//    include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
//    exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
//    use: [
//    	{loader: 'style-loader'}, //注意先后顺序，一般都要先用css-loader处理完然后用style-loader生成style标签,但webpack读取的顺序是从右到左
//      {loader: 'css-loader'}
//    ]
//  },
//  {
//    test: /\.html$/,
//    use: {loader: 'ejs-loader'}
//  },
//  {
//    test: /\.(jpg|png|gif|svg)$/,
//    use: {
//    	loader: 'file-loader?name=asset/[hash].[ext]'
//    }
//  }
//]
//},
//plugins: [
//  new htmlWebpackPlugin({
//    filename: 'index.html', //生成的文件名字
//    template: 'index.html', //生成文件的 模板
//    inject: 'body', //打包生成的js,css和其他东西插入的位置
//    title: 'i am girl',
//    inject: 'body'
//  })
//]
//}


//使用url-loader
//var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
//var htmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
//	entry: {
//	    app: './src/app.js',
//	},
//	output: {
//	    path: path.resolve(__dirname, './dist'),
//	    filename: 'js/[name].bundle.js' //区分文件有[name], [hash], [chunkhash]
//	},
//	module: {
//	    rules: [{
//	      test: /\.js$/, //用正则匹配找到所有的js文件
//	      include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
//	      exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
//	      use: {loader: 'babel-loader'}
//	    },
//	    {
//	      test: /\.css$/,
//	      include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
//	      exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
//	      use: [
//	      	{loader: 'style-loader'}, //注意先后顺序，一般都要先用css-loader处理完然后用style-loader生成style标签,但webpack读取的顺序是从右到左
//	        {loader: 'css-loader'}
//	      ]
//	    },
//	    {
//	      test: /\.html$/,
//	      use: {loader: 'ejs-loader'}
//	    },
//	    {
//	      test: /\.(jpg|png|gif|svg)$/,
//	      use: {
//	      	loader: 'url-loader?limit=30000!'
//	      }
//	    }
//	]
//	},
//	plugins: [
//	    new htmlWebpackPlugin({
//	      filename: 'index.html', //生成的文件名字
//	      template: 'index.html', //生成文件的 模板
//	      inject: 'body', //打包生成的js,css和其他东西插入的位置
//	      title: 'i am girl',
//	      inject: 'body'
//	    })
//	]
//}


//使用img-loader
var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
	    app: './src/app.js',
	},
	output: {
	    path: path.resolve(__dirname, './dist'),
	    filename: 'js/[name].bundle.js' //区分文件有[name], [hash], [chunkhash]
	},
	module: {
	    rules: [{
	      test: /\.js$/, //用正则匹配找到所有的js文件
	      include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
	      exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
	      use: {loader: 'babel-loader'}
	    },
	    {
	      test: /\.css$/,
	      include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
	      exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
	      use: [
	      	{loader: 'style-loader'}, //注意先后顺序，一般都要先用css-loader处理完然后用style-loader生成style标签,但webpack读取的顺序是从右到左
	        {loader: 'css-loader'}
	      ]
	    },
	    {
	      test: /\.html$/,
	      use: {loader: 'ejs-loader'}
	    },
	    {
	      test: /\.(jpg|png|gif|svg)$/,
	      use: [
		      {loader: 'file-loader?name=asset/[hash].[ext]'},
		      {loader: 'img-loader'}
	      ]
	    }
	]
	},
	plugins: [
	    new htmlWebpackPlugin({
	      filename: 'index.html', //生成的文件名字
	      template: 'index.html', //生成文件的 模板
	      inject: 'body', //打包生成的js,css和其他东西插入的位置
	      title: 'i am girl',
	      inject: 'body'
	    })
	]
}