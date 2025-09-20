const {WebHook} = require('svix'); 
const User = require('../models/User.js') 

// api controller to manage clerk user with db

export const ClerkWebhook = async (req, res) => {
    try {
        const whook = new WebHook(process.env.CLERK_WEBHOOK_SECRET);
        await whook.verify(JSON.stringify(req.body),{
            'svix-id': req.headers['svix-id'],
            'svix-timestamp': req.headers['svix-timestamp'],
            'svix-signature': req.headers['svix-signature'] 
        }); // verify the webhook
        

        const {data, type} = req.body;

        switch (type) {
            case 'user.created':{
                const UserData = {
                    _id: data.id,
                    email:data.email_address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url
                }
                await User.userModel.create(UserData);
                res.json({})
                break
            }
                
            case 'user.updated':{
                const UserData = {
                    email:data.email_address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url
                }
                await User.userModel.findByIdAndUpdate(data.id, UserData);
                res.json({})
                break 
            }

            case 'user.deleted':{
                await User.userModel.findByIdAndDelete(data.id);
                res.json({})
                break
            }
        
            default:
                break;
        }


    } catch (error) {
        res.json({
            success: false ,
            message: error.message
        })
        
    }
}
