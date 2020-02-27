import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComics, addFeaturedComic } from '../actions/comics.js';

class HomePage extends Component {

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

    handleClick = (event) => {
        let id = event.target.value;
        let featuredComic = this.props.comics.find(comic => comic.id === id)
        this.props.addFeaturedComic(featuredComic)
    }

    comicsList = () => (
        this.props.comics.map(comic => (
            <li key={comic.id}>{comic.title}</li>
        ))
    )

    render() {
        return (
                <div>
                    <img src="https://res.cloudinary.com/teepublic/image/private/s--AeDFhM2w--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_5e366e,e_outline:48/co_5e366e,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/t_Watermark/c_limit,f_jpg,h_630,q_90,w_630/v1475614509/production/designs/713761_1.jpg" className="App-logo" alt="logo" />
                    <div>
                        {/* First Introduction of Application */}
                        <h1>Marvel Us</h1>
                        <em>Bringing Marvel Comics to You, Me, and Everyone We Know</em>

                    </div>
                    <div>
                        <button onClick={this.handleButton}>{this.state.exposeComics ? `Hide` : `Reveal`} Comics</button>
                        {this.state.exposeComics && this.props.comics ? <ol>{this.comicsList()}</ol> : null} 
                    </div>

                </div>
        )
    }

}

const mapStateToProps = ({ comics }) => {
    return {
        comics: comics.comics
    }
}

export default connect(mapStateToProps, { getComics, addFeaturedComic })(HomePage);
