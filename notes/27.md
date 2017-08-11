** READINGS **
Components and props
facebook.github.io/react/docs/components-and-props.html

Components:
- components let you split the UI into independent, reusable pieces and think about each piece in isolation
  - think of componenets like JS functions, taking in props and returning React elements which describe what should appear on the screen
- Always start component names with a capital letter
- Components can refer to other components in their output, but typically only have one App component at the very top and work down the hierarchy from there
- components must return a single root element, so need to wrap in something like a div and return just the div with all the contents included inside it
- good candidates for reusable components include: parts that are used several times like buttons, something that is complex enough on its own
- components cannot modify their own props, props are READ ONLY
  - All React components must behave like pure functions with respect to their props, returning the props without modifying them


State and LifeCycle
facebook.github.io/react/docs/state-and-lifecycle.html

Lifecycle Hooks:
- componentDidMount() -> runs after the component output has been rendered to the DOM
- componentWillUnmount() -> used for teardown when the DOM component is removed

State:
- things to know about setState():
  - do not modify state directly -> state can only be assigned in the constructor
  - state updates may be asynchronous -> may be batched into a single update for performance, so do not rely on one state to calculate/determine the next
  - state updates are merged -> when setState() is called, React merges the object you provide into the current state

- state is local/encapsulated, not accessible to any component other than the one that owns and sets it
- any changes affect components lower down in the hierarchy tree, data cannot flow upwards, only down


Handling Events
facebook.github.io/react/docs/handling-events.html

Events:
- similar to handling on the DOM with a few differences:
  - react events are named in camelCase
  - in JSX, pass a function as the event handler, rather than a string
  - need to call preventDefault explicitly
- provide listeners when page initially renders as methods on the class


Forms
facebook.github.io/react/docs/forms.html

Controlled Components:
- make the React state the single source of truth
  - the component that renders the the form can also control what happens when the form is submitted => this is called a controlled component



** LECTURE **
- complete control over flow of data using controlled components
- ALL form values need to be bound to a component's state
- ALL inputs should have their values bound to a state -> controlled inputs
- every input needs a handle change method

- props is an object that contains key-value pairs of all of the attributes added to the component via JSX
- super === React.Component
- one-way data flow: something happens, triggering a series of events in one direction until the components are re-rendered on the page
- all inputs have onChange and value

Lifecycle hooks: throughout the rendering of a component, when it is instantiated and added to the page, modified, removed, etc., React has lifecycle hooks to implement and make changes based on user activity
  - componentWillMount: called once, called before the component mounts (when added to DOM)

- attributes are now called props

Conditional Rendering:
- use ternary operator
  - can nest ternaries

Overview:
- two components: App and PokemonForm
- App has PokemonForm component, pokemonSelect is passed into the PokemonForm using props
  - the pokemonSelect prop has the value of this.pokemonSelect -> passing function into the App component
  - PokemonForm now has access to the function defined in the parent on this.props
  - props in the constructor, passed into super, so it's added to 'this' and now this.props is accessible
  - can now be invoked in the handle click event in the pokemon form and pass in the name of the pokemon
  - pass a value through props from a parent to a child
  - form collects input from the user and stores it, form submit will pass the name along to the form component 
