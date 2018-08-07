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
    setTimeout(function(){newPet.startGame()}, 6500);

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
