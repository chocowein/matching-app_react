const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysitedb'
});

con.connect((err) => {

    if (err) throw err;

    console.log('接続完了');

    const q = "select * from user_tweets"

    con.query(q, (err, result, fields) => {
        if (err) throw err;
        console.log(result)
        console.log(result[0].name)
        console.log(result[1].name)
        console.log(result[2].name)
    });
});