import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Main from './Components/Main';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/main' component={Main}/>
        </Switch>
      </React.Fragment> 
    );
  }
}

export default withRouter(App);
