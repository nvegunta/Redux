import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Calculator extends Component{
  constructor(props){
    super(props);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }
  add(){
    this.props.onAdd();
  }
  subtract(){
    this.props.onSubtract();
  }

  render(){
    const { total, value1, value2, onAdd, onSubtract } = this.props
    return(
      <p>
        Total: {total}
        {' '}
        <button onClick={onAdd}>
          +
        </button>
        {' '}
        <button onClick={onSubtract}>
          -
        </button>
        {' '}
        <button onClick={this.add}>
          Add
        </button>
        {' '}
        <button onClick={this.subtract}>
          Subtract
        </button>
      </p>
    )
  }
}

Calculator.propTypes = {
  total: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onSubtract: PropTypes.func.isRequired
}

export default Calculator
