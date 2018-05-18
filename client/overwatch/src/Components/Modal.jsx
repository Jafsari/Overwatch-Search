import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
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

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} More Info</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>ToxicWatch</ModalHeader>
          <ModalBody>
            ToxicWatch is an web application that brings competitive overwatch players together. Find other serious players to play competitive ranked matches with! Best of luck!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Lets be toxic!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>I'm a filthy casual</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;