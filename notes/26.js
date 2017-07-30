** READINGS **
WEBPACK
webpack.js.org/concepts
Entry: where to start

Output: where to bundle the application

Loaders: puts the assets in the bundle instead of in the browser
- 'test' will identify which files should be transformed by a certain loader, and transform them to be added to the dependecy graph and eventually the bundle
- 'use' will identify which loader to use for the transformation

Plugins: perform actions, must be required into the config
- DefinePlugin = allow global constants configured at compile time
- ExtractTextWebPlugin = extract text (CSS) from bundles into a separate files


JSX
https://facebook.github.io/react/docs/introducing-jsx.html

- use curly braces to embed JS in JSX file
- after compilation, JSX expression become regular JS objects, can be used in if statement, for loops, assign to vars, accept as arguments, return from functions, etc.
- everything is converted to a string before being rendered
- Babel compiles JSX down to React.createElement() calls


** LECTURE **
- use YARN for installation now
  - caches packages and copies it instead of reinstalling every time, as long as it is the same version
  - lock file will make sure the versions do not change on the packages AND their dependencies
  - yarn init === npm init, creates package.json
    - use -y flag to answer yes to all questions
  - yarn add === npm install -S
    - yarn add webpack webpack-dev-server html-webpack-plugin (creates html files with dynamic script and link tags) extract-text-webpack-plugin node-sass sass-loader css-loader react (create components) react-dom (renders react on the page) babel-core babel-loader babel-preset-react babel-preset-es2015


- no more need to 'use strict' because ES6 modules are use strict anyway

- JSX is a function call that looks like html
- writing JSX is writing function calls, react babel-plugin will compile it so it goes from looking like html to being a function call (React.createElement('div', options, content)) for example

- script: yarn watch
- webpack-dev-server will not actually build the files, but will keep them in memory, which makes hot reload much faster compared to loading from the file system
- need build directory in order to ship it though

- every class that is added can be inserted into another class that is already being rendered, and it will also be rendered, as long as the one that is rendered is LAST
- add classNames to built-in tags like div, header, etc., not custom-made components

- components have a render method, return some JSX via render method
- constructor contains super(props), which is needed to set initial state but otherwise is not required

- state is a special property on react components called React.state
  - initial state can be set ONLY if super(props) is called in constructor
  - this.state is IMMUTABLE
  - calling setState will update the state, then re-render the page, will only re-render the parts that changed
  - will also change things that changed, even if not in the setState code block, so DONT DO IT

- before: addEventListener('click') === onClick
  - will always be on + Event
