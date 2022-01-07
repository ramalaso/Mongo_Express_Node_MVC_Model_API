const Product = require('../database/models/productModels')

module.exports.createProduct = async (serviceData) => {
   try {
      let product = new Product({...serviceData})
      return await product.save();
   } catch (error) {
      console.log('Something went wrong: Service createProduct...: ', error)
      throw Error(error)
   }
}