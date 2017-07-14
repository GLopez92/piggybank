import React from 'react';
import EventEmitter from 'events';

const eventEmitter  = new EventEmitter();

class TotalRecall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    return {show: false}
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
        <button text="+" clickHandler={this._toggleMemories} class="toggle-close" />
        {store.curMemories.map((mem) => {
          return (
            <button class="block memory transparent" text={mem} clickHandler={this._recallMemory} />
          );
        })}
      </section>
    )
  }
};

export default TotalRecall;