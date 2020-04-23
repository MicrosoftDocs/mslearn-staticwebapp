const data = require('./product-data');

async function getProducts({ req, res }) {
  try {
    const products = data.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postProduct({ req, res }) {
  const product = {
    id: undefined,
    name: req.body.name,
    description: req.body.description,
  };

  try {
    const newProduct = data.addProduct(product);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putProduct({ req, res }) {
  const product = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
  };

  try {
    const updatedProduct = data.updateProduct(product);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteProduct({ req, res }) {
  const { id } = req.params;

  try {
    data.deleteProduct(id);
    res.status(200).json({});
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { getProducts, postProduct, putProduct, deleteProduct };
