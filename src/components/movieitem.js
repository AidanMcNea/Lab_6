import React, { Component } from "react";
import { Card } from "react-bootstrap";

class MovieItem extends Component
{
    render(){
        return(
            <div>
                <Card>
  <Card.Header><h4>{this.props.myfilm.Title}</h4></Card.Header>
  <Card.Body>
    <blockquote>
      <footer>
      <img src={this.props.myfilm.Poster}></img>
      <p>{this.props.myfilm.Year}</p>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
            </div>
        );
    }
}

export default MovieItem;