import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useSession from "react-session-hook";
import classNames from "classnames";

import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import Button, { ROLES } from "<diplomacy>/components/Button";
import TextInput from "<diplomacy>/components/TextInput";
import Radio from "<diplomacy>/components/Radio";
import Table from "<diplomacy>/components/Table";
import css from "<style>";
import styles from "./styles.css"

const GAMES_FIXTURE = [
  {
    name: "The Corona War",
    phase: "Build",
    phaseEnd: "1 hour",
    id: "a"
  },
  {
    name: "Battle of the Covid",
    phase: "Retreat",
    phaseEnd: "10 hours",
    id: "b"
  },
  {
    name: "Covid Crusade",
    phase: "Move",
    phaseEnd: "30 minutes",
    id: "c"
  }
]

const Games = ({...props}) => {
  const [games, setGames] = useState(GAMES_FIXTURE)
  const history = useHistory();
  const session = useSession();

  // useEffect(async () => {
  //   const result = await axios(
  //     "api/games",
  //   );
  //   setGames(result.data);
  // });
  // setGames(GAMES_FIXTURE)

  return (
    <PageContainer page={Pages.GAMES} withNavigation>
      <div className={css`flex row alignBaseline`}>
        <div className={css`pr4 borderRight widthAll`}>
          <h2 className={css`copperplate mb2`}>Active Games</h2>
          <Table
            className={css`widthAll`}
            headers={[
              {column: "name", label: "Name"},
              {column: "phase", label: "Phase"},
              {column: "phaseEnd", label: "Phase End"}
            ]}
            data={games}
            onRowClick={(datum) => console.log()}
            onRowClick={(datum) => history.push(`/games/${datum.id}`)}
          />
        </div>

        <div className={css`pl4`}>
          <div className={css`pb4`}>
            <h2 className={css`copperplate mb2`}>Join</h2>
            <TextInput label="Game ID" placeholder={"ABC123"} className={css`mr3 mb3`} />
            <Button role={ROLES.PRIMARY}>
              Join
            </Button>
          </div>

          <div>
            <h2 className={css`copperplate mb2`}>Create</h2>
            <form className={css`mb3`}>
              <TextInput label="Name" placeholder={""} className={css`mb3`} />
              <div className={css`pb3`}>
                <span>Phase Duration</span>
                <Radio options={["12 hours", "24 hours", "6 hours"]} name="phaseDuration" className={css`mt1`} />
              </div>
              <Button role={ROLES.PRIMARY} >
                Create
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default Games
