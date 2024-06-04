// ? What's wrong with this code?

const MyComponent = () => {
  return (
    <>
      <h1>Hello, React!</h1>
      <p>This is a paragraph.</p>
    </>
  );
};

const MyComponentCreate = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("h1", null, "Hello, React!"),
    React.createElement("p", null, "This is a paragraph.")
  );
};
