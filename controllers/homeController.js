exports.redirect = (req, res) => {

    console.log( '再度、登録' );
    res.render( 'index',{ title:'ホーム', user: req.session.user });
};

exports.index = (req, res) => {

    console.log( 'ホーム' );
    res.render( 'index', { title:'ホーム', user: req.session.user });
};

exports.about = (req, res) => {

    console.log( '記述' );
    res.render( 'about', { title:'記述', user: req.session.user });
};