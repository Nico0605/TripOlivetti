$(document).ready(function() {

  var numberPage = 0;

  //button
  var logo = $("#btnLogo");
  var about = $("#about");
  var typewriter = $("#typewriter");
  var trip = $("#trip");

  //content about
  var camillo = $("#camillo");
  var adriano = $("#adriano");

  //hr about
  var hrAdriano = $("#hrAdriano");

  //content typewriter
  var firsTw = $("#firstTypewriter");
  var famousTw = $("#FamousTypewriter");
  var iconicTw = $("#IconicTypewriter");

  //hr typewriter
  var hrFamous = $("#hrFamous");
  var hrIconic = $("#hrIconic");

  //content trip
  var starting = $("#starting");
  var arrive = $("#arrive");
  var museumOlivetti = $("#museumOlivetti");
  var olivetti = $("#olivetti");
  var reflection = $("#reflection");

  //hr trip
  var hrArrive = $("#hrArrive");
  var hrStarting = $("#hrStarting");
  var hrMuseum = $("#hrMuseum");
  var hrOlivetti = $("#hrOlivetti");

  //typewriter
  firsTw.hide();
  famousTw.hide();
  iconicTw.hide();

  hrFamous.hide();
  hrIconic.hide();

  //Trip
  starting.hide();
  arrive.hide();
  museumOlivetti.hide();
  olivetti.hide();
  reflection.hide();

  hrStarting.hide();
  hrArrive.hide();
  hrMuseum.hide();
  hrOlivetti.hide();

  //about olivetti
  camillo.show();
  adriano.show();

  hrAdriano.show();

  logo.click(function() {

    //typewriter
    if (numberPage == 1) {

      firsTw.fadeOut(1000);
      famousTw.fadeOut(1000);
      iconicTw.fadeOut(1000);

      hrFamous.fadeOut(1000);
      hrIconic.fadeOut(1000);

      //Trip
      starting.hide();
      arrive.hide();
      museumOlivetti.hide();
      olivetti.hide();
      reflection.hide();

      hrStarting.hide();
      hrArrive.hide();
      hrMuseum.hide();
      hrOlivetti.hide();

      //about olivetti
      camillo.fadeIn(1000);
      adriano.fadeIn(1000);

      hrAdriano.fadeIn(1000);

    } else if (numberPage == 2) {

      firsTw.hide();
      famousTw.hide();
      iconicTw.hide();

      hrFamous.hide();
      hrIconic.hide();

      //Trip
      starting.fadeOut(1000);
      arrive.fadeOut(1000);
      museumOlivetti.fadeOut(1000);
      olivetti.fadeOut(1000);
      reflection.fadeOut(1000);

      hrStarting.fadeOut(1000);
      hrArrive.fadeOut(1000);
      hrMuseum.fadeOut(1000);
      hrOlivetti.fadeOut(1000);

      //about olivetti
      camillo.fadeIn(1000);
      adriano.fadeIn(1000);

      hrAdriano.fadeIn(1000);
    }

    $('html, body').animate({
      scrollTop: 0
    }, 100);

    numberPage = 0;
  });

  about.click(function() {

    //typewriter
    if (numberPage == 1) {

      firsTw.fadeOut(1000);
      famousTw.fadeOut(1000);
      iconicTw.fadeOut(1000);

      hrFamous.fadeOut(1000);
      hrIconic.fadeOut(1000);

      //Trip
      starting.hide();
      arrive.hide();
      museumOlivetti.hide();
      olivetti.hide();
      reflection.hide();

      hrStarting.hide();
      hrArrive.hide();
      hrMuseum.hide();
      hrOlivetti.hide();

      //about olivetti
      camillo.fadeIn(1000);
      adriano.fadeIn(1000);

      hrAdriano.fadeIn(1000);

    } else if (numberPage == 2) {

      firsTw.hide();
      famousTw.hide();
      iconicTw.hide();

      hrFamous.hide();
      hrIconic.hide();

      //Trip
      starting.fadeOut(1000);
      arrive.fadeOut(1000);
      museumOlivetti.fadeOut(1000);
      olivetti.fadeOut(1000);
      reflection.fadeOut(1000);

      hrStarting.fadeOut(1000);
      hrArrive.fadeOut(1000);
      hrMuseum.fadeOut(1000);
      hrOlivetti.fadeOut(1000);

      //about olivetti
      camillo.fadeIn(1000);
      adriano.fadeIn(1000);

      hrAdriano.fadeIn(1000);
    }

    $('html, body').animate({
      scrollTop: 0
    }, 100);

    numberPage = 0;
  });

  typewriter.click(function() {

    if (numberPage == 0) {
      //typewriter
      firsTw.fadeIn(1000);
      famousTw.fadeIn(1000);
      iconicTw.fadeIn(1000);

      hrFamous.fadeIn(1000);
      hrIconic.fadeIn(1000);

      //Trip
      starting.hide();
      arrive.hide();
      museumOlivetti.hide();
      olivetti.hide();
      reflection.hide();

      hrStarting.hide();
      hrArrive.hide();
      hrMuseum.hide();
      hrOlivetti.hide();

      //about olivetti
      camillo.fadeOut(1000);
      adriano.fadeOut(1000);

      hrAdriano.fadeOut(1000);

    } else if (numberPage == 2) {
      //typewriter
      firsTw.fadeIn(1000);
      famousTw.fadeIn(1000);
      iconicTw.fadeIn(1000);

      hrFamous.fadeIn(1000);
      hrIconic.fadeIn(1000);

      //Trip
      starting.fadeOut(1000);
      arrive.fadeOut(1000);
      museumOlivetti.fadeOut(1000);
      olivetti.fadeOut(1000);
      reflection.fadeOut(1000);

      hrStarting.fadeOut(1000);
      hrArrive.fadeOut(1000);
      hrMuseum.fadeOut(1000);
      hrOlivetti.fadeOut(1000);

      //about olivetti
      camillo.hide();
      adriano.hide();

      hrAdriano.hide();

    }

    $('html, body').animate({
      scrollTop: 0
    }, 100);

    numberPage = 1;
  });

  trip.click(function() {


    if (numberPage == 0) {
      //typewriter
      firsTw.hide();
      famousTw.hide();
      iconicTw.hide();

      hrFamous.hide();
      hrIconic.hide();

      //Trip
      starting.fadeIn(1000);
      arrive.fadeIn(1000);
      museumOlivetti.fadeIn(1000);
      olivetti.fadeIn(1000);
      reflection.fadeIn(1000);

      hrStarting.fadeIn(1000);
      hrArrive.fadeIn(1000);
      hrMuseum.fadeIn(1000);
      hrOlivetti.fadeIn(1000);

      //about olivetti
      camillo.fadeOut(1000);
      adriano.fadeOut(1000);

      hrAdriano.fadeOut(1000);

    } else if (numberPage == 1) {
      //typewriter
      firsTw.fadeOut(1000);
      famousTw.fadeOut(1000);
      iconicTw.fadeOut(1000);

      hrFamous.fadeOut(1000);
      hrIconic.fadeOut(1000);

      //Trip
      starting.fadeIn(1000);
      arrive.fadeIn(1000);
      museumOlivetti.fadeIn(1000);
      olivetti.fadeIn(1000);
      reflection.fadeIn(1000);

      hrStarting.fadeIn(1000);
      hrArrive.fadeIn(1000);
      hrMuseum.fadeIn(1000);
      hrOlivetti.fadeIn(1000);

      //about olivetti
      camillo.hide();
      adriano.hide();

      hrAdriano.hide();

    }

    $('html, body').animate({
      scrollTop: 0
    }, 100);

    numberPage = 2;
  });

});
