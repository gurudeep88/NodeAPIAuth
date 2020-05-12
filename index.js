const express=require('express');
var app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');


//Import Routers
const authRoutes=require('./routes/auth');

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>console.log('connected to db'));

//Middlewares
app.use(function(req, res, next){
    console.log('req body before', req.body);

    next();  
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req, res, next){
    console.log('req body after', req.body, req.query);  
    next();
});

//Route Middlewares
app.use('/api/user', authRoutes);

app.get('/', (req, res)=>{
    console.log(req.query);
    
})

app.listen(3000, ()=>{
    console.log('Server Up and Running');
    
})