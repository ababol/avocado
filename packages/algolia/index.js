const {
  ALGOLIA_APP_ID,
  ALGOLIA_API_ADMIN_KEY,
  ALGOLIA_API_INDEX_NAME,
} = require('./config');
const algoliasearch = require('algoliasearch')(ALGOLIA_APP_ID, ALGOLIA_API_ADMIN_KEY);
const index = algoliasearch.initIndex(ALGOLIA_API_INDEX_NAME);

const ServiceAvocats = require('../api/src/services/avocats/avocats.service.js');

ServiceAvocats.findAll().then(avocats => {
  index.addObjects(avocats, console.log)
})
