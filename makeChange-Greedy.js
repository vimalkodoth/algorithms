function makeChange(coins, amount) {
    let coin = 0, i = 0;
    coins.sort((a,b) => b-a);
    while(amount > 0) {
      if(coins[i]<= amount){
        coin++;
        amount -= coins[i];
      } else {
        i++;
      }
    }
    return coin;
  }

  makeChange([5,10,25], 40);
  //Greedy approach doesn't always work. makeChange([1,6,10], 12)