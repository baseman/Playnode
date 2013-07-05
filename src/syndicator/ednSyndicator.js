define(['src/syndicator/data/subscriptions', 'src/syndicator/data/blogs'], function(subscriptions, blogs){

	return {
		SubscribeTo: function (syndUrl, onSubscribed){
			subscriptions.Add(syndUrl, onSubscribed);
        },
        List: function (onList){
			subscriptions.Get(onList);
        },
		Sync: function (syndUrl, rss, onSynced){
			blogs.Save(syndUrl, rss, onSynced);
        },
        Read: function (syndUrl, onRead){
			blogs.Get(syndUrl, onRead);
        }
    };
});