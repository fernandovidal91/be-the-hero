const connection = require('../database/connection');//Conexão com o banco de dados


const crypto = require('crypto');//Ja vem junto com o node


module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
        }
};