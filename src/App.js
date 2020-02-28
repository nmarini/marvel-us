import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';
import CharacterContainer from './containers/CharacterContainer.js';
import ComicContainer from './containers/ComicContainer.js';
import { getComics, removeFeaturedComic} from './actions/comics.js';


class App extends Component {

  componentDidMount() {
    this.props.getComics()
  }

  handleHomePageClick = () => {
    this.props.removeFeaturedComic();
  }

  routeCases = () => {

    if (this.props.comics.featuredComic || this.props.characters.featuredCharacter) {
      if (this.props.comics.featuredComic) {
        // return <Route exact path={'/comic' + this.props.comics.featuredComic.id} component={ComicContainer} />
        return <Route exact path='/comic' component={ComicContainer} />
      } else {
        return <Route exact path={'/character' + this.props.characters.featuredCharacter.id} component={CharacterContainer} />
      }
    } else {
      return <Route exact path='/' component={HomePage} />
    }
  }

  render() {
    return (
      <div className="App-wrapper">
        <div className="App">
          <Router>
            <div className="nav-container"><NavBar handleClick={this.handleHomePageClick}/></div>
            <div className="route-container">
              <Route exact path='/' component={HomePage} />
              {this.props.comics.featuredComic ? <Route exact path={'/comic' + this.props.comics.featuredComic.id} component={ComicContainer} /> : null}
              {this.props.characters.featuredCharacter ? <Route exact path={'/character' + this.props.characters.featuredCharacter.id} component={CharacterContainer} /> : null}
              {/* {this.routeCases()} */}
              
              </div>
          </Router>
        </div>
      </div >
    )
  }
  
}

const mapStateToProps = ({ comics, characters }) => {
  return {
    comics,
    characters
  }
}

export default connect(mapStateToProps, { getComics, removeFeaturedComic })(App);
