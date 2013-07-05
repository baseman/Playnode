define([], function(){

	return {
		Make : function(syndUrl, dateStr, rss){
			var val = {
				SyndUrl : syndUrl,
				Date : new Date(dateStr),
				RSS : rss
			};
			
			return val;
		}
	};
});