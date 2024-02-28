const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'goods_perfelion',
    password: 'root',
})
connect.connect(err => {
    if(err) console.log(err);
    else {
        console.log('OK Database');
    }
})
export default connect