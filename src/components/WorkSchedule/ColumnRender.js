import React, { Component } from 'react';
import { data }   from '../../data/Data_WorkSchedule';
// import data from '@groceristar/groceristar-fetch/mealCalendar'
import { rendererFunc } from './Methods.js';

class ColumnRender extends Component {

    Schedule() {

      var result = data[0]["recipes"][this.props.index+1];
        return rendererFunc(result, this.props.mode)

    }

    render() {
        return(
              <div>
               {this.Schedule()}
              </div>
            );
    }
}

export { ColumnRender }
