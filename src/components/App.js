/**
 * Created by ace on 6/9/17.
 */
import React from "react";

import Header from "./Header";

class App extends React.Component {

  state = {
    pageHeader: "React Try Lang..."
  };

  componentDidMount(){
    console.log("Component is mounted");
    debugger;
  }

  componentWillUnmount(){
    console.log("Component will unmount");
    debugger;
  }

  render() {

    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          ...
        </div>
      </div>
    );
  }
}

export default App;