var Product = require('../models/product');

module.exports = {
  index,
  create,
  update,
  delete: deleteOne
};

async function index(req, res) {
  try{
      const products = await Product.find({}); 
      res.status(200).json(products);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  try {
    req.body.user = req.user._id; //add reference
    const product = await Product.create(req.body);
    res.status(201).json(product);
  }
  catch(err){
    res.status(500).json(err);
  }
}

async function deleteOne(req,res){
  try{
    const deletedProd = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedProd)
  } catch(err){
    res.status(500).json(err);
  }
}

async function update(req,res){
  try{
    const updatedProd = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedProd)
  }catch(err){
    res.status(500).json(err)
  }
}