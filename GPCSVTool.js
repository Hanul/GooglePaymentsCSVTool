require(process.env.UPPERCASE_PATH + '/BOOT.js');

BOOT({
	CONFIG : {
		isDevMode : true,
		defaultBoxName : 'GPCSVTool',
		webServerPort : 8131
	},
	NODE_CONFIG : {
		isNotUsingCPUClustering : true,
		dbName : 'GPCSVTool-test'
	}
});
