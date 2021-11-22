import Bowman from '../bowman';

test(('class Bowman create'), () => {
  const name = 'Bowman1';
  const expected = {
    name,
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };
  const bowman = new Bowman(name);
  expect(bowman).toEqual(expected);
});

test(('class Bowman wrong name'), () => {
  expect(() => new Bowman('daaaaaaaaaaaaaaamn', 'Bowman')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Bowman wrong type'), () => {
  expect(() => new Bowman('Bowman', 'crack')).toThrow('This type crack is wrong');
});
