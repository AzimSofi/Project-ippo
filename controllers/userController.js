const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.view_signup = (req, res) => {

    console.log('登録.一覧');
    res.render('User/sign-up', { title:'登録', user: req.session.user });
};

exports.view_login = (req, res) => {

    console.log('ログイン.一覧');
    res.render('User/login', { title:'ログイン', user: req.session.user });
};

exports.create = (req,res) => {

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

			let user = req.session.user;
			console.log(user + "登録.作成");
			res.redirect('/home');
		})
		.catch(err => {
			console.log(err);
			res.status(400).send('エラー: ユーザーの保存に失敗しました');
		});
	});
}

exports.login = (req,res) => {

	let user = req.session.user;
	console.log(user.name + " ログイン、発送");
	
	// .then((result) => {
	// 	res.redirect('/home');
	// })
	// .catch(err => {
	// 	console.log(err);
	// 	res.status(400).send('エラー: ユーザーの保存に失敗しました');
	// });
}