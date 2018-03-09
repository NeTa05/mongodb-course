const assert = require('assert');
const User = require('../src/user')

describe('Creating records', () => {

	it('Saves a user', () => {
		const jorge =  new User({name: 'Jorge Za'});
		
		jorge.save()
			.then( () => {
				//Has jorge been saved successfully?
				assert(!jorge.isNew);
				
			});
	});

});


// to run use npm run test

