import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { NavLink } from "react-router-dom";

import "../Modals/ModalWork.css";

class RenderModal extends Component {

  render(){
    return(
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle}>
          {this.props.data.text}
        </ModalHeader>
        <ModalBody>

          <h3>Ingredients</h3>
          <ul>{this.props.displayIngredients}</ul>

        </ModalBody>
        <ModalFooter>
          <NavLink activeClassName = "link-id" to= {this.props.link}>
            <button className = "read-more primary" type="button">
              Read more...
              </button>
          </NavLink>
          {" "}
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}
export default RenderModal;
