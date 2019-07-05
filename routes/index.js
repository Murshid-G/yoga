var env = require('../env'),
	config = require('../config/'+env.name),
	Client = require('node-rest-client').Client,
    client = new Client(),
    moment = require('moment');



module.exports.index = index;
function index(req, res){
	res.render('index', {
		layout:'layout',
		title:'Home page'
	});
};


module.exports.about = about;
function about(req, res){
	res.render('about', {
		layout:'layout',
		title:'about page'
	});
};

module.exports.blog = blog;
function blog(req, res){
	res.render('blog', {
		layout:'layout',
		title:'blog page'
	});
};

module.exports.contact = contact;
function contact(req, res){
	res.render('contact', {
         layout:'layout',
         title:'contact page'
	});
};

module.exports.faq = faq;
function faq(req, res){
	res.render('faq', {
         layout:'layout',
         title:'FAQ page'
	});
};

module.exports.cost = cost;
function cost(req, res){
	res.render('cost', {
         layout:'layout',
         title:'prise page'
	});
};
