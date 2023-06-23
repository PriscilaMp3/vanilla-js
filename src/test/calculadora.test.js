
import {suma,resta, dividir, multiplicar,filtrarpares, filtrardivisibles} from "../calculadora.js"

describe("suma", () => {
    test("suma 3 + 7 es 10", () => {
    expect(suma(3,7)).toBe(10);
    });
});

describe("resta", () => {
    test("resta 29 - 9 es 20", () => {
    expect(resta(29,9)).toBe(20);
    });
});

describe("dividir", () => {
    test("dividir 60 / 4 es 15", () => {
    expect(dividir(60,4)).toBe(15);
    });
});

describe("multiplicar", () => {
    test("multiplicar 28 * 3 es 84", () => {
    expect(multiplicar(28,3)).toBe(84);
    });
});

describe("filtrarpares", () => {
    test("filtrarpares", () => {
   let lista = [1,2,3,4,5,6,7,8,9,10 ];
   let resultadoEsperado =[2,4,6,8,10];
   let resultado = filtrarpares(lista);
   expect(resultado).toStrictEqual(resultadoEsperado);
});
});

describe("filtrardivisibles", () => {
    test("filtrardivisibles", () => {
   let lista = [10, 15, 20, 25, 30, 35];
   let resultadoEsperado =[10, 15, 20, 25, 30, 35];
   let resultado = filtrardivisibles(lista);
   expect(resultado).toStrictEqual(resultadoEsperado);
    });
    });
    