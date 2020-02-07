import { Age } from './../src/age.js';

describe('Age', () => {
  let userAge;
  beforeEach(() => {
    userAge = new Age(30);
  });

  test('should correctly create an age object with user age in Earth years', () => {
    expect(userAge.earthAge).toBe(30);
  });

  test('should determine user age in Mercury years', () => {
    userAge.determineMercuryAge();
    expect(userAge.mercuryAge).toBe(125);
  });

  test('should determine user age in Venus years', () => {
    userAge.determineVenusAge();
    expect(userAge.venusAge).toBe(48);
  });


});