import React, { Component } from 'react';
import './App.css';
import { getUrls,placeUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error:''
    }
  }

  componentDidMount() {
    getUrls()
      .then((data) => this.setState({urls: data.urls}))
      .catch((err) => this.setState({error:`${err.status} :${err.message}`}))
  }
  addToServer = (alteredURl) => {
    placeUrls(alteredURl)
      .then((data) => this.setState({urls : [...this.state.urls, alteredURl]}))
      .then((err) => this.setState({error:`${err.status} :${err.message}`}))
  }

  render() {
   
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addU={this.addToServer}/>
        </header>
        <UrlContainer urls={this.state.urls} error={this.state.error}/>
      </main>
    )
  }
  
}

export default App;
