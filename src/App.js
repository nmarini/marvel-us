import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { getComics } from './actions/comics.js';
import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';

class App extends Component {

  constructor() {
    super()
    this.state = {
      exposeComics: false
    }
  }


  componentDidMount() {
    this.props.getComics()
  }

  handleButton = () => {
    this.setState({
      exposeComics: !this.state.exposeComics
    })
  }

  comicsList = () => (
    this.props.comics.map(comic => (
      <li key={comic.id}>{comic.title}</li>
    ))
  )

  render() {
    return (
      <Router>
      <div className="App-wrapper">
        <div className="App">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--AeDFhM2w--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_5e366e,e_outline:48/co_5e366e,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/t_Watermark/c_limit,f_jpg,h_630,q_90,w_630/v1475614509/production/designs/713761_1.jpg" className="App-logo" alt="logo" />
          <div>
            {/* First Introduction of Application */}
            <h1>Marvel Us</h1>
            <em>Bringing Marvel Comics to You, Me, and Everyone We Know</em>
              <NavBar />

              {this.props.currentUser ?
                <div>
                  <Route exact path='/' component={HomePage} />
                  {/* <Route exact path='/userProfile' render={() => (<UserProfile key={this.props.currentUser.doctors.length} />)} /> */}
                </div>
                :
                <div>
                  <Route exact path='/' component={HomePage} />
                </div>}


          </div>
          <div>
            <button onClick={this.handleButton}>{this.state.exposeComics ? `Hide` : `Reveal`} Comics</button>
            {this.state.exposeComics && this.props.comics ? <ol>{this.comicsList()}</ol> : null }
          </div>

        </div>
      </div>
      </Router>
    )
  }
  
}

const mapStateToProps = ({comics}) => {
  return {
    comics
  }
}

export default connect(mapStateToProps, { getComics })(App);
