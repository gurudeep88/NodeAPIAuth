const router=require('express').Router();
const User=require('../model/User');

router.get('/', async (req, res)=>{
    res.send('We are on user');
});
router.get('/', (req, res)=>{
    console.log('bodypost');
    
})
router.post('/register', async (req, res)=>{
    console.log('body',req.body);
    const user=new User({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password
    });
    
        try{
            const savedUser=await user.save();
            console.log(savedUser);
            
            res.send(savedUser);
            
        }catch(err){
            res.status(400).send(err);
            console.log(err);
            
        }
})

module.exports=router;