import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';
import CharacterCard from './components/CharacterCard.js';
import ComicCard from './components/ComicCard.js';
import { getComics} from './actions/comics.js';


class App extends Component {

  componentDidMount() {
    this.props.getComics()
  }

  routeCases = () => {

    switch (this.props.comic.featuredComic) {
      case !null:
        return this.props.comic.featuredComic ? 
          <Route exact path={'/comicCard' + this.props.featuredComic.id} component={ComicCard} /> 
            : <Route exact path={'/character' + this.props.featuredCharacter.id} component={CharacterCard} />
      case null:
        return <Route exact path='/' component={HomePage} />;
      default:
        break;
    }

    return (
      <div>

        <Route exact path='/' component={HomePage} />
        <Route exact path='/characterCard' component={CharacterCard} />
        <Route exact path='/comicCard' component={ComicCard} />

        {/* <Route exact path='/userProfile' render={() => (<UserProfile key={this.props.currentUser.doctors.length} />)} /> */}
      </div>
    )

  }

  render() {
    return (
      <Router>
      <div className="App-wrapper">
        <div className="App">
            <NavBar />
              {/* {this.routeCases()} */}
              {console.log(this.props)}
        </div>
      </div>
      </Router>
    )
  }
  
}

const mapStateToProps = ({ comics }) => {
  return {
    comics
  }
}

export default connect(mapStateToProps, { getComics })(App);
