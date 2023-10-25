db.products.updateOne({item:"phone"},{$set:{price:119999}})

db.products.updateOne({item:"laptop"},{$set: {specifications:{graphics:"NVIDIA GeForce RTX 2050"}} })