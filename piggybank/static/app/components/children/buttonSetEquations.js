import React from 'react';
import EventEmitter from 'events';

const eventEmitter  = new EventEmitter();

class ButtonSetEquations extends React.Component {

  constructor(props) {
    super(props);
  }

  _eq(type) {
    store.newInput = `${store.curInput} ${type} `;
  }
  
  _equate() {
    store.newInput = eval(store.curInput);
  }
  
  render() {
    return (
      <section className="button-set--equations">
        <button text="+" clickHandler={this._eq} />
        <button text="-" clickHandler={this._eq} />
        <button text="Enter" clickHandler={this._equate} />
      </section>
    )  
  }
};

export default ButtonSetEquations;