const mongoose = require('mongoose');

mongoose.Promise = Promise;

const connect = () => mongoose.connect(`mongodb://${process.env.MONGO_URI}:27017/trekbikes`, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', async () => {
  await mongoose.disconnect();
  setTimeout(connect, 5000);
});

connect();

const { Schema } = mongoose;

const colorSchema = new Schema({
  name: String,
  finish: String,
  rgb: String,
  quantityInInventory: Map,
  of: String,
});

const productSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  colors: [colorSchema],
  reviews: [Number],
  releaseDate: Date,
});

const Color = mongoose.model('Color', colorSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = { db, Product, Color };
