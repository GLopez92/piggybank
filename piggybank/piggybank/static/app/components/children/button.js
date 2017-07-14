import React from 'react';
import EventEmitter from 'events';

const eventEmitter  = new EventEmitter();

class button  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  _handleClick() {
    let text = this.props.text,
        cb = this.props.clickHandler;
    
    if (cb) {
      cb.call(null, text);
    }
  }
  
  render() {
    return (
      <button className={this.props.class} onClick={this._handleClick}>
        <span className="title">{this.props.text}</span>
      </button>
    );
  }
};

export default button;