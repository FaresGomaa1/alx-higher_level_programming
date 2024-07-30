#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
const wedgeAntillesId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    try {
      const data = JSON.parse(body);
      const films = data.results;
      const count = films.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`)).length;
      console.log(count);
    } catch (err) {
      console.error('Error parsing JSON:', err);
    }
  }
});
