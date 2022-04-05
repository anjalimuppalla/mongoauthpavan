const usersModel = require('../Models/users_schema_model');
const encService = require('./encryptionService');

class registration {
  async registeruserfunction(data) {
    return new Promise(async (resolve, reject) => {
      let encpwd = await encService.encrypting(data.password);
      data.password = encpwd;
      var user1 = new usersModel(data)
      user1.save()
        .then((user) => {
          console.log("data inserted");
          console.log(user);
          resolve(1);
        })
        .catch((error) => {
          console.log(error);
        })
    })
  }
}

module.exports = new registration();

