import "isomorphic-fetch";

import {
  obtenerPokemon,
  obtenerTodosPokemones,
  obtenerTipo,
  obtenerHabilidadPokemon,
  obtenerRegionPokemon,
} from "./api";

const successPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;34m\x1b[38;5;15m";
const failPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;208m\x1b[38;5;15m";

describe("testing reto de APIs", () => {
  let testStatus = false;
  let passTests = 0;
  let failedTest = 0;

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
      "🚀🚀 EXCELENTE TRABAJO COMPLETASTE LA PRUEBA DE MANERA SATISFACTORIA ESTE ES EL CÓDIGO SECRETO: UBITSJSAPI675641 🚀🚀 \x1b[0m";
    const error =
      "❌❌ AUN NO HAS SUPERADO LA PRUEBA POR FAVOR VERIFICA QUE CUMPLAS CON TODOS LOS CRITERIOS SOLICITADOS ❌❌ \x1b[0m";
    if (failedTest > 0) {
      console.log(`${failPrintStyle} ${error}`);
    } else {
      console.log(`${successPrintStyle} ${success}`);
    }
  });

  it("1. Obtener información de un Pokemón", async () => {
    const {
      nombre: inputName,
      id: inputId,
      tipos: inputTypes,
      imagen: inputImage,
      base_experience: inputBaseExperience,
    } = await obtenerPokemon(65);
    const outputName = "alakazam";
    const outputId = 65;
    const outBaseExperience = 250;
    expect(inputName).toBe(outputName);
    expect(inputId).toBe(outputId);
    expect(inputTypes.length).toBe(1);
    expect(inputImage).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    );
    expect(inputBaseExperience).not.toBe(outBaseExperience);
    testStatus = true;
  });

  it("2. Obtener información de los primeros 20 Pokemón", async () => {
    const result = await obtenerTodosPokemones();
    const outputName1 = "charizard";
    const outputName2 = "blastoise";
    const outputName3 = "rattata";
    const outputUrl1 = "https://pokeapi.co/api/v2/pokemon/1/";
    const outputUrl2 = "https://pokeapi.co/api/v2/pokemon/12/";
    const outputUrl3 = "https://pokeapi.co/api/v2/pokemon/17/";
    expect(result[5].name).toBe(outputName1);
    expect(result[8].name).toBe(outputName2);
    expect(result[18].name).toBe(outputName3);
    expect(result[0].url).toBe(outputUrl1);
    expect(result[11].url).toBe(outputUrl2);
    expect(result[16].url).toBe(outputUrl3);
    testStatus = true;
  });

  it("3. Obtener información del tipo de Pokemón", async () => {
    const result = await obtenerTipo("dragon");
    const pokemonLength = 102;

    expect(result[24].name).toBe("zweilous");
    expect(result[45].name).toBe("applin");
    expect(result[88].name).toBe("sliggoo-hisui");
    expect(result[4].url).toBe("https://pokeapi.co/api/v2/pokemon/329/");
    expect(result[100].url).toBe("https://pokeapi.co/api/v2/pokemon/10270/");
    expect(result[21].url).toBe("https://pokeapi.co/api/v2/pokemon/612/");
    expect(result.length).toBe(pokemonLength);
    testStatus = true;
  });

  it("4. Obtener información de la habilidad Pokemón", async () => {
    const result = await obtenerHabilidadPokemon(30);
    const name = "natural-cure";
    const id = 30;

    expect(result.nombre).toBe(name);
    expect(result.id).toBe(id);
    expect(result.pokemones[12]).toBe("shaymin-land");
    expect(result.pokemones[7]).toBe("swablu");
    expect(result.pokemones[18]).toBe("pawmot");
    expect(result.pokemones.length).toBe(19);
    testStatus = true;
  });

  it("5. Obtener información de la region de un Pokemón:", async () => {
    const result = await obtenerRegionPokemon(150);
    const name = "mewtwo";
    const id = 150;

    expect(result.nombre).toBe(name);
    expect(result.id).toBe(id);
    expect(result.imagen).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    );
    expect(result.region[0]).toBe("cerulean-cave-b1f");
    testStatus = true;
  });
});
