var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		index: true
	},
	registrationDate: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('users', userSchema);
