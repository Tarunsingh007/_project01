var mongoose=require('mongoose');
var schema=mongoose.Schema;


var contactschema=new schema({
	email:{
		type:String
	},
	number:{
		type:String
	},
	query:{
		type:String
	},
	suggestion:{
		type:String
	}
});

module.exports=mongoose.model('contact',contactschema);
