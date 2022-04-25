import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchAPOD } from '../../redux/actions';
//import FactAPOD from '../FactAPOD/FactAPOD.jsx';


export class Home extends Component {

  //constructor(props){
    //super(props)
  //}
componentDidMount(){

    
this.props.searchAPOD()
   }
    
  
  render() {
    return (
      <div>  Hola
    {console.log(this.props.searchAPOD)}
  
       {/* { this.props.imagen?.map(producto=>(
          <FactAPOD
         // id={producto.id}
         
          />
        ))} */}


          {/*<FactAPOD
         // id={producto.id}
         imagen={this.props.imagen}
          
      />*/}
    </div>
    )
    
  }
}

//export const mapStateToProps = (state) => {return {imagen:state.imagen}};// revisar

//export const mapDispatchToProps = (dispatch)=> {return {
  //searchAPOD: function(){dispatch(searchAPOD())}}};

export const mapDispatchToProps = (dispatch) => { return bindActionCreators({searchAPOD},dispatch)}

export default connect(null,mapDispatchToProps)(Home)
