export class Tamagotchi {
  constructor(foodLevel, playLevel, restLevel, score = 0) {
    this.foodLevel = foodLevel;
    this.playLevel = playLevel;
    this.restLevel = restLevel;
    this.score = score;
  }


  getFood() {
    let that = this;
    //return that.foodLevel;
    document.getElementById("test").innerHTML = that.foodLevel;
  }
  getPlay() {
    let that = this;
    //return that.playLevel;
    document.getElementById("test1").innerHTML = that.playLevel;
  }
  getRest(){
    let that = this;
    //return that.restLevel;
    document.getElementById("test2").innerHTML = that.restLevel;
  }
  getScore(){
    let that = this;
    document.getElementById("scorez").innerHTML = that.score;
  }

startGame() {
  let count = 0;
  const test = setInterval(() => {
    count++;
    if(count > 505){
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
      $(".playagain").show();
      document.getElementById("test3").innerHTML = "Dead by food";
    } else if (this.playLevel === 0) {
      clearInterval(test);
      $(".playagain").show();
      document.getElementById("test3").innerHTML = "Dead by bus or something";
    } else if (this.restLevel === 0) {
      clearInterval(test);
      $(".playagain").show();
      document.getElementById("test3").innerHTML = "Deaddddd by sleep";
    }
  }, 100);
}
furtherBeyond() {
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
