import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useSession from "react-session-hook";
import classNames from "classnames";

import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import Button, { ROLES } from "<diplomacy>/components/Button";
import TextInput from "<diplomacy>/components/TextInput";
import Radio from "<diplomacy>/components/Radio";
import Table from "<diplomacy>/components/Table";

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
    <PageContainer page={Pages.GAMES}>
      <div className="flex-row items-baseline">
        <div className="pr-4 border-r w-full">
          <h2 className="font-copperplate mb-2">Active Games</h2>
          <Table
            className="w-full"
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

        <div className="pl-4">
          <div className="pb-4">
            <h2 className="font-copperplate mb-2">Join</h2>
            <TextInput label="Game ID" placeholder={"ABC123"} className="mr-3 mb-3" />
            <Button role={ROLES.PRIMARY}>
              Join
            </Button>
          </div>

          <div>
            <h2 className="font-copperplate mb-2">Create</h2>
            <form className="mb-3">
              <TextInput label="Name" placeholder={""} className="mb-3" />
              <div className="pb-3">
                <span>Phase Duration</span>
                <Radio options={["12 hours", "24 hours", "6 hours"]} name="phaseDuration" className="mt-1" />
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
