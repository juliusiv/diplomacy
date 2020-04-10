import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Map from '<diplomacy>/Map';
import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import css from "<style>";

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

const Game = ({...props}) => {
  const [content, setContent] = useState("");
  const game = GAME_FIXTURE;

  return (
    <PageContainer page={Pages.GAME} withNavigation>
      <div className={css`flex row alignBaseline`}>
        <div className={css`pr4`}>
          <h2>{game.name}</h2>
          <span>Phase ends in {game.phaseEnd}.</span>
          <div style={{width: 700, border: "1px solid black"}}>
            <Map setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </div>
        </div>
        <div>
          <h2>History</h2>
        </div>
      </div>
    </PageContainer>
  );
}

export default Game
