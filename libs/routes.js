Router.onBeforeAction(function(){

//si no esta log
	if(!Meteor.userId()){
		//va a la ruta homeLogin
		this.render('HomeLogin');
		
		//finalizar el proceso de la peticion
		this.next();
	}
// si esta log
	else{
		//si esta en la ruta homeLogin llevalo a la ruta 
		if(Router.current().route.getName() === 'HomeLogin'){
			Router.go('game');
		}
		
		this.next();
	}
});

Router.configure({
  layoutTemplate: 'PageMaster',
  //notFoundTemplate: 'notFoundTemplate', 

});


Router.route('/', function () {
  this.render('HomeLogin');
});


Router.route('/HomeLogin', function () {
  this.render('HomeLogin');
});

Router.route('/proyecto', function(){
	this.render('proyecto')
});



Router.route('/game', function () {
  this.layout('game');
  this.render('dinoGame');
});


