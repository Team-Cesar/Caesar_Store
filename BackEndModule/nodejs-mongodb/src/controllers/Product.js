const pool = require('../database/database');

var controller = {
    findProd: async (req, res) => {
        const { id } = req.params;
        const product = await pool.query('SELECT * FROM products WHERE pro_id = ?', [id]);
        res.send(JSON.stringify(product));
    },
    findAllProd: async (req,res) => {
        const products = await pool.query('SELECT * FROM products');
        res.send(JSON.stringify(products));
    },
    addProd: async (req,res) => {
        const { pro_nam, pro_des, pro_pri, pro_sto, pro_sta, cat_id, bra_id } = req.body;
        const product = { pro_nam, pro_des, pro_pri, pro_sto, pro_sta, cat_id, bra_id };
        await pool.query('INSERT INTO products SET ?', [product], (err, product)=>{
            if(err){
                res.status(500).send('Error 500');
            }
            if(!product){
                res.status(400).send('Error 400');
            }
            res.status(200).send(JSON.stringify(product));
        });
    },
    editProd: async (req,res) => {
        const { id } = req.params;
        const { pro_nam, pro_des, pro_pri, pro_sto, pro_sta, cat_id, bra_id } = req.body;
        const product = { pro_nam, pro_des, pro_pri, pro_sto, pro_sta, cat_id, bra_id };
        await pool.query('UPDATE products SET ? WHERE pro_id = ?', [product, id], (err, product)=>{
            if(err){
                res.status(500).send('Error 500');
            }
            if(!product){
                res.status(400).send('Error 400');
            }
            res.status(200).send(JSON.stringify(product));
        });
    },
    delProd: async (req,res) => {
        const { id } = req.params;
        await pool.query('DELETE FROM products WHERE pro_id = ?', [id]);
        res.send('Product removed');
    },
    findProdByCat: async (req,res) => {
        const { cat_id } = req.params
        const products = await pool.query('SELECT * FROM products WHERE cat_id = ?', [cat_id]);
        res.send(JSON.stringify(products));
    },
    findProdByBrand: async (req,res)=>{
        const { bra_id } = req.params
        const products = await pool.query('SELECT * FROM products WHERE bra_id = ?', [bra_id]);
        res.send(JSON.stringify(products));
    }
}

module.exports = controller;