import * as React from 'react';
import styled from 'styled-components';

import Accent from './Accent';
import LeagueTable from './LeagueTable';

export default function TC() {
  return (
    <MainWrapper>
      {' '}
      <TableWrapper>
        <h2 className='text-2xl md:text-4xl'>
          <Accent>2. futbalová liga</Accent>
        </h2>
        <div>
          <LeagueTable />
        </div>
      </TableWrapper>
    </MainWrapper>
  );
}

/* const Title = styled.h1`
  font-size: 2em;
  margin: 0;
`; */

const TableWrapper = styled.div`
  text-align: center;
  background-color: #ecfdf5;

  color: black;
  border-radius: 3px;
`;
const MainWrapper = styled.div`
  display: flex;
  align-items: center;
font-color:#374151
  font-family: Inter;
  font-weight: 300;
  padding: 5em 0;
  min-height: calc(100vh - 10em);
`;
