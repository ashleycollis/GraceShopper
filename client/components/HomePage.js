import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Login} from './auth-form'

/**
 * COMPONENT
 */
export const HomePage = props => {
  const {email} = props

  return (
    <div>
      {email ? (
        <h3>Welcome, {email}</h3>
      ) : (
        <div>
          <h1>The Upper Rest Side Boutique</h1>{' '}
          <h2>
            Our products are exclusive and only available for purchase by
            members. Login to access your account.
            <Login />
            <div signup="signup">
              Don't have an account yet? <br />
              <Link to="/signup">Sign Up</Link>
            </div>
          </h2>
        </div>
      )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.firstName
  }
}

export default connect(mapState)(HomePage)

/**
 * PROP TYPES
 */
HomePage.propTypes = {
  email: PropTypes.string
}
