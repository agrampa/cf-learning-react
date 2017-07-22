// no more need for 'use strict', ES6 will automatically use it

// use components, using JSX:
import React from 'react'; // === const React = require('react');
// now we can render JSX
import ReactDom from 'react-dom';

ReactDom.render(<div>
    <h1>Title</h1>
  </div>, document.getElementById('root')
)
