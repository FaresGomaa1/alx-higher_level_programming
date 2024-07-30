#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  try {
    const movieData = JSON.parse(body);
    const characters = movieData.characters;

    characters.forEach(characterUrl => {
      request(characterUrl, (error, response, body) => {
        if (error) {
          console.error('Error:', error);
          return;
        }

        try {
          const characterData = JSON.parse(body);
          console.log(characterData.name);
        } catch (err) {
          console.error('Error parsing JSON:', err);
        }
      });
    });
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});
