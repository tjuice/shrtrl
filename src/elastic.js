var elastical = require('elastical');
var http = require("http");


var server = http.createServer(function(request, response) {
  var key = request.url.substring(1,request.url.length);
  console.log('incoming request:'+key);
  var client = new elastical.Client();

  client.get('short', key, function (err, doc, res) {
  	if(res._source != undefined) {
    	response.writeHead(301, {"Location": res._source.url});
    	response.end();
	} else {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end();
	}
  });

});

server.listen(8080);
