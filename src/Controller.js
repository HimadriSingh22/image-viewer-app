import React,{Component} from 'react';
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class Controller extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path='/' render={(props)=><Login{...props}/>}/>
                    <Route exact path='/home' render={(props)=><Home{...props}/>}/>
                </div>
                </Router>
        )
    }
}
export default Controller;