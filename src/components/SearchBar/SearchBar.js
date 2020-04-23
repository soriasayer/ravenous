import React from 'react';
import './SearchBar.css';




class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleLocationOnKeypress = this.handleLocationOnKeypress.bind(this);
        this.handleTermOnKeyPress = this.handleTermOnKeyPress.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch() {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        // event.preventDefault();
    }

    getSortByClass(sortByOption) {
        if(this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
        this.handleSearch();
    } 

    handleTermChange(e) {
       this.setState({term: e.target.value})
    }

    handleLocationChange(e) {
       this.setState({location: e.target.value})
    }

    handleTermOnKeyPress(e) {
        if(e.key === 'Enter'){
            this.handleSearch();
        }
    }

    handleLocationOnKeypress(e) {
        // console.log(e.key)
        if(e.key === 'Enter'){
            this.handleSearch();
        }
    }

    renderSortByOptions() {
         return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} 
                    className={this.getSortByClass(sortByOptionValue)} 
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> {sortByOption} </li>
        }); 
        
    }

    render() {
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses"
                         onChange={this.handleTermChange} onKeyPress={this.handleTermOnKeypress}  />
                    <input placeholder="Where?" onChange={this.handleLocationChange} 
                    onKeyPress={this.handleLocationOnKeypress} />
                </div>
                <div className="SearchBar-submit">
                    <button onClick={this.handleSearch} onKeyPress={this.handleLocationOnKeypress}>Let's Go</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;