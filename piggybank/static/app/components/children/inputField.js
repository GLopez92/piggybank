import React from 'react';
import { EventEmitter } from 'events';
import ContentEditable from './contentEditable';

const eventEmitter  = require('./eventEmitter');

console.log(eventEmitter);

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    };
  }
  _updateField(newStr) {
    newStr = newStr.split ? newStr.split(' ').reverse().join(' ') : newStr;
    console.log(newStr)
    console.log(this)
    return this.setState({text: newStr});

  }
  
  componentWillMount() {
    eventEmitter.addListener('numberCruncher', this._updateField.bind(this));
  }
  
  render() {    
    return <ContentEditable text={this.state.text} initEdit="false" spellCheck="false" clickHandler={this._clickBait} />
  }
};

export default InputField;