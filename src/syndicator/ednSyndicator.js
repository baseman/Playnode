define(['src/syndicator/syndUrls'], function(syndUrls){
    return {
        SubscribeTo: function (syndUrl){
            return syndUrls.Add(syndUrl);
        },
        List: function (action){
            return syndUrls.Get(action);
        }
    };
});
