

// ###################################################
// ######## FIBONACCI NUMBERS WITH RECURSION #########
// ###################################################

  function fibonacci(prev1, prev2) {
    let count;

    if (count <= 19) {
      // Create new Fibonacci numbers by adding the two previous ones
      newFn = prev1 + prev2;

      // Print the new Fibonacci number
      console.log("New Fibonacci Number", newFN);

      // Update the variables that hold the previous two fibonacci numbers
      (prev2 = prev1), (prev1 = newFN), 
      
      // update the count
      count += 1;

      // recall the function itself with the updated values
      this(prev1, prev2)
    } else return
  }

  