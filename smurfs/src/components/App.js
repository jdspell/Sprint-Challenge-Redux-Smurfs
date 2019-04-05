import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  }

  componentDidMount() {
    this.props.getSmurfs();  
  }

  changeHandler = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  }

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  }

  render() {
    if(this.props.fetching) {
      return ("Fetching smurf data.");
    }
    
    return (
      <div className="App">
        <h1>Smurfs</h1>

        <form onSubmit={this.addSmurf}>
          <input 
            type="text"
            placeholder="Enter a name."
            name="name"
            value={this.state.smurf.name}
            onChange={this.changeHandler}
          />

          <input 
            type="text"
            placeholder="Enter an age."
            name="age"
            value={this.state.smurf.age}
            onChange={this.changeHandler}
          />

          <input 
            type="text"
            placeholder="Enter a height."
            name="height"
            value={this.state.smurf.height}
            onChange={this.changeHandler}
          />
          <button type="submit">Add Smurf</button>
        </form>

        {this.props.smurfs.map(smurf => {
          return (
            <div className="smurf">
              <p>{`Name: ${smurf.name}`}</p>
              <p>{`Age: ${smurf.age}`}</p>
              <p>{`Height: ${smurf.height}`}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
