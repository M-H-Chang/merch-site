import React from "react";
import {v4} from 'uuid';
import PropTypes from "prop-types";


function NewItemForm(props){
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({names: event.target.names.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()})
  }

  NewItemForm.propTypes = {
    onNewItemCreation: PropTypes.func
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
        type='text'
        name='names'
        placeholder='Item Names' />
        <input
        type='text'
        name='description'
        placeholder='Description' />
        <input
        type='number'
        name='quantity'
        placeholder='Number of Items' />
      </form>
    </React.Fragment>
  )
}

export default NewItemForm;

