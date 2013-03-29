require.config({

	paths: {
		jquery: '/js/libs/jquery/jquery',
		underscore: '/js/libs/underscore/underscore',
		backbone: '/js/libs/backbone/backbone',
        //spinner: 'libs/spinner',
		text: '/js/libs/require/text'
	},


	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
        },
        isotope: {
			deps: ["jquery"],
			exports: "isotope"
        }
	}

});

require(['app'],
function(App){
	

	// Start Backbone history a necessary step for bookmarkable URL's
	
	App.initialize();
	
});
