const express = require('express');
const router = express.Router();
const passport = require('passport'); 

router.get('/auth/google', passport.authenticate('google'));

router.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/'
}), (req, res) => {
    // Usuário autenticado com sucesso, redirecionar para a página inicial 
    res.redirect('https://goodshape.netlify.app/profissional/menu_pro');
});

module.exports = router;