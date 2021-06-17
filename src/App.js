import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  Increment = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    this.show();
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage:
        ((prevState.good + prevState.neutral - prevState.bad) /
          (prevState.good + prevState.neutral + prevState.bad)) *
        100,
    }));
  };

  show = () => {
    this.setState({ visible: true });
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.Increment}
        />
        {(this.state.visible && (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        )) || <Notification message="No feedback given" />}
      </Section>
    );
  }
}
export default App;
