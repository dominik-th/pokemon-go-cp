# pokemon-go-cp

A calculator for Pokémon combat power given their level and IVs

## Usage

Install package using npm:
```shell
$ npm i pokemon-go-cp
```

Using the package:
```js
var cpCalculator = require('pokemon-go-cp');

// Choose a Pokémon by its Dex number:
var pokemon = 1; // Bulbasaur

// Choose Pokémon iv between 0 and 15:
var atk = 12;
var def = 14;
var sta = 15;

// Calculate the combat power as shown in Pokémon Go
cpCalculator.calculate(pokemon, atk, def, sta); // 546

// Choose a Pokémon level. If not set, default is 20
var pokemonLevel = 31.5;

cpCalculator.calculate(pokemon, atk, def, sta, pokemonLevel); // 839
```

## Contributing

Feel free to open pull requests.

In case there are Pokémon missing or combat power is calculated incorrectly, you might want to use the `generator.js` script to update the database.

```shell
$ cd src/
$ node generator.js
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
