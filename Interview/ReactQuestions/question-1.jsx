import React, { useState, useEffect } from "react";

export const ExampleComponent = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval running...");
    }, 1000);
  }, []);

  return <div>useEffect question...</div>;
};

/*























*/

// useEffect(() => {
//     const interval = setInterval(() => {
//       console.log("Interval running...");
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//       console.log("Interval cleaned up.");
//     };
//   }, []);
