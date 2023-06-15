import { Component } from 'react';
// import { Container } from './App.styled';
// import { Section } from 'components/Section';
// import { FeedbackOptions } from 'components/FeedbackOptions';
// import { Statistics } from 'components/Statistics';
// import { Notification } from 'components/Notification';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  // onLeaveFeedback = state => {
  //   this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  // };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  // countPositiveFeedback = () => {
  //   const { good } = this.state;
  //   const total = this.countTotalFeedback();
  //   return Math.round((good / total) * 100) || 0;
  // };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const feedbackOptions = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedback();

//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             onLeaveFeedback={this.onLeaveFeedback}
//             feedbackOptions={feedbackOptions}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
}
