define([
  'jquery',
  'underscore',
  'backbone',
  'models/user',
  'text!../../templates/login.html'
  ], function($, _, Backbone, User, LoginViewTemplate) {

    var initialize = function() {
      console.log("application init");

      //      var user = new User();
      //      console.log(user);

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
         'submit': 'submit'
       },
       renderLogin: function(ev) {
         ev.preventDefault();

         var tmpl = _.template(LoginViewTemplate);
         this.$el.html(tmpl);
       },
       submit: function(ev) {
         ev.preventDefault();
         user = new User();
         user.signIn($("input#login").val(), $("input#password").val(), this.success, this.fail);
       },
       success: function() {
         console.log('success');
       },
       fail: function() {
         console.log('fail');
       },
       initialize: function() {
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

