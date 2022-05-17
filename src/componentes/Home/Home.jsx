import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchAPOD } from '../../redux/actions';
//import img from '../../img/NASA4.png'
import img2 from '../../img/fotografia.jpg';
import './Home.css'

export class Home extends Component {

  
componentDidMount(){

    
this.props.searchAPOD()
   }
    
  
  render() {
    return (
      <div className='casita'>
      <img src={img2} alt="" className="img" />

   <h2>HOLIS</h2>
    </div>
    )
    
  }
}

//export const mapStateToProps = (state) => {return {imagen:state.imagen}};// revisar

//export const mapDispatchToProps = (dispatch)=> {return {
  //searchAPOD: function(){dispatch(searchAPOD())}}};

export const mapDispatchToProps = (dispatch) => { return bindActionCreators({searchAPOD},dispatch)}

export default connect(null,mapDispatchToProps)(Home)
