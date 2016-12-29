function playIntro(opening) {
  var intro = opening.intro.replace(/</g,"&lt;");
  intro = intro.replace(/>/g,"&gt;");
  intro = intro.replace(/\n/g,"<br>");
  StarWars.animation.find("#intro").html(intro);
  StarWars.animation.find("#episode").text(opening.episode);
  StarWars.animation.find("#title").text(opening.title);

  var ps = opening.text.split('\n');

  var div = StarWars.animation.find("#text");
  div.text('');
  for(var i in ps){
      div.append($('<p>').text(ps[i]));
  }

  $('#logosvg',StarWars.animation).css('width',$(window).width()+'px'); // set width of the logo
  $('#logoimg',StarWars.animation).css('width',$(window).width()+'px');

  var logoText = opening.logo ? opening.logo : "star\nwars";
  var aLogo = logoText.split('\n'); // breaks logo text in 2 lines
  var logo1 = aLogo[0];
  var logo2 = aLogo[1] || "";
  if(logoText.toLowerCase() != "star\nwars"){
      var texts = $('#logosvg text',StarWars.animation);
      texts[0].textContent = logo1;
      texts[1].textContent = logo2;

      // calculate the svg viewBox using the number of characters of the longest world in the logo.
      var logosize = logo1.length > logo2.length ? logo1 : logo2;
      var vbox = '0 0 '+logosize.length*200+' 500';
      $('#logosvg',StarWars.animation).each(function () {$(this)[0].setAttribute('viewBox', vbox) });
      $('#logosvg',StarWars.animation).show();
      $('#logoimg',StarWars.animation).hide();
  }else{ // if the logo text is "Star Wars" set to the logo SVG.
      $('#logosvg',StarWars.animation).hide();
      $('#logoimg',StarWars.animation).show();
  }

  StarWars.play();
}
