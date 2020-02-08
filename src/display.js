import $ from 'jquery';

export function ageIsNumber(inputAge) {
  $("form").hide();
  $("#output").show();
  $(".mercury-age").html(inputAge.mercuryAge);
  $(".venus-age").html(inputAge.venusAge);
  $(".mars-age").html(inputAge.marsAge);
  $(".jupiter-age").html(inputAge.jupiterAge);
  $(".earth-expectancy").html(inputAge.earthLifeExpectancy);
  $(".mayfly").html(inputAge.mayflyLives);
}

export function ageNotNumber() {
  $("form").hide();
  $("#output").show().append("Looks like you didn't enter a numerical age. <a href='index.html'>Click here to try again</a>.");
  $("p").hide();
}

export function displayUnderExp(inputAge) {
  $("#under-expectancy").show();
  $("#over-expectancy").hide();
  $("#at-expectancy").hide();
  $(".life-mercury").html(inputAge.yearsLeftMercury);
  $(".life-jupiter").html(inputAge.yearsLeftJupiter);
  $(".life-mars").html(inputAge.yearsLeftMars);
  $(".life-venus").html(inputAge.yearsLeftVenus);
  $("#output").append("<a href='index.html'>Calculate again!</a>");
}

export function displayOverExp(inputAge) {
  $("#under-expectancy").hide();
  $("#at-expectancy").hide();
  $("#over-expectancy").show();
  $(".over-mercury").html(inputAge.mercuryYearsBeyondExpectancy);
  $(".over-jupiter").html(inputAge.jupiterYearsBeyondExpectancy);
  $(".over-mars").html(inputAge.marsYearsBeyondExpectancy);
  $(".over-venus").html(inputAge.venusYearsBeyondExpectancy);
  $("#output").append("<a href='index.html'>Calculate again!</a>");
}

export function displayAtExp() {
  $("#under-expectancy").hide();
  $("#over-expectancy").hide();
  $("#at-expectancy").show();
  $("#output").append("<a href='index.html'>Calculate again!</a>");
}