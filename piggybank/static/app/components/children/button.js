import React from 'react';
import { EventEmitter } from 'events';
import InputField from './inputField'


const eventEmitter  = require('./eventEmitter');;

class Button  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      visbility: true
    };
  }

  _handleClick() {
    console.log('PROPS: ', this.props);
    
    let text = this.props.text,
        cb = this.props.clickHandler;

    
    if (cb) {
      cb.call(null, text);
    }

    this.state.visbility = false
  }

  
  render() {
    return (
    <div>
      <button className={this.props.class} onClick={this._handleClick.bind(this)}>
        {this.props.text}
      </button> 
    </div>
    );
  }
};

export default Button;