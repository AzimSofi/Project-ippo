/**
 * このファイルは認証に関連するルートを管理する場所です。
 * 例えば、ログインやログアウトのエンドポイントなどがここで定義されます。
 * Passportと連携して、ユーザーが認証されると指定されたリダイレクト先に送られます。
 */

const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/sign-up', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/sign-up_page',
    failureFlash: true,
}));

router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login_page'
}));

module.exports = router;
