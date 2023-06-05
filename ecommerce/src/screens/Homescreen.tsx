import React, { Component } from 'react'
import getProducts from "../actions/ProductAction"
import {connect} from "react-redux"
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"
import Products from "../components/Products"
interface IState{

}

interface IProps{
    my_fun:any;
    res:any;
};

class Homescreen extends Component<IProps,IState> {
    constructor(props:IProps){
        super(props);
      };
      componentDidMount(){
          this.props.my_fun();
      };
    render() {
        const { loading,products,error } = this.props.res;
        return (
            

           <React.Fragment>
              {
                    !loading?(<LoadingBox></LoadingBox>): 
                    error === "Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):
                    (<Products arr={products}></Products>)
                }
           </React.Fragment>
        )
    }
}


//dispatch send

const send = (dispatch:any)=>{
    return{
        my_fun    :  ()=>(dispatch(getProducts()))
    }

}

// recive 

const receive = (state:any )=>{
    return{
        res :state.products
    }

}
export default connect(receive,send)(Homescreen);