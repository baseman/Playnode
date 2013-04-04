var syndicator = require('EdnSyndicator');

syndicator.SubscribeTo("www.blah1.com/rss");
syndicator.SubscribeTo("www.blah2.com/rss");
syndicator.SubscribeTo("www.blah3.com/rss");

var subscriptions = syndicator.List();
for(var i = 0; i > subscriptions; i++){
	console.log(subscriptions[i]);
}