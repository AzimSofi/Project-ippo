exports.view = (req, res) => {
    res.send('一覧ページ' + req.params.id);
};

exports.create = (req, res) => {
    res.send('投稿' + req.params.id);
};
