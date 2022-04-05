require('dotenv').config();
const usersModel = require("../Models/users_schema_model");
const jwt = require('jsonwebtoken');

class updateService
{
    updateuser(token,data)
    {
        return new Promise((resolve,reject)=>{
            console.log(token);
            console.log(data);
            // let key = Object.keys(data)[0]
            if('password' in data || 'email' in data )
            {
            delete data.password
            delete data.email
            }
            // verifying token and extracting data which we gave to create jwt token
            let email = {};
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,datafromtoken)=>{
                if(err)
                {
                    console.log("verification failed");
                    resolve("Cannot update data");
                }
                else
                {
                    console.log(datafromtoken);
                    email = datafromtoken;
                    console.log(email.useremail);
                    let z = email.useremail;
                    let filter = {email:z};
                    usersModel.findOneAndUpdate(filter,data).then((result)=>{
                    console.log(result);
                    resolve(result);
                    })
                }
            })
        })
    }
}

module.exports = new updateService();