import React, { Component } from 'react';
import '../src/app.css';
import 'isomorphic-fetch';
import PeopleStyle from '../src/peopleStyle';
import 'es6-promise';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(object => {
                let people = object.map((people, id) => {
                    return (
                        <PeopleStyle
                            key={id}
                            name={people.name}
                            gender={people.gender}
                            age={people.age}
                            hair_color={people.hair_color}
                            eye_color={people.eye_color} 
                            link={people.id} />
                    )
                })
                this.setState({ people: people })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <React.Fragment>
                <div className="container d-flex flex-column justify-content-center align-items-center p-3">
                    <h1 className="section-title">People List</h1>
                    <hr className="section-hr" />
                </div>
                <div className = "cards-container container">
                {this.state.people}
                </div>
            </React.Fragment>
        )
    }
}

export default People;