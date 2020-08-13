import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTools, faDraftingCompass , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Table from "<diplomacy>/components/Table";

const Phase = ({ phase }) => {
  const phaseToIcon = {
    "move": faDraftingCompass,
    "retreat": faSignOutAlt,
    "build": faTools
  }
  const phaseIcon = phaseToIcon[phase.toLowerCase()];

  return <><Icon icon={phaseIcon} className="mr-2" />{phase}</>
}

const PhaseEnd = ({ phaseEnd }) => {
  return phaseEnd
}

const ActiveGamesTab = ({ games, ...props }) => {
  const history = useHistory();

  const gamesTableData = games.map(game => ({
    ...game,
    name: <i>{game.name}</i>,
    phase: <Phase phase={game.phase} />,
    phaseEnd: <PhaseEnd phaseEnd={game.phaseEnd} />
  }))

  return (
    <div>
      <Table
        className="w-full"
        headers={[
          {column: "name", label: "Name"},
          {column: "phase", label: "Phase"},
          {column: "phaseEnd", label: "Phase End"},
          {column: "ordersRemaining", label: "Remaining Orders"},
        ]}
        data={gamesTableData}
        onRowClick={(datum) => history.push(`/games/${datum.id}`)}
      />
    </div>
  )
}

export default ActiveGamesTab;
