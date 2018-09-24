import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Meal from './components/Calendar/Meal';
import { WorkSchedule } from './components/WorkSchedule/WorkSchedule';

class Router extends Component {
  render(){
    return (
      <main>
        <Switch>
          <Route path="/" exact component={WorkSchedule}/>
          <Route path="/meal/:id" component={Meal}/>
        </Switch>
      </main>
    )
  }
}

export default Router;
