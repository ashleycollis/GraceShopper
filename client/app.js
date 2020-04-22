import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar} from './components'
import Routes from './routes'
import {fetchAllClothes} from '../client/reducers/all-clothes'

class Appy extends Component {
  componentDidMount() {
    this.props.fetchAllClothes()
  }
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

const mapState = state => ({
  clothes: state.clothes
})

const mapDispatch = dipatch => ({
  fetchAllClothes: () => dipatch(fetchAllClothes())
})

const App = connect(mapState, mapDispatch)(Appy)
export default App
