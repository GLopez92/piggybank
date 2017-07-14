import React from 'react';
import EventEmitter from 'events';

const eventEmitter  = new EventEmitter();

class ButtonSetFunctions extends React.Component {

  constructor(props) {
    super(props);
  }

  _showMemoryBank() {
    eventEmitter.emitEvent('toggle-memories');
  }
  
  _clear() {
    store.newInput = 0;
  }
  
  _contentClear() {
    let curInput = String(store.curInput),
        lessOne = curInput.substring(0, (curInput.length - 1));
    
    return store.newInput = lessOne === '' ? 0 : lessOne;
  }
  
  render() {
    return (
      <section className="button-set--functions">
        <button class="long-text" text="recall" clickHandler={this._showMemoryBank} />
        <button class="long-text" text="clear" clickHandler={this._clear} />
        <button text="&larr;" clickHandler={this._contentClear} />
      </section>
    )
  }
};

export default ButtonSetFunctions;