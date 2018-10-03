import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { weekdayName } from "../../data/days";
import { ColumnRender } from "./ColumnRender";
import { defaultBlockHeight } from "../../data/style_vars";
import { Col } from "reactstrap";

class ScheduleRender extends Component {
  render() {
    // weekdayName.map((day, index) => console.log(index) );

    return weekdayName.map((day, index) => (
      <Col sm="2">
        <div key={index} className="data-class">
          <ListGroup>
            <ListGroupItem style={defaultBlockHeight}>{day}</ListGroupItem>
            <ColumnRender mode={this.props.mode} key={index} index={index} />
          </ListGroup>
        </div>
      </Col>
    ));
  }
}

export { ScheduleRender };
