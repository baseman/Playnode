define(['src/syndicator/syndUrls'], function(syndUrls){
    return {
        SubscribeTo: function (syndUrl){
            return syndUrls.push(syndUrl);
        },
        List: function (syndUrl){
            return syndUrls;
        }
    };
	
    //module.exports = SubscribeTo
    //module.exports = List
	
	//return ednSyndicator;
});