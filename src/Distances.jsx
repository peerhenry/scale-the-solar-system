import React from "react";
import body_data from "./body_data";

class Distances extends React.Component{
  constructor(props) {
    super(props);
    this.state = {scale: 1};
    this.calculateScale = this.calculateScale.bind(this);
  }

  calculateScale(){
    var chosenPlanet = document.getElementById("chosen-planet").value;
    var targetSize = document.getElementById("target-size").value;
    var nTs = Number(targetSize);
    var isNumber = (typeof nTs === "number");
    if(!isNumber){
      alert('Input must be a number, not: ' + (typeof nTs) );
    }
    else{
      var body = body_data.filter(e => e.name == chosenPlanet)[0];
      var newScale = nTs/(body.distance);
      this.setState({
        scale: newScale
      });
    }
  }

  applyScaling(size){
    return (this.state.scale * size).toFixed(2);
  }

  render() {
    return (
      <div>

        <h4 style={{marginBottom: '20px'}}>Distances</h4>

        <div style={{marginBottom: '20px'}}>
          Scale the distance from the sun to 
          <span>
            <select className="target-setter" defaultValue="Earth" id="chosen-planet" onChange={this.calculateScale}>
              {
                body_data.filter(b => b.type == "Planet").map(r => 
                  <option value={r.name} key={r.name}>
                    {r.name}
                  </option>
                )
              }
            </select>
          </span>
          to <input className="target-setter" id="target-size" type="text" defaultValue="149.6" onChange={this.calculateScale}/> meters.
        </div>

        <div>

          <div>
            <table><tbody>
                <tr>
                  <th>Planet</th>
                  <th>Distance to Sun (10^6 km)</th>
                  <th>Radius (km)</th>
                  <th>Scaled Distance (m)</th>
                  <th>Scaled Radius (mm)</th>
                </tr>
                {
                  body_data.map(r => 
                    <tr key={r.name}>
                      <td>{r.name}</td>
                      <td>{r.distance}</td>
                      <td>{r.radius}</td>
                      <td>{ this.applyScaling(r.distance) }</td>
                      <td>{ this.applyScaling(r.radius/1000) }</td>
                    </tr>
                  )
                }
            </tbody></table>  
          </div>

        </div>

      </div>
    )
  }
}

export default Distances