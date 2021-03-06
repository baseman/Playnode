define([
	'require', 
	'src/syndicator/data/provider/redis',
	'src/syndicator/ednSyndicator', 
	'src/syndicator/model/subscriptionModel'
], 
function(require, redis, ednSyndicator, subscriptionModel){
	
	require('mocha');
	require('should');
    
	
	return {
	    Run: function(){
		    describe('Edn', function(){
			  
			  var isSuccess = function(done, err){
				if (err) return done(err);
				done();
			  };
			  
			  beforeEach(function(done){
				redis.Init(function(err){
					isSuccess(done, err);
				});
			  });
			  
			  describe('#Syndicator', function(){
			  
			    var syndUrl = "http://www.blog.com/rss";
			    
				it("should be able to add subscriptions", function(done){
					ednSyndicator.Subscribe(syndUrl, function(err){
						isSuccess(done, err);
					});
				});

				var expected = subscriptionModel.Make(syndUrl, new Date());
			  
				it("should be able to list subscriptions", function(done){
					ednSyndicator.Subscribe(syndUrl, function(err){
						ednSyndicator.List(function(err, result){
							isSuccess(done, err);
							result[0].should.equal[expected.SyndUrl];
						});
					});
				});
				
				var rss = "<rss><item>1<item></rss>";
				it("should be able to sync blog feed", function(done){
					ednSyndicator.Sync(syndUrl, rss, function(err){
						var rss = "<rss><item>1<item><item>2<item></rss>";
						ednSyndicator.Sync(syndUrl, rss, function(err){
							isSuccess(done, err);
						});
					});
				});
				
				it("should be able to read blogs", function(done){
					ednSyndicator.Sync(syndUrl, rss, function(err){
						ednSyndicator.Read(syndUrl, function(err, result){
							isSuccess(done, err);
							result.SyndUrl.should.equal[syndUrl];
							result.Date.should.be.a('object');
							result.RSS.should.equal[rss];
						});
					});
				});
				
				it("should be able to remove subscriptions", function(done){
					ednSyndicator.Unsubscribe(syndUrl, function(err){
						ednSyndicator.List(function(err, result){
							result.length.should.equal[0];
							isSuccess(done, err);
						});
					});
				});
			});
		  });
		}
	};
});