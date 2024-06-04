import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval running...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Interval cleaned up.");
    };
  }, []);

  return <div>Just a useEffect question...</div>;
};
