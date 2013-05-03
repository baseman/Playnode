define(['require'], function(require){
    var redis = require('redis')
	client = redis.createClient();
	
	client.on("error", function (err) {
        console.log("Error " + err);
    });
		
	return {
		Add: function(syndUrl){
		    return client.hmset("bloglist", "syndUrl", syndUrl, "date", new Date());
		},
		Get: function(){
		    return client.hgetall("bloglist");
		}
	};
});