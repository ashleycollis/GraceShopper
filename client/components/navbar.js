import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav id="navBar">
      {isLoggedIn ? (
        <div className="menu">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/clothes">Clothes</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/profile">Profile</Link>
          <a href="#" onClick={handleClick} id="logout">
            Logout
          </a>
        </div>
      ) : (
        <div className="menu">
          {/* The navbar will show these links before you log in */}
          <h1>The Upper REST SIDE</h1>
          <Link to="/home">Home</Link>
          <Link to="/login">Log</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/clothes">Clothes</Link>
          <Link to="/cart">Cart</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
