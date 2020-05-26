import React, { useState, useEffect } from 'react';
import Position from '../Position/Position';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  recalculateSwappedPositions,
  recalculatePositionsWithRenamedTeam,
} from './Positions';
import { SAMPLE_LEAGUE_TABLE } from './SampleData';
import { Card, Col } from 'react-bootstrap';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const LeagueTable = () => {
  const [initData, setInitData] = useState(SAMPLE_LEAGUE_TABLE);

  const [storedState, setStoredState] = useLocalStorage(
    'LEAGUE_TABLE',
    initData
  );

  useEffect(() => {
    fetch('https://www.openligadb.de/api/getavailableteams/bl1/2019')
      .then((response) => response.json())
      .then((data) => {
        const initData = data.map((d) => ({
          name: d.TeamName,
          id: d.TeamId,
          editing: true,
        }));
        console.log(initData);
        setInitData(initData);
        setStoredState(initData);
      })
      .catch((e) => {});
  });

  const [positions, setPositions] = useState(storedState);

  const swapPositions = (sourceTeamId, targetTeamId) => {
    setPositions(
      recalculateSwappedPositions(sourceTeamId, targetTeamId, positions)
    );
  };

  const updateTeamname = (team, updatedText) => {
    setPositions(
      recalculatePositionsWithRenamedTeam(team, updatedText, positions)
    );
  };

  useEffect(() => {
    if (positions !== SAMPLE_LEAGUE_TABLE) {
      setStoredState(positions);
    }
  });

  const positionNodes = positions.map((team, index) => (
    <Position
      team={team}
      rank={index + 1}
      key={index}
      swapPositions={swapPositions}
      updateTeamname={updateTeamname}
    />
  ));

  return (
    <DndProvider backend={HTML5Backend}>
      <Col md={6}>
        <Card bg="dark">
          <Card.Header>
            <Card.Title>Ligatabelle zum Selberstecken</Card.Title>
          </Card.Header>
          <Card.Body>{positionNodes}</Card.Body>
        </Card>
      </Col>
    </DndProvider>
  );
};

export default LeagueTable;
