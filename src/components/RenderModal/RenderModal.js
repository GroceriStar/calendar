import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import "../Modals/ModalWork.css";
import { NavLink } from "react-router-dom";

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
        <br/>
          <NavLink activeClassName = "link-id" to= {this.props.link}>
            <button className = "read-more" type="button">
              Read more...
              </button>
          </NavLink>
        </ModalHeader>
        <ModalBody>
          <h3>Ingredients</h3>
          <ul>{this.props.displayIngredients}</ul>
        </ModalBody>
        <ModalFooter>

          <Button color="primary" onClick={this.props.toggle}>
            Ok
          </Button>{" "}
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}
export default RenderModal ;
