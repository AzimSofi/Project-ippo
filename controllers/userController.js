const User = require('../models/user');

exports.view = (req, res) => {

    console.log('登録.一覧');
    res.render('User/login', {title:'登録'});
};

exports.create = (req,res) => {
	console.log("登録.作成");

	const user = new User(req.body); // 新しいUserインスタンスを作成
	user.save() // 定義したUserSchema、保存
	.then((result) => {
		res.redirect('/home');
	})
	.catch(err => {
		console.log(err);
        res.status(400).send('エラー: ユーザーの保存に失敗しました');
	});
}