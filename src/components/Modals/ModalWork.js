import React, { Component } from "react";
import {
  ListGroupItem,
} from "reactstrap";
import shortid from "shortid";

import "./ModalWork.css";
import RenderModal from '../RenderModal/RenderModal'

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  getLink(){

    return '/meal/'+ this.props.ingredient["id"];
  }

  transformTime(time) {
    if (this.props.mode) {
      let timeLapse = time.split("-", 2).map(index => index.split(":", 2));
      // console.log(timeLapse);
      if (timeLapse[1][0] > 12) {
        timeLapse[1][0] -= 12;
        timeLapse[1][0] = "0" + timeLapse[1][0];
      }
      if (timeLapse[0][0] > 12) {
        timeLapse[0][0] -= 12;
        timeLapse[0][0] = "0" + timeLapse[0][0];
      }
      let result = timeLapse.map(index => index.join(":")).join("-");
      return result;
    } else {
      return time;
    }
  }

  displayIngredients() {

    // console.log(recipes);
    console.log("this.props.className");
    console.log(this.props.className);
    let result = this.props.ingredient["ingredient"];
    // console.log(result);
    if (!result){
      return '';
    }
    return result.map(item => <li key={shortid.generate()}>{item}</li>);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ListGroupItem
          style={{ height: this.props.data.height }}
          className={this.props.data.tag}
          onClick={this.toggle}
        >
          <div>
            {this.transformTime(this.props.data.time)}
          </div>
          {this.props.data.text}

        </ListGroupItem>

        <RenderModal
          modal={this.state.modal}
          data={this.props.data}
          toggle={this.toggle}
          link={this.getLink()}
          displayIngredients = {this.displayIngredients()}
          className={this.props.className}
        />

      </div>
    );
  }
}

export { Modals };
