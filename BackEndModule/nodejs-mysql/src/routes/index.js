const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

// categories

router.get('/findcat/:id', async(req, res) => {
    const { id } = req.params;
    const category = await pool.query('SELECT * FROM categories WHERE cat_id = ?', [id]);
    res.send({ category });
});

router.get('/findallcat', async(req, res) => {
    const categories = await pool.query('SELECT * FROM categories');
    res.send(categories);
});

router.post('/addcat', async(req, res) => {
    const { cat_nam } = req.body;
    const category = { cat_nam };
    await pool.query('INSERT INTO categories SET ?', [category], (err, category) => {
        if (err) {
            res.status(500).send('Error 500');
        }
        if (!category) {
            res.status(400).send('Error 400');
        }
        res.status(200).send({ category });
    });
});

router.post('/editcat/:id', async(req, res) => {
    const { id } = req.params;
    const { cat_nam } = req.body;
    const category = { cat_nam };
    await pool.query('UPDATE categories SET ? WHERE cat_id = ?', [category, id], (err, category) => {
        if (err) {
            res.status(500).send('Error 500');
        }
        if (!category) {
            res.status(400).send('Error 400');
        }
        res.status(200).send({ category });
    });
});

router.get('/delcat/:id', async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM categories WHERE cat_id = ?', [id]);
    res.send('Category removed');
});

// brands

router.get('/findbra/:id', async(req, res) => {
    const { id } = req.params;
    const brand = await pool.query('SELECT * FROM brands WHERE bra_id = ?', [id]);
    res.send({ brand });
});

router.get('/findallbra', async(req, res) => {
    const brands = await pool.query('SELECT * FROM brands');
    res.send(brands);
});

router.post('/addbra', async(req, res) => {
    const { bra_nam } = req.body;
    const brand = { bra_nam };
    await pool.query('INSERT INTO brands SET ?', [brand], (err, brand) => {
        if (err) {
            res.status(500).send('Error 500');
        }
        if (!brand) {
            res.status(400).send('Error 400');
        }
        res.status(200).send({ brand });
    });
});

router.post('/editbra/:id', async(req, res) => {
    const { id } = req.params;
    const { bra_nam } = req.body;
    const brand = { bra_nam };
    await pool.query('UPDATE brands SET ? WHERE bra_id = ?', [brand, id], (err, brand) => {
        if (err) {
            res.status(500).send('Error 500');
        }
        if (!brand) {
            res.status(400).send('Error 400');
        }
        res.status(200).send({ brand });
    });
});

router.get('/delbra/:id', async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM categories WHERE cat_id = ?', [id]);
    res.send('Brand removed');
});

// // products

router.get('/findpro/:id', async(req, res) => {
    const { id } = req.params;
    const product = await pool.query('SELECT * FROM products WHERE pro_id = ?', [id]);
    res.send(product);
});

router.get('/findallpro', async(req, res) => {
    const products = await pool.query('SELECT * FROM products');
    res.send(products);
});

router.get('/fprobycat/:cat_id', async(req, res) => {
    const { cat_id } = req.params
    const products = await pool.query('SELECT * FROM products WHERE cat_id = ?', [cat_id]);
    res.send(products);
});

router.get('/fprobybra/:bra_id', async(req, res) => {
    const { bra_id } = req.params
    const products = await pool.query('SELECT * FROM products WHERE bra_id = ?', [bra_id]);
    res.send(products);
});

router.post('/addpro', async(req, res) => {
    let { pro_nam, pro_des, pro_pri, pro_sto, pro_sta, cat_id, bra_id } = req.body;
    pro_pri = parseInt(pro_pri);
    pro_sto = parseInt(pro_sto);
    cat_id = parseInt(cat_id);
    bra_id = parseInt(bra_id);
    const product = { pro_nam, pro_des, pro_pri, pro_sto, pro_sta, cat_id, bra_id };
    console.log('post|addpro|product');
    console.log(product);
    await pool.query('INSERT INTO products SET ?', [product], (err, product) => {
        if (err) {
            res.status(500).send('Error 500');
        }
        if (!product) {
            res.status(400).send('Error 400');
        }
        res.status(200).send({ product });
    });
});

router.post('/editpro/:id', async(req, res) => {
    const { id } = req.params;
    const { pro_nam, pro_des, pro_pri, pro_sto, pro_sta, cat_id, bra_id } = req.body;
    const product = { pro_nam, pro_des, pro_pri, pro_sto, pro_sta, cat_id, bra_id };
    await pool.query('UPDATE products SET ? WHERE pro_id = ?', [product, id], (err, product) => {
        if (err) {
            res.status(500).send('Error 500');
        }
        if (!product) {
            res.status(400).send('Error 400');
        }
        res.status(200).send(product);
    });
});

router.get('/delpro/:id', async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM products WHERE pro_id = ?', [id]);
    res.send('Product removed');
});

// images

router.get('/findimg/:id', async(req, res) => {
    const { id } = req.params;
    const image = await pool.query('SELECT * FROM images WHERE img_id = ?', [id]);
    res.send({ image })
});

router.get('/fimgbypro/:pro_id', async(req, res) => {
    const { pro_id } = req.params;
    const images = await pool.query('SELECT * FROM images WHERE pro_id = ?', [pro_id]);
    res.send({ images });
});

router.post('/addimg', async(req, res) => {
    let { img_nam, img_url, pro_id } = req.body;
    pro_id = parseInt(pro_id);
    const image = { img_nam, img_url, pro_id };
    console.log('post|addimg|image');
    console.log(image);
    await pool.query('INSERT INTO images SET ?', [image], (err, image) => {
        if (err) {
            res.status(500).send('Error 500');
        }
        if (!image) {
            res.status(400).send('Error 400');
        }
        res.status(200).send({ image });
    });
});

router.post('/editimg/:id', async(req, res) => {
    const { id } = req.params;
    const { img_nam, img_url, pro_id } = req.body;
    const image = { img_nam, img_url, pro_id };
    // const image = req.body;
    await pool.query('UPDATE images SET ? WHERE img_id = ?', [image, id], (err, image) => {
        if (err) {
            res.status(500).send('Error 500');
        }
        if (!image) {
            res.status(400).send('Error 400');
        }
        res.status(200).send({ image });
    });
});

router.get('/delimg/:id', async(req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM images WHERE img_id = ?', [id]);
    res.send('Image removed');
});

module.exports = router;