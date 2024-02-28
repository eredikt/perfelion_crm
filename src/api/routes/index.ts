import connect from "../../libs/dbConnect";
const exp = require('express');
const router = exp.Router();



router.route('/goods').get((req, res) => {
    let where = '';
    if (!!Object.keys(req.query).length) {
        where = 'WHERE ';
        if (req.query?.type) {
            where += `id_type = ${req.query?.type}`;
        }
        if (req.query?.status) {
            where += `id_status = ${req.query?.status}`;
        }
        if (req.query?.color) {
            where += `id_color = ${req.query?.color}`;
        }
        if (req.query?.size) {
            where += `size = ${req.query?.size}`;
        }
        if (req.query?.date) {
            where += `date = '${req.query?.date}'`;
        }
    }
    const sql:string = `SELECT *, id_type as type, id_color as color, id_status as status FROM goods_list ${where}`;
    console.log(sql);
    connect.query(sql, (err, result, field) => {
        if (err) {
            res.json({data: [], status:false});
        } else {
            res.json({data: result, status:true});
        }
    })
});
router.route('/goods').post((req, res) => {
    const sql:string = 'INSERT INTO `goods_list` (`id_type`, `id_color`, `size`, `count`, `date`, `id_status`) VALUES ?';
    const values:(string|number)[][] = [[req.body.type, req.body.color, req.body.size, +req.body.count, new Date().toLocaleDateString(), 1]];
    connect.query(sql, [values], (err, result, field) => {
        if (err) {
            console.log(err);
            res.json({data: [], status:false});
        } else {
            res.json({status:true, message: 'Данные добавлены'});
        }
    })
});
router.route('/goods').patch((req, res) => {
    const sql:string = `UPDATE goods_list SET id_status=${req.body.status} WHERE id = ${req.body.id}`;
    connect.query(sql, (err, result, field) => {
        if (err) {
            console.log(err);
            res.json({data: [], status:false});
        } else {
            res.json({status:true, message: 'Данные обновлены'});
        }
    })
});
router.route('/goods/:id').delete((req, res) => {
    const sql:string = `DELETE FROM goods_list WHERE id = ${req.params.id}`;
    console.log(sql);
    connect.query(sql, (err, result, field) => {
        if (err) {
            console.log(err);
            res.json({data: [], status:false});
        } else {
            res.json({status:true, message: 'Данные удалены'});
        }
    })
})
module.exports = router;
