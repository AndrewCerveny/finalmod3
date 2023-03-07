import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: '',
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  


  handleSubmit = e => {
    e.preventDefault();
    
    const id = Date.now()

    const newURl = {
      id:id,
      long_url:this.state.urlToShorten,
      short_url:`http://localhost:3001/useshorturl/${id}`,
      title:this.state.title
    }
    
    this.props.addU(newURl)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
