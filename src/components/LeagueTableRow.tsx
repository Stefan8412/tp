// 👇️ ts-nocheck disables type checking for the entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// 👇️ ts-ignore ignores any ts errors on the next line
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React, { Component } from 'react';

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
      <>
        <tbody className='bg-gray-800'>
          <tr className='bg-black bg-opacity-20'>
            {' '}
            <td className='pl-4'>{position}</td>
            <td className='flex whitespace-nowrap px-6 py-4'>
              {' '}
              <span className='ml-2 font-medium'>{teamMapping[name]}</span>
            </td>
            <td className='whitespace-nowrap px-6 py-4'>
              {won + drawn + lost}
            </td>
            <td className='whitespace-nowrap px-6 py-4'>{won}</td>
            <td className='whitespace-nowrap px-6 py-4'>{drawn}</td>
            <td className='whitespace-nowrap px-6 py-4'>{lost}</td>
            {/*      <TdNumber>{goalFor}</TdNumber>
        <TdNumber>{goalAgainst}</TdNumber>
        <TdNumber>{goalFor - goalAgainst}</TdNumber> */}
            <td className='whitespace-nowrap px-6 py-4'>{point}</td>
          </tr>
        </tbody>
      </>
    );
  }
}

export default LeagueTableRow;

/* const Tr = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ position }) =>
    position < 3
      ? '#86EFAC'
      : position < 15
      ? '#ecfdf5'
      : position < 17
      ? '#FF8A8A'
      : '#fff'};
`; */
/* const TdPosName = styled.div`
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
 */
