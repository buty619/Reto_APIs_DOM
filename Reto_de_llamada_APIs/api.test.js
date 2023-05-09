import {
  costoTotal,
  promedio,
  carrosHibridos,
  carroMasCaro,
  nuevoCarro,
  eliminarCarro,
} from "./arrays";
import db from "./CarDataBase";

const successPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;34m\x1b[38;5;15m";
const failPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;208m\x1b[38;5;15m";

describe("testing reto de Arrays", () => {
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
      "🚀🚀 EXCELENTE TRABAJO COMPLETASTE LA PRUEBA DE MANERA SATISFACTORIA ESTE ES EL CÓDIGO SECRETO: UBITSJSAR13524 🚀🚀 \x1b[0m";
    const error =
      "❌❌ AUN NO HAS SUPERADO LA PRUEBA POR FAVOR VERIFICA QUE CUMPLAS CON TODOS LOS CRITERIOS SOLICITADOS ❌❌ \x1b[0m";
    if (failedTest > 0) {
      console.log(`${failPrintStyle} ${error}`);
    } else {
      console.log(`${successPrintStyle} ${success}`);
    }
  });

  it("1. Obtener el costo total de los carros en inventario", () => {
    const output = 5020295;
    expect(costoTotal(db)).toBe(output);
    testStatus = true;
  });
  it("2. Obtener el promedio de los precios de los carros pares", () => {
    const output = 47548.9;
    expect(promedio(db)).toBe(output);
    testStatus = true;
  });
  it("3. Obtener los carros Híbridos", () => {
    const output = 24;
    expect(carrosHibridos(db).length).toBe(output);
    testStatus = true;
  });
  it("4. Obtener el producto más caro", () => {
    const output = {
      car_name: "Mercedes-Benz",
      cost: 98089,
      model: "Sedan",
      manufacturer: "Honda",
      color: "Red",
      num_doors: 2,
      cylinder_capacity: 5307,
      fuel_type: "Hybrid",
      transmission: "Manual",
      drive_type: "Rear-wheel drive",
      horsepower: 787,
    };
    expect(carroMasCaro(db).car_name).toBe(output.car_name);
    expect(carroMasCaro(db).cost).toBe(output.cost);
    expect(carroMasCaro(db).color).toBe(output.color);
    expect(carroMasCaro(db).cylinder_capacity).toBe(output.cylinder_capacity);
    expect(carroMasCaro(db).drive_type).toBe(output.drive_type);
    testStatus = true;
  });
  it("5. Agregar un nuevo producto", () => {
    const output = 101;
    expect(nuevoCarro(db).length).toBe(output);
    expect(nuevoCarro(db)[100].car_name).toBeDefined();
    expect(nuevoCarro(db)[100].cost).toBeDefined();
    expect(nuevoCarro(db)[100].model).toBeDefined();
    expect(nuevoCarro(db)[100].manufacturer).toBeDefined();
    expect(nuevoCarro(db)[100].num_doors).toBeDefined();
    expect(nuevoCarro(db)[100].cylinder_capacity).toBeDefined();
    expect(nuevoCarro(db)[100].fuel_type).toBeDefined();
    expect(nuevoCarro(db)[100].transmission).toBeDefined();
    expect(nuevoCarro(db)[100].drive_type).toBeDefined();
    expect(nuevoCarro(db)[100].horsepower).toBeDefined();
    expect(nuevoCarro(db)[100].color).toBeDefined();
    testStatus = true;
  });
  it("6. Eliminar el carro mas económico", () => {
    const output = 99;
    expect(eliminarCarro(db).length).toBe(output);
    testStatus = true;
  });
});
