import { Age } from './../src/age.js';

describe('Age', () => {

  test('should correctly create an age object with user age in Earth years', () => {
    let userAge = new Age(30);
    expect(userAge.earthAge).toBe(30);
  });

});