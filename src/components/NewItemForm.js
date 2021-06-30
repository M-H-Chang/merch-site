import React from "react";
import {v4} from 'uuid';
import PropTypes from "prop-types";


function NewItemForm(props){
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()})
  }

  NewItemForm.propTypes = {
    onNewItemCreation: PropTypes.func
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
        type='text'
        name='name'
        placeholder='Item Name' />
        <input
        type='text'
        name='description'
        placeholder='Description' />
        <input
        type='number'
        name='quantity'
        placeholder='Number of Items' />
        <button type='submit'>Add Item</button>
      </form>
    </React.Fragment>
  )
}

export default NewItemForm;

