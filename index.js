var argv = require('optimist').argv;
var requirejs = require('requirejs');

requirejs.config({
    baseUrl: __dirname,
	nodeRequire: require
});

var syndicator = requirejs('./src/syndicator/ednSyndicator')

var checkError = function(err, onError){
	if (err) {
		console.log("Error: " + err);
		onError();
	}
};

if (argv.subscribe){
	if(!argv.uri)
	{
		console.log('Invalid arguments. Subscribe requires the following:');
		console.log('--uri www.blah.com');
		return;
	}
	
	syndicator.Subscribe(argv.uri, function(err){
		checkError(err, function(){
			return;
		});
		console.log('subscribed to ' + argv.subscribe);
	});
}

if (argv.list){
	syndicator.List(function(err, items){
		checkError(err, function(){
			return;
		});
		
		console.log('syndicator has ' + items.length + ' items');

		for(var i = 0; i < items.length; i++){
			console.log(items[i]);
		}
	});		
}

if (argv.Sync){
	if(!argv.uri || !argv.rss)
	{
		console.log('Invalid arguments. Sync requires the following:');
		console.log('--uri --rss');
		return;
	}

	ednSyndicator.Sync(syndUrl, rss, function(err){
		checkError(err, function(){
			return;
		});
		
		checkError(err);
	});
}

if (argv.Read){
	if(!argv.uri)
	{
		console.log('Invalid arguments. Read requires the following:');
		console.log('--uri');
		return;
	}
	
	ednSyndicator.Read(syndUrl, function(err, result){
		checkError(err, function(){
			return;
		});
		
		console.log("URI:" + result.SyndUrl);
		console.log("Date:" + result.Date);
		console.log("Content:" + result.RSS);
	});
}