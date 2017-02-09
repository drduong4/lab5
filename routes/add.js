var data = require("../data.json");

exports.addFriend = function(req, res) {  
	var friendname = req.query.name;
	var friendtype = req.query.description;
	console.log("name:" + friendname + "description:" + friendtype);
	res.render( 'index', {
		'name':friendname,
		'description':friendtype,
		'imageURL':"http://lorempixel.com/500/500/people"
	});
}