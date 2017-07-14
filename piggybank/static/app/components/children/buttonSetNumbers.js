import React from 'react';
import EventEmitter from 'events';

const eventEmitter  = new EventEmitter();

class ButtonSetNumbers  extends React.Component {

  constructor(props) {
    super(props);
  }

  _number(num) {
    if (!store.curInput) {
      return store.newInput = num;
    }
    
    return store.newInput = `${store.curInput}${num}`;
  },
  
  render() {
    return (
      <section className="button-set--numbers">
        <button text="1" clickHandler={this._number} />
        <button text="2" clickHandler={this._number} />
        <button text="3" clickHandler={this._number} />
        <button text="4" clickHandler={this._number} />
        <button text="5" clickHandler={this._number} />
        <button text="6" clickHandler={this._number} />
        <button text="7" clickHandler={this._number} />
        <button text="8" clickHandler={this._number} />
        <button text="9" clickHandler={this._number} />
        <button text="0" clickHandler={this._number} />
      </section>
    )
  }
};

export default ButtonSetNumbers;