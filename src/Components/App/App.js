import React, {Component} from 'react';
import './App.css';
import fetchPromises from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state ={}
  }

  fetchData = () => {
    fetchPromises('desired fetch go here')
    //This may be in a different file such as ArticleContainer... Not entirely sure
  }
  
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
