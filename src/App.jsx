import React from "react";
import Distances from "./Distances";
import Masses from "./Masses";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {scale: 1};
  }

  render() {
    return (
      <div style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style={{marginBottom: '20px'}}>Scale the solar system!</h1>

        <div style={{marginBottom: '20px'}}>
          <p>In order to understand the size of the solar system, one has to scale the astronomical units to familiar ones.</p>
        </div>

        <Distances/>
        <Masses/>

      </div>
    )
  }
}

export default App