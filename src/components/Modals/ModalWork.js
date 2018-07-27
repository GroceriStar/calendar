import React, { Component } from 'react';
import {
  ListGroupItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';


let dummyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle = function() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    transformTime(time) {
        if(this.props.mode) {
        let timeLapse = time.split('-', 2).map(index => index.split(':', 2));
        console.log(timeLapse);
        if(timeLapse[1][0] > 12) {
            timeLapse[1][0] -= 12;
            timeLapse[1][0] ='0' + timeLapse[1][0];
        }
        if(timeLapse[0][0] > 12) {
            timeLapse[0][0] -= 12;
            timeLapse[0][0] ='0' + timeLapse[0][0];
        }
        let result = timeLapse.map(index => index.join(':')).join('-');
        return result;
        
        }
        else {
            return time;
        }
    }
    

    render() {
        return(
            <div>
                <ListGroupItem style={{height : this.props.data.height}}
                  className={this.props.data.tag}
                  onClick={this.toggle}>
                    <div>
                        {this.transformTime(this.props.data.time)}
                    </div>{this.props.data.text}
                </ListGroupItem>
                <Modal isOpen={this.state.modal} 
                      toggle={this.toggle} 
                      className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>
                    {this.props.data.text}
                  </ModalHeader>
                  <ModalBody>
                    {dummyText}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>
                      Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
            </div>
            );

     }
}

export { Modals }
