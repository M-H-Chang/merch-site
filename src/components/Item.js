import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailVisibleOnPage: false,
      masterItemList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      detailVisibleOnPage: !prevState.detailVisibleOnPage
    }));
  }

  


    render() {
      let currentlyVisibleState = null;
      if (this.state.detailVisibleOnPage) {
        currentlyVisibleState = <ItemDetail itemDetail={this.state.}
      }
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




}


export default Item;