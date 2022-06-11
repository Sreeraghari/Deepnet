const express=require('express')

const cors=require('cors')

const app=express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

const dataservice=require('./Services/Dataservice')
app.use(express.json())

app.post('/register', (req, res) => {
    dataservice.register(req.body.name, req.body.email, req.body.password,req.body.place)
        .then(result => {
            res.status(result.statuscode).json(result);

        })

})

app.post('/login', (req, res) => {
    dataservice.login(req.body.email, req.body.password)
        .then(result => {
            res.status(result.statuscode).json(result);

        })
})


// app.listen(5000,()=>{
//     console.log("Server started at port number 5000");
// })
app.listen(5000, ()=>{
        console.log("Server started at port number 5000");

})


