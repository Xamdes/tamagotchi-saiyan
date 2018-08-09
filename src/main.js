import {Tamagotchi} from './Tamagotchi';
import Rip from './img/rip.png';
import Head from './img/Tamagotchi-Head.jpg';
import Logo from './img/Tamagotchi-Logo.gif';
import Tama1 from './img/Tamagotchi.png';
//import Tama2 from './img/Tamagotchi2.png';
import SongOne from './audio/song.mp3'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animate.css';
import './styles.css';
const characterId = "current-character";

const characters = [];
GetRickMortyImage(characters);

$(function()
{
  $("#"+characterId).addClass("animated bounce character-animation");
  SetImageSource("tamagotchihome",Head);
  SetImageSource('logo-gif',Logo);
  SetImageSource(characterId,Tama1);
  const song = new Audio(SongOne);
  song.loop = true;
  const newPet = new Tamagotchi();

  $(".indexp").click(function()
  {
    $(".homeindex").addClass("animated bounceOut");
    setTimeout(function(){$(".homeindex").hide()}, 1000);
    setTimeout(function(){$(".ready").fadeIn()}, 1000);
    setTimeout(function(){$(".go").show()}, 4000);
    setTimeout(function()
    {
      $(".ready").fadeOut();
      $(".go").fadeOut();
    }, 6000);

    $("#"+characterId).addClass("normal");
    song.currentTime = 0.0;
    song.play();

    newPet.SetPet();

    setTimeout(() => {
      $(".game").fadeIn();
      let promise = new Promise(function(resolve, reject)
      {
        newPet.StartGame();
        SetImageSource(characterId,characters[0]);

        setTimeout(() => {
          if (newPet.GetScore() > 440)
          {
            resolve();
          }
          else
          {
            reject();
          }
        }, 45000);
      });
      promise.then(function()
      {
        newPet.FurtherBeyond();
        $("#"+characterId).removeClass("normal");
        $("#"+characterId).addClass("saiyan");
        SetImageSource(characterId,characters[1]);
      }
    );

    }, 6500);

    let checkGameOver = setInterval(() => {
      if(newPet.GetGameOver())
      {
        $("#"+characterId).removeClass("animated bounce normal saiyan");
        $("#"+characterId).addClass("rip");
        SetImageSource(characterId,Rip);
        $("#play-again-toggle").show();
        song.pause();
        clearInterval(checkGameOver);
      }
    },25);

    setInterval(() => {
      $("#output-score").html(newPet.GetScore());
      $("#outFood").html(newPet.GetFood());
      $("#outPlay").html(newPet.GetPlay());
      $("#outSleep").html(newPet.GetRest());
    },25);
  });

  $("#play-again-button").click(function()
  {
    $(".homeindex").removeClass("animated bounceOut");
    $("#"+characterId).removeClass("rip");
    $(".game").hide();
    $(".homeindex").show();
  });

  $('#food').click(function()
  {
    newPet.AddToFood(10);
  });

  $('#play').click(function()
  {
    newPet.AddToPlay(10);
  });

  $('#sleep').click(function()
  {
    newPet.AddToRest(10);
  });
});

function SetImageSource(where,source)
{
  $("#"+where).attr("src",source);
}

function GetRickMortyImage(characters)
{
  let randomInt = GetRandomInt(1,25);
  let url = `https://rickandmortyapi.com/api/character/?page=${randomInt}`;

  let promise = new Promise(function(resolve, reject)
  {
    let request = new XMLHttpRequest();
    request.onload = function()
    {
      if (this.status != 429) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response)
  {
    const normal = GetRandomInt(0,19);
    const saiyan = GetRandomInt(0,19);
    const body = JSON.parse(response);
    //console.log(body);
    characters.push(body.results[normal].image);
    characters.push(body.results[saiyan].image);
  });
}

function GetRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min) ) + min;
}
