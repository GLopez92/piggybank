import React from 'react';
import EventEmitter from 'events';
import Button from './button'
import Store from "../utils/store";

const eventEmitter  = require('./eventEmitter');

class ButtonSetEquations extends React.Component {

  constructor(props) {
    super(props);
  }

  _eq(type) {
    Store.newInput = `${Store.curInput} ${type} `;
  }
  
  _equate() {
    Store.newInput = eval(Store.curInput);
  }
  
  render() {
    return (
      <section className="button-set--equations">
        <Button text="+" clickHandler={this._eq} />
        <Button text="-" clickHandler={this._eq} />
        <Button text="Enter" clickHandler={this._equate} />
      </section>
    )  
  }
};

export default ButtonSetEquations;