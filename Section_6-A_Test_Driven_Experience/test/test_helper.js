const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //default promise implementation
								
//only executed one time		
before( (done) => { 
										  //create a database with the name below	
	mongoose.connect('mongodb://localhost/users_test');
	mongoose.connection
		.once('open', () => { done(); } )
		//done() => don't execute test until the connection is success
		.on('error', (error) => { 
			console.warn('Error', error);
		});

});




//function executed before all tests
beforeEach( (done) => {

	mongoose.connection.collections.users.drop( () => {
		// ready to run the next tests
		done();
	});
});
