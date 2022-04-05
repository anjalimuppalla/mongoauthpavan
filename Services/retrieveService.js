const jwt = require('jsonwebtoken');
const usersModel = require('../Models/users_schema_model');
class retrieveService
{
    retrieve(token)
    {
        return new Promise((resolve,reject)=>{
            let data={};
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,datafromtoken)=>{
                if(err)
                {
                    console.log("verification failed");
                    resolve("Cannot update data");
                }
                else
                {
                    console.log(datafromtoken);
                    let email = datafromtoken.useremail;
                    let payload = {email:email}
                    usersModel.find(payload,{password:0}).then((result)=>{
                        console.log(result);
                        resolve(result);
                    })
                }
            })
        })
    }

    retrieveall()
    {
        return new Promise((resolve,reject)=>{
            usersModel.find({},{password:0}).then((result)=>{
                console.log(result);
                resolve(result);
            })
        })
    }
}

module.exports = new retrieveService();