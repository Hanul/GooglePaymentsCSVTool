require(process.env.UPPERCASE_PATH + '/LOAD.js');

BOOT({
	CONFIG : {
		isDevMode : true,
		defaultBoxName : 'GPCSVTool',
		webServerPort : 8131
	},
	NODE_CONFIG : {
		isNotUsingCPUClustering : true,
		dbName : 'GPCSVTool'
	}
});
