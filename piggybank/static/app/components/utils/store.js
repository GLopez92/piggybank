import React from 'react';
// import { EventEmitter } from 'events';
const events = require('events')

const eventEmitter  = require('../children/eventEmitter');

const Store = {
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
    eventEmitter.emit('numberCruncher', [this.curInput]);

    console.log(this.curInput);
  }
};

export default Store;