import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getSmurfs, addSmurf } from '../actions/smurfActions'
import Smurfs from './Smurfs'
import AddSmurfForm from './AddSmurfForm'

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        {this.props.fetchingSmurfs ? <h2>Loading...</h2> : null}
        {!this.props.fetchingSmurfs && this.props.smurfs.length ? <Smurfs smurfs={this.props.smurfs} /> : null}
        {this.props.error ? alert(this.props.error) : null}
        <AddSmurfForm addSmurf={this.props.addSmurf} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: state.error
})

const mapDispatchToProps = {
  getSmurfs,
  addSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(App)