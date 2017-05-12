 var PORT_NUMBER = 3000;
 var http = require('http');
 var fs =require('fs');
 var path = require('path');
 var mime = require('mime');
 var url =require('url');

var server = http.createServer(function(request, response) {
var filePath=false;
if(request.url=='/'){

filePath = 'public/index.html';

}else if(request.url=='/cam'){
    filePath = 'public/cam.html';
}else if(request.url=='/node_modules'){
       filePath = 'node_modules';
}else if(request.url=='/get_two_photos'){
    filePath = 'public/get_two_photos.html';
}else{

filePath = 'public' + url.parse(request.url).pathname;
}
var absPath='./'+filePath;

serveStatic(response, absPath);
}
);

server.listen(PORT_NUMBER, function() {

 console.log("Server listening on port "+PORT_NUMBER);

});
function serveStatic(response, absPath) {
	fs.exists(absPath,function(exists){
if (exists) {

fs.readFile(absPath, function(err, data) {
if (err) { send404(response);
} else {

sendFile(response, absPath, data);
}
});
} else {

 send404(response);

} });
}
function send404(response) {

	response.writeHead(404, {'Content-Type':'text/plain'});

response.write('Error 404:resource not found.'); response.end();

}
function sendFile(response, filePath, fileContents) {


response.writeHead(
	200,
   {"content-type": mime.lookup(path.basename(filePath)) }
   );
 response.end(fileContents);
}
