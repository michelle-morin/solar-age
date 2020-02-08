import { Age } from './age.js';
import { ageIsNumber, displayUnderExp, displayOverExp, ageNotNumber, displayAtExp } from './display.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const inputAge = parseInt($("input#age").val());
    const inputBioligy = $("input:radio[name=biology]:checked").val();
    if (isNaN(inputAge) === false) {
      let age = new Age(inputAge);
      age.earthExpectancy(inputBioligy);
      age.determineMayflyLives();
      let comparisonResult = age.compareMayflyToSun();
      $(".comparison").html(comparisonResult);
      age.determinePlanetAges();
      age.determinePlanetExpectancies();
      age.determineBeyondExpectancy();
      ageIsNumber(age);
      if (age.earthAge < age.earthLifeExpectancy) {
        displayUnderExp(age);
      } else if (age.earthAge > age.earthLifeExpectancy) {
        displayOverExp(age);
      } else if (age.earthAge === age.earthLifeExpectancy) {
        displayAtExp();
      }
    } else {
      ageNotNumber();
    }
  });
});