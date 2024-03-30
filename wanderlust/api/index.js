const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const User=require('./models/User.js')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

require('dotenv').config()
mongoose.set('strictQuery', false);
const app=express();
const bcryptSalt=bcrypt.genSaltSync(10);
const jwtSecret='bkdgbkbgkdbgkbvikbggkheuir';
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URl);
app.get('/',(req,res)=>{
    res.json("BROO I M BACKs")
})
app.post('/register',async(req,res)=>{
    const{name,email,password}=req.body;
   try{
    const user=await User.create({
        name,
        email,
        password:bcrypt.hashSync(password,bcryptSalt),
    });
    res.json(user);
   }catch (e){
res.status(422).json(e);
   }


})

app.post('/login', async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user){
       const passChck=bcrypt.compareSync(password,user.password)
    
    if(passChck){
jwt.sign({email:user.email, _id:user.id },jwtSecret,{},(err,token)=>{
if(err) throw err;
res.cookie('token',token).json(user);

})
    }
    else{
res.status(422).json("password incorrect")
    }
}
    else{
        res.json("Not found");
    }
})
app.listen(3000)