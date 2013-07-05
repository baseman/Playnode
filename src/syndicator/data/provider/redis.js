define(['require'], function(require){
    var redis = require('redis');
	
	var connect = function(onReady){
		var client = redis.createClient();
		client.on("ready", function () {
			onReady(client, function(){
				client.end();
			});
		});
		
		client.on("error", function (err) {
			client.end();
			console.log("Error " + err);
		});
	};
	
	return {
		Connect: connect,
		Init: function(onInit){
			connect(function(client, close){
				client.flushdb();
				onInit();
				close();
			})
		}
	};
});