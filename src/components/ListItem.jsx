import React from "react";

export default class ListItem extends React.Component {
  render(){
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    )
  }
}
