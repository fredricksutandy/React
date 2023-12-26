import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
    };
  }

  handleButtonClick = (value) => {
    const { displayValue } = this.state;

    if (displayValue === '0' || displayValue === 'Error') {
      this.setState({ displayValue: value });
    } else {
      if (['+', '-', '*', '/'].includes(value)) {
        // Add a space before the operator
        this.setState((prevState) => ({
          displayValue: prevState.displayValue + ' ' + value + ' ',
        }));
      } else {
        // Append the value
        this.setState((prevState) => ({
          displayValue: prevState.displayValue + value,
        }));
      }
    }
  };

  handleEqualClick = () => {
    try {
      const result = eval(this.state.displayValue);
      this.setState({ displayValue: result.toString() });
    } catch (error) {
      this.setState({ displayValue: 'Error' });
    }
  };

  handleClearClick = () => {
    this.setState({ displayValue: '0' });
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div className="w-full mt-14 sm:ml-64 calculator">
        <div className='px-8 sm:px-4 pb-8 pt-6 calculator max-w-[320px] flex flex-col gap-1'>
          <div className="display p-4 bg-gray-100 text-[18px]">{displayValue}</div>
          <div className="buttons flex flex-col gap-1"> 
            <div className="row flex gap-1">
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('7')}>7</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('8')}>8</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('9')}>9</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('+')}>+</button>
            </div>
            <div className="row flex gap-1">
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('4')}>4</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('5')}>5</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('6')}>6</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('-')}>-</button>
            </div>
            <div className="row flex gap-1">
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('1')}>1</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('2')}>2</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('3')}>3</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('*')}>*</button>
            </div>
            <div className="row flex gap-1">
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('0')}>0</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={this.handleClearClick}>C</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={this.handleEqualClick}>=</button>
              <button className="p-4 bg-gray-100 text-[18px] w-1/4" onClick={() => this.handleButtonClick('/')}>/</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
