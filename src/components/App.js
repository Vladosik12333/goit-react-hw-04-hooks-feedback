import React, { useState } from 'react';
import Statictics from 'components/Statictics';
import FeedbackOptions from 'components/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        return;
      case 'neutral':
        setNeutral(state => state + 1);
        return;
      case 'bad':
        setBad(state => state + 1);
        return;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = (good / total) * 100;
    return Math.round(result);
  };

  return (
    <>
      <SectionTitle title="Please leave yout feeback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </SectionTitle>
      {good === 0 && bad === 0 && neutral === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <SectionTitle title="Statictics">
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveTotal={countPositiveFeedbackPercentage()}
          />
        </SectionTitle>
      )}
    </>
  );
}
