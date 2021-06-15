import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

class Feedback extends React.Component {
  state = {
    quantityGood: 0,
    quantityNeutral: 0,
    quantityBad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      quantityGood: prevState.quantityGood + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      quantityNeutral: prevState.quantityNeutral + 1,
    }));
  };
  badIncrement = () => {
    this.setState(prevState => ({
      quantityBad: prevState.quantityBad + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <div>
          <button type="button" onClick={this.goodIncrement}>
            good
          </button>
          <button type="button" onClick={this.neutralIncrement}>
            neutral
          </button>

          <button type="button" onClick={this.badIncrement}>
            bad
          </button>
        </div>
        <div>
          <p>Statistic</p>
          <p>
            good:<span></span>
          </p>
          <p>
            neutral:<span></span>
          </p>
          <p>
            bad:<span></span>
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Feedback />, document.getElementById('root'));
