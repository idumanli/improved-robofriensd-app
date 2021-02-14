import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import SearchBox from './components/SearchBox/SearchBox';
import Scroll from './components/Scroll/Scroll';
import CardList from './components/CardList/CardList';
import Particles from 'react-particles-js';
import './App.css';



const particlesOption = {
    particles: {
     number: {
      value:55,
      density: {
        enable: true,
        value_area: 700
    }
  }
 }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
     robots: [],
      searchfield: '',
      route: 'signin'
    }
  }

  

  onRouteChange = (route) => {
   this.setState({route: route})
  }

   componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots:users}));
          
       
      }

   onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    
    }




  render() {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());

      })
    return (
    <div className="App">
      <Particles className='particles'
              params={particlesOption}
            />
     {this.state.route === 'home' 
      ? <div>
        <Navigation onRouteChange={this.onRouteChange}/>
        <SearchBox  searchChange={this.onSearchChange} />
         <Scroll>
          <CardList robots={filteredRobots}/>
         </Scroll>
        </div>
     : (
      this.state.route === 'signin'
      ? <Signin onRouteChange={this.onRouteChange}/>
      : <Register onRouteChange={this.onRouteChange}/>


      )
    }

   </div>
  );
 }
}


export default App;
