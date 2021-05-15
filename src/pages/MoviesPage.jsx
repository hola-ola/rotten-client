import React from "react";

// WRITE TIME
// Mounting a component -> ONCE
// UPDATING A COMPONENT -> ? amount of times
// UNMOUNTING A COMPONENT -> ONCE

// FUNCTIONAL WAY
// function MoviesPage() {
//   React.useEffect(() => {
//     console.log("WE CAN RUN SOME CODE HERE, COMPONENT WAS `mounted`");
//     // WHEN THE COMPONENTS, we will do an API call to get data that, at WRITE time, we dont have access to

//     return () => console.log("Bye bye eeh");
//   });

//   return <div></div>;
// }

class MoviesPage extends React.Component {
  state = {
    counter: 1,
    name: "Andre",
    loading: false,
  };

  componentDidMount = () => {
    console.log("WE CAN RUN SOME CODE HRE, COMPONENT WAS `mounted`");
  };

  componentDidUpdate = () => {
    console.log(
      `WE HAVENT SEEN THIS YET, BUT EVERYTIME COMPONENT UPDATES, THIS METHOD GETS CALLED`
    );
  };

  componentWillUnmount = () => {
    console.log(`Bye bye eeh`);
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h1>COUNTER: {this.state.counter}</h1>
        <button onClick={this.increment}>ADD</button>
      </div>
    );
  }
}

export default MoviesPage;
