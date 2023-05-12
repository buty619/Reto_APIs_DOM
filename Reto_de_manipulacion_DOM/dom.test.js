/**
 * @jest-environment jsdom
 */
import "isomorphic-fetch";

const htmlDOM = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <script defer src="../js/script.js"></script>
    <title>Pokedex</title>
  </head>
  <body>
    <main>
      <img src="#" alt="pokemon" class="pokemon_image" />
      <img src="../img/pokedex.png" alt="pokedex" class="pokedex" />

      <h1 class="pokemon_data">
        <span class="pokemon_number"></span> -
        <span class="pokemon_name"></span> <br />
      </h1>

      <form class="form">
        <input
          type="search"
          class="input_search"
          placeholder="pokemon ID"
          required
        />
      </form>
      <div class="buttons">
        <button class="ver anterior">Anterior</button>
        <button class="ver proximo">Proximo</button>
      </div>
    </main>
  </body>
</html>
`;

const successPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;34m\x1b[38;5;15m";
const failPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;208m\x1b[38;5;15m";

describe("testing reto de DOM", () => {
  let testStatus = false;
  let passTests = 0;
  let failedTest = 0;

  beforeAll(() => {
    document.body.innerHTML = htmlDOM;
    require("./js/script");
  });

  afterEach(() => {
    if (testStatus) {
      passTests += 1;
    } else {
      failedTest += 1;
    }

    testStatus = false;
  });

  afterAll(() => {
    const success =
      "🚀🚀 EXCELENTE TRABAJO COMPLETASTE LA PRUEBA DE MANERA SATISFACTORIA ESTE ES EL CÓDIGO SECRETO: UBITSJSDOM9898 🚀🚀 \x1b[0m";
    const error =
      "❌❌ AUN NO HAS SUPERADO LA PRUEBA POR FAVOR VERIFICA QUE CUMPLAS CON TODOS LOS CRITERIOS SOLICITADOS ❌❌ \x1b[0m";
    if (failedTest > 0) {
      console.log(`${failPrintStyle} ${error}`);
    } else {
      console.log(`${successPrintStyle} ${success}`);
    }
  });

  it("render inicial de la data", (done) => {
    const pokemonName = document.querySelector(".pokemon_name");
    const pokemonNumber = document.querySelector(".pokemon_number");
    const pokemonImage = document.querySelector(".pokemon_image");
    setTimeout(() => {
      expect(pokemonName.innerHTML).toBe("bulbasaur");
      expect(pokemonNumber.innerHTML).toBe(`1`);
      expect(pokemonImage.src).toBe(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
      );
      testStatus = true;
      done();
    }, 1000);
  });

  it("llamado del siguiente pokemon click en proximo", (done) => {
    const buttonNext = document.querySelector(".proximo");
    const pokemonName = document.querySelector(".pokemon_name");
    const pokemonNumber = document.querySelector(".pokemon_number");
    const pokemonImage = document.querySelector(".pokemon_image");

    setTimeout(() => {
      buttonNext.click();
      setTimeout(() => {
        expect(pokemonName.innerHTML).toBe("ivysaur");
        expect(pokemonNumber.innerHTML).toBe(`2`);
        expect(pokemonImage.src).toBe(
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif"
        );
        testStatus = true;
        done();
      }, 1000);
    }, 1000);
  });

  it("llamado del anterior pokemon click en anterior", (done) => {
    const buttonPrev = document.querySelector(".anterior");
    const pokemonName = document.querySelector(".pokemon_name");
    const pokemonNumber = document.querySelector(".pokemon_number");
    const pokemonImage = document.querySelector(".pokemon_image");

    setTimeout(() => {
      buttonPrev.click();
      setTimeout(() => {
        expect(pokemonName.innerHTML).toBe("bulbasaur");
        expect(pokemonNumber.innerHTML).toBe(`1`);
        expect(pokemonImage.src).toBe(
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
        );
        testStatus = true;
        done();
      }, 1000);
    }, 1000);
  });

  it("probando los dos botones", (done) => {
    const buttonNext = document.querySelector(".proximo");
    const buttonPrev = document.querySelector(".anterior");
    const pokemonName = document.querySelector(".pokemon_name");
    const pokemonNumber = document.querySelector(".pokemon_number");
    const pokemonImage = document.querySelector(".pokemon_image");

    setTimeout(() => {
      buttonNext.click();
      setTimeout(() => {
        buttonNext.click();
        setTimeout(() => {
          buttonPrev.click();
          setTimeout(() => {
            expect(pokemonName.innerHTML).toBe("ivysaur");
            expect(pokemonNumber.innerHTML).toBe(`2`);
            expect(pokemonImage.src).toBe(
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif"
            );
            testStatus = true;
            done();
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });

  it("probando el form submit", (done) => {
    const form = document.querySelector(".form");
    const input = document.querySelector(".input_search");
    const pokemonName = document.querySelector(".pokemon_name");
    const pokemonNumber = document.querySelector(".pokemon_number");
    const pokemonImage = document.querySelector(".pokemon_image");

    setTimeout(() => {
      input.value = 90;
      form.submit();
      setTimeout(() => {
        expect(pokemonName.innerHTML).toBe("shellder");
        expect(pokemonNumber.innerHTML).toBe(`90`);
        expect(pokemonImage.src).toBe(
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/90.gif"
        );
        testStatus = true;
        done();
      }, 1000);
    }, 1000);
  });

  it("no encuentra pokemon", (done) => {
    const form = document.querySelector(".form");
    const input = document.querySelector(".input_search");
    const pokemonName = document.querySelector(".pokemon_name");
    const pokemonNumber = document.querySelector(".pokemon_number");
    const pokemonImage = document.querySelector(".pokemon_image");

    setTimeout(() => {
      input.value = 99999;
      form.submit();
      setTimeout(() => {
        expect(pokemonName.innerHTML).toBe("pokemon no encontrado");
        expect(pokemonNumber.innerHTML).toBe("");
        expect(pokemonImage.src).toBe("http://localhost/img/notFound.gif");
        testStatus = true;
        done();
      }, 1000);
    }, 1000);
  });
});
