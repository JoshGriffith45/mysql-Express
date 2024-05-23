import mysql from "mysql2";
import config from "./index.js";

const pool = mysql.createPool(config.mysql);

function query(sqlString, values) {
    return new Promise((res, rej) => {
        pool.query(sqlString, values, (err, results) => {
            if(err) rej(err);
            else res(results);
        });
    });
}

export default query;