/* eslint-disable no-unused-vars */
export class Tamagotchi
{
/* eslint-enable no-unused-vars */
  constructor(foodLevel = 100, playLevel= 100, restLevel = 100, score = 0) {
    this.foodLevel = foodLevel;
    this.playLevel = playLevel;
    this.restLevel = restLevel;
    this.gameover = false;
    this.score = score;
    this.gameOverWhy = "No Reason";
  }

  SetPet(foodLevel = 100, playLevel = 100, restLevel = 100, score = 0)
  {
    this.foodLevel = foodLevel;
    this.playLevel = playLevel;
    this.restLevel = restLevel;
    this.gameover = false;
    this.score = score;
    this.gameOverWhy = "No Reason";
  }

  GetFood()
  {
    return this.foodLevel;
  }

  GetPlay()
  {
    return this.playLevel;
  }

  GetRest()
  {
    return this.restLevel;
  }

  GetScore()
  {
    return this.score;
  }

  StartGame() {
    this.gameover = false;
    let count = 0;
    const startInterval = setInterval(() => {
      count++;
      if(count > 450)
      {
        this.gameOverWhy = "continued";
        clearInterval(startInterval);
      }
      this.foodLevel -= 1;
      this.playLevel -= 1;
      this.restLevel -= 1;
      this.score += 1;

      if (this.foodLevel === 0)
      {
        this.gameover = true;
        this.gameOverWhy = "Dead by food";
        clearInterval(startInterval);
      }
      else if (this.playLevel === 0)
      {
        this.gameover = true;
        this.gameOverWhy = "Dead by bus or something";
        clearInterval(startInterval);
      }
      else if (this.restLevel === 0)
      {
        this.gameover = true;
        this.gameOverWhy = "Deaddddd by sleep";
        clearInterval(startInterval);
      }
    }, 100);
  }

  FurtherBeyond() {
    if(this.gameover === false)
    {
      const test = setInterval(() => {
        this.foodLevel -= 1;
        this.playLevel -= 1;
        this.restLevel -= 1;
        this.score += 1;

        if (this.foodLevel === 0)
        {
          this.gameover = true;
          this.gameOverWhy = "Dead by food";
          clearInterval(test);
        }
        else if (this.playLevel === 0)
        {
          this.gameover = true;
          this.gameOverWhy = "Dead by bus or something";
          clearInterval(test);
        }
        else if (this.restLevel === 0)
        {
          this.gameover = true;
          this.gameOverWhy = "Deaddddd by sleep";
          clearInterval(test);
        }
      }, 25);
    }
  }

  SetGameOver(value)
  {
    this.gameover = value;
  }

  GetGameOver()
  {
    return this.gameover;
  }

  AddToFood(value)
  {
    this.foodLevel += value;
  }

  AddToPlay(value)
  {
    this.playLevel += value;
  }

  AddToRest(value)
  {
    this.restLevel += value;
  }
}
