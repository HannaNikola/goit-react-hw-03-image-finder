import { Component } from "react";
import { SearchbarStyle } from "./Searchbar.styled"


export class Searchbar extends Component {
    state = {
    query: '',

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.query);
        
    }
    handleChange = (event) => {
        this.setState({ query: event.target.value });
        
};

   


    render() {
        return (
            <SearchbarStyle className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleChange}
                        
                    />
                </form>
            </SearchbarStyle>
        );
    }
}



