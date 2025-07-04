import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect =  async(req,res,next) =>{
    const authHeader= req.headers.authorization;

    if(!authHeader?.startsWith('Bearer')){
        return res.status(401).json({message:'Unauthorized: No token'});
    }

    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET||'shreyasecret');
        
        req.user=await User.findById(decoded.userId);
        if(!req.user){
            return res.status(401).json({message:'Unauthorized: Invalid user'});
        }
        next();
    }catch(e){
        res.status(201).json({message:'Unauthorized: Token error'});
    }
};