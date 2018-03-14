import React from 'react';
import header from '../src/studio.png';

const FilmStyle = (props) => {
    return (
        
            <div className="col-md-4 mb-4">
                <div className="card card-style">
                    <img className="card-img-top" src={header} alt="Card Top" />
                    <div className="card-body">
                        <h5 className="card-title card-header">{props.title}</h5>
                        <p className = "card-text text-muted desc p-2"> { props.desc }</p>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">Director: { props.dir }</li>
                        <li className="list-group-item">Producer: { props.prod }</li>
                        <li className="list-group-item text-muted score">{ props.released } | Rotten Tomatoes: { props.rt_score }</li>
                        </ul>
                    </div>
                </div>

            </div>
    )
}

export default FilmStyle;