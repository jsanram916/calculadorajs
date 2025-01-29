// calculadora.test.js
const { suma, resta, multiplicar, dividir } = require('./calculadora');

test('Multiplicar 2 y 3 da 6', () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test('Dividir 6 entre 2 da 3', () => {
  expect(dividir(6, 2)).toBe(3);
});

test('Dividir por cero debe lanzar un error', () => {
  expect(() => dividir(6, 0)).toThrow("No se puede dividir por cero");
});
