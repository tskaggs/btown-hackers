/**
 * HomeController
 *
 * @module      :: Controller
 * @description :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    index: function (req,res)
    {

        console.log(req.user);
        User.find(function foundUsers (err, users) {
            if (err) return next(err);

            res.view({
                user: req.user,
                users: users
            });
        });

        // console.log(req.user);
        // res.view({
        //     user: req.user,
        //     users: {}
        // });
    },

    sendmail:function(req, res) {
        console.log('[EmailService] sendmail is running!');
        var subject = req.param("subject");
        var from = req.param("from");
        var to = req.param("to");
        var body = req.param("body");
        EmailService.sendInviteEmail({subject: subject, to: to, from: from, body: body});
      },


    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to AuthController)
     */
    _config: {}


};
