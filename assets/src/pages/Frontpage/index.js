import React from "react";
import { useHistory } from "react-router-dom";
import GoogleButton from "react-google-button"
import useSession from "react-session-hook";

import css, { i } from "<style>";
import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import A from "<diplomacy>/components/A";
import Map from '<diplomacy>/components/Map';

const Frontpage = ({...props}) => {
  const history = useHistory();
  const session = useSession();

  return (
    <PageContainer page={Pages.FRONTPAGE} withNavigation>
      <div className={css`flex row alignBaseline`}>
        <div  className={css`pr4 borderRight`}>
          <h2 className={css`copperplate mb3`}>The Game</h2>
          <p className={css`pb2`}>
            {i`Diplomacy`} is a simple game with a focus on negotion. Every game has 7 players
            and you'll be randomly assigned a country to command &mdash; <span className={css`bgRed`}>England</span>, Russia, Germany,
            Austria, Turkey, Italy, or France. The object of the game is to control as many
            provinces as you can.
          </p>
          <div className={css`flex row justifyCenter`}>
            <div className={css`border mb2`} style={{ width: 525, height: 450 }}>
              <Map sizeRatio={1.0} />
            </div>
          </div>
          <p className={css`pb2`}>
            We're trying to keep things simple so there's no paid subscription or pro account. Each
            game costs $7 and is processed through Stripe. There's no chat feature because you're
            probably using Slack anyway; there's no forum because others already exist and have
            content; there's no random matchmaking because the game is more fun with your friends.
          </p>
          <p className={css`pb2`}>
            A good, concise overview of the rules can be found <A href="https://en.wikibooks.org/wiki/Diplomacy/Rules">here</A>.
            The site uses modern web technology, is mobile-friendly, and we'll try to validate
            your moves as best we can. Let's get started.
          </p>
          <button onClick={() => history.push("/games")}>Start a Game</button>
        </div>

        <div className={css`pl4`}>
          <h2 className={css`copperplate mb3`}>Sign in</h2>
            <p className={css`mb3`}>
              {session.isAuthenticated ?
                "We use Google to make login a bit easier. We only look at your name and email." :
                "You're currently logged in as Someone. If you'd like to change your account you can re-login with the button below."
              }
            </p>
          <GoogleButton
            onClick={() => { console.log("Google button clicked") }}
            type="light"
          />
        </div>
      </div>
    </PageContainer>
  )
}

export default Frontpage
