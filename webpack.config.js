var webpack = require('webpack');
var path = require("path");

	
var config = {
	
	entry: {
        dashboard: './resources/assets/js/routers',
    },

	output: {
        path: path.join(__dirname, "/public/js"),
        filename: "[name].bundle.js"
    },
	
	module: {
        loaders: [
            {
				test: /(\.jsx?)$/,  
				loader: "babel",  
				exclude: /(node_modules|bower_components)/,
				query: {  
					presets: ["es2015", "react"],
                    compact: false
				}
			}
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
}

module.exports = config;