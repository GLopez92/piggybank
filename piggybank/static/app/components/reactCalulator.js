import React from 'react';
import EventEmitter from 'events';

const eventEmitter  = new EventEmitter

import button from "./children/button.js";
import buttonSetEquations from "./children/buttonSetEquations.js";
import buttonSetFunctions from "./children/buttonSetFunctions.js";
import buttonSetNumbers from "./children/buttonSetNumbers.js";
import ContentEditable from "./children/contentEditable.js";
import InputField from "./children/inputField.js ";
import TotalRecall from "./children/totalRecall.js";

import store from "./utils/store";


class reactCalculator extends React.Component {
  render() {    
    return (
      <main className="react-calculator">
        <InputField />
        <TotalRecall />
        <buttonSetNumbers />
        <buttonSetFunctions />
        <buttonSetEquations />      
      </main>
    )
  }
};

export default reactCalculator;
