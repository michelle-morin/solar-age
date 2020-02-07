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
    this.yearsBeyondExpectancy = 0;
  }

  determineMercuryAge() {
    this.mercuryAge = parseFloat((this.earthAge / 0.24).toFixed(2));
  }

  determineVenusAge() {
    this.venusAge = parseFloat((this.earthAge / 0.62).toFixed(2));
  }

  determineMarsAge() {
    this.marsAge = parseFloat((this.earthAge / 1.88).toFixed(2));
  }

  determineJupiterAge() {
    this.jupiterAge = parseFloat((this.earthAge / 11.86).toFixed(2));
  }

  userBiology(biology) {
    this.biology = biology;
  }

  earthExpectancy() {
    if (this.biology === "F") {
      this.earthLifeExpectancy = 81;
    } else if (this.biology === "M") {
      this.earthLifeExpectancy = 76;
    } 
  }

  mercuryExpectancy() {
    this.yearsLeftMercury = parseFloat(((this.earthLifeExpectancy - this.earthAge) / 0.24).toFixed(2));
  }

  venusExpectancy() {
    this.yearsLeftVenus = parseFloat(((this.earthLifeExpectancy - this.earthAge) / 0.62).toFixed(2));
  }

  marsExpectancy() {
    this.yearsLeftMars = parseFloat(((this.earthLifeExpectancy - this.earthAge) / 1.88).toFixed(2));
  }

}