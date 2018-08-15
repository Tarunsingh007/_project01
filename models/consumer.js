var mongoose=require('mongoose');
var schema=mongoose.Schema;


var consumerschema=new schema({
	fname:{
		type:String
	},
	lname:{
		type:String
	},
	email:{
		type:String
	},
	number:{
		type:Number
	},
	add:{
		type:String
	},
	pin:{
		type:Number
	},
	quanitity:{
		type:Number
	},
	DeliveryType:{
		type:String
	}
});

module.exports=mongoose.model('consumer',consumerschema);
