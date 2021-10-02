import React from 'react'
import styles from'./App.module.css'
import {Cards , Charts , Countrypicker , Preventions } from './components'
import {fetchData} from './api'
import coronaImage from './images/image.png' 

class App extends React.Component {
state = {
  data:{},
  country:'',
}
async componentDidMount(){
  const fetchedData = await fetchData();
  this.setState({data : fetchedData})
}

handleCountryChange = async(country)=>{
  // fetch the data 
 const fetchedData =await fetchData(country);
 this.setState({data:fetchedData , country: country});
 
  // set the state
}
  render(){
    const {data , country} = this.state;
    return (
      <div className = {styles.container}>
          <img className={styles.Image} src={coronaImage} alt="Corona Images"/> 
          <Cards data={data} />
          <Countrypicker handleCountryChange={this.handleCountryChange} />
          <Charts  data={data} country={country} />
          <Preventions />
          
      </div>
    );
  }
 
}

export default App
