import query from "../config/connection.js";

async function findOne(id) {
    return await query("SELECT * FROM products WHERE productID = ?", [id]);
}

async function findAll() {
    return await query("SELECT * FROM products");
}

async function addOne(newData) {
    return await query("INSERT INTO products SET ?", [newData]);
}

async function updateOne(id, data) {
    return await query("UPDATE products SET ? WHERE productID = ?", [data, id]);
}

async function removeOne(id) {
    return await query("DELETE FROM products WHERE productID = ?", [id]);
}

export {
    findOne,
    findAll,
    addOne,
    updateOne,
    removeOne
}