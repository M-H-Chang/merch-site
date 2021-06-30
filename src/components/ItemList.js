import React from "react";
import Item from './Item.js';
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.ItemList.Map((item, index) =>
        <Item name={item.name}
          description={item.description}
          quantity={item.quantity}
          key={index} />
      )}
    </React.Fragment>
  )
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;