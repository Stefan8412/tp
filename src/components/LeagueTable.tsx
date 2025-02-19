// 👇️ ts-nocheck disables type checking for the entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// 👇️ ts-ignore ignores any ts errors on the next line
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function multiply(a, b) {
  return a * b;
}

import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import styled from 'styled-components';

import dataJson from './en.1.json';
import LeagueTableRow from './LeagueTableRow';
import RoundSelector from './RoundSelector';
/* eslint-disable */
const newTeam = {
  won: 0,
  drawn: 0,
  lost: 0,
  goalFor: 0,
  goalAgainst: 0,
  point: 0,
};
interface IProps {
  id: string;
}

interface IState {
  rendered: boolean;
  round: number;
}

class LeagueTable extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      rendered: false,
      round: 17,
    };
  }

  onRoundChange = (num) => {
    this.setState({ round: num });
  };

  renderRow = (json) => {
    const teams = {};
    for (let i = 0; i < this.state.round; i++) {
      const round = json[i];
      round.forEach(function (match: {
        substring: (arg0: number, arg1: number) => number;
      }) {
        const team1 = match.substring(0, 3);
        const score1 = match.substring(3, 4) * 1; // performant string to number conversion
        const score2 = match.substring(5, 6) * 1;
        const team2 = match.substring(6, 9);

        if (!teams[team1]) {
          teams[team1] = Object.assign({}, newTeam);
        }
        if (!teams[team2]) {
          teams[team2] = Object.assign({}, newTeam);
        }
        teams[team1].goalFor += score1;
        teams[team2].goalFor += score2;
        teams[team1].goalAgainst += score2;
        teams[team2].goalAgainst += score1;
        if (score1 - score2 > 0) {
          teams[team1].won += 1;
          teams[team2].lost += 1;
          teams[team1].point += 3;
        } else if (score1 - score2 === 0) {
          teams[team1].drawn += 1;
          teams[team2].drawn += 1;
          teams[team1].point += 1;
          teams[team2].point += 1;
        } else {
          teams[team1].lost += 1;
          teams[team2].won += 1;
          teams[team2].point += 3;
        }
      },
      this);
    }
    const sortedTeams = Object.entries(teams).sort((teamA, teamB) => {
      if (teamA[1].point > teamB[1].point) {
        return -1;
      } else if (teamA[1].point < teamB[1].point) {
        return 1;
      } else {
        return -1;
      }
    });
    return sortedTeams.map((team, index) => (
      <>
        <LeagueTableRow
          {...team[1]}
          key={team[0]}
          position={index + 1}
          name={team[0]}
        />
      </>
    ));
  };

  render() {
    return (
      <>
        <div className='mt-6 flex flex-col'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
              <div className='overflow-hidden shadow sm:rounded-lg'>
                <table className='min-w-full text-sm text-gray-400'>
                  <FlipMove duration={750} easing='ease-out'>
                    {this.renderRow(dataJson)}
                  </FlipMove>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LeagueTable;

/* const Table = styled.div`
  letter-spacing: 0.02em;
  display: flex;
  flex-direction: column;
`; */
/* const TableHeader = () => (
  <thead className='bg-gray-800 text-xs font-medium uppercase'></thead>
); */

/* const Th = styled.div`
  width: 3em;

  font-weight: 400;
`;
 */
