            // let purchase = new Purchase();
            // purchase.purchase_date = new Date();

            // purchase.send_details.send_name = requerimiento.send_name;
            // purchase.send_details.send_lastname = requerimiento.send_lastname;
            // purchase.send_details.send_company = requerimiento.send_company;
            // purchase.send_details.send_country = requerimiento.send_country;
            // purchase.send_details.send_city = requerimiento.send_city;
            // purchase.send_details.send_street = requerimiento.send_street;
            // purchase.send_details.send_state = requerimiento.send_state;
            // purchase.send_details.send_phone = requerimiento.send_phone;
            // purchase.send_details.send_zip = requerimiento.send_zip;

            // purchase.prod_details.prod_name = requerimiento.prod_name;
            // purchase.prod_details.prod_image = requerimiento.prod_image;
            // purchase.prod_details.prod_currency = requerimiento.prod_currency;
            // purchase.prod_details.prod_price = requerimiento.prod_price;
            // purchase.prod_details.prod_state = requerimiento.prod_state;
            // purchase.prod_details.prod_amount = requerimiento.prod_amount;
            // purchase.prod_details.prod_totalPay = requerimiento.prod_totalPay;

            // user.purchases_list.push(purchase);

                    } else {
            var user = response;

            let purchase = new Purchase();
            purchase.purchase_date = new Date();

            purchase.send_details.send_name = requerimiento.purchase.send_details.send_name;
            purchase.send_details.send_lastname = requerimiento.purchase.send_details.send_lastname;
            purchase.send_details.send_company = requerimiento.purchase.send_details.send_company;
            purchase.send_details.send_country = requerimiento.purchase.send_details.send_country;
            purchase.send_details.send_city = requerimiento.purchase.send_details.send_city;
            purchase.send_details.send_street = requerimiento.purchase.send_details.send_street;
            purchase.send_details.send_state = requerimiento.purchase.send_details.send_state;
            purchase.send_details.send_phone = requerimiento.purchase.send_details.send_phone;
            purchase.send_details.send_zip = requerimiento.purchase.send_details.send_zip;

            requerimiento.purchase.prod_details.forEach((product)=>{
                let data = {
                    prod_name: product.prod_name,
                    prod_image: product.prod_image, 
                    prod_currency: product.prod_currency, 
                    prod_price: product.prod_price,
                    prod_state: product.prod_state, 
                    prod_totalPay: product.prod_totalPay
                }
                
                // let {prod_name, prod_image, prod_currency, prod_price, prod_state, prod_amount, prod_totalPay } = product;
                purchase.prod_details.push(data);
            });
            // purchase.prod_details.prod_name = requerimiento.purchase.prod_details.prod_name;
            // purchase.prod_details.prod_image = requerimiento.purchase.prod_details.prod_image;
            // purchase.prod_details.prod_currency = requerimiento.purchase.prod_details.prod_currency;
            // purchase.prod_details.prod_price = requerimiento.purchase.prod_details.prod_price;
            // purchase.prod_details.prod_state = requerimiento.purchase.prod_details.prod_state;
            // purchase.prod_details.prod_amount = requerimiento.purchase.prod_details.prod_amount;
            // purchase.prod_details.prod_totalPay = requerimiento.purchase.prod_details.prod_totalPay;

            user.purchases_list.push(purchase);
            console.log("index|user|findOne| purchase");
            console.log(purchase);
        }


        
// añadir compra usuario
// router.post('/user/:id', (req, res) => {
//     let requerimiento = req.body;
//     let { id } = req.params;
//     User.findById(id, (err, response) => {
//         var user = response;

//         let purchase = new Purchase();
//         purchase.purchase_date = new Date();

//         purchase.send_details.send_name = requerimiento.send_name;
//         purchase.send_details.send_lastname = requerimiento.send_lastname;
//         purchase.send_details.send_company = requerimiento.send_company;
//         purchase.send_details.send_country = requerimiento.send_country;
//         purchase.send_details.send_city = requerimiento.send_city;
//         purchase.send_details.send_street = requerimiento.send_street;
//         purchase.send_details.send_state = requerimiento.send_state;
//         purchase.send_details.send_phone = requerimiento.send_phone;
//         purchase.send_details.send_zip = requerimiento.send_zip;

//         purchase.prod_details.prod_name = requerimiento.prod_name;
//         purchase.prod_details.prod_image = requerimiento.prod_image;
//         purchase.prod_details.prod_currency = requerimiento.prod_currency;
//         purchase.prod_details.prod_price = requerimiento.prod_price;
//         purchase.prod_details.prod_state = requerimiento.prod_state;
//         purchase.prod_details.prod_amount = requerimiento.prod_amount;
//         purchase.prod_details.prod_totalPay = requerimiento.prod_totalPay;

//         user.purchases_list.push(purchase);
//         console.log("index|user|findOne| user");
//         console.log(user);
//         user.save((err, saved) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send({ Error: "Error 500 saving user" });
//             }
//             if (!saved) {
//                 return res.status(404).send({ Error: "Error 404 saving user" });
//             }
//             return res.status(200).send(saved);
//         });
//     })
// });