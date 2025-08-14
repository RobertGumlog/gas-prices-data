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
    premiumPrice: 3.15
