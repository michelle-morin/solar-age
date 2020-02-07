export class Age {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.biology = "";
    this.earthLifeExpectancy = 0;
    this.yearsLeftMercury = 0;
    this.yearsLeftVenus = 0;
    this.yearsLeftMars = 0;
    this.yearsLeftJupiter = 0;
    this.mercuryYearsBeyondExpectancy = 0;
    this.venusYearsBeyondExpectancy = 0;
    this.marsYearsBeyondExpectancy = 0;
    this.jupiterYearsBeyondExpectancy = 0;
    this.mayflyLives = 0;
  }

  determinePlanetAges() {
    this.mercuryAge = parseFloat((this.earthAge / 0.24).toFixed(2));
    this.venusAge = parseFloat((this.earthAge / 0.62).toFixed(2));
    this.marsAge = parseFloat((this.earthAge / 1.88).toFixed(2));
    this.jupiterAge = parseFloat((this.earthAge / 11.86).toFixed(2));
  }

  earthExpectancy(biology) {
    this.biology = biology;
    if (this.biology === "F") {
      this.earthLifeExpectancy = 81;
    } else if (this.biology === "M" || this.biology === "O") {
      this.earthLifeExpectancy = 76;
    }
  }

  determinePlanetExpectancies() {
    if (this.earthAge <= this.earthLifeExpectancy) {
      this.yearsLeftMercury = parseFloat(((this.earthLifeExpectancy - this.earthAge) / 0.24).toFixed(2));
      this.yearsLeftVenus = parseFloat(((this.earthLifeExpectancy - this.earthAge) / 0.62).toFixed(2));
      this.yearsLeftMars = parseFloat(((this.earthLifeExpectancy - this.earthAge) / 1.88).toFixed(2));
      this.yearsLeftJupiter = parseFloat(((this.earthLifeExpectancy - this.earthAge) / 11.86).toFixed(2));
    }
  }

  determineBeyondExpectancy() {
    if (this.earthAge > this.earthLifeExpectancy && this.earthLifeExpectancy != 0) {
      this.mercuryYearsBeyondExpectancy = parseFloat(((this.earthAge - this.earthLifeExpectancy) / 0.24).toFixed(2));
      this.venusYearsBeyondExpectancy = parseFloat(((this.earthAge - this.earthLifeExpectancy) / 0.62).toFixed(2));
      this.marsYearsBeyondExpectancy = parseFloat(((this.earthAge - this.earthLifeExpectancy) / 1.88).toFixed(2));
      this.jupiterYearsBeyondExpectancy = parseFloat(((this.earthAge - this.earthLifeExpectancy) / 11.86).toFixed(2));
    }
  }

  determineMayflyLives() {

  }
}