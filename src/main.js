import { Tamagotchi } from './Tamagotchi';
import Back from './img/background.jpg';
import Rip from './img/rip.png';
import Head from './img/Tamagotchi-Head.jpg';
import Logo from './img/Tamagotchi-Logo.gif';
import Tama1 from './img/Tamagotchi.png';
import Tama2 from './img/Tamagotchi2.png';
import SongOne from './audio/song.mp3'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './animate.css';

$(function()
{

  SetImageSource('logo-gif',Logo);
  SetImageSource("tamagotchihome",Head);
  SetImageSource("firstguy",Tama1);
  SetImageSource("seconfguy",Tama2);
  SetImageSource("rip",Rip);

  $(".indexp").one('click',function(){
    let song = new Audio(SongOne);
    song.play();
    song.loop = true;
    const newPet = new Tamagotchi(100, 100, 100);
    setTimeout(function(){
      $(".game").fadeIn();
      let promise = new Promise(function(resolve, reject) {
        newPet.startGame();
        setTimeout(function(){if (newPet.score > 440) {
          resolve();
        } else {
          reject();
        }
      }, 45000);
    });
    promise.then(function() {
      if(newPet.gameover === false){
        newPet.furtherBeyond();
        $("#firstguy").hide();
        $("#secondguy").show();
      }
    }, function(){
      song.pause();
      $("#firstguy").hide();
      $("#rip").show();
    });

  }, 6500);

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

  $("#test3").html(newPet.getFood());

  //document.getElementById("test3").innerHTML = newPet.getFood();
})

});

function SetImage(where,source)
{
  let tempImage = new Image();
  tempImage.src = source;
  $("#"+where).html(tempImage);
}


function SetImageSource(where,source)
{
  $("#"+where).attr("src",source);
}
