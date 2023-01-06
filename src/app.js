const express = require('express')
const request = require('request')
const app = express();
const generators = require('./utils/generator.js');

// generators(979)
const  countries = [
    country = {
    usa:'United States',
    cnd:'Canada',
    rsn:'Russia',
    uk:'United Kingdom',
    agt:'Argentina',
    ngn:'Nigeria'

}
]



// countries.forEach(countr => {
//     // console.log(countr.usa)
//     const keys = countr.filter(searchCountry => {
//         if (searchCountry != 'myn') {
//             cons
//         }
//     })
// });
// const keys = countries.filter()
const numbers = [
    {
        countries:'usa',
        city: 'Arizona',
        numberType:'chatBot',
        numb: "+1-908-888-0908"
    }
]


console.log(numbers)
app.get('/welcome', (req, res)=>{
    // res.send("Hello friend");
    // const mynum = 
    const input = req.query.search;
    const countri = countries.filter((countr) =>{
        if (    countr != input) {
            const error = {
                        error:'No search found!'
                    }
                    res.send(error)
        }else{
            res.send()
        }
    })
    // numbers.forEach(element => {
        // console.log(element.countries)
        // if (element.countries == input) {
        
        //     const value = generators(input)
        //     // res.send({
        //     //     number: value
        //     // })
        //     res.send(numbers)
        // }
        // else{
        //     const error = {
        //         error:'No search found!'
        //     }
        //     res.send(error)
        // }
    // });
    // const numbArray = numbers.find(function(country)=>{

    // })
   
    const number = req.query.num
    // res.send(number)

   
})


// console.log(generator(094849489))
app.listen(4000, ()=> console.log('Listening to port 4000'))