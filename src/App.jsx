import React from "react";

const indices = {
  "Mercury": 0,
  "Venus": 1,
  "Earth": 2,
  "Mars": 3,
  "Jupiter": 4,
  "Saturn": 5,
  "Uranus": 6,
  "Neptune": 7
}

var distances = [
  {
    planet: "Mercury",
    distance: 57.9
  },
  {
    planet: "Venus",
    distance: 108.2
  },
  {
    planet: "Earth",
    distance: 149.6
  },
  {
    planet: "Mars",
    distance: 227.9
  },
  {
    planet: "Jupiter",
    distance: 778.3
  },
  {
    planet: "Saturn",
    distance: 1427
  },
  {
    planet: "Uranus",
    distance: 2871
  },
  {
    planet: "Neptune",
    distance: 4497.1
  }
]

var radii = [
  {
    planet: "Mercury",
    radius: 2440
  },
  {
    planet: "Venus",
    radius: 6052
  },
  {
    planet: "Earth",
    radius: 6378
  },
  {
    planet: "Mars",
    radius: 3397
  },
  {
    planet: "Jupiter",
    radius: 71492
  },
  {
    planet: "Saturn",
    radius: 60268
  },
  {
    planet: "Uranus",
    radius: 25559
  },
  {
    planet: "Neptune",
    radius: 24766
  }
]

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {scale: 1};
    this.calculateScale = this.calculateScale.bind(this);
  }

  calculateScale(){
    var chosenPlanet = document.getElementById("chosen-planet").value;
    var targetSize = document.getElementById("target-size").value;
    var nTs = Number(targetSize);
    console.log("targetSize is: " + targetSize);
    console.log("as a Number(): " + nTs);
    var isNumber = (typeof nTs === "number");
    if(!isNumber){
      alert('Input must be a number, not: ' + (typeof nTs) );
    }
    else{
      var index = indices[chosenPlanet];
      var newScale = nTs/(distances[index].distance);
      this.setState({
        scale: newScale
      });
    }
  }

  applyScaling(size)
  {
    return (this.state.scale * size).toFixed(2);
  }

  render() {
    return (
      <div style={{padding: '2%'}}>
        <h1 style={{marginBottom: '20px'}}>Scale the solar system!</h1>

        <div style={{marginBottom: '20px'}}>
          <p>In order to understand the size of the solar system, one has to scale the astronomical distances to familiar units.</p>
        </div>

        <div style={{marginBottom: '20px'}}>
          I want the distance to 
          <span>
            <select defaultValue="Earth" id="chosen-planet" onChange={this.calculateScale}>
              {
                distances.map(r => 
                  <option value={r.planet} key={r.planet}>
                    {r.planet}
                  </option>
                )
              }
            </select> 
          </span>
          to scale to <input id="target-size" type="text" defaultValue="149.6" onChange={this.calculateScale}/> meters.
        </div>

        <div>

          <div style={{width: '50%', float: 'left'}}>
            <h4 style={{marginBottom: '20px'}}>Distances to Sun</h4>
            <table><tbody>
                <tr>
                  <th>Planet</th>
                  <th>Distance to Sun (10^6 km)</th>
                  <th>Scaled (m)</th>
                </tr>
                {
                  distances.map(r => 
                    <tr key={r.planet}>
                      <td>{r.planet}</td>
                      <td>{r.distance}</td>
                      <td>{ this.applyScaling(r.distance) }</td>
                    </tr>
                  )
                }
            </tbody></table>  
          </div>

          <div style={{width: '50%', float: 'right'}}>
            <h4 style={{marginBottom: '20px'}}>Radii</h4>
            <table><tbody>
              <tr>
                <th>Planet</th>
                <th>Radius (km)</th>
                <th>Scaled (mm)</th>
              </tr>
              {
                radii.map(r => 
                  <tr key={r.planet}>
                    <td>{r.planet}</td>
                    <td>{r.radius}</td>
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

export default App