var requirejs = require('requirejs');

requirejs.config({
    baseUrl: __dirname,
	nodeRequire: require
});

var ednSyndicatorTests = requirejs('./test/syndicator/ednSyndicatorTests')

ednSyndicatorTests.Run();