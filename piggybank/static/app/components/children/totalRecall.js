import React from 'react';
import { EventEmitter  }from 'events';
import Store from '../utils/store';
import Button from './button';

const eventEmitter  = require('./eventEmitter');

class TotalRecall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      show: false
    };
  }

  _toggleMemories() {
    console.log(this)
    this.setState({show: !this.state.show});

  }
  
  _recallMemory(memory) {
    console.log(memory);
    Store.newInput = memory;
    eventEmitter.emit('toggle-memories');
  }
  
  componentWillMount() {
    eventEmitter.addListener('toggle-memories', this._toggleMemories.bind(this));
  }
  
  render() {
    let classNames = `memory-bank ${this.state.show ? 'visible' : ''}`;
    
    return (
      <section className={classNames}>
        <Button text="recall" clickHandler={this._toggleMemories.bind(this)} className="toggle-close" />
        {Store.curMemories.map((mem) => {
          return (
            <Button className="block memory transparent" text={mem} clickHandler={this._recallMemory.bind(this)} />
          );
        })}
      </section>
    )
  }
};

export default TotalRecall;