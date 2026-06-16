import { Character } from '../src/Character.js';
import { getSpecialAttacks } from '../src/getSpecialAttacks.js';

describe('проверка доступа к способностям героя', () => {
  test('Получение имеющихся способностей героя с описанием', () => {
    const hero = new Character({
      name: 'Legolas',
      type: 'Bowman',
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        { id: 9, name: 'Нокаутирующий удар', icon: 'http://...' },
      ],
    });

    const result = getSpecialAttacks(hero);

    expect(result).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ]);
  });

  test('Проверка героя с отсутствием specialAttacks', () => {
    // const hero = new Character({
    //   name: 'Legolas',
    //   type: 'Bowman',
    // });

    const result = getSpecialAttacks({});

    expect(result).toEqual([]);
  });

  test('создание героя с дефолтными значениями', () => {
    const defaultHero = new Character({});

    expect(defaultHero.attack).toBe(10);
    expect(defaultHero.defence).toBe(10);
    expect(defaultHero.health).toBe(100);
    expect(defaultHero.level).toBe(1);
    expect(defaultHero.special).toEqual([]);
  });
});
