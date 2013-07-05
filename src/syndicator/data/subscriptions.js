define([
	'require', 
	'src/syndicator/data/provider/redis'
], function(require, provider){
    
	var blogKey = "blogroll";
	
	return {
		Add: function(syndUrl, onAdded){
			provider.Connect(function(client, close){
				client.sadd(blogKey, syndUrl, function(result){
					close();
					onAdded(result);
				});
			});
		},
		Get: function(onGet){
			provider.Connect(function(client, close){
			
				client.smembers(blogKey, function(err, result){
					close();
					onGet(err, result);
				});
			});
        }
	};
});