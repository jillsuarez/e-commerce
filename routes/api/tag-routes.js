const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    var tagData = await Tag.findAll({
      include: [
        {
        model: Product,
        }
      ],
    })
    res.status(200).json(tagData)
  } catch(err){res.status(500).json(err)}
});


router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product, as: 'tagged_products'
      },
      // {
      //   model: Tag, as: 'tagged_products' 
      // }
    ]
  })
  .then(ecommerce_db => {
    if (!ecommerce_db) {
      res.status(404).json({ message: 'No tag found with this id' });
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
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
