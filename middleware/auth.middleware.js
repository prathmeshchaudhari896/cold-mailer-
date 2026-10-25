import jwt from 'jsonwebtoken';
import User from '../model/auth.model.js';

export const authmiddleware = async(req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.decode(token, process.env.JWT_SECRET);
        console.log("decoded:", process.env.JWT_SECRET);
        const user=await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({
                msg : "user not found",
            })
        }
            req.user=user;
            next();
    } catch (error) {
       console.log("auth middleware error:", error.message);
        return res.status(401).json({
            msg : "token is required",
            error : error
        })
    }
}