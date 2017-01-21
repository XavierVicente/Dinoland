Template.game.events({
"click a#logout":function(event,template){
		event.preventDefault();
		//propiedad package bootstraps-3-modal mostrar Template
		Modal.show('logout');

	},

"click a#home":function(event,template){
		event.preventDefault();

		Router.go('/');
		},
"click a#logreg":function(event,template){
		event.preventDefault();
		Modal.show('register'); // abrimos template register
	},

"click a#proyecto":function(event,template){
		event.preventDefault();

		Router.go('proyecto');
		}


});


Template.game.helpers({

	prueba : function(event,template){
		event.preventDefault();
		var no = Router.go('HomeLogin');
		return no;
	}
});