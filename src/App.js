import React from 'react';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm'
import FaceDetection from './components/facedetection/FaceDetection.js'
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'ae95abc5f42043d4bed1c10ff1dcc276'
});

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (response) => {
    const clarifaiFace = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  }

  customInputChange = (customEventReceiver) => {
    this.setState({ input: customEventReceiver.target.value });
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles className='customParticles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          customInputChangeProp={this.customInputChange}
          customOnSubmitProp={this.onSubmit} />
        <FaceDetection box={this.state.box} url={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
