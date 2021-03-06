const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.listen(process.env.PORT || 3001, () => console.log('listening on 3001'));

const { Product } = require('../database/db');

/**
 * Gets the product associated with the id passed in the url. Sends the retrieved product back as
 * JSON.
 * @param {number} id - The product's human-readable id (think model number)
 * @returns {Product} - Sends the queried product back in the response
 */
app.get('/:id', async (req, res) => {
  const { id } = req.params;
  // res.set('Access-Control-Allow-Origin', 'http://3.91.24.124');
  // res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  try {
    const product = await Product.findOne({ id });
    res.json(product);
  } catch (err) {
    // TODO: improve error handling
    res.sendStatus(400);
  }
});

/**
 * Removes products from inventory upon purchase. The particular product options and quantity
 * purchased are passed in the request's body, and the product's model number (id) is passed as a
 * param in the endpoint's url.
 * @param {string} colorId - The selected color's mongo-assigned id (req.body)
 * @param {string} size - The selected size to purchase (req.body)
 * @param {number} quantityPurchased - The quantity to purchase (req.body)
 * @param {number} id - The product's human-readable id (think model number) (req.params in url)
 */
app.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { colorId, size, quantity } = req.body;
  // TODO add cors middleware
  // res.set('Access-Control-Allow-Origin', 'http://3.91.24.124');
  // res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  try {
    const product = await Product.findOne({ id });
    const color = await product.colors.id(colorId);
    const quantityInInventory = color.quantityInInventory.get(size);
    color.quantityInInventory.set(size, quantityInInventory - quantity);
    await product.save();
    res.json(product);
  } catch (err) {
    // TODO: improve error handling
    console.error(err);
    res.sendStatus(400);
  }
});
