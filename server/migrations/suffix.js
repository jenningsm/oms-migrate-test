
Migrations.add({
  name: "add priority to products",
  version: 1,

  up: function(){
    var prods = Products.find({priority: {$exists: false}})
    prods.forEach(function(product){
      Products.update(product._id, {$set: {
        priority : 0
      }})
    })
  },

  down: function() {
    Products.update({}, {$unset: {priority: true}}, {multi: true});
  }

})

Migrations.migrateTo('latest')
