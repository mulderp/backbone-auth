define([
  'jquery',
  'underscore',
  'backbone',
  ], function($, _, Backbone) {

    var User = Backbone.Model.extend({
      isSignedIn : function() {
        return !this.isNew();
      },

      signIn: function(email, password, onFail, onSucceed) {
        console.log("sign in: " + email + ".. pswd:" + password);
        $.ajax({
          url       : 'http://0.0.0.0:9393/api/auth/new',
          type      : 'POST',
          dataType  : 'json',
        data      : { email : email, password : password },
        error     : onFail,
        success   : onSucceed,
        context   : this
      });
      return this;
    },

    signOut : function() {
      $.ajax({
        url       : 'http://0.0.0.0:9393/api/auth',
        type    : 'DELETE'
        }).done(function() {
          this.clear();
          this.trigger('signed-out');
        });
      }
    });

    return User;

  });
