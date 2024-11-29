// tests/calculator.test.js
const { add, subtract, multiply, divide } = require('../src/mathOperations');
// додано незначні зміни у вигляді коментаря
describe('Math Operations - Модульні тести', () => {
  // Модульний тест 1: перевірка додавання
  test('add() adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  // Модульний тест 2: перевірка віднімання
  test('subtract() subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  // Модульний тест 3: перевірка множення
  test('multiply() multiplies two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

describe('Math Operations - Інтеграційні тести', () => {
  // Інтеграційний тест 1: перевірка комбінованих операцій
  test('add() and multiply() combined', () => {
    const sum = add(2, 3); // sum = 5
    const result = multiply(sum, 4); // 5 * 4 = 20
    expect(result).toBe(20);
  });

  // Інтеграційний тест 2: перевірка обробки помилок в комбінації з діленням
  test('add() and divide() with error handling', () => {
    const sum = add(6, 2); // sum = 8
    expect(() => divide(sum, 0)).toThrow('Cannot divide by zero');
  });
});
