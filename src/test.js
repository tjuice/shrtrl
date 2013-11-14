var elastical = require('elastical');
var client = new elastical.Client();

// Specify the index name, document type, and document to index.
client.index('short', 'url', 'blabla', {
    url : "http://www.sport1.de"
}, function (err, res) {
    // `err` is an Error, or `null` on success.
    // `res` is the parsed ElasticSearch response data.
});