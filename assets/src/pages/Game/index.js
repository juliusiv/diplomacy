import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";

import BoardStatsTab from "./BoardStatsTab";
import HistoryTab from "./HistoryTab";
import OrdersTab from "./OrdersTab"
import TabbedView, { Tab } from "./TabbedView"
import Map from "<diplomacy>/components/Map"
import Oceans from "<diplomacy>/components/Map/Oceans"
import England from "<diplomacy>/components/Map/England"
import France from "<diplomacy>/components/Map/France"

const GAME_FIXTURE = {
  name: "The Corona War",
  phase: "Build",
  phaseEnd: "1 hour",
  id: "a",
  boardState: {},
  phaseHistory: [
    {
      name: "Spring 1901",
      boardState: {},
      moves: []
    },
    {
      name: "Fall 1901",
      boardState: {},
      moves: []
    },
    {
      name: "Build",
      boardState: {},
      moves: []
    },
    {
      name: "Spring 1902",
      boardState: {},
      moves: []
    },
    {
      name: "Fall 1902",
      boardState: {},
      moves: []
    }
  ]
}

const ORDERS_FIXTURE = [
  { province: England.Clyde, hold: true },
  { province: England.Wales, to: France.Brest },
  { province: England.Yorkshire, support: England.Edinburgh, to: England.Clyde },
  { province: Oceans.EnglishChannel, convoy: England.Wales, to: France.Brest },
]

const Game = ({...props}) => {
  const [content, setContent] = useState("");
  const game = GAME_FIXTURE;
  const orders = ORDERS_FIXTURE;

  return (
    <PageContainer page={Pages.GAME}>
      <div className="flex items-baseline">
        <div className="w-1/2">
          <div className="font-4xl font-copperplate bold">{game.name}</div>
          <span>Phase ends in {game.phaseEnd}.</span>
          <div style={{width: 700, border: "1px solid black"}}>
            <Map setTooltipContent={setContent} orders={orders} />
            <ReactTooltip>{content}</ReactTooltip>
          </div>
        </div>
        <div className="w-1/2">
          <TabbedView>
            <Tab title="Orders" path="/">
              <OrdersTab orders={orders} />
            </Tab>
            <Tab title="History" path="/history">
              <HistoryTab />
            </Tab>
            <Tab title="Stats" path="/stats">
              <BoardStatsTab />
            </Tab>
          </TabbedView>
        </div>
      </div>
    </PageContainer>
  );
}

export default Game
