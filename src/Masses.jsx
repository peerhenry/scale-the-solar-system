import React from "react";
import planet_indices from "./planet_indices";
import planet_data from "./planet_data";

class Masses extends React.Component{
  constructor(props) {
    super(props);
    this.state = {scale: 1};
    this.calculateScale = this.calculateScale.bind(this);
  }

  calculateScale(){
    var chosenPlanet = document.getElementById("mass-chosen-planet").value;
    var targetMass = document.getElementById("target-mass").value;
    var nTs = Number(targetMass);
    var isNumber = (typeof nTs === "number");
    if(!isNumber){
      alert('Input must be a number, not: ' + (typeof nTs) );
    } 
    else{
      var index = planet_indices[chosenPlanet];
      var newScale = nTs/(planet_data[index].mass);
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
      <div style={{marginTop: '20px'}}>

        <h4 style={{marginBottom: '20px'}}>Masses</h4>

        <div style={{marginBottom: '20px'}}>
          Scale the mass of 
          <span>
            <select className="target-setter" defaultValue="Earth" id="mass-chosen-planet" onChange={this.calculateScale}>
              {
                planet_data.map(r => 
                  <option value={r.planet} key={r.planet}>
                    {r.planet}
                  </option>
                )
              }
            </select>
          </span>
          to <input  className="target-setter" id="target-mass" type="text" defaultValue="5.97" onChange={this.calculateScale}/> kilograms.
        </div>

        <div>
            <table><tbody>
                <tr>
                  <th>Planet</th>
                  <th>Mass (10^24 kg)</th>
                  <th>Scaled (kg)</th>
                </tr>
                {
                  planet_data.map(r => 
                    <tr key={r.planet}>
                      <td>{ r.planet }</td>
                      <td>{ r.mass }</td>
                      <td>{ this.applyScaling(r.mass) }</td>
                    </tr>
                  )
                }
            </tbody></table>  
          </div>

      </div>
    )
  }
}

export default Masses