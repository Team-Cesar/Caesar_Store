const pool = require('../database/database');

var controller = {
    findImg : async(req, res) => {
        const { id } = req.params;
        const image = await pool.query('SELECT * FROM images WHERE img_id = ?', [id]);
        res.send(image)
    },
    findImgByProd : async(req, res) => {
        const { pro_id } = req.params;
        const images = await pool.query('SELECT * FROM images WHERE pro_id = ?', [pro_id]);
        res.send(images);
    },
    addImg : async (req,res) => {
        let { img_nam, img_url, pro_id } = req.body;
        pro_id = parseInt(pro_id);
        const image = { img_nam, img_url, pro_id };
        console.log('post|addimg|image');
        console.log(image);
        await pool.query('INSERT INTO images SET ?', [image], (err, image)=>{
            if(err){
                res.status(500).send('Error 500');
            }
            if (!image) {
                res.status(400).send('Error 400');
            }
            res.status(200).send(image);
        });
    },
    editImg : async(req, res) => {
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
    },
    delImg : async(req, res) => {
        const { id } = req.params;
        await pool.query('DELETE FROM images WHERE img_id = ?', [id]);
        res.send('Image removed');
    }
};

module.exports = controller;