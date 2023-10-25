db.products.find()

//db.products.find({price:{$gt:20000}})
[
    {
      _id: ObjectId("64e9cccf1782088523453785"),
      item: 'television',
      price: 41999,
      brand: 'SONY',
      specifications: {
        size: 43,
        screen: 'LED',
        resolution: '4k',
        'refresh rate': '60 hz'
      }
    },
    {
      _id: ObjectId("64e9d62ab7a459393a44f68d"),
      item: 'refrigerator',
      price: 27990,
      brand: 'LG',
      specifications: { capacity: '246 Litres', configuration: 'Freezer on top' }
    }
  ]

//db.products.find({item:"television"},{_id:0,specifications:1})
[
    {
      specifications: {
        size: 43,
        screen: 'LED',
        resolution: '4k',
        'refresh rate': '60 hz'
      }
    }
  ]


//db.products.find({item:"television"},{price:1,brand:1,specifications:1})
[
    {
      _id: ObjectId("64e9cccf1782088523453785"),
      price: 41999,
      brand: 'SONY',
      specifications: {
        size: 43,
        screen: 'LED',
        resolution: '4k',
        'refresh rate': '60 hz'
      }
    }
  ]