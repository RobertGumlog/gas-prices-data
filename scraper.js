// scraper.js - Gas Price Data for Blairsville, GA
const fs = require('fs');

console.log('Updating gas prices for Blairsville, GA...');

// Gas stations data with current prices
const stations = [
  {
    id: 'exxon_12murphy',
    name: 'Exxon',
    brand: 'Exxon',
    address: '12 Murphy Hwy',
    regularPrice: 2.49,
    midGradePrice: 2.89,
    premiumPrice: 3.29,
    latitude: 34.8765,
    longitude: -83.9585,
    phoneNumber: '(706) 745-6611',
    distance: 0.3,
    has24Hours: false
  },
  {
    id: 'ingles_207ga515',
    name: 'Ingles Gas Express',
    brand: 'Ingles',
    address: '207 GA-515',
    regularPrice: 2.55,
    midGradePrice: 2.85,
    premiumPrice: 3.15,
    latitude: 34.8715,
    longitude: -83.9521,
    phoneNumber: '(706) 835-2182',
    distance: 0.7,
    has24Hours: false
  },
  {
    id: 'murphy_walmart',
    name: 'Murphy USA',
    brand: 'Murphy',
    address: '2257 B GA Hwy 515 (Walmart)',
    regularPrice: 2.56,
    midGradePrice: 2.86,
    premiumPrice: 3.16,
    dieselPrice: 2.89,
    latitude: 34.8762,
    longitude: -83.9582,
    phoneNumber: '(706) 745-0817',
    distance: 1.2,
    has24Hours: true
  },
  {
    id: 'shell_301ga515',
    name: 'Shell',
    brand: 'Shell',
    address: '301 GA-515',
    regularPrice: 2.55,
    midGradePrice: 2.85,
    premiumPrice: 3.15,
    dieselPrice: 2.85,
    latitude: 34.8801,
    longitude: -83.9612,
    phoneNumber: '(706) 745-7947',
    distance: 0.8,
    has24Hours: false
  },
  {
    id: 'bp_bracketts',
    name: 'BP',
    brand: 'BP',
    address: '16 Bracketts Way',
    regularPrice: 2.66,
    midGradePrice: 2.96,
    premiumPrice: 3.26,
    dieselPrice: 2.96,
    latitude: 34.8703,
    longitude: -83.9498,
    phoneNumber: '(706) 781-1041',
    distance: 0.5,
    has24Hours: false
  },
  {
    id: 'marathon_5916murphy',
    name: 'Marathon',
    brand: 'Marathon',
    address: '5916 Murphy Hwy',
    regularPrice: 2.75,
    midGradePrice: 3.05,
    premiumPrice: 3.35,
    latitude: 34.8850,
    longitude: -83.9650,
    phoneNumber: '(706) 745-4159',
    distance: 3.8,
    has24Hours: false
  }
];

// Add timestamp and save
const data = {
  stations: stations,
  timestamp: Date.now(),
  lastUpdated: new Date().toISOString(),
  metadata: {
    city: 'Blairsville',
    state: 'GA',
    zip: '30512'
  }
};

// Write to prices.json
fs.writeFileSync('prices.json', JSON.stringify(data, null, 2));

console.log('✅ Updated ' + stations.length + ' stations');
console.log('✅ Data saved to prices.json');
