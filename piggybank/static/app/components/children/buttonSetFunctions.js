import React from 'react';
import { EventEmitter } from 'events';
import Store from "../utils/store";
import Button from './button';


const eventEmitter  = require('./eventEmitter');

class ButtonSetFunctions extends React.Component {

  constructor(props) {
    super(props);
  }

  _showMemoryBank() {
    eventEmitter.emit('toggle-memories');
  }
  
  _clear() {
    Store.newInput = 0;
  }
  
  _contentClear() {
    let curInput = String(Store.curInput),
        lessOne = curInput.substring(0, (curInput.length - 1));
    
    return Store.newInput = lessOne === '' ? 0 : lessOne;
  }
  
  render() {
    return (
      <section className="button-set--functions">
        <Button className="long-text" text="recall" clickHandler={this._showMemoryBank} />
        <Button className="long-text" text="clear" clickHandler={this._clear} />
        <Button text="&larr;" clickHandler={this._contentClear} />
      </section>
    )
  }
};

export default ButtonSetFunctions;