import React, { Component } from 'react';
import '../src/app.css';
import Logo from '../src/logo.png';

class Header extends Component {

    render() {
        return (

            <React.Fragment>
                <div className="header">
                    <a href="http://localhost:3001/">
                        <img src={Logo} alt="Totoro!" className="logo" />
                    </a>
                </div>
            </React.Fragment>


        )
    }
}

export default Header;
