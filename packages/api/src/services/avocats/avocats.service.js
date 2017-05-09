const ModelAvocats = require('./avocats.model');

exports.add = (avocat) => {
  ModelAvocats.findOneAndUpdate(
    { id: avocat.id },
    Object.assign(
      {},
      avocat,
      { updatedAt: Date.now() }
    ),
    {
      upsert: true,
      returnNewDocument: true,
      new: true,
    }
  );
}

exports.findAll = () => {
  return ModelAvocats.find();
}

exports.findById = (id) => {
  return ModelAvocats.findOne({ id });
}
