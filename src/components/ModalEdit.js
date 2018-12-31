import React from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

import GoalForm from './goals/GoalForm'
// import '../styling/ModalManager.css'

class ModalEdit extends React.Component {

  state = {
    showModal: false
  }

  handleClose = (e) => {
    e.preventDefault()

    this.closeModal()
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {

    const { showModal } = this.state

    return (
      <Modal className='ui tiny modal' closeIcon onClose={this.closeModal} open={showModal}
      trigger={<span onClick={() => this.setState({ showModal: true })}>
      <i className='edit outline icon'></i></span>}>
        <Modal.Header id='edit-header'>Edit Sleep Goal</Modal.Header>
        <Modal.Content id='edit-form'>
          <GoalForm handleClose={this.handleClose} editGoal={this.props.editGoal} goal={this.props.goal} />
        </Modal.Content>
      </Modal>
    )
  }
}

export default ModalEdit