const router = require('express').Router();
const res = require('express/lib/response');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: [
      'id',
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(ecommerce_db => res.json(ecommerce_db))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  
//   try {
//   const categoryData = await Category.findByPk(req.params.id, {
//     include: [Product]
//   }) 
// if(!categoryData){
//   res.status(404).json({message:"This didn't work!"})
//   return;
// } 
// res.status(200).json(categoryData)
// catch(err){res.status(500).json(err)}
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
