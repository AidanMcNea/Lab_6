import React, { Component } from "react";
import Movies from "./movies";
import axios from 'axios';

class Read extends Component {
    componentDidMount() {    //method runs after component output rendered to DOM
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496') // assigned component state calls http
            .then((response) => {
                this.setState({ mymovies: response.data.movies })
            })
            .catch();
    }

    state = {
        mymovies: []
    };
    render() {
        return (
            <div>
                <h1>This is my Read Component.</h1>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}

export default Read;