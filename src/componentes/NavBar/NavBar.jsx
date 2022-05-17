import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import N from '../../img/NASA4.png'

export default class Nav extends Component {
    render() {
        return (
            <div className='Nabu'>
           <ul className='codonosor'>
             <img src={N} alt="" className='img3'/>
     {/* <li className='second'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className='second'>
        <NavLink to='/apod'>APOD</NavLink>
     </li>
     <li className='second'>
        <NavLink to='/CreateMartianPhotos'>Martian Photos</NavLink>
     </li>
     <li className='second last'>
        <NavLink to='/favorites'>Favoritos</NavLink>
      </li>
     */} 
      <NavLink to='/' className='second' exact activeClassName='second-active'><p>Home</p></NavLink>
      <NavLink to='/apod' className='second'  exact activeClassName='second-active'><p>APOD</p></NavLink>
      <NavLink to='/CreateMartianPhotos' className='second' exact activeClassName='second-active'><p>M-Photos</p></NavLink>
      <NavLink to='/favorites' className='second last' exact activeClassName='second-active'><p>Favoritos</p></NavLink>
 </ul>
            </div>
        )
    }
}
