import React, { Component } from 'react';

import Meal from './components/Calendar/Meal';
import { WorkSchedule } from './components/WorkSchedule/WorkSchedule';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={WorkSchedule}/>
          <Route path="/meal/:id" component={Meal}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
