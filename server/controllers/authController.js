import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup= async (req,res)=>{
    const{username,password}=req.body;
    try{
        const hashed= await bcrypt.hash(password,10);
        const user= await User.create({username,password:hashed});
        res.status(201).json({message:'User created'});

    }
    catch(e){
        res.status(400).json({error:e.message});
    }
};

export const login = async(req,res)=>{
    const {username,password}= req.body;
    try{
        const user = await User.findOne({ username});
        if(!user) return res.status(404).json({ error: 'User not found' });

        const match= await bcrypt.compare(password,user.password);
        if(!match)return res.status(404).json({error:'wrong password'});
    
        const token = jwt.sign(
            {userId:user._id}, 
            process.env.JWT_SECRET || 'shreyasecret', 
            { expiresIn: '1h' }
        );
        res.json({token});

    }

    catch(e){
        res.status(500).json({ error: e.message });
    }

};