var express = require ( 'express' )
// sort prototype style creates a new 
var app = express ( )

// app.get('/', function (request, response) {
// 	response.send('/index.html')
// })

app.use(express.static( './' ))
// app.use(express.static('/public'));

app.listen ( 3000 )