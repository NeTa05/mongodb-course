const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;



//run: node test/test_helper.js
//folder: cd /d/Development/GAP/mongodb-course/Section_6-A_Test_Driven_Experience
