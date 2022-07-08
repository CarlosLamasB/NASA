import React from "react";
import { addFavFACT } from "../../redux/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import './MPhoto.css'
class MartianPhoto extends React.Component{
    
//constructor(props){
  //  super(props);
//}
render(){
    return(<div className="casita2">
<img src={this.props.imagen} alt="" className="img-dog" />
<h4 className="h4-button">{this.props.name}</h4>
{<button onClick={()=> this.props.addFavFACT(this.props)} className="button-photo">💛</button>}

 </div>)


}

}

const mDTP = dispatch => {return bindActionCreators({addFavFACT},dispatch)};

export default connect(null,mDTP)(MartianPhoto)