import React, { Component } from 'react';
import '../src/app.css';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmStyle from '../src/filmStyle';

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(object => {
            let films = object.map((films, id) => {
                    return(
                        <FilmStyle 
                            key = { id }
                            title = { films.title }
                            desc = { films.description }
                            dir = { films.director }
                            prod = { films.producer }
                            released = { films.release_date }
                            rt_score = { films.rt_score }/>
                    )
            })
            this.setState({ films: films })
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <React.Fragment>
                <div className="container d-flex flex-column justify-content-center align-items-center p-3">
                    <h1 className="section-title">Film List</h1>
                    <hr className="section-hr" />
                </div>
                <div className = "cards-container container">
                {this.state.films}
                </div>
            </React.Fragment>
        )
    }
}

export default Films;