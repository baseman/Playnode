define(['require', 'src/syndicator/syndUrls', 'src/syndicator/ednSyndicator'], function(require, syndUrls, ednSyndicator){
    require('should');
    return {
	     Run: function(){ 
		    describe('EdnSyndicator', function(){
              it("should be able to add", function(){
                ednSyndicator.SubscribeTo("www.blah.com/rss").should.be[syndUrls[0]];
              });

              it("should be able to list", function(){
                ednSyndicator.List().should.be[syndUrls];
              });
            });
		}
	};    
});