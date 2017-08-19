import React from 'react'
import {connect} from 'react-redux'

import {categoryCreate, categoryUpdate, categoryDelete} from '../../action/ctegory-actions.js'

class DashboardContainer extends React.Component {
  componentDidMount() {
    // this is the categoryCreate defined below in the object, will dispatch whatever is passed in
    this.props.categoryCreate({title: 'hello'})
  }

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
    categories: state // this.props.categories now represents the entire state
  }
}

// will add three properties (create, update and delete categories) and each one returns a function and dispatches the result of the action creator function
const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
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
