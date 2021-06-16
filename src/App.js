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
    total: 0,
    positivePercentage: 0,
    visible: false,
  };

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    this.show();
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    this.show();
  };
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
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
          good={this.goodIncrement}
          neutral={this.neutralIncrement}
          bad={this.badIncrement}
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
