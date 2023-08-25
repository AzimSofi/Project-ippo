const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true
	},
	address:{
		type:String,
		required: false
	},
	number:{
		type:Number,
		required: false
	},
},
{ timestamps: true });

const User = mongoose.model('User', UserSchema); // 'User'モデルを作成
module.exports = User;