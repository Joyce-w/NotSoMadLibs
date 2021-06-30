### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JS library used to build user interfaces. Because it is component-based, it allows for faster development for apps. 
- What is Babel?
Babel is basically a translator(complier) but for JS. It is able to translate newer code (ES6) and process it into older syntax so that it can be run by older engines. 
- What is JSX?
JSX is a variant of js that lookks like html but written in a js file. It is very particular on how elements are picked and needs to be transpiled through Babel to work in react.
- How is a Component created in React?
Component in react are pieces function that can hold different information and functions. The pieces within the components allow for reusable pieces when making an app.
- What are some difference between state and props?
State stays within a component and can rerender a component when there are changes. Props are properties that a component has and can be passed down from one prop to another. Changing props usually does not affect anything else unless a prop function was called. 
- What does "downward data flow" refer to in React?
Downward data flow means data can be passed from parent to child but not the other way around. Functions can be used to tell a child component to return data but the parent component is essentially doing all the work. 
- What is a controlled component?
Controlled components takes values through the props of a component and can controlled a child using callbacks from these props. The child component in this case is the controlled component. 
- What is an uncontrolled component?
Uncontrolled components do not know the value of something until it is submitted such as a file input.
- What is the purpose of the `key` prop when rendering a list of components?
Keys allows react to organize itself so that it knows what items are created, removed, or changed. Keys are usually given to elements inside an array.
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using array index is a poor choice for a key becuase the value of the index can be changed. They should be unique and stable, indexes can be changed rendering different values than requested. 
- Describe useEffect.  What use cases is it used for in React components?
useEffect allows functions to run after a component is first rendered. This is useful in the case of timers or fetching data because there is an option to choose when to start. It also has an second argument that that listens for changes in states that can trigger the function to rerun. It also allows for a cleanup function that runs before the actual affect. This can help minimize unnecessary runs like multiple timers from running when the component rerenders. 
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef acts similar to a local variable but keeps the value of something accross rerenders. 
- When would you use a ref? When wouldn't you use one?
UseRef can be used when accessing DOM elements like a video playback speed or clearing timers by storing the setInterval id. It is not advised to use useRef on all DOM elements but would shy away from the react way unless it is an uncontrolled component.
- What is a custom hook in React? When would you want to write one?
Custom hooks are functions written in separate files that allow for logic sharing between components. This minimizes the need to pass down props which can get confusing.