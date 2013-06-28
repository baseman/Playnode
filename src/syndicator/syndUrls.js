define(['require'], function(require){
    var redis = require('redis');
	client = redis.createClient();
	
	var actions = [];
	
	var perform = function(action){
		actions.push(action);
	};
	
	client.on("ready", function () {
		for (i in actions){
			actions[i]();
		}
    });
	
	client.on("error", function (err) {
		console.log("Error " + err);
		client.end();
    });
		
	return {
		Add: function(syndUrl){
			perform(function(){
				client.hmset("bloglist", "syndUrl", syndUrl, "date", new Date());
				client.end();
			});
		},
		Get: function(action){
		    perform(function(){
			    client.hgetall("bloglist", function(err, obj){
				    action(err, obj);					
					client.end();
				});
			});
        }
	};
});