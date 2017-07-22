import React from 'react';
import { EventEmitter } from 'events';
// var EventEmitter = require('events').EventEmitter


const eventEmitter  = new EventEmitter

import button from "./children/button.js";
import ButtonSetEquations from "./children/buttonSetEquations.js";
import ButtonSetFunctions from "./children/buttonSetFunctions.js";
import ButtonSetNumbers from "./children/buttonSetNumbers.js";
import ContentEditable from "./children/contentEditable.js";
import InputField from "./children/inputField.js";
import TotalRecall from "./children/totalRecall.js";

import store from "./utils/store";



// class ReactCalculator extedn

class ReactCalculator extends React.Component {
  render() {
    return (
      <div className="react-calculator">
        <h3>Guillermo's PiggyBank</h3>
        <h1>Account Balance: $100</h1>
        <InputField />
        <ButtonSetNumbers />
        <TotalRecall />
        <ButtonSetFunctions />
        <ButtonSetEquations />      
      </div>
    )
  }
};

export default ReactCalculator;
