function isEven(number) {
    return number % 2 === 0;
  }
  
  
  console.log(isEven(4));  
  console.log(isEven(7));  
  console.log(isEven(0));  
  console.log(isEven(-1))




  function calculateFactorial(number) {
    var factorial = 1;
    
    if (number === 0 || number === 1) {
      return factorial;
  
    }
     
    else {
      for (let i = 2; i <= number; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  // Testing the function
  console.log(calculateFactorial(5));  
  console.log(calculateFactorial(0));  
  console.log(calculateFactorial(1));  

  