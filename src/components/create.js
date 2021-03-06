import axios from "axios";
import React, { Component } from "react";


class Create extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    //Events for creating
    handleSubmit(event) {
        console.log(" |Name: " + this.state.Title + " |Year: " + this.state.Year + " |Poster: " + this.state.Poster);

        const NewMovie = {
            Title:this.state.Title,
            Year:this.state.Year,
            Poster:this.state.Poster
        };

        axios.post('http://localhost:4000/api/movies', NewMovie)
        .then((data)=>{
            console.log(data)
        })

        
        event.preventDefault();
    }

    //method for creating new titles etc
    onChangeMovieName(event) {
        this.setState({
            Title: event.target.value
        })
    }

    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    }

    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }
    
    //returning the labels etc to website
    render() {
        return (
            <div>
                <h1>This is my Create Component.</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">

                        <label>Add Movie Name: </label>

                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName} />

                    </div>

                    <div className="form-group">

                        <label>Add Year: </label>

                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear} />

                    </div>

                    <div className="form-group">

                        <label>Add Poster URL: </label>

                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Movie" className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Create;