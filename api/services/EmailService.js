// EmailService.js
var nodemailer = require("nodemailer");
exports.sendInviteEmail = function(options) {
	console.log('[EmailService] sendInviteEmail 1');
	var smtpTransport = nodemailer.createTransport("SMTP",{
	    service: "Gmail",
	    auth: {
	        user: "tim@steamboatlabs.com", //Gmail Email
	        pass: "11monkey" //Password
	    }

	    // host: "smtpout.blahblah.net", // hostname
	    // secureConnection: false, // use SSL
	    // port: 80, // port for secure SMTP
	    // auth: {
	    //     user: "email",
	    //     pass: "password"
	    // }
	});
	// console.log(options);
	/**
		var subject = req.param("subject");
        var from = req.param("from");
        var to = req.param("to");
        var body = req.param("body");

		// 

	**/
	var mailOptions = {
	    from: options.from, // sender address
	    to: options.to, // list of receivers
	    subject: "Btown Hackers message: " + options.subject, // Subject line
	    text: "Btown Hackers Message: " + options.body,// plaintext body
	    html: '<h1 style="text-align:center;">Btown Hacker Message!</h1><br />' +  options.body// html body
	}
    smtpTransport.sendMail(mailOptions, function(error, response){
    	console.log('[EmailService] sendInviteEmail 3');
	    if(error){
	        console.log(error);
	    }else{
	        console.log("Message sent: " + response.message);
	    }
	    // if you don't want to use this transport object anymore, uncomment following line
	    //smtpTransport.close(); // shut down the connection pool, no more messages
	    // smtpTransport.close();
	});
	smtpTransport.close();
};