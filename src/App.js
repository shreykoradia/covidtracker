import React from 'react'
import './App.modules.css'
import {Cards , Charts , Countrypicker } from './components'
import {fetchData} from './api'

class App extends React.Component {
state = {
  data:{},
}
async componentDidMount(){
  const fetchedData = await fetchData();
  this.setState({data : fetchedData})
}
  render(){
    const {data} = this.state;
    return (
      <div className = "container">
          
          <Cards data={data} />
          <Countrypicker />
          <Charts />
          
      </div>
    );
  }
 
}

export default App
