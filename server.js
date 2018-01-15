const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'));

var DepLinker = require('dep-linker');
DepLinker.copyDependenciesTo('./public/scripts')

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})