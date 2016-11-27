const webpack = require('webpack');

module.exports = {

    entry: './js/models/news.js',
     output: {
         path: './build',
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
      		 presets: ['es2015']
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
    	ShowArtcileLanguage: true
})
    ],

      devServer: {
      	host: "localhost",
      	port: 8000,
        contentBase: "./build"
    }

}