import React, { useState } from "react";
import useSession from "react-session-hook";

import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import TabbedView, { Tab } from "<diplomacy>/components/TabbedView";

import ActiveGamesTab from "./ActiveGamesTab"
import CreateGameTab from "./CreateGameTab"
import JoinGameTab from "./JoinGameTab"

const GAMES_FIXTURE = [
  {
    name: "The Corona War",
    phase: "Build",
    phaseEnd: "1 hour",
    id: "a",
    ordersRemaining: "None"
  },
  {
    name: "Battle of the Covid with a Very Very Very Long Name and Stuff Like That",
    phase: "Retreat",
    phaseEnd: "10 hours",
    id: "b",
    ordersRemaining: "None"
  },
  {
    name: "Covid Crusade",
    phase: "Move",
    phaseEnd: "30 minutes",
    id: "c",
    ordersRemaining: "None"
  }
]

const Games = ({...props}) => {
  const [games, setGames] = useState(GAMES_FIXTURE)
  const session = useSession();

  // useEffect(async () => {
  //   const result = await axios(
  //     "api/games",
  //   );
  //   setGames(result.data);
  // });
  // setGames(GAMES_FIXTURE)

  return (
    <PageContainer page={Pages.Games}>
      <div className="flex-row items-baseline">
        <TabbedView>
          <Tab title="Your Active Games" path="/">
            <ActiveGamesTab games={games} />
          </Tab>
          <Tab title="Join a Game" path="/join">
            <JoinGameTab />
          </Tab>
          <Tab title="Create a Game" path="/create">
            <CreateGameTab />
          </Tab>
        </TabbedView>
      </div>
    </PageContainer>
  )
}

export default Games
