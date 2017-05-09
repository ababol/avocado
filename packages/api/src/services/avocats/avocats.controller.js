const async = require('asyncawait/async');
const await = require('asyncawait/await');
const ServiceAvocats = require('./avocats.service');

exports.findById = async (req, res) => {
  const avocat = await(ServiceAvocats.findById(req.params.id));

  return res.json(avocat);
};
