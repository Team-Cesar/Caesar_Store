const pool = require('../database/database');

var controller = {
    findCat: async (req, res) => {
        const { id } = req.params;
        const category = await pool.query('SELECT * FROM categories WHERE cat_id = ?', [id]);
        res.send({category});
    },
    findAllCat: async (req, res) => {
        const categories = await pool.query('SELECT * FROM categories');
        console.log('Categories');
        console.log(JSON.stringify(categories));
        res.send({categories});
    },
    addCat: async (req, res) => {
        const { cat_nam } = req.body;
        const category = { cat_nam };
        await pool.query('INSERT INTO categories SET ?', [category], (err, category)=>{
            if(err){
                res.status(500).send('Error 500');
            }
            if(!category){
                res.status(400).send('Error 400');
            }
            res.status(200).send({category});
        });
    }
};

module.exports = controller;