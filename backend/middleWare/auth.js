// const jwt = require('jsonwebtoken')

// function authenticationToken(req , res , next){
//     const token = req.headers['authorization'];
//     if(!token){
//         return res.status(401).send("Access denied");
//     }
//     jwt.verify(token , process.env.JWT_SECRET , (error , user)=>{
//         if(error){
//             return res.status(403).send("Invalid Token");
//         }
//         req.user = user ;
//         next()
//     });
// };


// function authorizeRole(...roles){
//     return(req , res, next)=>{
//         if(!roles.includles(req.user.role) || req.user.role !== 'admin'){
//             return res.status(404).send("Access deined!!!")
//         }
//         next()
//     }
// }


// module.exports = {authenticationToken , authorizeRole}