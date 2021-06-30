import React from "react";
import PropTypes from "prop-types";

function ItemDetails(props){
  return(
    <React.Fragment>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{props.quanity}</p>
      <img src="props.image" alt="Of item" />
    </React.Fragment>
  )
}

ItemDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default ItemDetails;