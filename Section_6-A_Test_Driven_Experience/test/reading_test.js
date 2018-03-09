const assert = require('assert');
const User = require('../src/user');


describe('Reading users', () => {

	let joe;

	beforeEach((done) => {
		joe = new User({name : 'Joe'});
		joe.save()
			.then(() => done());
	});


	it('Find all users with name of joe', (done) => {
		//find returns array of record
		User.find({ name: 'Joe'})
			.then((users) => {
				console.log(users);
				//assert(users[0]._id == joe._id);// it fails, why? they are different objects
				assert(users[0]._id.toString() === joe._id.toString());// it fails, why?
				done();
			});
	});

	it('Find a user with a particular id', (done) => {
		//find returns a single record
		User.findOne({ _id : joe._id })
			.then((user) => {
				assert(user.name === 'Joe');
				done();
			});
	});

});

 	//mocha --watch dont restar mocha every single time, so better use nodemon
    //"test": "nodemon --exec 'mocha -R min'" /* -R min: Format or test clear out any output in the previous time