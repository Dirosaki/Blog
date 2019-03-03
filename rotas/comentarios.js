const express = require('express');
const router = express.Router();

router.get('/comentarios/:postid', (req, res) => {
    res.json({
        conteudo: 'Parabéns, adorei!',
        autor: 'Desconhecido'
    });
});


module.exports = router;