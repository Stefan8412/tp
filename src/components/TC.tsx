// 👇️ ts-nocheck disables type checking for the entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// 👇️ ts-ignore ignores any ts errors on the next line
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import * as React from 'react';
import styled from 'styled-components';

import LeagueTable from './LeagueTable';

export default function TC() {
  return <LeagueTable />;
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
