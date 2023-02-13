const express = require("express");
const items = express.Router({ mergeParams: true });

const {
  getAllItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
} = require("../queries/items");
const {
  checkName,
  checkDescription,
  checkCategory,
  checkPrice,
  checkInStock,
} = require("../validations/checkItems");

// IMPORTING REVIEW CONTROLLER
const reviewsController = require("./reviewsController");

items.use("/:itemId/reviews", reviewsController);

//! GET ALL ITEMS
items.get("/", async (req, res) => {
  const allItems = await getAllItems();

  if (allItems[0]) {
    res.status(200).json(allItems);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

//! GET ONE ITEM
items.get("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await getItem(id);
  if (!item.message) {
    res.json(item);
  } else {
    res.status(500).json({ error: "Item not found!" });
  }
});

//! CREATE NEW ITEM
items.post(
  "/",
  checkName,
  checkDescription,
  checkCategory,
  checkPrice,
  checkInStock,
  async (req, res) => {
    try {
      const item = await createItem(req.body);
      res.json(item);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
);

//! DELETE AN ITEM
items.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const item = await deleteItem(id);
  if (item.id) {
    res.status(200).json(deleteItem);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

//! UPDATE AN ITEM
items.put(
  "/:id",
  checkName,
  checkDescription,
  checkCategory,
  checkPrice,
  checkInStock,
  async (req, res) => {
    try {
      const { id } = req.params;
      const item = await updateItem(id, req.body);
      res.status(200).json(item);
    } catch (error) {
      res.status(404).json({ error: "Item not found" });
    }
  }
);

module.exports = items;
