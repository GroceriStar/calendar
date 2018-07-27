import React, { Component } from 'react';
import { data }   from '../../data/Data_WorkSchedule';
import { rendererFunc } from './Methods.js';

class ColumnRender extends Component {
   
    Schedule() {
        return rendererFunc(data[this.props.index], this.props.mode)
    }
        
    render() {
        return(<div>
               {this.Schedule()}</div>
            );
    }
}

export { ColumnRender }
