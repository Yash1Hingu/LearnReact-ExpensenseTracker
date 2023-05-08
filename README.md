# Expensens Tracker - React App

This Project is My first React js Webapp.This Webapp is simple UI where user can easly interact and track there Expensens.This only Beginning of my ReactJs webapp.
## Features
- Add expensens
- Fileter Expensens By year
- Expensens Graph By Month

## Learn
From This React Js Project I Learn Following Things.

### What is JSX
- JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript code. It was originally developed by Facebook and used in their React library to create user interfaces. With JSX, developers can easily define and manipulate the structure and content of their UI components using familiar HTML-like syntax, but with the power and flexibility of JavaScript.

- JSX is not a separate language or technology, but rather a way of writing code that can be transformed into regular JavaScript using a tool called a transpiler. When a JSX code is compiled, the transpiler will convert the JSX syntax into JavaScript objects that create and manipulate the DOM elements of the user interface.

- In JSX, we can write HTML-like code directly in our JavaScript files by enclosing it in curly braces {}. For example, we can create a div element with a className attribute and some child elements like this:
```js
const element = (
  <div className="my-class">
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </div>
);
```
- Under the hood, JSX is transformed into regular JavaScript code by a process called transpilation. The resulting JavaScript code uses React.createElement() to create React elements based on the JSX syntax. For example, the above code would be transpiled to:
```js
const element = React.createElement(
  'div',
  { className: 'my-class' },
  React.createElement('h1', null, 'Hello, world!'),
  React.createElement('p', null, 'This is a paragraph.')
);
```
- By using JSX, we can write code that looks like HTML but still leverages the full power of JavaScript. It also makes our code easier to read and maintain, since it closely resembles the final HTML output.
-  you will need to use a transpiler that can transform the JSX code into regular JavaScript code that can be interpreted by the browser.

- One popular transpiler for JSX is Babel. Here are the steps to add JSX syntax using Babel:
### What is Component
"Component in React is a reusable piece of code that defines a part of the user interface."
```js
import React from 'react';

function component_name(props) {
  return (
    <h1>Hello, {props.name}!</h1>
    );
}

export default Hello;
```
above is the example of create component in react js.

### root.render()
- root.render() is a method used in React to render a component or element to the DOM.
- It is typically used in the entry point of a React application.
- The rendered component or element is attached to a specific container element in the HTML document.
- This method is responsible for updating the UI when the state of a component changes.

#### <React.StrictMode>
- <React.StrictMode> is a tool in React that helps developers identify potential problems in their code by highlighting issues and triggering additional warnings during the development process.

### <></> - Fragment
- In React, <></> is a shorthand syntax for creating a fragment. A fragment is a way to group multiple elements together without creating an additional DOM element.

### What is PROPS.
In React, "props" (short for "properties") is a way to pass data from a parent component to a child component.

When a parent component renders a child component, it can pass data to the child component through props. The child component can then access this data and use it to customize its behavior or render its contents.

Here's an example of how props might be used in a React component:
```js
import React from 'react';

function Hello(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Hello;
```
In this example, the Hello component takes a single prop called name. The parent component could render this component like this:
```js
import React from 'react';
import Hello from './Hello';

function App() {
  return <Hello name="Alice" />;
}

export default App;
```
In this case, the parent component (the App component) is rendering the Hello component and passing it a prop called name with a value of "Alice". The Hello component then uses this prop to customize its output and render the message "Hello, Alice!".
