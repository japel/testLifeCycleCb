/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:function(req,res){
    var params = req.allParams();
    User.create(params)
      .exec(function(error,user){
        res.ok(user);
      });
  },
  update:function(req,res){
    var params = req.allParams();

    User.update(params.id,params)
      .exec(function(error,user){
        res.ok(user);
      });

  }
};

