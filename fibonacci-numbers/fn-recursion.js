// ###################################################
// ######## FIBONACCI NUMBERS WITH RECURSION #########
// ###################################################

  let count = 2;
  
  console.log("New Fibonacci Number", 0);
  console.log("New Fibonacci Number", 1);

  function fibonacci(prev1, prev2) {

    if (count <= 19) {
      // Create new Fibonacci numbers by adding the two previous ones
      let newFN = prev1 + prev2;

      // Print the new Fibonacci number
      console.log("New Fibonacci Number", newFN);

      // Update the variables that hold the previous two fibonacci numbers
      (prev2 = prev1), (prev1 = newFN), 
      
      // update the count
      count += 1;

      // recall the function itself with the updated values
      fibonacci(prev1, prev2);
    } else return
  }

  fibonacci(1, 0)

  