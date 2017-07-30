** READINGS **

Routing
- use react-router-dom as library for routing in React
  - manages switching between components based on state or window location, meanwhile controlling browser history api
  - this enables users to hit the back button on the browser and revert to the last route without rerending the page

- Types of State
  1. Application State - any state that represents the core data of the application, which is all of the models
  2. View State - any state that has to do with how a specific component should look, such as input values, which menu item is focused, when to hide/show a section of the view, when a hamburger menu is open or closed

Lifting State Up
facebook.github.io/react/docs/lifting-state-up.html

- "lifting state up" -> sharing state is accomplished by moving it up to the closest common ancestor of the components that need it
  - there should be a single source of truth for any data that changes in a react application
  - lift state up for top-down data flow
  - if something can be derived from either props or state, use props

Testing
1. Jest -> testing framework with out-of-the-box React support, similar to mocha
  Methods: describe, beforeAll, afterAll, beforeEach, afterEach, test, expect

2. Enzyme -> utility designed to ease the testing of react components, jQuery-like api that helps interact with React components
  Methods:
    - shallow(<Component />) -> useful to test a component without indirectly asserting behavior of child components (unit testing of component but not its children; test state, component, props; can do almost everything that render and mount can do)
    - render(<Component />) -> static rendering to render components to static html (text) and analyze the resulting html structure (likely never use, iterate over static text and confirm correct text is rendered, basically testing the template)
    - mount(<Component />) -> full rendering, ideal when the components interact with DOM apis at the global scope
      (DOM api has to be available)

** LECTURE **
- components are templates that have state
- these are not browser dom elements, they are components
- components accept arbitrary inputs called "props", which are key-value pairs on an object
- all constructors for components take in props as the argument, props are the attributes that are added to the component when used in the view -> for example, a title, content, etc. and access by props.title, props.content, etc.
- once you pass props into super, (super literally is React.Component) and super adds props to the context of that component  -> use this.props to access anywhere in the application, for example this.props.title

- state can only be passed down and this is only done through props
- if multiple parts of the application is supposed to reflect the same state, the state needs to come from a common parent

- App component receives some props, and it has results and a search error message
- App has the redditBoardFetch method which takes in a board and makes a request to reddit
  - on success, stores results into the results of the application state and will overwrite error message back to being null
  - on failure, results is null and error message will fill in with the name of the board that does not exist

- SearchForm returns a form with a handleSubmit function, will pass in the reddit board into the props, on change call the handleChange method, take the input value and overwrite the searchtext (its view state) with the searchText that the user typed in, calling the redditBoardFetch method because it is passed in



- react router is very dynamic, routes can be added dynamically as the application is being built
- import it and use it as a component that takes in props


- when importing a file, there is no need to specify that index.js is the file to import, it is enough to import the filepath to the directory and it will automatically look for index.js file
- within a container, state is only in the context of what that container is responsible for displaying

- update application state, not dashboard state
- pass down App through props using getApp(), has state and setState
  - setState will update APP component state NOT dashboard container state
  - pass down to any component to update state of the entire app
  - treat the component like it is the entire App, but use App's setState

- for children of a component, only pass along what is needed instead of passing down the entire App
  - for example, App was passed down to dashboard-container and only some information was passed to the expense-create-form
  - in that situation, dashboard-container is treated like the main parent (aka App) as far as expense-create-form and state are concerned

TESTING
- shallow rendering will return a wrapper with all the methods listed
github.com/airbnb/enzyme/blob/master/docs/api/shallow.md

yarn add --dev jest babel-jest enzyme react-test-renderer
Jest looks for __test__ directory and file that ends in `.test.js`

use "test" instead of "it" in assertions (it will still work but bad practice)

add script:  "test": "jest"
