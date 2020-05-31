var Wishlist = require('../models/wishlist');

module.exports = {
  index,
  create,
  update,
  delete: deleteOne
};

async function index(req, res) {
  try{
      const wishlistProds = await Wishlist.find({}); //const jobs = await Job.find({user: req.user._id});   // <-- only return jobs for the logged in user
      res.status(200).json(wishlistProds);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  try {
    req.body.user = req.user._id; //add reference
    const wishlistProd = await Wishlist.create(req.body);
    res.status(201).json(wishlistProd);
  }
  catch(err){
    res.status(500).json(err);
  }
}

async function deleteOne(req,res){
  try{
    const deletedWishlistProd = await Wishlist.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedWishlistFunko)
  } catch(err){
    res.status(500).json(err);
  }
}

async function update(req,res){
  try{
    const updatedWishlistProd = await Wishlist.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedWishlistProd)
  }catch(err){
    res.status(500).json(err)
  }
}