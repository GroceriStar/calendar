import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { weekdayName } from '../../data/days';
import { ColumnRender } from './ColumnRender';
import {  defaultBlockHeight } from '../../data/style_vars'


class ScheduleRender extends Component {
    render() {
        return(
            weekdayName.map((day, index) => 
                <div key={index} className='data-class'>
                    <ListGroup>
                        <ListGroupItem style={defaultBlockHeight}>{day}</ListGroupItem>
                        <ColumnRender mode={this.props.mode} key={index} index={index} />
                    </ListGroup>
                </div>
                )
            );
        }
}

export { ScheduleRender }