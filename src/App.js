import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '65a4bc8d46ac4754b30e95f417ce0973'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () =>{
    console.log('click');
    app.models.predict('65a4bc8d46ac4754b30e95f417ce0973', 'https://samples.clarifai.com/face.det.jpg').then(
      function(response){
        console.log(response);
      },
      function(err){

      }
    );
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>{/*}
      <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
