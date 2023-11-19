// 👇️ ts-nocheck disables type checking for the entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// 👇️ ts-ignore ignores any ts errors on the next line
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React, { Component } from 'react';
import styled from 'styled-components';

class RoundSelector extends Component {
  constructor() {
    super();
    this.state = {
      activeRound: 17,
    };
  }

  onNumberClick = (num) => {
    this.setState({ activeRound: num });
    this.props.onRoundChange(num);
  };

  renderRounds = (firstRound, lastRound) => {
    const nums = [];
    for (let i = firstRound; i <= lastRound; i++) {
      nums.push(
        <RoundNumber
          num={i}
          active={this.state.activeRound === i}
          onNumberClick={this.onNumberClick}
        />
      );
    }
    return nums;
  };
  render() {
    return (
      <div style={{ margin: '2em' }}>
        <div style={{ marginBottom: '.5em' }}>{this.renderRounds(1, 10)}</div>
        <div>{this.renderRounds(11, 17)}</div>
      </div>
    );
  }
}

export default RoundSelector;

const RoundNumber = ({ num, active, onNumberClick }) => (
  <RoundNumberWrapper active={active} onClick={() => onNumberClick(num)}>
    {num}
  </RoundNumberWrapper>
);

const RoundNumberWrapper = styled.div`
  display: inline-block;
  width: 2em;
  ${({ active }) => active && 'font-weight: 700; transform: scale(1.5);'};
  transition: 0.5s;
  cursor: pointer;
`;
