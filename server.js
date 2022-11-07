const myexpress = require('express')

const myapp = myexpress()

myapp.use(myexpress.static(__dirname + "/static"));

myapp.set('views', __dirname + '/views'); 

myapp.set('view engine', 'ejs');

myapp.get('/', function(request, response) {
    response.render('index'); 
  })
myapp.get('/autos', function(request, response) {
    response.render('autos'); 
  })

myapp.get('/gatos', function(request, response) {
    response.render('gatos'); 
  })

  myapp.get('/autos/nuevos', function(request, response) {
    response.render('formulario'); 
  })






myapp.listen(8000, function() {
    console.log('servidor ejecutandose en  http://localhost:8000');
});

