import Validator from '../validName';

const nickUserOne = new Validator('Nick_123_Name');
const nickUserTwo = new Validator('_Nick_Name123');

test('check validation if true', () => {
  expect(nickUserOne.validateUsername()).toBe(true);
});

test('check validation if false', () => {
  expect(nickUserTwo.validateUsername()).toBe(false);
});
