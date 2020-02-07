export class Age {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.biology = "M";
    this.earthLifeExpectancy = 76;
    this.yearsLeftMercury = 0;
    this.yearsLeftVenus = 0;
    this.yearsLeftMars = 0;
    this.yearsLeftJupiter = 0;
    this.yearsBeyondExpectancy = 0;
  }

  determineMercuryAge() {
    this.mercuryAge += (this.earthAge / 0.24);
  }
}