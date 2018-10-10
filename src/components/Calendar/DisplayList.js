import React, { Component } from "react";

import shortid from "shortid";

class DisplayList extends Component {
  render() {
    return (
      <ul className="ingredient list short">
        {this.props.data.map(item => <li key={shortid.generate()}>{item}</li>)}
      </ul>
    );
  }
}

export default DisplayList;
