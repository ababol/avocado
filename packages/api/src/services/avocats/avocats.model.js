const mongoose = require('mongoose');

if (!mongoose.connection.readyState) {
  require('../../mongoose');
}

const avocatSchema = new mongoose.Schema({
  id: {type: String, unique: true, required: true, index: true},
  name: String,
  email: String,
  avatar: String,
  gender: String,
  tel: String,
  fax: String,
  address: String,
  location: {
    lat : Number,
    lng : Number
  },
  linkedin: String,
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

const avocatModel = mongoose.model('Avocat', avocatSchema);

module.exports = avocatModel;
