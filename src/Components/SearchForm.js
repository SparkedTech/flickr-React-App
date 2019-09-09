import React, {Component} from 'react'; 
import apiKey from '../config';
import axios from 'axios';
import Gallery from './Gallery';

class SearchForm extends Component {

    state = {
        searchText: "",
        searchQuery: "",
        search: {},
        loading: true
    };
//track changes to value in search text field
    onSearchChange = event => {
        this.setState({searchText: event.target.value });
    };

//prevent the submission from refreshing page, and perform uer search
    handleSubmit = event => {
        event.preventDefault();
        this.setState({loading: true});
        this.performSearch(this.query.value);
        
    };

//Use axios to search Flickr for user's query, and if successful, sets loading state to false
    performSearch = (query = "sneakers") => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => this.setState({ search: response.data, loading: false }))
        .catch(error => { console.log('Error fetching and parsing data', error);
        });
        this.setState({searchQuery: query});
      }

//search performed on mount, default of In_The_Court_Of_The_Crimson_king.
      componentDidMount() {
        this.performSearch()
      }

    render() {
        return (
            <React.Fragment>
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search"
                       name="search"
                       onChange={this.onSearchChange}
                       placeholder="search..."
                       ref={ input => this.query = input} 
                       required/>
                <button type="submit" id="submit">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
            </form>
{/*Shows loading message when search is performed, until images are returned and displayed*/}
            { this.state.loading ?
            <h3>Loading Search Results...</h3>
            :
            <Gallery photos={this.state.search.photos.photo} searchTerm={this.state.searchQuery} />
            }
            </React.Fragment>
        )
    }
};

export default SearchForm;