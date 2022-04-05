const loginService = require('../Services/loginService');

class loginController
{
async logging_in(req,res)// function named registering
{
    try
    {
        let jwttoken =  await loginService.authentication(req.body);  
        if(jwttoken)
        {
            res.status(200).json({message: 'authentication done for the existed user','token': jwttoken});
        }
        else
        {
            res.json({message:'user with given credentials doesnt exist'});
        }    
    }
    catch(error)
    {
        console.log(error);
        res.json({ message: 'Unable to perform Authentication' });
    } 
}
}

module.exports = new loginController();