import React from 'react';
import { EventEmitter } from 'events';
import Store from "../utils/store";
import Button from './button';

const eventEmitter  = require('./eventEmitter');

class ButtonSetNumbers  extends React.Component {

  constructor(props) {
    super(props);
  }

  _number(num) {
    if (!Store.curInput) {
      return Store.newInput = num;
    }
    
    return Store.newInput = `${Store.curInput}${num}`;
  }
 
  render() {
    return (
      <section className="button-set--numbers">
        <Button text="1" clickHandler={this._number} />
        <Button text="2" clickHandler={this._number} />
        <Button text="3" clickHandler={this._number} />
        <Button text="4" clickHandler={this._number} />
        <Button text="5" clickHandler={this._number} />
        <Button text="6" clickHandler={this._number} />
        <Button text="7" clickHandler={this._number} />
        <Button text="8" clickHandler={this._number} />
        <Button text="9" clickHandler={this._number} />
        <Button text="0" clickHandler={this._number} />
      </section>
    )
  }
};

export default ButtonSetNumbers;