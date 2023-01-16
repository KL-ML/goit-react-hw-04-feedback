import React from 'react';
import { Box } from "./Box";
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';
import { Statistics } from './Statistics';

const btnOptions = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' }];
    
export const App = () => {
  const [status, setStatus] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleChange = e => {
    const { name } = e.target;
    setStatus(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const totalFeedback = status.good + status.bad + status.neutral;
  const positiveFeedbackPersentage = status.good ? Math.round(status.good * 100 / totalFeedback) + '%' : '0%';

  return (
    <Box
      bg="light"
      color="text"
      width="containerWidth"
      position="relative"
      p={6}
      my={0}
      mx="auto"
      boxShadow="containerShadow"
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={btnOptions}
          onLeaveFeedback={handleChange} />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0
          ? (<Notification message="There is no feedback" />)
          : (<Statistics
            good={status.good}
            neutral={status.neutral}
            bad={status.bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPersentage} />)}
      </Section>
    </Box>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   countFeedback = event => {
//     const target = event.target.innerText;
//     switch (target) {
//       case 'Good':
//         this.setState(prevState => ({
//           good: prevState.good + 1,
//         }));
//         break;
//       case 'Neutral':
//         this.setState(prevState => ({
//           neutral: prevState.neutral + 1,
//         }));
//         break;
//       case 'Bad':
//         this.setState(prevState => ({
//           bad: prevState.bad + 1,
//         }));
//         break;
//       default:
//         console.log('error');
//     }
//   };

//   countTotalFeedback = () => {
//     const { good, bad, neutral } = this.state;
//     let totalValue = 0;
//     totalValue = good + bad + neutral;
//     return totalValue;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     let positiveFeedbackPersentage = 0;
//     positiveFeedbackPersentage = good ? Math.round(good * 100 / totalFeedback) + '%' : '0%';
//     return positiveFeedbackPersentage;
//   };
    
//   getButtonsOptions = () => {
//     const stateKeys = Object.keys(this.state);
//     const firstLettersToUpperCase = stateKeys.map(opt => opt.slice(0, 1).toUpperCase());
//     const stateKeysToUpperCase = stateKeys.map((opt, idx) => firstLettersToUpperCase[idx] + opt.slice(1, opt.length));
    
//     return stateKeysToUpperCase;
//   }

//   render() {
//     const { good, bad, neutral } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();
//     const options = this.getButtonsOptions();
    
    // return (
    //   <Box
    //     bg="light"
    //     color="text"
    //     width="containerWidth"
    //     position="relative"
    //     p={6}
    //     my={0}
    //     mx="auto"
    //     boxShadow="containerShadow"
    //   > 
    //     <Feedback
    //       good={good}
    //       neutral={neutral}
    //       bad={bad}
    //       total={totalFeedback}
    //       positivePercentage={positiveFeedback}
    //       options={options}
    //       countFeedback={this.countFeedback}
    //     />
    //   </Box>
    // );
//   };
// };
