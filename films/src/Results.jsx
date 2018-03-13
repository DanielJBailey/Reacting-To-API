import React, { Component } from 'react';
import '../src/app.css';
import 'isomorphic-fetch';
import 'es6-promise';

//Set initial states to false
class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasLoaded: false,
            filmsLoaded: false,
            peopleLoaded: false
        }
    }

// Create event handlers to toggle states when buttons are pushed
    toggleFilmsLoaded(event) {
        this.setState({ hasLoaded: true, filmsLoaded: true, peopleLoaded: false });
    }

    togglePeopleLoaded(event) {
        this.setState({ hasLoaded: true, filmsLoaded: false, peopleLoaded: true })
    }

//Create render function to render buttons based on state and call film and people components to pull API
    render() { 
        if (this.state.hasLoaded === false) { //All states are currently false
            return (
                <React.Fragment>

                    <div className="button-container">
                        <button
                            type="button"
                            onClick={(event) => { this.toggleFilmsLoaded(event) }}
                            className='btn films-btn'>Load Films</button>

                        <button
                            type="button"
                            onClick={(event) => { this.togglePeopleLoaded(event) }}
                            className='btn ppl-btn'>Load People</button>
                    </div>

                </React.Fragment>
            ) 
        } else if (this.state.filmsLoaded === true) { //hasLoaded is true and filmsLoaded is true
            return (
                <React.Fragment>

                    <div className="button-container">
                    <button
                            type="button"
                            className='btn films-btn active'>Films Loaded</button>
                        <button
                            type="button"
                            onClick={(event) => { this.togglePeopleLoaded(event) }}
                            className='btn ppl-btn'>Load People</button>
                    </div>

                </React.Fragment>
            )
        } else if (this.state.peopleLoaded === true) {
            return (
                <React.Fragment>

                    <div className="button-container">
                        <button
                            type="button"
                            onClick={(event) => { this.toggleFilmsLoaded(event) }}
                            className='btn films-btn'>Load Films</button>
                            <button
                            type="button"
                            className='btn ppl-btn active'>People Loaded</button>
                    </div>

                </React.Fragment>
            )
        } 
    }
}

export default Results;