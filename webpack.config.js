const webpack = require('webpack');

module.exports = {

    entry: { news : './js/models/news.js'},
     output: {
         path: './build',
         publicPath: "./build/",
         filename: 'app.bundle.js',
         libraryTarget: 'var',
    	 library: 'News'
     },

     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
      		 presets: ['es2015','react']
    		}
         },
		 
		 {
		  test: /\.css$/,
		  loader: "style!css" 
		 },

		{
		 test: /\.png$/,
		 loader: "url-loader?mimetype=image/jpg",
		 query: {
		 	limit: 10000
		 }
		}
         ]
     },

	plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),

        new webpack.DefinePlugin({
    	ShowArtcileLanguage: false
})
    ],

      devServer: {
      	host: "localhost",
      	port: 8000,
        contentBase: "./build"
    }

}