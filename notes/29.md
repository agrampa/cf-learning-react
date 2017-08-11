** READINGS **

Conditional Rendering (react docs)
- create distinct components that encapsulate behaviour, then render only some of them depending on the state of the application
- works like 'if' statements
- toggle a conditional in a prop and use that to determine which component to render
- use variables to store elements, then the value of that element can be changed
  - for example, a button can be changed to have different content based on if the user is logged in or not

- rendering using a conditional statement
- Remember: true && expression always evaluates to the expression, while false && expression always evaluates to false
  - so, if the conditional is true, the element will be rendered, but if it is false, React will skip it



Lists & Keys (react docs)
- declare a variable, assign it to the element passed through a method such as .map, then render that variable using curly braces
  - for example, if the variable returns <li>{modified/unmodified element}</li> then render: <ul>{variable}</ul>
  - the element does not need to be modified necessarily, the method can simply take an array of values and transform them into list items, which are stored in a variable, and then rendered as an unordered list

- make sure to include a key when creating a list of elements, must be unique <li key="whatever">
  - keys help React identify which items have changed, been added, been removed, gives each one a stable identity
  - common to use ids or the index position in the array (although index would change if the array can be reordered)
  - only need to be unique among siblings, not globally unique, so the key can be used again when producing two different arrays
  - useful for react, but keys are not passed along to the component



Composition vs. Inheritance (react docs)
- composition is better because components can be reused
- common to use placeholders and reassign them later if the components children are not known ahead of time
- if there is a more specific version of something, like welcome dialog being a more specific type of dialog, the more specific component can render the more generic one and configure it with props


Thinking in React (react docs)
1. Break the UI into a component hierarchy
  - draw boxes around each component and subcomponent and give them all names ahead of time
  - remember that one component should ideally only do one thing, otherwise break into smaller subcomponents

2. Build a static version in React
  - render UI without interactivity yet (so do not use state yet, just props)

3. Identify the miminal (but complete) representation of UI state
  - trigger changes using state
  - think of the minimal set of mutable state that the app needs (DRY)
  - for each piece of data, figure out which one is state by asking yourself:
    1) Is it passed from a parent via props? If so, it probably is not state
    2) Does it remain unchanged over time? If so, it probably is not state
    3) Can you compute it based on any other state or props in your component? If so, it probably is not state
  - common examples of state are things that change such as a checkbox or search field

4. Identify where your state should live

5. Add inverse data flow
 - use onChange events to update state, and pass a callback to the parent component that will fire when the state needs to be updated



** LECTURE **
yarn add webpack webpack-dev-server babel-core babel-loader babel-preset-react babel-preset-es2015 extract-text-webpack-plugin node-sass sass-loader css-loader html-webpack-plugin eslint eslint-plugin-react react react-dom react-router-dom

yarn add --dev jest babel-jest enzyme react-test-renderer


use <Link to></Link> to change view without refreshing page
use <a> to refresh the page

Modals
- button to click and trigger a function called close, will toggle the visibility of the children
- this.props.children is a special prop that comes from putting stuff inside a non-self-closing tag
- so, when the modal is used, anything inside of the modal tag is equal to 'this.props.children'

<Modal close={() => console.log('Hi!')}>
  <p>Cool</p>
  <strong>Beans</strong>
</Modal>
