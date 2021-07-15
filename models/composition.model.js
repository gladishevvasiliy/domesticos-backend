var mongoose = require('mongoose')
var Schema = mongoose.Schema

let CompositionSchema = new Schema({
  name: { type: String, required: true },
  compositions: [
    {
      value: [String],
      valueText: [String],
      name: String,
      tone: String,
      view: [String],
    },
  ],
})

// Export the model
module.exports = mongoose.model('Composition', CompositionSchema)
