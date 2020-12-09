import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class CarsIndex extends Component {
  renderCars() {

  }

  render() {
    return (
      <div>
        {this.renderCars()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage,
    cars: state.cars
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setCars }, dispatch);
// }

export default connect(mapStateToProps, null)(CarsIndex);
