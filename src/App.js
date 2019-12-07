import React from 'react';
import './App.css';

const data = [

  { id: 'Spring', letter: 'A', src: 'https://raw.githubusercontent.com/sukhleenbolina/drumkit/master/assets/wav/1.wav' },
  { id: 'Honk', letter: 'S', src: 'https://raw.githubusercontent.com/sukhleenbolina/drumkit/master/assets/wav/2.wav' },
  { id: 'Cow', letter: 'D', src: 'https://raw.githubusercontent.com/sukhleenbolina/drumkit/master/assets/wav/3.wav' },
  { id: 'Beep', letter: 'F', src: 'https://raw.githubusercontent.com/sukhleenbolina/drumkit/master/assets/wav/4.wav' },
  { id: 'Boink', letter: 'G', src: 'https://raw.githubusercontent.com/sukhleenbolina/drumkit/master/assets/wav/5.wav' },
  { id: 'Bounce', letter: 'H', src: 'https://raw.githubusercontent.com/sukhleenbolina/drumkit/master/assets/wav/6.wav' },
  { id: 'WoahWoa', letter: 'I', src: 'https://raw.githubusercontent.com/sukhleenbolina/drumkit/master/assets/wav/7.wav' },
  { id: 'Mouth Noise', letter: 'J', src: 'https://raw.githubusercontent.com/sukhleenbolina/drumkit/master/assets/wav/8.wav' },
]

class DrumPad extends React.Component {
 
  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeydown)
 }
  
  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render() {
    return (
      <div 
          className='drum-pad' 
          id={this.props.id}
          onClick={this.handleClick}
      >
        <h1>{this.props.letter}</h1>
        <audio id={this.props.letter}
               className='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
          ></audio>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Click or Press a Key'
    }
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(
    <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        
        <div id='drum-pads'>{data.map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />   
         ))}</div>
    </div>
    )
  }
}

export default App;
