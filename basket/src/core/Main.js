import React from "react";
import Items from "./Item";
import Basket from "./List";
// import Swal from "sweetalert2";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        "Strawberry",
        "Blueberry",
        "Orange",
        "Banana",
        "Apple",
        "Carrot",
        "Celery",
        "Mushroom",
        "Green",
        "Pepper",
        "Eggs",
        "Cheese",
        "Butter",
        "Chicken",
        "Beef",
        "Pork",
        "Fish",
        "Rice",
        "Pasta",
        "Bread",
      ],
      basket: [],
      ingredientsCounter: [],
    };
  }

  emptyBasket = () => {
    this.setState({ basket: [] });
    this.setState({ ingredientsCounter: [] });
  };

  deleteItem = async (item) => {
    alert(`${item} deleted`);
    // if ((await confirmAlert()) === "Don't delete") return;
    this.setState({
      basket: this.state.basket.filter((element) => element !== item),
    });
    this.setState({
      ingredientsCounter: this.state.ingredientsCounter.filter(
        (element) => element !== item
      ),
    });
  };

  addNewItem = async (food) => {
    let basketArray = [...this.state.basket];
    await this.setState({
      ingredientsCounter: [...this.state.ingredientsCounter, food],
    }); //add to ingredientsCounter anyway
    if (basketArray.includes(food)) return;
    this.setState({ basket: [...this.state.basket, food] });
  };

  render() {
    return (
      <main>
        <div className="main-container">
          <div className="ingridents">
            <ul className="ingridentsList list-group">
              <span className="lists-headlines">Ingredients</span>
              <Items
                ingredientsArray={this.state.ingredients}
                func={this.addNewItem}
              />
            </ul>
          </div>
          <div className="baskets">
            <ul className="basketList list-group">
              <span className="lists-headlines">Basket</span>
              <button onClick={this.emptyBasket} id="trash">
                🗑
              </button>
              <Basket
                deleteOne={this.deleteItem}
                countForFood={this.state.ingredientsCounter}
                theBasket={this.state.basket}
              />
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

// const niceAlert = (textVal) => {
//   Swal.fire({
//     title: textVal,
//     width: 600,
//     padding: "3em",
//   });
// };
// const confirmAlert = async () =>
//   Swal.fire({
//     title: "Are you sure you want to delete this item?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire("Deleted!", "Your file has been deleted.", "success");
//     } else return "Don't delete";
//   });
