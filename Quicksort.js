function qSort(a){
    const left = [], right = [];
    const pivot = 0;
    if(a.length < 2) return a;
    for(let i=1; i< a.length;i++) {
      if(a[i] < a[pivot]) left.push(a[i]);
      if(a[i] >= a[pivot]) right.push(a[i]);
    }
   return qSort(left).concat(a[pivot],qSort(right));
}

qSort([1,41,5,1,6]);
