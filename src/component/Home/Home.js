import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() { 
    return(
        <div className = "jumbotron">
            <h2>Sudofy Administration</h2>
            <p>Here you can manage your courses with React, React-Rouer and Redux</p>
            <Link to = "/about" className =  "btn btn-primary btn-lg" >Learn More</Link>
        </div>
        );
    }
}

export default Home