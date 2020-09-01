import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class Search extends React.Component{
    state = {
        searchTerm: '',
    }

    /* Update searchTerm in the state */
    handleChange = (event) => {
        /* console.log(event.target.value); */
        this.setState({searchTerm : event.target.value}); /* Makes react components know what the current state of some property of the state object */
    }

    /* Fetch searchTerm from the state */
    handleAccept = (event) => {
        let { searchTerm } = this.state; /* this.state.searchTerm */
        let { onFormAccept } = this.props;

        onFormAccept(searchTerm);
        event.preventDefault();
    }


    render() {
        return(
            <Paper elevation={6}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label = 'Print this to search...' onChange = {this.handleChange}></TextField>
                </form>
            </Paper>
        );
    }
}
export default Search;