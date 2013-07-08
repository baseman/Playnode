define(['src/syndicator/data/subscriptions', 'src/syndicator/data/blogs'], function(subscriptions, blogs){

	return {
		Subscribe: function (syndUrl, onSubscribed){
			subscriptions.Add(syndUrl, onSubscribed);
        },
		Unsubscribe: function (syndUrl, onUnsubscribed){
			subscriptions.Remove(syndUrl, onUnsubscribed);
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