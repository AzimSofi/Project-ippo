exports.redirect = (req, res) => {

    console.log('再度、登録');
    res.redirect('/login');
};

exports.index = (req, res) => {

    console.log('ホーム');
    res.render('index',{title:'ホーム'});
};

exports.about = (req, res) => {

    console.log('記述');
    res.render('about', {title:'記述'});
};