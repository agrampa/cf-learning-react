import React from 'react'
import {connect} from 'react-redux'

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dashboard</h2>
      </main>
    )
  }
}

// returns an object and anything added to the object will become a prop
const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {

  }
}

// instead of just exporting the component, now export the component after calling connect with mapStateToProps and mapDispatchToProps, it will return a function that the componenet can be passed through
// now anything that was passed through with mapStateToProps and mapDispatchToProps can be accessed through props
export default connect(mapStateToProps, mapDispatchToProps)(default DashboardContainer)





// for example:
const mapStateToProps = state => {
  return {
    foo: 'hi'
  }
}

then add {this.props.foo} within JSX and it will show the string 'hi'
