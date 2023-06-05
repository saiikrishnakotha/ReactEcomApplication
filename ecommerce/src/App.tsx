import React from 'react';

import './App.css';
import Homescreen from "./screens/Homescreen"
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen';
import {connect} from "react-redux";


 interface IProps{
    count : any;
 }
 interface IState{

 }

class  App extends  React.Component<IProps,IState>{
   constructor(props:IProps){
      super(props)
   }
   render(){

      return (
         <div className="App">
            <React.Fragment>
                 <Router>
                    <div className="grid-container">
                       <header className="row">
                          <div>
                             <NavLink to="/" exact={true} strict className="brand">AshokIT</NavLink>
                          </div>
         
                          <div>
                              <NavLink to={`/cart`} exact={true} strict>cart {this.props.count>0 ? (<span className="badge-success">{this.props.count}</span>) : ( <span className="badge-empty">{this.props.count}</span>)}</NavLink>
                              <NavLink to="/" exact={true} strict>signin</NavLink>
                          </div>
                       </header>
         
                       <main>
                           <Route path="/" component={Homescreen} exact={true} strict></Route>
                           <Route path="/product/:id" component={ProductScreen} exact={true} strict></Route>
                           <Route path="/cart/:id?" component={CartScreen} exact={true} strict></Route>
                       </main>
         
                       <footer className="row center">
                           copyright@saikrishna.in
                       </footer>
                    </div>
                    
                 </Router>
              </React.Fragment>
           
           
         </div>
       );

   }
 
}

const receive = (state:any)=>{
   return{
      count : state.cart.finalArray.length
   }
};

const send = (dispatch: any)=>{
   return{

   }
}

export default connect(receive,send)(App);
