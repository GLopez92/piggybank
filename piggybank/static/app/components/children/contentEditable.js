import React from 'react';
import { EventEmitter } from 'events';

const eventEmitter  = require('./eventEmitter');


class ContentEditable extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleClick() {
    const cb = this.props.clickHandler;

    if (cb) {
      cb.call(this);
    }
  }
  
  render() {
    return (
      <div className="editable-field" contentEditable={this.props.initEdit} spellCheck={this.props.spellCheck} onClick={this._handleClick}>
        {this.props.text}
      </div>
    )
  }
};

export default ContentEditable;