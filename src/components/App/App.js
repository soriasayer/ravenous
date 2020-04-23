import React from 'react';
import yelp from '../../util/Yelp';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {businesses: []}
    this.searchYelp = this.searchYelp.bind(this);
  }

  componentDidMount() {
    this.searchYelp('coffee', 'berlin', 'best_match');
  }

  async searchYelp(term, location, sortBy) {
    const businesses = await yelp.search(term, location, sortBy)

      this.setState({businesses: businesses});

  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
      );
  }

}

export default App;
