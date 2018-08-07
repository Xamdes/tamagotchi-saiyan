export class Tamagotchi {
  constructor(foodLevel, playLevel, restLevel, gameover, score = 0) {
    this.foodLevel = foodLevel;
    this.playLevel = playLevel;
    this.restLevel = restLevel;
    this.gameover = false;
    this.score = score;
  }


  getFood() {
    let that = this;
    //return that.foodLevel;
    document.getElementById("test").innerHTML = that.foodLevel;
    //  $("#test").text(this.foodLevel);
  }
  getPlay() {
    let that = this;
    //return that.playLevel;
    document.getElementById("test1").innerHTML = that.playLevel;
    // $("#test1").text(this.playLevel);
  }
  getRest(){
    let that = this;
    //return that.restLevel;
    document.getElementById("test2").innerHTML = that.restLevel;
    // $("#test2").text(this.restLevel);
  }
  getScore(){
    let that = this;
    document.getElementById("scorez").innerHTML = that.score;
    // $("#test3").text(this.score);
  }

startGame() {
  let count = 0;
  const test = setInterval(() => {
    count++;
    if(count > 450){
      clearInterval(test);
    }
    this.foodLevel -= 1;
    this.getFood();
    //document.getElementById("test").innerHTML = this.foodLevel;
    this.playLevel -= 1;
    this.getPlay();
    //document.getElementById("test1").innerHTML = this.playLevel;
    this.restLevel -= 1;
    this.getRest();
    //document.getElementById("test2").innerHTML = this.restLevel;
    this.score += 1;
    this.getScore();
    if (this.foodLevel === 0) {
      clearInterval(test);
      this.gameover = true;
      document.getElementById("test3").innerHTML = "Dead by food";
    } else if (this.playLevel === 0) {
      clearInterval(test);
      this.gameover = true;
      document.getElementById("test3").innerHTML = "Dead by bus or something";
    } else if (this.restLevel === 0) {
      clearInterval(test);
      this.gameover = true;
      document.getElementById("test3").innerHTML = "Deaddddd by sleep";
    }
  }, 100);
}
furtherBeyond() {
  if(this.gameover === false){
    const test = setInterval(() => {
      this.foodLevel -= 1;
      this.getFood();
      //document.getElementById("test").innerHTML = this.foodLevel;
      this.playLevel -= 1;
      this.getPlay();
      //document.getElementById("test1").innerHTML = this.playLevel;
      this.restLevel -= 1;
      this.getRest();
      //document.getElementById("test2").innerHTML = this.restLevel;
      this.score += 1;
      this.getScore();
      if (this.foodLevel === 0) {
        clearInterval(test);
        document.getElementById("test3").innerHTML = "Dead by food";
      } else if (this.playLevel === 0) {
        clearInterval(test);
        document.getElementById("test3").innerHTML = "Dead by bus or something";
      } else if (this.restLevel === 0) {
        clearInterval(test);
        document.getElementById("test3").innerHTML = "Deaddddd by sleep";
      }
    }, 25);
  }
}

// getFood() {
//   const test = setInterval(() => {
//
//   this.foodLevel -= 1;
//   console.log(this.foodLevel)
//   return this.foodLevel;
// }, 50);
// }




  addFood() {
    this.foodLevel += 10;
  }
  addPlay() {
    this.playLevel += 10;
  }
  addRest() {
    this.restLevel += 10;
  }


}
