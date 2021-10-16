const globalCat = 'Jerry' // Jerry = the variable is set to Global Scope 

function func1() { // Global Function Scope that iterates all variables, arguments, and local functions inside and outside (definded inititally) the environment
    const cat1 = 'Spike';  // Spike = the variable is set to Local Scope and can be produced inside func1() only
    function func2() { // Local Function Scope
     const cat2 = 'Tom'; // Tom = the variable is set to local scope and only in func2() will produce 'Tom' as the cat2 value
     return cat1 + cat2 + globalCat; 
  }
  const resultFromFunc2 = func2(); 
  return resultFromFunc2;
 
}

func1() // the returned value would be all 3 character as again, the function is in global scope - Tom, Jerry, Spike.
