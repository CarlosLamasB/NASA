import React, { Component } from 'react'
import { Link } from 'react-router-dom';


//NO CAMBIEN EL CLASS COMPONENT A FUNCTIONAL COMPONENT PORQUE SINO LOS TEST NO VAN A CORRER!!!
export default class Nav extends Component {
    render() {
        return (
            <div>
              <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      
      <li>
        <Link to='/apod'>APOD</Link>
      </li>
    </ul>

            </div>
        )
    }
}
