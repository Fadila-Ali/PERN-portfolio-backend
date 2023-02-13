//! CHECK FOR NAME
const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required!" });
  }
};

//! CHECK FOR DESCRIPTION
const checkDescription = (req, res, next) => {
  if (req.body.description) {
    next();
  } else {
    res.status(400).json({ error: "Description is required!" });
  }
};

//! CHECK FOR CATEGORY
const checkCategory = (req, res, next) => {
  if (req.body.category) {
    next();
  } else {
    res.status(400).json({ error: "Category is required!" });
  }
};

//! CHECK PRICE
const checkPrice = (req, res, next) => {
  if (req.body.price) {
    next();
  } else {
    res.status(400).json({ error: "Price is required!" });
  }
};

//! CHECK IN STOCK
const checkInStock = (req, res, next) => {
  if (req.body.in_stock) {
    next();
  } else {
    res.status(400).json({ error: "In Stock is required!" });
  }
};

module.exports = {
  checkName,
  checkDescription,
  checkCategory,
  checkPrice,
  checkInStock,
};
