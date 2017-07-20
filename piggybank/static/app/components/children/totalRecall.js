import React from 'react';
import EventEmitter from 'events';
import Store from '../utils/store';

const eventEmitter  = new EventEmitter();

class TotalRecall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    // Returning out of the constructor prevents any of the other methods from being set, so you should avoid doing that.
    // return {show: false}
  }

  _toggleMemories() {
    this.setState({show: !this.state.show});
  }
  
  _recallMemory(memory) {
    store.newInput = memory;
    eventEmitter.emitEvent('toggle-memories');
  }
  
  componentWillMount() {
    eventEmitter.addListener('toggle-memories', this._toggleMemories);
  }
  
  render() {
    let classNames = `memory-bank ${this.state.show ? 'visible' : ''}`;
    
    return (
      <section className={classNames}>
        <button text="+" clickHandler={this._toggleMemories} className="toggle-close" />
        {store.curMemories.map((mem) => {
          return (
            <button className="block memory transparent" text={mem} clickHandler={this._recallMemory} />
          );
        })}
      </section>
    )
  }
};

export default TotalRecall;