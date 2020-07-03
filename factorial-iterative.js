function factorial(num) {
    var res = 1;

    for(let i = 2; i<=num; i++){
        res *= i;
    }

    return res;
}


  factorial(5)