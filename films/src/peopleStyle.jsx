import React from 'react';
import header from '../src/Ghibli.jpg';

const PeopleStyle = (props) => {
    return (
        
            <div className="col-12 col-sm-6 col-md-7 col-lg-4 my-4">
                <div className="card card-style">
                    <img className="card-img-top" src={header} alt="Card Top" />
                    <div className="card-body">
                        <h5 className="card-header">{props.name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Age: {props.age}</li>
                            <li className="list-group-item">Gender: {props.gender}</li>
                            <li className="list-group-item">Hair Color: {props.hair_color}</li>
                            <li className="list-group-item">Eye Color: {props.eye_color}</li>
                            <li className="list-group-item text-center"><a href={"http://ghibliapi.herokuapp.com/people/" + props.link} target="_blank" className="btn btn-secondary mt-2">Go to JSON</a></li>
                        </ul>
                    </div>
                </div>

            </div>
    )
}

export default PeopleStyle;