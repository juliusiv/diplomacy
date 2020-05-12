import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import css from "<style>";

import BoardStatsTab from "./BoardStatsTab";
import HistoryTab from "./HistoryTab";
import OrdersTab from "./OrdersTab"
import TabbedView, { Tab } from "./TabbedView"
import Map, { ENGLAND, FRANCE, OCEANS } from "<diplomacy>/components/Map"

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
  { province: ENGLAND.CLYDE, hold: true },
  { province: ENGLAND.WALES, to: FRANCE.BREST },
  { province: ENGLAND.YORKSHIRE, support: ENGLAND.EDINBURGH, to: ENGLAND.CLYDE },
  { province: OCEANS.ENGLISH_CHANNEL, convoy: ENGLAND.WALES, to: FRANCE.BREST },
]

const Game = ({...props}) => {
  const [content, setContent] = useState("");
  const game = GAME_FIXTURE;
  const orders = ORDERS_FIXTURE;

  return (
    <PageContainer page={Pages.GAME} withNavigation>
      <div className={css`flex row alignBaseline`}>
        <div className={css`pr4`}>
          <div className={css`fontLarge copperplate bold`}>{game.name}</div>
          <span>Phase ends in {game.phaseEnd}.</span>
          <div style={{width: 700, border: "1px solid black"}}>
            <Map setTooltipContent={setContent} orders={orders} />
            <ReactTooltip>{content}</ReactTooltip>
          </div>
        </div>
        <div>
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
