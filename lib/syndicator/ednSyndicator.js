SyndUrls = [];

function SubscribeTo(syndUrl){
   return SyndUrls.push(syndUrl);
}

function List(syndUrl){
   return SyndUrls;
}

module.exports = SubscribeTo
module.exports = List

require('should')

describe('EdnSyndicator', function(){
  it("should be able to add", function(){
    SubscribeTo("www.blah.com/rss").should.be[SyndUrls[0]];
  });

  it("should be able to list", function(){
    List().should.be[SyndUrls];
  });
});