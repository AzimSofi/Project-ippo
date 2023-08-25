/**
 * このファイルは認証に関連するルートを管理する場所です。
 * 例えば、ログインやログアウトのエンドポイントなどがここで定義されます。
 * Passportと連携して、ユーザーが認証されると指定されたリダイレクト先に送られます。
 */

const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/sign-in', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/sign-in'
}));

router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login'
  }));

module.exports = router;
