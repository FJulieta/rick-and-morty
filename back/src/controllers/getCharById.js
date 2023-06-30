const axios = require('axios');

exports.getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      const { id, name, gender, species, origin, image, status } = response.data;

      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status
      };

      res.status(200).json(character);
    })
    .catch(error => {
      res.status(500).type('text/plain').send(error.message);
    });
};
