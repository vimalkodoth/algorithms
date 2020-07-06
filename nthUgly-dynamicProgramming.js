var nthUglyNumber = function(n) {
    let i = 0, j = 0, k =0, l = 0, count = 1;
    let ugly = [1];
    let nm2 = 2, nm3 = 3, nm5 = 5;

    while(count !== n){
        const min = Math.min(nm2,nm3,nm5);
        l++;
        ugly[l] = min;
        count++;
        if(min === nm2) {
          i++;
          nm2 = ugly[i] * 2;
        }
        if(min === nm3) {
          j++;
          nm3 = ugly[j] * 3;
        }
        if(min === nm5){
          k++;
          nm5 = ugly[k]* 5;
        }

    }
  return ugly[ugly.length-1];

};