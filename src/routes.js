import React from 'react';
import {Route} from 'react-router';
import {BrowserRouter,Switch} from 'react-router-dom';
import RegistrationForm from './component/RegistrationForm';

class Navigation extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={RegistrationForm}/>
                    <Route exact path='/registrationForm' component={RegistrationForm}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Navigation;