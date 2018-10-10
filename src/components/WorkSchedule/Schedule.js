import React, { Component } from "react";
import { ListGroup, ListGroupItem, Col } from "reactstrap";
import { ColumnRender } from "./ColumnRender";
import { weekdayName } from "../../data/days";
import { defaultBlockHeight } from "../../data/style_vars";
import shortid from "shortid"


class ScheduleRender extends Component {


  render() {
    let randomWeek = "week" + Math.floor(Math.random() * 11);
    // weekdayName.map((day, index) => console.log(index) );

    return weekdayName.map((day, index) => (
      <Col sm="2">
        <div key={index} className="data-class">
          <ListGroup>
            <ListGroupItem style={defaultBlockHeight}>{day}</ListGroupItem>
            <ColumnRender mode={this.props.mode} key={shortid.generate()} index={index}  randomWeek={randomWeek}/>
          </ListGroup>
        </div>
      </Col>
    ));
  }
}

export { ScheduleRender };
