import { Fragment } from 'react';

import { Spaced } from '../../block/Spaced';
import { NonBreaking, Text } from '../../block/Text';
import { Title } from '../../block/Title';
import * as colors from '../../utils/colors';

export function MiscRules() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1} size="medium">
          Miscellaneous rules
        </Title>
        <Text columns={2}>
          <NonBreaking>
            <h1>Written Records and Discard Piles</h1>
            <p>No faction other than House Atreides may keep any written notes of any kind.</p>
            <p>
              Both the treachery discard pile and Spice blow discard piles are public information and may be
              searched at any time by any faction.
            </p>
          </NonBreaking>
          <NonBreaking>
            <h1>Fighting Under Storm</h1>
            <p>Battles may happen under the storm, the Fremen may ship and move under the Storm.</p>
          </NonBreaking>
          <NonBreaking>
            <h1>Leader Revival</h1>
            <p>
              When a faction has one available leader at the revival phase, they may begin the process of
              reviving leaders by paying their leader's strength in Spice.
            </p>
          </NonBreaking>
        </Text>
        <Text>
          <hr />
        </Text>
        <Text>
          <p>
            <em>
              TODO: These can likely be removed, considering they really should come up in the phases
              explanation!
            </em>
          </p>
        </Text>
      </Spaced>
    </Fragment>
  );
}
