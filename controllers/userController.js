const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.view_signup = (req, res) => {

    console.log('登録.一覧');
    res.render('User/sign-up', {title:'登録'});
};

exports.view_login = (req, res) => {

    console.log('ログイン.一覧');
    res.render('User/login', {title:'ログイン'});
};

exports.create = (req,res) => {
	console.log("登録.作成");
	
	bcrypt.hash(req.body.password, 3, (err, hash) => {
        if (err) {
            return res.status(500).send('エラー: パスワードのハッシュ化に失敗しました');
        }

		const user = new User({
			...req.body,
			password: hash
		});

		user.save() // 定義したUserSchema、保存
		.then((result) => {
			res.redirect('/home');
		})
		.catch(err => {
			console.log(err);
			res.status(400).send('エラー: ユーザーの保存に失敗しました');
		});
	});
}

exports.login = (req,res) => {
	console.log("ログイン、発送");
	
	// .then((result) => {
	// 	res.redirect('/home');
	// })
	// .catch(err => {
	// 	console.log(err);
	// 	res.status(400).send('エラー: ユーザーの保存に失敗しました');
	// });
}