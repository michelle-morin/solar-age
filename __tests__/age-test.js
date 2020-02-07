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
    expect(userAge.mercuryAge).toBe(125.00);
  });

  test('should determine user age in Venus years', () => {
    userAge.determineVenusAge();
    expect(userAge.venusAge).toBe(48.39);
  });

  test('should determine user age in Mars years', () => {
    userAge.determineMarsAge();
    expect(userAge.marsAge).toBe(15.96);
  });

  test('should determine user age in Jupiter years', () => {
    userAge.determineJupiterAge();
    expect(userAge.jupiterAge).toBe(2.53);
  });

  test('should correctly update user biological information', () => {
    userAge.userBiology("F");
    expect(userAge.biology).toBe("F");
  });

  test('should determine user life expectancy on Earth based on user biology property', () => {
    userAge.userBiology("F");
    userAge.earthExpectancy();
    expect(userAge.earthLifeExpectancy).toBe(81);
  });

  test('should determine number of years a user has left to live on Mercury', () => {
    userAge.userBiology("F");
    userAge.earthExpectancy();
    userAge.mercuryExpectancy();
    expect(userAge.yearsLeftMercury).toBe(212.50);
  });

  test('should determine number of years a user has left to live on Venus', () => {
    userAge.userBiology("F");
    userAge.earthExpectancy();
    userAge.venusExpectancy();
    expect(userAge.yearsLeftVenus).toBe(82.26);
  });

  test('should determine number of years a user has left to live on Mars', () => {
    userAge.userBiology("F");
    userAge.earthExpectancy();
    userAge.marsExpectancy();
    expect(userAge.yearsLeftMars).toBe(27.13);
  });

  test('should determine number of years a user has left to live on Jupiter', () => {
    userAge.userBiology("F");
    userAge.earthExpectancy();
    userAge.jupiterExpectancy();
    expect(userAge.yearsLeftJupiter).toBe(4.30);
  });

  test('should determine number of Mercury years a user has lived beyond life expectancy', () => {
    let newUserAge = new Age(85);
    newUserAge.userBiology("F");
    newUserAge.earthExpectancy();
    newUserAge.beyondExpectancy();
    expect(newUserAge.mercuryYearsBeyondExpectancy).toBe(16.67);
  });

  test('should determine number of Venus years a user has lived beyond life expectancy', () => {
    let newUserAge = new Age(85);
    newUserAge.userBiology("F");
    newUserAge.earthExpectancy();
    newUserAge.beyondExpectancy();
    expect(newUserAge.venusYearsBeyondExpectancy).toBe(6.45);
  });

  test('should determine number of Mars years a user has lived beyond life expectancy', () => {
    let newUserAge = new Age(85);
    newUserAge.userBiology("F");
    newUserAge.earthExpectancy();
    newUserAge.beyondExpectancy();
    expect(newUserAge.marsYearsBeyondExpectancy).toBe(2.13);
  });

  test('should determine number of Jupiter years a user has lived beyond life expectancy', () => {
    let newUserAge = new Age(85);
    newUserAge.userBiology("F");
    newUserAge.earthExpectancy();
    newUserAge.beyondExpectancy();
    expect(newUserAge.jupiterYearsBeyondExpectancy).toBe(0.34);
  });
});