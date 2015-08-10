Template.insertProductForm.helpers({
  products: function(){
    return Products.find({})
  },
  display: function(){
    return JSON.stringify(this)
  }
})
