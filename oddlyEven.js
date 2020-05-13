const determine = (num) => {

    //creates an array of numbers from each digit of the input num,
    let arr = Array.from(String(num), Number);

    //reduce() adds up the elements of the array and assigns value to sum,
    let sum = arr.reduce(function(a, b){
        return a + b;
    }, 0)
    console.log(sum);

    /*modulo operator is used to check for even and odd,
     number and the appropriate response is returned*/
    if (sum % 2 === 0) {
        return "Evenish"
    } else {
        return "Oddish"
    }
}

determine(12345)