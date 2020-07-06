/**
 * @param {number} n
 * @return {number}
 */
function isUgly(n){
    let a = [2,3,5],
        j = 0;
    for(var i=a[j];j<a.length;i=a[++j]){
      while(n%i === 0){
         n = n/i;
      }
      if(n === 1) return true;
    }
    return false;
  }

  var nthUglyNumber = function(n) {
      let count = 1;

      if(n === 1) return 1;

      for(var i=2; ;i++){
          if(isUgly(i)) {
            count++;
          }
          if(count=== n) return i;
      }
      return i;
  };

  nthUglyNumber(n);