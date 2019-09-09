//imports
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import apiKey from './config';

//Component Imports
import Welcome from './Components/Welcome';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import SearchForm from './Components/SearchForm';
import NotFound from './Components/NotFound';

class App extends Component {

  //initializing state
  state = {
        suits: {},
        hats: {},
        boats: {},
      };
  
// Fetching data for default search queries
  componentDidMount() { axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=suits&per_page=24&format=json&nojsoncallback=1`)
                             .then(response => this.setState({ suits: response.data.photos.photo }))
                             .catch(error => { console.log('Error fetching and parsing data', error)});
                             
                        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=hats&per_page=24&format=json&nojsoncallback=1`)
                            .then(response => this.setState({ hats: response.data.photos.photo }))
                            .catch(error => { console.log('Error fetching and parsing data', error)});

                        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=boats&per_page=24&format=json&nojsoncallback=1`)
                            .then(response => this.setState({ boats: response.data.photos.photo }))
                            .catch(error => { console.log('Error fetching and parsing data', error)});
                            
  }; 

//TODO: put state into SearchForm, and add a handler in App.js that will respond to the search.
  render() {
    return (
      <BrowserRouter>
       <div className="Container">
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/suits"   render={ () => <Gallery photos={this.state.suits } searchTerm="Suits"/>} />
          <Route exact path="/hats" render={ () => <Gallery photos={this.state.hats } searchTerm="Hats"/>} />
          <Route exact path="/boats"    render={ () => <Gallery photos={this.state.boats } searchTerm="Boats"/>} />
          <Route       path="/search"  component={SearchForm} />
          <Route                       component={NotFound} />
        </Switch>
       </div>
      </BrowserRouter>
    );
  }
}


export default App;