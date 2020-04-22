import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Login} from './auth-form'

/**
 * COMPONENT
 */
class Home extends React.Component {
  render() {
    let clothes = this.props.clothes.data
    let email = this.props.email
    console.log('i got the', clothes)
    return (
      <div>
        <div>
          <h1>Can We Go Thrift Shopping? </h1>{' '}
          <div className="login">
            Yes, you can shop for exclusive clothing items thrifted from around
            the Upper Rest Side after creating a free account. <br />
            <br /> No worries, we have no plans on spamming you with emails!
            <Login />
            <div signup="signup">
              Don't have an account yet? <br />
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
        <div>
          <h1>All Clothes</h1>
          <div id="allClothes">
            {clothes ? (
              clothes.map(item => (
                <div key={item.id} className="itemDisplayed">
                  <Link to={`/items/${item.id}`}>
                    <img src={item.imageUrl} />
                    <h3>{item.name}</h3>
                  </Link>
                </div>
              ))
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  clothes: state.clothes
})

const HomePage = connect(mapState)(Home)
export default HomePage

// export const HomePage = connect(mapState)(Home)
