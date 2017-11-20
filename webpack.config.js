var webpack = require('webpack');
var path = require('path');
module.exports = {
	context: path.join(__dirname),
    entry: "./src/js/root.js",
  	module: {
	    loaders: [
	      {
	        test: /\.js?$/,
	        exclude: /(node_modules)/,
	        loader: 'babel-loader',
	        query: {
	          presets: ['react', 'es2015']
	        }
	      },
            {
                test: /\.css$/,
              loader:'style-loader!css-loader',
            }
	    ]
  	},
    devServer: {
        contentBase: "./",
        historyApiFallback: true,
        hot:true,
        inline: true // 实时刷新
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
	  output: {
	    path: __dirname+"/src/",
	    filename: "bundle.js",
		  publicPath: '/src'
	  },
};