// ? What would be the output?

setTimeout(() => {
  console.log("Hello World!");
}, 0);

// * This long loop, takes at least few seconds
for (let index = 0; index < 500; index++) {}

console.log("Loop is done");
