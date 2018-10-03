import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { AvForm } from "availity-reactstrap-validation";
import { MealForm } from "../MealPlanner/Form";

class AddMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleValidSubmit() {
    this.props.handleClick();
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Add Meal</Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <AvForm onValidSubmit={this.handleValidSubmit}>
            <ModalHeader toggle={this.toggle}>Add a meal</ModalHeader>
            <ModalBody>
              <MealForm
                changeHandle={this.props.changeHandle}
                handleImage={this.props.handleImage}
                handleIngredients={this.props.handleIngredients}
                handleSteps={this.props.handleSteps}
                handleDescription={this.props.handleDescription}
                handleDiet={this.props.handleDiet}
                handleAllergy={this.props.handleAllergy}
                handleCourse={this.props.handleCourse}
                handleCuisine={this.props.handleCuisine}
                handleDays={this.props.handleDays}
                handleHoliday={this.props.handleHoliday}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.clickHandle}>
                Add
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </AvForm>
        </Modal>
      </div>
    );
  }
}

export { AddMeal };
