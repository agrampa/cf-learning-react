import React from 'react'
import {connect} from 'react-redux'

import {categoryCreate, categoryUpdate, categoryDelete} from '../../action/ctegory-actions.js'

class DashboardContainer extends React.Component {
  componentDidMount() {
    // this is the categoryCreate defined below in the object, will dispatch whatever is passed in
    // this is not the function that was imported, it is the action that will call the function that was imported, as defined below in mapDispatchToProps
    this.props.categoryCreate({title: 'hello'})
  }

  render() {
    return (
      <main className='dashboard-container'>
        <h2>Dashboard</h2>
        {this.props.categories.map((item) => {
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        })}
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
    // these invoke the functions that are imported
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  }
}

// instead of just exporting the component, now export the component after calling connect with mapStateToProps and mapDispatchToProps, it will return a function that the componenet can be passed through
// now anything that was passed through with mapStateToProps and mapDispatchToProps can be accessed through props
// connect returns a function that you invoke with your component
export default connect(mapStateToProps, mapDispatchToProps)(default DashboardContainer)





// for example:
const mapStateToProps = state => {
  return {
    foo: 'hi'
  }
}

then add {this.props.foo} within JSX and it will show the string 'hi'
