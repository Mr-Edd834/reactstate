import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Bruce Wayne",
        bio: "What's my superpower you ask? I'm rich.",
        imgSrc: "https://queenstudios.shop/cdn/shop/files/1.BruceWayneStatue.png?v=1727835010",
        profession: "Genius Billionaire Playboy Philanthropist"
      },
      shows: false,
      mountTime: new Date(),
      timeSinceMount: 0
    };
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const seconds = Math.floor((new Date() - this.state.mountTime) / 1000);
      this.setState({ timeSinceMount: seconds });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>Profile Toggle App</h1>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} width="150" />
            <h2>{person.fullName}</h2>
            <p><strong>Profession:</strong> {person.profession}</p>
            <p><strong>Bio:</strong> {person.bio}</p>
          </div>
        )}

        <p className="timer">
          Component mounted {timeSinceMount} seconds ago
        </p>
      </div>
    );
  }
}

export default App;