define([
	'require', 
	'src/syndicator/data/provider/redis', 
	'src/syndicator/model/subscriptionModel'
], function(require, provider, subscriptionModel){
    var redis = require('redis');
	
	return {
		Save: function(syndUrl, rss, onSaved){
			provider.Connect(function(client, close){
				client.hmset(syndUrl, "Date", new Date(), "RSS", rss, function(err){
					close();
					onSaved(err);
				});
			});
		},
		Get: function(syndUrl, action){
			provider.Connect(function(client, close){
				client.hgetall(syndUrl, function(err, result){
					close();
					var subscription = subscriptionModel.Make(syndUrl, result.Date, result.RSS);
					action(err, subscription);
				});
			});
        }
	};
});