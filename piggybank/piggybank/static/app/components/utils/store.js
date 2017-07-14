import React from 'react';
import EventEmitter from 'events';

const eventEmitter  = new EventEmitter();

const store = {
  input: 0,
  memory: [],
  get curInput() {
    return this.input;
  },
  
  get curMemories() {
    return this.memory.filter((m) => m !== undefined);
  },
  
  set commitMemory(input) {
    this.memory.push(input);
  },
  
  set newInput(str) {    
    let curInput = str,
      oldInput = this.curInput;
    
    if (this.curMemories.indexOf(oldInput) === -1) {
      this.commitMemory = oldInput;
    }
    
    this.input = curInput;
    eventEmitter.emitEvent('numberCruncher', [this.curInput]);
  }
};

export default store;