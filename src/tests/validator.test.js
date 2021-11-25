import Validator from '../validator';

test.each([
  ['Bump', true],
  ['Sage', true],
  ['_extra', false],
  ['-sgdss', false],
  ['Lgfjgn_', false],
  ['johnny-', false],
  ['kri7874', false],
  ['sdgf3', false],
  ['dsg--d', true],
  ['dfasd___d', false],
  ['11aasdds', false],
])(('Проверка метода validateUsername'), (obj, exp) => {
  expect(Validator.validateUsername(obj)).toBe(exp);
});
