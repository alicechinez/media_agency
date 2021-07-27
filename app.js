const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

// setting routes
app.get('/vpon', (req, res) => {
	res.render('vpon')
})
app.get('/clickforce', (req, res) => {
	res.render('clickforce')
})
app.get('/taoge', (req, res) => {
	res.render('taoge')
})
app.get('/', (req, res) => {
	res.render('adsbygoogle')
})

// listening
app.listen(port, () => {
	console.log(`The server is listening on http://localhost:${port}`)
})
