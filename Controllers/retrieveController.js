const retrieveService = require('../Services/retrieveService');
class retrieveController 
{
    async retrievedata(req, res) 
    {
        try
        {
            let retrievedddata = await retrieveService.retrieve(req.headers['token']);
            res.json(retrievedddata);
        }
        catch (error)
        {
            console.log(error);
            res.json({ message: 'Unable to retrieve' });
        }
    }
    async retrieve_allusers(req, res) 
    {
        try
        {
            let retrievedddata = await retrieveService.retrieveall();
            res.json(retrievedddata);
        }
        catch (error)
        {
            console.log(error);
            res.json({ message: 'Unable to retrieve' });
        }
    }}
module.exports = new retrieveController();