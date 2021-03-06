import React from 'react'

class CategoryForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      // "this" is optional if it comes after super(props)
      title: this.props.category ? this.props.category.title : ''
    }

    // or assign it to an object
    this.state = Object.assign({}, props.category)

    // or use 'babel-plugin-transform-object-rest-spread
    

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({title: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    // this.state was passed by reference
    // state was set to have one id, so need to reset each time
    // use Object.assign
    this.props.onComplete(Object.assign({}, this.state))
  }

  render() {
    return(
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input name='title' type='text' placeholder='title' value={this.state.title} onChange={this.handleChange} />
        <button type='submit'> {this.props.buttonText} </button>
      </form>
    )
  }
}

// don't need to connect to state from the store
export default CategoryForm
