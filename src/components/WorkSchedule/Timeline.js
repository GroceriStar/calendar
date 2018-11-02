import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class TimeLine extends Component {
  transformTime(time) {
    if (this.props.mode) {
      let timeSplit = time.split(":", 2);
      if (timeSplit[0] > 12) {
        timeSplit[0] -= 12;
        timeSplit[0] = "0" + timeSplit[0];
      }
      let result = timeSplit.join(":");
      return result;
    }
    return time;
  }

  getGroupTime(){
    let clock = [
      "07:00","08:00","09:00","12:00","13:00","14:00",
      "18:00","19:00"
    ];
    let result = clock.map(item => {
      return (
        <ListGroupItem>
          {this.transformTime(item)}
        </ListGroupItem>);
    });
    return result;
  }

  render() {
    // @TODO i'm pretty sure that developers can make this function prettier
    return (
      <div className="timedHeight">
        <ListGroup>
          {this.getGroupTime()}
        </ListGroup>
      </div>
    );
  }
}

export { TimeLine };
