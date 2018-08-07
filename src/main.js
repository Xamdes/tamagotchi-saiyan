import { Tamagotchi } from './Tamagotchi';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



$(document).ready(function() {
  $(".indexp").one('click',function(){
    let song = new Audio("../src/audio/song.mp3");
    song.play();
    const newPet = new Tamagotchi(100, 100, 100);
    setTimeout(function(){
      $(".game").fadeIn();
      newPet.startGame();
    }, 6500);
    setTimeout(function(){
      newPet.furtherBeyond();
      $("#firstguy").hide();
      $("#secondguy").show();
    }, 51000);
    $(".homeindex").addClass("animated bounceOut");
    setTimeout(function(){$(".homeindex").hide()}, 1000);

    setTimeout(function(){$(".ready").fadeIn()}, 1000);
    setTimeout(function(){$(".go").show()}, 4000);
    setTimeout(function(){
      $(".ready").fadeOut();
      $(".go").fadeOut();
    }, 6000);
    $('#food').click(function() {
      newPet.addFood();
    });
    $('#play').click(function() {
      newPet.addPlay();
    });
    $('#sleep').click(function() {
      newPet.addRest();
    });
   //
   //  $("#test").text(newPet.getFood());
   //
   //  $("#test1").text(newPet.getPlay());
   //
   //  $("#test2").text(newPet.getRest());
   // //$(".test3").text(newPet.getRest());

  document.getElementById("test3").innerHTML = newPet.getFood();
})

});
