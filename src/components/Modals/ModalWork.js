import React, { Component } from "react";
import {
  ListGroupItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import shortid from "shortid";
import data from "@groceristar/groceristar-fetch/chickenKyiv";
import "./ModalWork.css";

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

    let result = this.props.ingredient["ingredient"];
    // console.log(result);
    if (!result){
      return '';
    }
    return result.map(item => <li key={shortid.generate()}>{item}</li>);
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <ListGroupItem
          style={{ height: this.props.data.height }}
          className={this.props.data.tag}
          onClick={this.toggle}
        >
          <div>{this.transformTime(this.props.data.time)}</div>
          {this.props.data.text}

        </ListGroupItem>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
          {this.props.data.text}
          <br/>
            <a className = "link-id" href= {this.getLink()}>
              <button className = "read-more" type="button">
                Read more...
                </button>
            </a>
          </ModalHeader>
          <ModalBody>
            <h3>Ingredients</h3>
            <ul>{this.displayIngredients()}</ul>
          </ModalBody>
          <ModalFooter>

            <Button color="primary" onClick={this.toggle}>
              Ok
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export { Modals };
