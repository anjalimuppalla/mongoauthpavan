const usersModel = require('../Models/users_schema_model');
const bcrypt = require('bcryptjs');
const create_jwt = require('../Services/create_jwttokenService'); 

class loginService {
    authentication(data) {
        return new Promise((resolve, reject) => {
            console.log("email:",data.email);
            usersModel.find({ email: data.email }).then((extracted_row) => {
                console.log("extractedrow:",extracted_row);
                let pwd = data.password;
                let hash = extracted_row[0].password;
                console.log(hash);
                bcrypt.compare(pwd, hash, async(err, result)=> {
                    if (result) {
                        console.log("Authenticated user");
                        let jwt_token = await create_jwt.create_jwttoken(data);
                        resolve(jwt_token);
                    }
                    else {
                        console.log("Not an Authenticated user");
                        resolve(0);
                    }
                });
            })
        })
    }
}

module.exports = new loginService();