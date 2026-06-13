import { orderByProps } from '../src/index.js';

describe('тесты сортировки свойств объекта', () => {
  test('Сортировка по шаблону ["name", "level"] и в алфавитном порядке', () => {
    const obj = {
      name: 'лучник',
      health: 100,
      level: 80,
      attack: 750,
      defence: 200,
    };
    const order = ['name', 'level'];

    expect(orderByProps(obj, order)).toEqual([
      { key: 'name', value: 'лучник' },
      { key: 'level', value: 80 },
      { key: 'attack', value: 750 },
      { key: 'defence', value: 200 },
      { key: 'health', value: 100 },
    ]);
  });
});

describe('orderByProps optimized function', () => {
  test('should ignore keys from sortOrder that do not exist in object', () => {
    const obj = { name: 'маг', health: 50 };
    const order = ['level', 'name']; // 'level' отсутствует в объекте

    expect(orderByProps(obj, order)).toEqual([
      { key: 'name', value: 'маг' },
      { key: 'health', value: 50 },
    ]);
  });

  test('should sort alphabetically if sortOrder is empty', () => {
    const obj = { health: 10, attack: 80 };
    expect(orderByProps(obj, [])).toEqual([
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
    ]);
  });

  test('should ignore prototype properties', () => {
    const protoObj = { inherited: 'yes' };
    const obj = Object.create(protoObj);
    obj.own = 'yes';

    expect(orderByProps(obj, ['own', 'inherited'])).toEqual([
      { key: 'own', value: 'yes' },
    ]);
  });
});
