define([
  'jquery',
  'underscore',
  'backbone',
  'channel',
  'models/user',
  'text!../../templates/login.html'
  ], function($, _, Backbone, channel, User, LoginViewTemplate) {

    var initialize = function() {
      console.log("application init");

      var AppRouter = Backbone.Router.extend({
        routes: {
          '': 'showMain',
          '/dahsboard': 'showPrivate',
          }}
        );

        var LoginView = Backbone.View.extend({
          el: '#login',
          events: {
            'click a.show-login': 'renderLogin',
            'click a#hide': 'hideLogin',
            'submit': 'submit'
          },
          renderLogin: function(ev) {
            ev.preventDefault();

            var tmpl = _.template(LoginViewTemplate);
            this.$el.html(tmpl);
          },
          renderUser: function(user) {
            console.log(user);
            this.$el.html("logged in: " + user.username);
          },
          hideLogin: function(ev) {
            ev.preventDefault();
            console.log("hide");
            this.$el.html('<a class="show-login" href="#">login</a>');
          },
          submit: function(ev) {
            ev.preventDefault();
            user = new User();
            user.signIn($("input#login").val(), $("input#password").val(), user.success, this.fail);
          },
          fail: function() {
            console.log('fail');
          },
          initialize: function() {
            that = this;
            channel.on("user:authenticated", function(user) {
              that.renderUser(user);
            });
          }
        });

        loginView = new LoginView();
        // Initiate the router
        var app_router = new AppRouter();

        Backbone.history.start();
      }

      return {
        initialize: initialize
      }

    });

