require('isomorphic-fetch');

const async = require('asyncawait/async');
const await = require('asyncawait/await');
const {
  CLEARBIT_API_KEY,
  GOOGLE_API_GEO_KEY,
  SCRAPINGHUB_URL,
} = require('./config');
const Clearbit = require('clearbit')(CLEARBIT_API_KEY);
const ServiceAvocats = require('../api/src/services/avocats/avocats.service.js');

async function getAvocadoData() {
  const res = await fetch(SCRAPINGHUB_URL)
  return await res.json();
}

async function getCoordsDataFromAddress(address) {
  const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_API_GEO_KEY}
`)
  return await res.json();
}

async function getAddressInfo(address) {
  let result = {
    address,
    location: {}
  };

  if (!address || !address.replace(/\s/g, '')) {
    return result;
  }

  const gMap = await(getCoordsDataFromAddress((address.replace(',', '', 'g').replace(/\s/g, '+'))));
  if (!gMap || !gMap.results || !gMap.results.length) {
    return result;
  }

  const gMapAddress = gMap.results.shift();
  return {
    address: gMapAddress.formatted_address,
    location: {
      lat: gMapAddress.geometry.location.lat,
      lng: gMapAddress.geometry.location.lng
    }
  };
}

async function getClearBitDataFromMail(email) {
  if (!email) {
    return;
  }

  let clearbitData = { linkedin: {} };
  try {
    clearbitData = await(Clearbit.Person.find({email, stream: true}));
  } catch(e) {}

  return {
    avatar: clearbitData.avatar,
    linkedin: clearbitData.linkedin.handle,
    gender: clearbitData.gender
  };
}

async function enrichAvocadoData() {
  let i = 0;
  const avocatData = await getAvocadoData();

  avocatData.forEach(async avocat => {
    const newAvocat = Object.assign(
      {},
      avocat,
      await(getAddressInfo(avocat.address)),
      await(getClearBitDataFromMail(avocat.mail))
    );
    newAvocat.email = avocat.mail;
    delete newAvocat.mail;
    delete newAvocat._type;

    ServiceAvocats.add(newAvocat, console.log(i++));
  });
}

enrichAvocadoData();
