import React, { Component } from 'react';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App-wrapper">
        <div className="App">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--AeDFhM2w--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_5e366e,e_outline:48/co_5e366e,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/t_Watermark/c_limit,f_jpg,h_630,q_90,w_630/v1475614509/production/designs/713761_1.jpg" className="App-logo" alt="logo" />
          <p>
            {/* First Introduction of Application */}
            <h1>Marvel Us</h1>
            <em>Bringing Marvel Comics to You, Me, and Everyone We Know</em>
          </p>

        </div>
      </div>
    )
  }
  
}

export default App;
