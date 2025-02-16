function outer() {
    let message = "Hello, this is a closure!";
    function inner() {
      console.log(message);
    }
    return inner;
  }
  
  const stored = outer();
  stored();