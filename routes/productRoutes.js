const { response } = require('express');
const express = require('express');
const { createProduct } = require('../service/productService');
const router = express.Router()

router.post('/', async (req, res)=>{
   let response = {}
   try {
      const responseFromService = await createProduct(req.body)
      response.status = 201;
      response.message = 'Product Created successfully';
      response.body = responseFromService
   } catch (error) {
      console.log('Something went wrong:', error);
      response.status = 400;
      response.message = error.message;
      response.body = {}
   }

   return res.status(response.status).send(response)
})

module.exports = router;