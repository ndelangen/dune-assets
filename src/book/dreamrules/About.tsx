import { Fragment } from 'react';

import { Definitions } from '../../block/Definitions';
import { SideBySide, WithBottom } from '../../block/Layout';
import { Outline } from '../../block/Outline';
import { Spaced } from '../../block/Spaced';
import { NonBreaking, Text } from '../../block/Text';
import { Title } from '../../block/Title';
import * as colors from '../../utils/colors';

export function Dreams() {
  return (
    <Fragment>
      <Spaced>
        <Text>
          <Title color={colors.blue1}>About Dreamrules</Title>
        </Text>
        <Text>
          <p>
            The Dreamrules ruleset is the brainchild of a group of Dune players, with each of whom has
            hundreds of hours of game time under their belt.
          </p>
          <p>
            After playing the game for this long; a long list of mechanics/rules become problematic. With the
            rulebook being open to many interpretations, that would often lead to heated debates in games, we
            decided we wanted to rewrite the rulebook, to remove inconsistencies, clear up wording etc.
          </p>
          <p>
            After the Ixian & Tleilaxu expansion and FAQ documents being released we came to understand the
            instead of a rulebook-rewrite, we would have to create ouw own variant of the game to fix the
            issues we had.
          </p>
          <h1>The Design Goals were as follows:</h1>
          <ul>
            <li>Reduce randomness to a low level.</li>
            <li>A turn where no-one can win, is pointless.</li>
            <li>Increase player interaction/participation.</li>
            <li>Revealed battleplans cannot change be influenced except by traitor.</li>
            <li>Remove un-fun mechanics. (Harkonnen Special Karama, Guild Timeout Victory, etc)</li>
            <li>Balance factions, especially the Fremen.</li>
            <li>Reduce the likelihood of Early Nexus's.</li>
            <li>Make 10 turn games less likely.</li>
            <li>Make skirmishes outside strongholds more necessary and fun.</li>
            <li>Treachery deck balance, high powered cards are single use.</li>
          </ul>
          <h1>Then as secondary goals:</h1>
          <ul>
            <li>This is a living document, we update it as rules are changed.</li>
            <li>Rules are allowed to change, feedback from players is encouraged.</li>
          </ul>
        </Text>
      </Spaced>
    </Fragment>
  );
}
export function Welcome() {
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
              <h1>About Dreamrules</h1>
              <p>
                This document consists of the full rules for the Dream Rules variant of Gale Force Nine's
                reprint of Dune and their Ixian and Tleilaxu expansion.
              </p>
              <p>Dream Rules Dune is a game best played with Six players.</p>
              <p>
                The ruleset has been engineered to increase player engagement and agency as well as to remove
                many random elements and heighten the skill ceiling.
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
                    <li>Aidym</li>
                    <li>Awpteamoose</li>
                    <li>Central419</li>
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
