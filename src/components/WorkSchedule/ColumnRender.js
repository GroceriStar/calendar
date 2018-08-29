import React, { Component } from 'react';
// import { data }   from '../../data/Data_WorkSchedule';
import data from '@groceristar/groceristar-fetch/mealCalendar'
import { rendererFunc } from './Methods.js';

class ColumnRender extends Component {

    Schedule() {
      let result = [];
      let week = data.getDishByWeek("week1");

      result[0] = week[this.props.index];

      switch (this.props.index){
      case 0: result[0].tag = 'abs'; break;
      case 1: result[0].tag = 'rowing'; break;
      case 2: result[0].tag = 'yoga'; break;
      case 3: result[0].tag = 'restorive'; break;
      case 4: result[0].tag = 'abs'; break;
      case 5: result[0].tag = 'rowing'; break;
      case 6: result[0].tag = 'yoga'; break;
      case 7: result[0].tag = 'yoga'; break;
      }
      result[0].time=(this.props.index + 9)
                      + ':30-1'+ this.props.index +':15';

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
