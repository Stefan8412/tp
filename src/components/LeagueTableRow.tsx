import React, { Component } from 'react';
import styled from 'styled-components';

import teamMapping from './team-mapping.json';
// This needs to be a stateful component to work with react-flip-move
class LeagueTableRow extends Component {
  render() {
    const {
      position,
      name,

      won,
      drawn,
      lost,

      point,
    } = this.props;
    return (
      <Tr position={position}>
        <TdPosName style={{ width: '2em' }}>{position}</TdPosName>
        <TdPosName style={{ textAlign: 'left', width: '8em' }}>
          {teamMapping[name]}
        </TdPosName>
        <TdNumber style={{ borderLeft: 0 }}>{won + drawn + lost}</TdNumber>
        <TdNumber>{won}</TdNumber>
        <TdNumber>{drawn}</TdNumber>
        <TdNumber>{lost}</TdNumber>
        {/*      <TdNumber>{goalFor}</TdNumber>
        <TdNumber>{goalAgainst}</TdNumber>
        <TdNumber>{goalFor - goalAgainst}</TdNumber> */}
        <TdNumber>{point}</TdNumber>
      </Tr>
    );
  }
}

export default LeagueTableRow;

const Tr = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ position }) =>
    position < 3
      ? '#86EFAC'
      : position < 5
      ? '#fff'
      : position > 17
      ? '#fff'
      : '#fff'};
`;
const TdPosName = styled.div`
  padding: 0.5em;
  border-bottom: solid #360037 1px;
`;
const TdNumber = styled.div`
  box-sizing: content-box;
  padding: 0.5em;
  width: 2em;
  border: solid #360037 1px;
  border-top: 0;
  border-right: 0;
`;
