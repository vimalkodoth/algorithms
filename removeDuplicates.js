const uniqueSort = function(arr) {

    const cache = {};

    for(let i=0;i<arr.length;i++){
        cache[arr[i]] = arr[i];
    }

    arr = Object.values(cache);

    return arr.sort((a,b) => a-b);
  };

  uniqueSort([4,3,2,1,4,1,3]);