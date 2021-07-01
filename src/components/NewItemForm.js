import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewItemForm(props) {
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: v4(),
    });
  }

  NewItemForm.propTypes = {
    onNewItemCreation: PropTypes.func,
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Add Item"
      />
    </React.Fragment>
  );
}

export default NewItemForm;
