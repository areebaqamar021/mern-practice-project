// const express = require('express');
// const router = express.Router();
// const Product = require("../../models/products.js");


// router.get('/', (req, res) => {
//      Product.find({}, (err, items) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             res.render('app', { items: items });
//         }
//     });
// });

// router.post('/', upload.single('image'),  (req, res, next) => {
 
//     var obj = {
//         name: req.body.name,
//         desc: req.body.desc,
//         img: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     Product.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             // item.save();
//             res.redirect('/');
//         }
//     });
// });