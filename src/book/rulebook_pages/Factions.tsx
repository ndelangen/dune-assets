import { Fragment } from 'react';

import { Definitions } from '../../block/Definitions';
import { FactionSynopsis } from '../../block/FactionSynopsis';
import { Spaced } from '../../block/Spaced';
import { Text } from '../../block/Text';
import { Title } from '../../block/Title';
import { Wrapper } from '../../block/Wrapper';
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
        <FactionSynopsis image="/generated/token/faction/emperor.jpg">
          <h1>Emperor</h1>
          <p>
            his majesty the Padishah Emperor Shaddam IV of house Corrino — keen and efficient, yet easily
            lulled into complacency by his own trappings of power.
          </p>
        </FactionSynopsis>
        <FactionSynopsis image="/generated/token/faction/guild.jpg">
          <h1>Spacing Guild</h1>
          <p>
            represented by steersman Edric (in league with smuggler bands) — monopolist of transport, yet
            addicted to ever increasing spice flows.
          </p>
        </FactionSynopsis>
        <FactionSynopsis image="/generated/token/faction/fremen.jpg">
          <h1>Fremen</h1>
          <p>
            represented by the planetary ecologist Liet Kynes — commanding fierce hordes of natives, adept at
            life and travel on the planet, and dedicated to preventing any outside control while bringing
            about Dune’s own natural regeneration.
          </p>
        </FactionSynopsis>
        <FactionSynopsis image="/generated/token/faction/ixian.jpg">
          <h1>Ixian</h1>
          <p>
            led by the human cyborg Prince Rhombur Vernius possessing courage. They are technocrats who
            specialize in production and supply chains. On Arrakis they have a movable stronghold, which is
            hidden from space.
          </p>
        </FactionSynopsis>
        <FactionSynopsis image="/generated/token/faction/atreides.jpg">
          <h1>House Atreides</h1>
          <p>
            led by the youthful Paul Atreides (Muad'dib) — rightful heir to the planet, gifted with valiant
            lieutenants and a strange partial awareness of the future, but beset by more powerful and
            treacherous opponents.
          </p>
        </FactionSynopsis>
        "
      </Spaced>
    </Fragment>
  );
}

export function Factions3() {
  return (
    <Fragment>
      <Spaced>
        <Text>Continued list of factions.</Text>
        <FactionSynopsis flip image="/generated/token/faction/bene-gesserit.jpg">
          <h1>Bene Gesserit</h1>
          <p>
            represented by Reverend Mother Gaius Helen Mohiam — ancient and inscrutable, carefully trained in
            psychological control and a genius at achieving her ends through the efforts of others.
          </p>
        </FactionSynopsis>
        "
        <FactionSynopsis flip image="/generated/token/faction/bene-tleilaxu.jpg">
          <h1>Bene Tleilaxu</h1>
          <p>
            led by their Masters Council. They control the Axlotl tanks, and infiltrate other factions with
            deadly Face Dancers. Although loathed by other factions, they are tolerated because of the
            miracles they are able to produce.
          </p>
        </FactionSynopsis>
        "
        <FactionSynopsis flip image="/generated/token/faction/harkonnen.jpg">
          <h1>House Harkonnen</h1>
          <p>led by the decadent Baron Vladimir Harkonnen — master of treachery and cruel deeds.</p>
        </FactionSynopsis>
        "
        <Text>
          <em>There's room for more factions!</em>
        </Text>
      </Spaced>
    </Fragment>
  );
}
