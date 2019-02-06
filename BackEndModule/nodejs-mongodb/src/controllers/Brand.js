const pool = require('../database/database');

var controller = {
    findBrand: async (req, res)=>{
        const { id } = req.params;
        const brand = await pool.query('SELECT * FROM brands WHERE bra_id = ?', [id]);
        res.send(JSON.stringify(brand));
    },
    findAllBrand: async (req,res)=>{
        const brands = await pool.query('SELECT * FROM brands');
        res.send(JSON.stringify(brands));
    },
    addBrand: async (req,res)=>{
        const { bra_nam } = req.body;
        const brand = { bra_nam };
        await pool.query('INSERT INTO brands SET ?', [brand], (err, brand)=>{
            if(err){
                res.status(500).send('Error 500');
            }
            if(!brand){
                res.status(400).send('Error 400');
            }
            res.status(200).send(JSON.stringify(brand));
        });
    },
    editBrand: async (req,res)=>{
        const { id } = req.params;
        const { bra_nam } = req.body;
        const brand = { bra_nam };
        await pool.query('UPDATE brands SET ? WHERE bra_id = ?', [brand, id], (err, brand)=>{
            if(err){
                res.status(500).send('Error 500');
            }
            if(!brand){
                res.status(400).send('Error 400');
            }
            res.status(200).send(JSON.stringify(brand));
        });
    },
    delBrand: async (req,res)=>{
        const { id } = req.params;
        await pool.query('DELETE FROM categories WHERE cat_id = ?',[id]);
        res.send('Brand removed');
    }
}

module.exports = controller;