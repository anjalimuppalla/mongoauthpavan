require('dotenv').config();
const jwt = require('jsonwebtoken');
class create_jwt
{
    create_jwttoken(data)
    {
        return new Promise((resolve,reject)=>{
            let payload = {useremail:data.email} 
            let obtained_jwt = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{expiresIn:60*60});
            console.log(obtained_jwt);
            resolve(obtained_jwt);
        })
    }
}

module.exports = new create_jwt();