import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return (
    <React.Fragment>
      <h3>{props.names}</h3>
      <p>{props.description}</p>
      <hr/>
    </React.Fragment>
  )
}

Item.propType = {
  names: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.string.isRequired 
}

export default Item;