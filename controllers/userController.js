const User = require('../models/user');

exports.view = (req, res) => {

    console.log('登録.一覧');
    res.render('login', {title:'登録'});
};

exports.create = (req,res) => {
	console.log("登録.作成");

	/*Note: when you are passing form obj directly to collection using model you
			have to give same name in form of that data that is to be passed in database 
			and that name is declared inside schema*/
	const user = new User(req.body); //passing object of form data directly to collection
	user.save() //then saving this to database and this return promise
	.then((result) => {
		res.redirect('/home');//is success save this will redirect to home page
	})
	.catch(err => {
		console.log(err);
        res.status(400).send('エラー: ユーザーの保存に失敗しました');
	});
	}