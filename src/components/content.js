import React, { Component } from "react"; //impoted react

export class Content extends Component //auto imported export so as designed for export
{
    render(){

        //html code
        return(
            <div>            
            <h1>Hello World</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}