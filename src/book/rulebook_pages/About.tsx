import { Fragment } from 'react';

import { Definitions } from '../../block/Definitions';
import { SideBySide, WithBottom } from '../../block/Layout';
import { Outline } from '../../block/Outline';
import { Spaced } from '../../block/Spaced';
import { NonBreaking, Text } from '../../block/Text';
import { Title } from '../../block/Title';
import * as colors from '../../utils/colors';

export function About_Dreams() {
  return (
    <Fragment>
      <Spaced>
        <Text>
          <Title color={colors.blue1}>Dreamrules 2.0</Title>
          <h1>The Origin!</h1>
        </Text>
        <Text>
          <p>
            Dreamrules 2.0 is the brainchild of about 6-8 Dune players each of whom has hundreds of hours of
            game time under their belt.
          </p>
          <p>
            The original Dreamrules was for the base game and it was a rather simple mesh of GF9 rules and the
            World Boardgames Championship rules where we mixed aspects we liked from both and tried to limit
            what we consider broken mechanics. It was fun, but still had a few 'flaws' from the original Dune
            and the faction changes we made were not balanced.
          </p>
          <p>
            After the Ixian & Tleilaxu expansion that version of Dreamrules was abandoned as we came to
            understand (and definitely not like) what the game was becoming. The release of the FAQ in 2020
            also changed a lot of things, in our opinion not for the better. We decided that to continue
            playing Dune we would have to revive Dreamrules, but where to begin.
          </p>
          <h1>The Design Goals were as follows:</h1>
          <ul>
            <li>
              Remove broken/un-fun mechanics (Harkonnen Special Karama, Guild Timeout Victory, certain
              Treachery cards)
            </li>
            <li>Introduce aspects of WBC rules we enjoyed, Emperor subbing, Bene Gesserit flipping</li>
            <li>Keep aspects of the expansion we liked, Tech Tokens, certain Treachery Cards</li>
            <li>Balance factions, especially the Fremen</li>
            <li>Reduce the likelihood of Early Nexus's</li>
            <li>Make 10 turn games less likely</li>
            <li>Make skirmishes outside strongholds more necessary and fun</li>
            <li>
              Treachery deck balance, remove broken cards, but keep it Dune like in power dynamics and
              excitement about certain cards
            </li>
          </ul>
          <h1>Then as secondary goals:</h1>
          <ul>
            <li>Balance Ixian</li>
            <li>Overhaul Tleilaxu completely, we honestly didn't know where to begin.</li>
          </ul>
        </Text>
      </Spaced>
    </Fragment>
  );
}
export function About_Welcome() {
  return (
    <Fragment>
      <WithBottom>
        <Spaced>
          <Title color={colors.blue1}>Welcome to dune</Title>
          <Text columns={2}>
            <NonBreaking>
              <h1>Table of contents:</h1>
              <ol>
                <li>About & Credits</li>
                <li>Introduction</li>
                <li>The board</li>
                <li>Cards</li>
                <li>Tech Tokens</li>
                <li>Factions</li>
                <li>Phases</li>
                <li>Deals</li>
                <li>FAQ</li>
                <li>The origin</li>
              </ol>
            </NonBreaking>
            <NonBreaking>
              <h1>About dreamrules</h1>
              <p>
                This document consists of the full rules for the Dream Rules variant of Gale Force Nine's
                reprint of Dune and their Ixian and Tleilaxu expansion.
              </p>
              <p>Dream Rules Dune is a game best played with Six players.</p>
              <p>
                The ruleset has been engineered to not only increase player engagement and agency but also
                remove as many random elements and heighten the skill ceiling.
              </p>
              <p>More information about design goals etc, can be found on the last page of this rule book.</p>
            </NonBreaking>
          </Text>
        </Spaced>
        <Spaced>
          <Outline variant="normal" center>
            <Text>
              <h1>Credits</h1>
              <Definitions>
                <dt>
                  <div>Designers:</div>
                  <div>
                    <em>(in alphabetical order)</em>
                  </div>
                </dt>
                <dd>
                  <ul>
                    <li>Awpteamoose</li>
                    <li>central419</li>
                    <li>DeeDeeMegaDooDoo</li>
                    <li>DragonJade</li>
                    <li>IhasPineCone</li>
                    <li>Quinn</li>
                    <li>Ridwan</li>
                  </ul>
                </dd>
                <dt>Play testers:</dt>
                <dd>
                  <SideBySide>
                    <div>
                      <ul>
                        <li>Whimsies</li>
                        <li>Clockworked</li>
                        <li>KKT2002</li>
                        <li>Brodie</li>
                        <li>omegas2</li>
                        <li>Laurens</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                      </ul>
                    </div>
                  </SideBySide>
                </dd>
              </Definitions>
            </Text>
          </Outline>
        </Spaced>
      </WithBottom>
    </Fragment>
  );
}
