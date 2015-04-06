var express = require('express');

var app = express();
var port = process.env.PORT || 8888;

app.use(express.static(__dirname + '/production'));

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/production/index.html');
});

app.listen(port, function () {
	console.log('+-------------------------------------------+');
	console.log('| app started on localhost:' + port + '             |');
	console.log('+-------------------------------------------+');
});
