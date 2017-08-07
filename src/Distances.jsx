import React from "react";
import planet_indices from "./planet_indices";
import planet_data from "./planet_data";

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
      var index = planet_indices[chosenPlanet];
      var newScale = nTs/(planet_data[index].distance);
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
                planet_data.map(r => 
                  <option value={r.planet} key={r.planet}>
                    {r.planet}
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
                  <th>Distance Scaled (m)</th>
                  <th>Scaled Radius (mm)</th>
                </tr>
                {
                  planet_data.map(r => 
                    <tr key={r.planet}>
                      <td>{r.planet}</td>
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