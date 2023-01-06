const path = require('path');

const express = require('express');
const hbs = require('hbs');
const app = express();

//Define path for express configuration
const viewPaths = path.join(__dirname, '/templates/views')
const publicDirectoryPath = path.join(__dirname, '/public');
// console.log(publicDirectoryPath)

// Setup partials path 
const partialsPath = path.join(__dirname, '/templates/partials')

// Setup handlebars engine and views location 
app.set('view engine', 'hbs');
app.set('views', viewPaths)

// register partials using hbs
hbs.registerPartials(partialsPath)

// Setup static directory to serve 
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather',
        footer_title: 'Weather Forecast',
        name:'Michael Scott',
        contact: 'hello@scottified.com'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Us',
        name: 'Michael Scott',
        footer_title:'Weather App'
    })
})

const email = "hello@scottified.com";
app.get('/help', (req, res)=>{
    res.render('help', {
        title:'Contact Support',
        contact: email,
        name: 'Michael Scott',
        footer_title:'Weather App'
    })
})
app.get('/weather', (req, res)=>{
    if (!req.query.address) {
         res.send({
            error:'Please enter address term'
        })

    }
        res.send({
            forecast:'The weather is kind of hot',
            location:'No 11 ugboroke warri',
            time: "3:30",
            address: req.query.address
        })

   
});


// 404 pages 
// setup a route to handle 404 errors 
app.get('/help/*', (req, res)=>{
    res.render('error', {
        title: 404,
        name: 'Michael Scott',
        errorMessage:'Help article not found',
        footer_title:'Weather App'
    })
});

app.get('/products', (req, res)=>{

        if (!req.query.product) {
            res.send({
                
                    error:'Please provide product term',
            })
        }

        const query = req.query.product;
        console.log(query);
        res.send({
            product: []
        })
})
app.get('*', (req, res)=>{
    res.render('error', {
        title: 404,
        name: 'Michael Scott',
        errorMessage:'Page not found',
        footer_title:'Weather App'
    })
})
// app.com
// app.com/help 
// app.com/about  

app.listen(3000, ()=>{
    console.log('Listening to port 3000');
})