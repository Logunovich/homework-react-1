import React, { Component } from 'react';
import InputItem from '../InputItem/InputItem';

class InputsList extends Component {
  
  render() {
    const renderInputs = this.props.inputs.map((input, id) => {
      return (
        <InputItem input={input} key={id}/>
      )
    });
    
    return (
      <>
        {renderInputs}
      </>
    )
  }
};

export default InputsList;