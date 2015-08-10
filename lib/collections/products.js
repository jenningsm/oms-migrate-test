
Products = new Mongo.Collection('products')

Products.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  priority: {
    type: Number,
    label: "Priority"
  }
}))
