import React from "react";

export default class Items extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.ingredientsArray.map((ingredient) => (
          <li
            onClick={() => this.props.func(ingredient)}
            className="ingrident list-group-item lists-content"
          >
            {ingredient}
          </li>
        ))}
      </div>
    );
  }
}
