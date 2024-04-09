
const express = require('express');
const router = express.Router();

router.get('/contra',async (req,res) =>{
    try {
        const longitud = parseInt(req.query.longitud);
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        let contraseña = '';
        for (let index = 0; index < longitud; index++) {
            const indice = Math.floor(Math.random() * caracteres.length);
            contraseña+= caracteres.charAt(indice);
        }
        res.json({contraseña});
    } catch (error) {
        res.status(400).json({error:"Ha ocurrido un error."})
    }
});

module.exports = router;