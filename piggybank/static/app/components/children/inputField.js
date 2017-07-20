import React from 'react';
import EventEmitter from 'events';
import ContentEditable from './contentEditable';

const eventEmitter  = new EventEmitter();

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    // return {text: this.props.text};
  }
  _updateField(newStr) {
    newStr = newStr.split ? newStr.split(' ').reverse().join(' ') : newStr;
    return this.setState({text: newStr});
  }
  
  componentWillMount() {
    eventEmitter.addListener('numberCruncher', this._updateField);
  }
  
  render() {    
    return <div className="ContentEditable" text={this.state.text} initEdit="false" spellcheck="false" clickHandler={this._clickBait} />
  }
};

export default InputField;