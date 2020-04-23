const { productService } = require('../services');

module.exports = async function (context, req) {
  return await productService.deleteProduct(context);
};
