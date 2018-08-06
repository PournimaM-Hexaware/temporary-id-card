// var twilio =require('twilio')
class Messenger{

    

    sendSms(msg,callback){
        console.log("inside sms module");
        var accountSid = process.env.accountSid; // Your Account SID from www.twilio.com/console
        var authToken = process.env.authToken;   // Your Auth Token from www.twilio.com/console
        // var msg="Onetime password (OTP) for your TPIN request over google assistant is 546700. this is usable once & valid for 15 mins from the request.PLEASE DO NOT SHARE WITH ANYONE."
        const client = require ('twilio')(accountSid,authToken);
        client.messages.create({
            to: process.env.to , // Text this number
            from: process.env.from, // From a valid Twilio number
            body: msg
        })
        .catch(function(err) {
            console.log(err);
        })
        .then((message) =>{
            console.log(message.sid,message.status);
            // console.log("Message sent")
            callback(message);
        })
      
    }
}


module.exports = Messenger;
