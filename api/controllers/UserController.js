/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
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
    
  
    edit: function (req,res) {
    	console.log(req.user);
        res.view({
            user: req.user
        });

    },

    update: function (req, res, next) {
	    
	    var userObj = {
	    	name: req.param('name'),
	    	company: req.param('company'),
	    	location: req.param('location'),
	    	hireable: req.param('hireable'),
	        bio: req.param('bio'),
	    }
		   
	    User.update(req.param('id'), userObj, function userUpdated (err) {

	  		if (err) {
	  			return res.redirect('/user/edit/' + req.param('id'));
	  		}

	  		res.redirect('/user/edit/' + req.param('id'));
	  	});
    },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
