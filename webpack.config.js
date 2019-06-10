module.exports = {
	entry: "./dev/js/app.js" ,
	output: {
		path : __dirname + "/src/js" ,
		filename: "bundle.min.js"
	} , 
	module : {
		rules : [
		    	    { 	
				exclude : /(node_modules)/ ,
		   		loader: "babel-loader" ,
		   		query :{
					presets: ["@babel/preset-env","@babel/react"]
				}
		 	    }
	     		]
	},
	watch:true
}
