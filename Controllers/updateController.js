const updateService = require('../Services/updateService');

class updateController 
{
    async updatedata(req, res) 
    {
        try
        {
            //console.log(req.headers['token']);
            let updateddata = await updateService.updateuser(req.headers['token'],req.body);
            res.json({message:"details updated successfully"});
        }
        catch (error) 
        {
            console.log(error);
            res.json({ message: 'Unable to update users data' });
        }
    }
}
module.exports = new updateController();


