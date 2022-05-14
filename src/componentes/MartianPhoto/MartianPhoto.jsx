import React from "react";
import { addFavFACT } from "../../redux/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
class MartianPhoto extends React.Component{
    
//constructor(props){
  //  super(props);
//}
render(){
    return(<div>
<img src={this.props.imagen} alt="" />
<h4>{this.props.name}</h4>
{<button onClick={()=> this.props.addFavFACT(this.props)}>💛</button>}

 </div>)


}

}

const mDTP = dispatch => {return bindActionCreators({addFavFACT},dispatch)};

export default connect(null,mDTP)(MartianPhoto)