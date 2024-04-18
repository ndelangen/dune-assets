import { Fragment } from 'react';

import { Outline } from '../../block/Outline';
import { Spaced } from '../../block/Spaced';
import { Text } from '../../block/Text';
import { Title } from '../../block/Title';
import * as colors from '../../utils/colors';

export function About() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="large">
          Binding Deals
        </Title>
        <Text columns={2} size={1.8}>
          <p>
            Players can make any kind of verbal deals or bribes between one another. Once made, these deals
            and bribes may be stated aloud and must be honored. A player cannot renege on a deal or bribe.
          </p>
          <h2>VALID:</h2>
          <ul>
            <li>Information.</li>
            <li>Future actions.</li>
            <li>Spice.</li>
          </ul>
          <h2>INVALID:</h2>
          <ul>
            <li>Treachery card.</li>
            <li>Faction advantages.</li>
            <li>Leader discs.</li>
            <li>Troop tokens.</li>
            <li>Actions that are unrelated the the current game being played.</li>
          </ul>
          <p>
            Spice exchanged as part of a binding deal is placed in a faction's Bribe pile, in public, in front
            of the player's shield.
          </p>
          <p>
            Players are allowed to offer deals that are impossible for them to actually perform, but they are
            not allowed to accept them.
          </p>
          <p>
            Once a deal has been accepted by both parties, the parts the players want to be binding must be
            stated in public.
          </p>
          <p>You can chose to keep details of a deal private, but this can cause bad things to happen:</p>
          <ul>
            <li>Players can lie to each other and betray each other.</li>
            <li>Private communication was done poorly, and no other players verified what was said.</li>
          </ul>
          <h1>Bribes</h1>
          <p>The spice can be collected at the Collection phase.</p>
          <p>
            Spice on the Bribe pile may not be removed from the bribe pile until the Collection phase,
            regardless of if the deal was dissolved.
          </p>
          <p>
            Collecting the Spice from the Bribe pile is a single instant (
            <em>every faction performs this at the exact same time</em>) that happens at the very end of the
            Collection phase.
          </p>

          <Outline variant="example">
            <h1>"Thrown fights"</h1>
            <p>
              An very common binding deal revolves around "blocking" strongholds in order to prevent other
              players to win that turn.
            </p>
            <p>You can use the word "Thrown fight" and it has the official definition:</p>
            <p>Players decide amongst themselves who will be the victor.</p>
            <ul>
              <li>Neither player will play a weapon Treachery card.</li>
              <li>Neither player will reveal a Traitor.</li>
              <li>Neither player will play Break Conditioning to gain it's effect.</li>
              <li>The losing player will dial 0.</li>
              <li>The losing player will play a leader that is low enough.</li>
              <li>The winner's battle plan can have any dial or leader.</li>
            </ul>
          </Outline>
        </Text>
      </Spaced>
    </Fragment>
  );
}
