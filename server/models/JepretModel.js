const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
    
const jepretSchema = new Schema({
  author: {type: Schema.ObjectId, ref: 'Users'},
  title: String,
  content: String,
  imageUrl: String,
  votes: [{type: Schema.ObjectId, ref: 'Users'}]
})

const Jepret = mongoose.model('Jeprets', jepretSchema)
module.exports = Jepret;