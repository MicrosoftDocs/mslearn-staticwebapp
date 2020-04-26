const productService = require('../services/product.service');

module.exports = async function (context, req) {
  return await productService.deleteProduct(context);
};
