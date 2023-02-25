const Express = require('express')
const app = Express()
const handlebars = require('express-handlebars')
//Configurar o handlebars
// Template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.get("/", function (req, res) {
    res.render('layouts/main')

})
app.get("/form", function (req, res) {
    res.render('layouts/metodopost')

})
//Abaixo o verbo POST
app.post("/paginapost", function (req, res) {
   res.send('Página so pode ser vista pela chamada post')

})
app.listen(3260, function () {
    console.log('ok')
}
)