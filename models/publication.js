var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var publicationSchema = new Schema({
	user: {
		type: Schema.ObjectId,
		ref: 'users',
		index: true
	},
	publicationDate: {
		type: Date,
		default: Date.now
	},
	message: {
		type: String,
		required: true
	},
	edited: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('publications', publicationSchema);
