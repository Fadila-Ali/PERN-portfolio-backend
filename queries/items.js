const db = require("../db/dbConfig");

//! GET ALL ITEMS IN STORE
const getAllItems = async () => {
  try {
    const allItems = await db.any("SELECT * FROM inventory");
    return allItems;
  } catch (error) {
    return error;
  }
};

//! GET ONE ITEM
const getItem = async (id) => {
  try {
    const oneItem = await db.one("SELECT * FROM inventory WHERE id=$1", id);
    return oneItem;
  } catch (error) {
    return error;
  }
};

//! CREATE NEW ITEM
const createItem = async (item) => {
  try {
    const newItem = await db.one(
      "INSERT INTO inventory (name, img, description, category, price, in_stock, is_favorite, save_for_later) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        item.name,
        item.image,
        item.description,
        item.category,
        item.price,
        item.in_stock,
        item.is_favorite,
        item.save_for_later,
      ]
    );
    return newItem;
  } catch (error) {
    return error;
  }
};

//! DELETE AN ITEM
const deleteItem = async (id) => {
  try {
    const deletedItem = await db.one(
      "DELETE FROM inventory WHERE id=$1 RETURNING *",
      id
    );
    return deletedItem;
  } catch (error) {
    return error;
  }
};

//! UPDATE AN ITEM
const updateItem = async (id, item) => {
  try {
    const updatedItem = await db.one(
      "UPDATE inventory SET name=$1, img=$2, description=$3, category=$4 price=$5, in_stock=$6, is_favorite=$7, save_for_later=$8 WHERE id=$9 RETURNING *",
      [
        item.name,
        item.image,
        item.description,
        item.category,
        item.price,
        item.in_stock,
        item.is_favorite,
        item.save_for_later,
        id,
      ]
    );
    return updatedItem;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllItems, getItem, createItem, deleteItem, updateItem };
