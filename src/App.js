import React from 'react'
import './App.modules.css'
import {Cards , Charts , Countrypicker } from './components'
import {fetchData} from './api'

class App extends React.Component {

async componentDidMount(){
  const data = await fetchData();
  console.log(data);
}
  render(){
    return (
      <div className = "container">
          
          <Cards />
          <Countrypicker />
          <Charts />
          
      </div>
    );
  }
 
}

export default App
