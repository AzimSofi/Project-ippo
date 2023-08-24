const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');

const app = express();
// const session = require('express-session');

// connect to mongodb
const dbURI = "mongodb+srv://yo:ohayo@shiro.cb9wpqn.mongodb.net/";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) =>{ console.log("Database-connected"); app.listen(8080)})
	.catch(err => console.log(err));

// app.use(session({
// 	secret: 'your-secret-key', // 安全な秘密鍵
// 	resave: false,
// 	saveUninitialized: true,
// }));

// middleware & static files
app.use(express.static('../public')); //this will helps to use style.css file
app.use(express.urlencoded({ extended: true })); //this will helps to get submitted data of form in req.body obj

app.set('views', require('path').join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.redirect('/login');
});

app.get('/', require('../controllers/homeController').redirect);
app.get('/home', require('../controllers/homeController').index);
app.get('/about', require('../controllers/homeController').about);


app.get('/post', require('../controllers/dashboardController').view);

app.get('/login', require('../controllers/userController').view);
app.post('/login/create', require('../controllers/userController').create);




// app.get('/users/:id', (req, res) => {
// 	const id = req.params.id;
// 	User.findById(id)
// 		.then(result => {
// 			res.render('details', { user: result, action:'edit',title: 'User Details' });
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// });

// app.get('/edit/:name/:action',(req,res)=>{
// 	const name = req.params.name;
// 	console.log("req made on"+req.url);
// 	User.findOne({name:name})
// 		.then(result => {
// 			res.render('edit', { user: result ,title: 'Edit-User' });
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// })

// app.post('/edit/:id',(req,res)=>{
// 	console.log("POST req made on"+req.url);
// 	User.updateOne({_id:req.params.id},req.body) //then updating that user whose id is get from url 
// 												//first passing id which user is to be updated than passing update info
// 		.then(result => {
// 			res.redirect('/users');
// 			console.log("Users profile Updated");
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});

// })

// app.post('/users/:name',(req,res)=>{
// 	const name = req.params.name;
// 	console.log(name);
// 	User.deleteOne({name:name})
// 	.then(result => {
// 	res.redirect('/users');
// 	})
// 	.catch(err => {
// 	console.log(err);
// 	});
// })




//404 errors routes
//this will auto run incase no routes
//Note: must put this route at last route list
app.use((req,res)=>{
	console.log("req made on"+req.url);
	res.render('404',{title:'NotFound'});
})






