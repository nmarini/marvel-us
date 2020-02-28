import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComicCard from '../components/ComicCard.js';

class ComicContainer extends Component {

    render() {
        return (
            <>
                ComicContainer
                <ComicCard comic={this.props.comics.featuredComic}/>
                {console.log(this.props.comics.featuredComic)}
            </>
        )
    }

}

const mapStateToProps = ({comics}) => {
    return {
        comics
    }
}

export default connect(mapStateToProps)(ComicContainer);