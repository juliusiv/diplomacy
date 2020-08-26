import React from "react";
import { useHistory } from "react-router-dom";

import { i } from "<style>";
import PageContainer, { Pages } from "<diplomacy>/containers/PageContainer";
import A from "<diplomacy>/components/A";
import Map from "<diplomacy>/components/Map";
import Button from "<diplomacy>/components/Button";

const Frontpage = ({ ...props }) => {
  const history = useHistory();

  return (
    <PageContainer page={Pages.Frontpage} requiresAuth={false}>
      <div className="pr-4 border-r">
        <p className="pb-2">
          {i`Diplomacy`} is a simple game with a focus on negotion. Every game
          has 7 players and you'll be randomly assigned a country to command
          &mdash; <span className="bg-red-500">England</span>, Russia, Germany,
          Austria, Turkey, Italy, or France. The object of the game is to
          control as many provinces as you can.
        </p>
        <div className="flex-row justify-center">
          <div className="border mb-2" style={{ width: 525, height: 450 }}>
            <Map sizeRatio={1.0} />
          </div>
        </div>
        <p className="pb-2">
          We're trying to keep things simple so there's no paid subscription or
          pro account. Each game costs $7 and is processed through Stripe.
          There's no chat feature because you're probably using Slack anyway;
          there's no forum because others already exist and have content;
          there's no random matchmaking because the game is more fun with your
          friends.
        </p>
        <p className="pb-2">
          A good, concise overview of the rules can be found{" "}
          <A href="https://en.wikibooks.org/wiki/Diplomacy/Rules">here</A>. The
          site uses modern web technology, is mobile-friendly, and we'll try to
          validate your moves as best we can. Let's get started.
        </p>
        <Button onClick={() => history.push("/games")}>Start a Game</Button>
      </div>
    </PageContainer>
  );
};

export default Frontpage;
