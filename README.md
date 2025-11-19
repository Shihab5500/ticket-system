1 No Question : What is JSX, and why is it used?

Answer : JSX (JavaScript XML) is a syntax extension in React that lets you write HTML-like code inside JavaScript. It makes UI code more readable, integrates logic and markup together, and is compiled into React.createElement calls for rendering.

2 No Question : What is the difference between State and Props?

Answer : Props are used to pass data from parent to child components and are read-only, while State is managed within a component itself and can change over time. In short, props make components reusable, and state makes them dynamic and interactive.

3 No Question : What is the useState hook, and how does it work?

Answer : The useState hook in React is used to add state to functional components. It returns a state variable and a function to update it, re-rendering the component whenever the state changes.

4 No Question : How can you share state between components in React?

Answer : State can be shared between components by lifting the state up to their common parent and passing it down as props. For more complex cases, React Context or external state management libraries (like Redux) are used.

5 No Question : How is event handling done in React?

Answer : Event handling in React is done using camelCase syntax (e.g., onClick) and by passing a function as the event handler. Unlike HTML, React handlers are written in JavaScript and often use arrow functions to access component state.