import { Fragment } from 'react';

import { Definitions } from '../../block/Definitions';
import { FactionSynopsis } from '../../block/FactionSynopsis';
import { SideBySide } from '../../block/Layout';
import { MarkdownContent } from '../../block/MarkdownContent';
import { Spaced } from '../../block/Spaced';
import { Text } from '../../block/Text';
import { Title } from '../../block/Title';
import { Wrapper } from '../../block/Wrapper';
// import { factions } from '../../presets/factions';
import { disc as discSize } from '../../data/sizes';
import * as colors from '../../utils/colors';

export function Factions1() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1}>Factions</Title>
        <Text>
          <p>Each set is composed of the following:</p>
          <Definitions>
            <dt>A Faction token</dt>
            <dd>
              <p>
                This token is placed on the storm track around the board, to indicate where this player is
                seated.
              </p>
              <p>
                On the backside of the token is a "pass"-icon, indicating this faction is no longer
                able/willing take actions this phase.
              </p>
            </dd>
            <dt>A Faction Sheet</dt>
            <dd>
              <p>Describing each Faction's Advantages.</p>
              <p>Reference for their troops & leader strengths.</p>
              <p>Reference for their karama effects & FAQ.</p>
            </dd>
            <dt>Leader discs</dt>
            <dd>
              <p>Each disc shows a leader and their fighting strength.</p>
            </dd>
            <dt>Leader traitor cards</dt>
            <dd>
              <p>Every leader disc should have a traitor card representing the leader disc.</p>
            </dd>
            <dt>Troop tokens</dt>
            <dd>
              <p>A total of 20 tokens.</p>
              <p>Troops tokens can be multi-sided.</p>
              <p>Some factions have multiple types of Troop tokens.</p>
            </dd>
            <dt>Starting Spice</dt>
            <dd>
              <p>This should match the starting Spice specified on the faction sheet.</p>
            </dd>
            <dt>Faction specific items</dt>
            <dd>
              <p>
                Some factions will have unique items, such as a Kwisatz Haderach token for house Atreides.
              </p>
            </dd>
          </Definitions>
          <p>All block of each player set have the same color for easy identification.</p>
        </Text>
        <div style={{ display: 'flex', gap: '0.5vw' }}>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/emperor.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/guild.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/fremen.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/ixian.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>

          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/atreides.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/bene-gesserit.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>

          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/bene-tleilaxu.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>

          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/harkonnen.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
        </div>

        <Text>
          <p>And the following factions are available in the expansion:</p>
        </Text>

        <div style={{ display: 'flex', gap: '2vw' }}>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/ginaz.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/choam.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/ecaz.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/iduali.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/richese.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/landsraad.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
          <Wrapper size={{ width: 1200, height: 1200 }}>
            <img
              src="/generated/token/faction/moritani.jpg"
              style={{ borderRadius: '50%', boxShadow: '0 0 2vw #00000088', flex: 1, height: 'auto' }}
            />
          </Wrapper>
        </div>
      </Spaced>
    </Fragment>
  );
}

export function Factions2() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1} size="medium">
          Factions in the game
        </Title>
        <Text>
          <p>You will play as one of these factions:</p>
        </Text>
        {Object.values(factions)
          .slice(0, 5)
          .map((item, i) => (
            <FactionSynopsis key={i}>
              <SideBySide>
                <Wrapper
                  isCircle={true}
                  size={discSize}
                  style={{ flex: 'none', width: '14vw', height: '14vw' }}
                >
                  <FactionToken
                    color={item.sheet.assets.color}
                    logo={item.sheet.assets.logo}
                    pattern={item.sheet.assets.pattern}
                  />
                </Wrapper>
                <Text>
                  <MarkdownContent>{item.sheet.description}</MarkdownContent>
                </Text>
              </SideBySide>
            </FactionSynopsis>
          ))}
      </Spaced>
    </Fragment>
  );
}

export function Factions3() {
  return (
    <Fragment>
      <Spaced>
        <Text>Continued list of factions.</Text>
        {Object.values(factions)
          .slice(5, 10)
          .map((item, i) => (
            <FactionSynopsis key={i}>
              <SideBySide>
                <Wrapper
                  isCircle={true}
                  size={discSize}
                  style={{ flex: 'none', width: '14vw', height: '14vw' }}
                >
                  <FactionToken
                    color={item.sheet.assets.color}
                    logo={item.sheet.assets.logo}
                    pattern={item.sheet.assets.pattern}
                  />
                </Wrapper>
                <Text>
                  <MarkdownContent>{item.sheet.description}</MarkdownContent>
                </Text>
              </SideBySide>
            </FactionSynopsis>
          ))}
        <Text>
          <em>There's room for more factions!</em>
        </Text>
      </Spaced>
    </Fragment>
  );
}
