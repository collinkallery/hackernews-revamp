import React, {Component} from 'react';
import './App.css';
import {fetchPromises} from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state ={
      newStoryIDs: [],
      bestStoryIDs: [],
      topStoryIDs: []
    }
  }

  componentDidMount = () => { 
    fetchPromises('newstories')
      .then(data => this.setState({newStoryIDs: data}))
      .catch(err => console.error(err))

    fetchPromises('beststories')
      .then(data => this.setState({bestStoryIDs: data}))
      .catch(err => console.error(err))

    fetchPromises('topstories')
      .then(data => this.setState({topStoryIDs: data}))
      .catch(err => console.error(err))
  }






  
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
