define([
  'jquery',
  'underscore',
  'backbone',
  'channel'
  ], function($, _, Backbone, channel) {

    var User = Backbone.Model.extend({
      isSignedIn : function() {
        return !this.isNew();
      },

      signIn: function(email, password, onSucceed, onFail) {
        console.log("sign in: " + email + ".. pswd:" + password);
        $.ajax({
          url       : 'http://0.0.0.0:9292/api/auth/new',
          type      : 'POST',
          dataType  : 'json',
        data      : { email : email, password : password },
        error     : onFail,
        success   : onSucceed,
        context   : this
      });
      return this;
    },
    success: function(data) {
      console.log(data);
      this.username = data.username;
      this.auth = true;
      channel.trigger("user:authenticated", this);
    },
    parse: function(data) {
      console.log(data);
      console.log("****");

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
