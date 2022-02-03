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

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

//   try {
//   const categoryData = await Category.findByPk(req.params.id, {
//     include: [Product]
//   }) 
// } catch (categoryData){
//   if(categoryData){
//   (err){res.status(500).json(err)}

// try { 
//   const categoryId = await Category.findByPk(req.params.id, {
//     include: [
//       {
//         model: Category,
//         attributes: [
//           'id',
//           'category_name'
//         ]
//       }
//     ]
//   })
//   res.json(categoryId)
// }
// catch(err){
//   res.status(500).json(err);
// }
Category.findByPk({
  where: {
    id: req.params.id
  },
  attributes: [
    'id',
    'category_name'
  ]
})
.then(ecommerce_db => {
  if (!ecommerce_db) {
    res.status(404).json({ message: 'No category found with this id' });
    return;
  }
  res.json(ecommerce_db);
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
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
