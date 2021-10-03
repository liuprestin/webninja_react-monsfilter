import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [{
          name: "frank",
          id: "asc1"
        },
        {
          name: "bob",
          id: "asc2"
        },
        {
          name: "toy1",
          id: "asc3"
        }
      ]
    };
  }
  render() {
    return ( <
      div className = "App" > {
        this.state.monsters.map(monster => ( <
          h1 key = {
            monster.id
          } > {
            monster.name
          } < /h1>
        ))
      } <
      /div>
    );
  }
}

export default App;
