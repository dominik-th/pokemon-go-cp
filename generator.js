'use strict';

const fs = require('fs');
const request = require('request-promise');

const GAME_MASTER_URL = "https://raw.githubusercontent.com/BrunnerLivio/pokemongo-game-master/master/versions/latest/GAME_MASTER.json";

let generate = async () => {
  const GAME_MASTER = await request.get({
    url: GAME_MASTER_URL,
    json: true
  });

  // Examples:
  // V0001_POKEMON_BULBASAUR
  // V0122_POKEMON_MR_MIME
  // V0233_POKEMON_PORYGON2
  let pokemonTemplateIdPattern = /^V[0-9]{4}_POKEMON_[a-zA-Z0-9_]+$/;

  const pokemonTemplates = GAME_MASTER.itemTemplates.filter(template => {
    return pokemonTemplateIdPattern.test(template.templateId);
  })

  const pokemonList = [];
  pokemonTemplates.map((template) => {
    pokemonList.push({
      "id": parseInt(template.templateId.match(/[0-9]{4}/)[0]),
      "pokemonSettings": {
        "stats": template.pokemonSettings.stats
      }
    });
  });

  pokemonList.sort((a, b) => {
    return a.id - b.id;
  })

  fs.writeFile("./data/base-stats.json", JSON.stringify(pokemonList, null, '  '), (err) => {
    if (err) {
      console.log(`Could not write file: ${err.message}.`);
      return process.exit(1);
    } else {
      console.log(`Successfully fetched ${pokemonList.length} Pokémon and updated their stats.`);
      console.log(`Please double check the file before creating a pull request!`)
    }
  }); 
}

generate();
