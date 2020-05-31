const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/products');

/*------------------------------ Public Routes ------------------------------*/

// router.get('/', checkAuth, prodpopsCtrl.index);

/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.get('/', checkAuth, productsCtrl.index);
router.post('/', checkAuth, productsCtrl.create); // /add
router.put('/:id', productsCtrl.update);
router.delete('/:id', productsCtrl.delete)

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;