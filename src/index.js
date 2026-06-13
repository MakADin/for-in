const swordsman = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export function orderByProps(object, sortOrder) {
  const priorityProps = [];
  const otherProps = [];

  for (const key of sortOrder) {
    if (!Object.hasOwn(object, key)) continue;

    priorityProps.push({ key, value: object[key] });
  }

  for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;

    if (!sortOrder.includes(key)) {
      otherProps.push({ key, value: object[key] });
    }
  }

  otherProps.sort((a, b) => a.key.localeCompare(b.key));

  return [...priorityProps, ...otherProps];
}

let test = orderByProps(swordsman, ['name', 'level']);
console.log(test);

