import React from 'react';
import Btn from '../../Forms/Buttons';

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.counter === 1) {
      // Simulate a JS error
      throw new Error('error');
    }
    return (
      <Btn
        secondary
        label="Force app crash"
        icon="icon-exclamation-tringle"
        onClick={this.handleClick}
      />
    );
  }
}

const DashboardCallStatsBox = () => (
  <>
    <BuggyCounter />
  </>
);

export default DashboardCallStatsBox;
