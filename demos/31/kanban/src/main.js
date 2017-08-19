import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'

// easier to test App now that it is being exported and imported
ReactDom.render(<App />, document.getElementById('root'))
