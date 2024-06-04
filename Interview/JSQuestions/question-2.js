// ? Explain the output of the following code snippet.

function outer() {
  function inner() {
    console.log(x);
  }
  let x = 10;
  return inner;
}

var closureFunc = outer();
closureFunc(); // ? What will this output?
