var argv = require('optimist').argv;
var requirejs = require('requirejs');

requirejs.config({
    baseUrl: __dirname,
	nodeRequire: require
});

var syndicator = requirejs('./src/syndicator/ednSyndicator')

if (argv.subscribe){
    syndicator.SubscribeTo(argv.subscribe)
    //console.log('subscribed to ' + argv.subscribe)
}

if(argv.list){
    var items = syndicator.List(function(err, obj){
		console.log(obj);
	});
    //console.log('syndicator has ' + items.length + ' items');

    //for(var i = 0; i < items.length; i++){
	//    console.log(items[i]);
    //}
}


