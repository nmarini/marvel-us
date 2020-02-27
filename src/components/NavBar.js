import React from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';




const NavBar = ({ currentUser }) => {

    return (
        <div className="NavBar">
            <div className="NavRow">
                <div className="NavColumn"><NavLink to='/'><button className="nav-button">Home Page</button></NavLink></div>
                
                {/* <div className="NavColumn"><NavLink to='/doctorList'><button className="nav-button" >Doctor List</button></NavLink></div> */}
            </div>
            
        </div>
    )
}

// const mapStateToProps = ({ currentUser }) => {
//     return {
//         currentUser
//     }
// }

export default NavBar; 