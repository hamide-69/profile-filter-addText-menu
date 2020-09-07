import React from 'react';
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import AddTxt from './AddTxt'
import Slider  from './Slider'
import Gallery from './Gallery'
import Login from './Login'
import Logout from './Logout'
import Admin from './Admin'
import ComplexList from './ComplexList'
import Uplode from './Uplode'
import Portfolio from './Portfolio'




import {Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css'


function App(){
   return(
      <Router className="container-fluid" >
      <div className='App row'>
<Nav  />
<div  className="col-md-9">
<switch >
<Route path="/" exact component={Home}/>
<Route path="/home"  component={Home}/>
<Route path="/about" component={About}/>
<Route path="/portfolio" component={Portfolio}/>
<Route path="/gallery" component={Gallery}/>
<Route path="/addtxt" component={AddTxt}/>
<Route path="/ComplexList" component={ComplexList}/>
<Route path="/contact" component={Contact}/>
<Route path="/login" component={Login}/>
<Route path="/admin" component={Admin}/>
<Route path="/logout" component={Logout}/>
<Route path="/uplode" component={Uplode}/>




</switch>

</div>
        </div> 
        </Router>

   )
}


const Home = () => (
   <div>
  
  <Slider  />
   

   </div>
);

export default App