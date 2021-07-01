import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item } = props;

  return (
    <React.Fragment>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.quantity}</p>
      <img src="props.image" alt="Of item" />
      <hr />
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
};

export default ItemDetail;
