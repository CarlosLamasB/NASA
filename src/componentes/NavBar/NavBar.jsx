import React, { Component } from 'react'
import { Link } from 'react-router-dom';



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
// function Nav() {
//   return (
//     <nav >
//       <Link to='/'>
//         <span >
         
//           Home
//         </span>
//        </Link>
//        <Link to='/apod'>
//         <span>APOD</span>
//       </Link> 
        
//     </nav>
//   );
// };
// export default Nav