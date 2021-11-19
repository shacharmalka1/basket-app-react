import React from "react";

export default class Basket extends React.Component {
  constructor(props) {
    super(props);
  }

  updateCount = (array, food) => {
    const count = array.filter((element) => element == food).length; //check how many times the food exist in array
    return [food, count];
  };

  render() {
    return (
      <div>
        {this.props.theBasket.map((ingredient) => {
          const foodApereance = this.updateCount(
            this.props.countForFood,
            ingredient
          );
          if (foodApereance[0] === ingredient)
            return (
              <li
                onClick={() => this.props.deleteOne(ingredient)}
                className="basket list-group-item basket-content"
              >
                {foodApereance[1]}&nbsp; {ingredient}
              </li>
            );
        })}
      </div>
    );
  }
}
