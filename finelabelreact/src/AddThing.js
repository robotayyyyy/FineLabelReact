import React, { Component } from 'react'

class AddThing extends Component {
  state = {
    url: '',
    label: [],
  }
  handleChange = (e) => {
    // console.log(e.target.id, e.target.value);
    let val = e.target.id === 'label' ? (e.target.value.split(',')):(e.target.value);
    this.setState({
      [e.target.id]: val
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addThing(this.state);
    this.setState( {url: ''});
    this.setState( {label: []});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">Url:</label>
          <input type="text" id="url" value={this.state.url} onChange={this.handleChange} />
          <label htmlFor="label">Label:</label>
          <input type="text" id="label" value={this.state.label} onChange={this.handleChange} />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddThing