define(['src/syndicator/syndUrls'], function(syndUrls){
    return {
        SubscribeTo: function (syndUrl){
            return syndUrls.push(syndUrl);
        },
        List: function (){
            return syndUrls;
        }
    };
});
