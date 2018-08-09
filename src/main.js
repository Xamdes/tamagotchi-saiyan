import { Tamagotchi } from './Tamagotchi';
//import Back from './img/background.jpg';
import Rip from './img/rip.png';
import Head from './img/Tamagotchi-Head.jpg';
import Logo from './img/Tamagotchi-Logo.gif';
import Tama1 from './img/Tamagotchi.png';
import Tama2 from './img/Tamagotchi2.png';
import SongOne from './audio/song.mp3'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animate.css';
import './styles.css';

$(function()
{

  SetImageSource("rip",Rip);
  SetImageSource("tamagotchihome",Head);
  SetImageSource('logo-gif',Logo);
  SetImageSource("firstguy",Tama1);
  SetImageSource("secondguy",Tama2);
  const song = new Audio(SongOne);
  song.loop = true;
  const newPet = new Tamagotchi();

  GetRickMortyImage();




  $(".indexp").click(function()
  {
    song.currentTime = 0.0;
    song.play();
    $("#firstguy").hide();
    $("#secondguy").hide();
    $("#rip").hide();

    newPet.SetPet();

    setTimeout(() => {
      $(".game").fadeIn();
      let promise = new Promise(function(resolve, reject)
      {
        newPet.StartGame();
        $("#firstguy").show();
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
        if(newPet.GetGameOver() === false)
        {
          newPet.FurtherBeyond();
          $("#firstguy").hide();
          $("#secondguy").show();
        }
      },
      function()
      {
        song.pause();
        $("#firstguy").hide();
        $("#rip").show();
        $("#play-again-toggle").show();
      });

    }, 6500);


    let checkGameOver = setInterval(() => {
      if(newPet.GetGameOver())
      {
        $("#firstguy").hide();
        $("#secondguy").hide();
        $("#rip").show();
        $("#play-again-toggle").show();
        song.pause();
        clearInterval(checkGameOver);
      }
    },25);

    $(".homeindex").addClass("animated bounceOut");
    setTimeout(function(){$(".homeindex").hide()}, 1000);

    setTimeout(function(){$(".ready").fadeIn()}, 1000);
    setTimeout(function(){$(".go").show()}, 4000);
    setTimeout(function()
    {
      $(".ready").fadeOut();
      $(".go").fadeOut();
    }, 6000);

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
    $(".game").fadeOut();
    $(".homeindex").fadeIn();
  });


});

function SetImageSource(where,source)
{
  $("#"+where).attr("src",source);
}

function GetRickMortyImage()
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
    console.log(body);
    SetImageSource("firstguy",body.results[normal].image);
    SetImageSource("secondguy",body.results[saiyan].image);
  });
}

function GetRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min) ) + min;
}
