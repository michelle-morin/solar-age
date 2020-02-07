import { Age } from './age.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let inputAge = parseInt($("input#age").val());
    let inputBioligy = $("input:radio[name=biology]:checked").val();
    let age = new Age(inputAge);
    age.earthExpectancy(inputBioligy);
    age.determinePlanetAges();
    age.determinePlanetExpectancies();
    age.determineBeyondExpectancy();

    $(".mercury-age").html(age.mercuryAge);
    $(".venus-age").html(age.venusAge);
    $(".mars-age").html(age.marsAge);
    $(".jupiter-age").html(age.jupiterAge);
    $(".earth-expectancy").html(age.earthLifeExpectancy);
    if (age.earthAge <= age.earthLifeExpectancy) {
      $("#under-expectancy").show();
      $("#over-expectancy").hide();
      $("life-mercury").html(age.yearsLeftMercury);
      $("life-jupiter").html(age.yearsLeftJupiter);
      $("life-mars").html(age.yearsLeftMars);
      $("life-venus").html(age.yearsLeftVenus);
    } else if (age.earthAge > age.earthLifeExpectancy) {
      $("#under-expectancy").hide();
      $("#over-expectancy").show();
      $("over-mercury").html(age.mercuryYearsBeyondExpectancy);
      $("over-jupiter").html(age.jupiterYearsBeyondExpectancy);
      $("over-mars").html(age.marsYearsBeyondExpectancy);
      $("over-venus").html(age.venusYearsBeyondExpectancy);
    }
  });
});