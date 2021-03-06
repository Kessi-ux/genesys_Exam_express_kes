const NodeGeocoder = require('node-gecoder');
const { geoSearch } = require('../models/Menu');

const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
}

const geocoder = NodeGeocoder(options)

module.exports = geocoder;