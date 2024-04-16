import { Fragment } from 'react';

import { Ball } from '../../block/Ball';
import { Definitions } from '../../block/Definitions';
import { Fan } from '../../block/Fan';
import { WithBottom } from '../../block/Layout';
import { Outline } from '../../block/Outline';
import { Spaced } from '../../block/Spaced';
import { NonBreaking, Text } from '../../block/Text';
import { Title } from '../../block/Title';
import { Wrapper } from '../../block/Wrapper';
// import { factions } from '../../presets/factions';
import { card as cardSize, disc as discSize } from '../../data/sizes';
// import { FactionToken } from '../../objects/disc/faction_token';
// import { TroopToken } from '../../objects/disc/troop_token';
// import * as backs from '../../presets/back_cards';
import * as colors from '../../utils/colors';

export const mapSize = { width: 487.06, height: 487.06 };

export function Setup_1() {
  return (
    <Fragment>
      <WithBottom>
        <Spaced>
          <Title color={colors.blue1}>Setup</Title>
          <Text>
            <p>This section describes how to setup a game of dune.</p>
          </Text>
          <Title color={colors.blue2} size="small">
            Setup Part 1 : Drafting
          </Title>
          <Text columns={2}>
            <ol>
              <li>
                <p>
                  Place the board on the center of a table (seating at least 6). A recommended minimum size
                  for the table is 60cm by 60cm.
                </p>
              </li>
              <li>
                <p>
                  Sit around a table. It's best if players don't sit directly parallel next to each other, but
                  sit in a circle.
                  <br />
                  If you want to randomize seating, you can randomly deal the first 6 numbered prediction
                  cards to players. Then have players sit in storm order starting from the "storm start"
                  denoted on the board.
                </p>
              </li>
              <li>
                <p>
                  Each player drafts the faction-token of 1 faction they wish have in play, by places it in
                  the center of the board.{' '}
                  <em>Drafting a faction does not mean you'll be playing as that faction.</em>
                </p>
              </li>
              <li>
                <p>
                  Collect all the faction-tokens from the center of the board, and shuffle them thoroughly.
                  Place the faction-tokens as evenly spaced as possible around the board on the storm track.
                </p>
                <p>
                  The result should be that every player around the table has a faction-token placed in front
                  of them.
                </p>
              </li>
            </ol>
            <ol>
              <li>
                <p>Players may now trade faction-tokens, but they are not allowed to swap seats.</p>
                <p>What faction-token is in front of you, that faction is the one you'll be playing as.</p>
              </li>
              <li>
                <p>
                  Every players takes all the items specific to the faction they are playing, out of the box.
                </p>
                <p>They take their initial Spice out of the Spice bank.</p>
                <p>
                  Place the faction-shield in such a way that the shield is clear to see for other places and
                  it obscures your personal Spice stash.
                </p>
                <p>There should be ample room in front of your shield for bribes and Tech Tokens.</p>
              </li>
            </ol>
          </Text>
        </Spaced>
        {/* <div style={{ display: 'flex', gap: '1vw' }}>
          {Object.entries(factions).map(([k, v]) => (
            <Fragment key={k}>
              <Wrapper key={k} isCircle={true} size={discSize} style={{ flex: 1, maxWidth: '100%' }}>
                <FactionToken
                  color={v.sheet.assets.color}
                  logo={v.sheet.assets.logo}
                  pattern={v.sheet.assets.pattern}
                />
              </Wrapper>
            </Fragment>
          ))}
        </div> */}
      </WithBottom>
    </Fragment>
  );
}

export function Setup_2() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="small">
          Setup Part 2 : Table layout & Decks
        </Title>
        <Text columns={2}>
          <NonBreaking>
            <Spaced>
              <ol>
                <li>
                  <p>
                    Create a Treachery deck (<strong>D1</strong>)
                  </p>
                </li>
                <li>
                  <p>
                    Create a Fate deck (<strong>D2</strong>)
                  </p>
                </li>
                <li>
                  <p>Take all Spice cards, and separate all the Shai-Halud cards.</p>
                  <p>
                    The non-Shai-Halud cards are shuffled, then place 1 card (face down) from this deck on{' '}
                    <strong>A</strong> and 1 card (face down) on <strong>B</strong>.
                  </p>
                  <p>
                    From the same deck place 1 card (face down) on <strong>Pa</strong>.
                  </p>
                  <p>
                    Add 2 Shai-Halud cards and shuffle the deck. Then place 1 (face down) card on{' '}
                    <strong>Pb</strong>.
                  </p>
                  <p>
                    Finally add the remaining Sha-Hulud cards and shuffle the deck. Place this deck (face
                    down) on <strong>D</strong>.
                  </p>
                </li>
                <li>
                  <p>Randomize Tech Tokens, and place them in a Stack (face down),</p>
                </li>
                <li>
                  <p>
                    Create a Traitor deck by gathering all the Traitor card from the faction that have been
                    drafted. (<strong>C</strong>)
                  </p>
                </li>
              </ol>
              <Definitions></Definitions>
            </Spaced>
          </NonBreaking>
          <NonBreaking>
            <Definitions>
              <dt>
                <Ball style={{ color: '#000', backgroundColor: '#CCC' }} />
              </dt>
              <dd>Table</dd>
              <dt>
                <Ball style={{ color: '#000', backgroundColor: '#E2CC87' }} />
              </dt>
              <dd>Board</dd>
              <dt>
                <Ball style={{ color: '#000', backgroundColor: '#F1E3B8' }} />
              </dt>
              <dd>Player faction-token location</dd>
              <dt>
                <Ball style={{ color: '#fff', backgroundColor: '#1B2C43' }}>T</Ball>
              </dt>
              <dd>Turn tracker</dd>
              <dt>
                <Ball style={{ color: '#fff', backgroundColor: '#1B2C43' }}>1..</Ball>
              </dt>
              <dd>Phase tracker</dd>
              <dt style={{ marginTop: '2vw' }}>
                <Ball style={{ color: '#fff', backgroundColor: '#4B1F1B' }}>D1</Ball>
              </dt>
              <dd style={{ marginTop: '2vw' }}>Draw Treachery deck.</dd>
              <dt>
                <Ball style={{ color: '#fff', backgroundColor: '#4B1F1B' }}>D2</Ball>
              </dt>
              <dd>Discard Treachery deck.</dd>
              <dt>
                <Ball style={{ color: '#fff', backgroundColor: '#4B1F1B' }}>P1</Ball>
              </dt>
              <dd>Pile 1: cards to draw new auction cards from.</dd>
              <dt>
                <Ball style={{ color: '#fff', backgroundColor: '#4B1F1B' }}>P2</Ball>
              </dt>
              <dd>Pile 2: cards to draw new auction cards from, after P1 is exhausted.</dd>
              <dt>
                <Ball style={{ color: '#fff', backgroundColor: '#4B1F1B' }}>C</Ball>
              </dt>
              <dd>
                <p>The single card, currently up for auction.</p>
              </dd>
              <dt style={{ marginTop: '2vw' }}>
                <Ball style={{ color: '#fff', backgroundColor: '#2A4270' }}>D</Ball>
              </dt>
              <dd style={{ marginTop: '2vw' }}>Draw Spice deck.</dd>
              <dt>
                <Ball style={{ color: '#fff', backgroundColor: '#2A4270' }}>Pa</Ball>
              </dt>
              <dd>Prescience for A.</dd>
              <dt>
                <Ball style={{ color: '#fff', backgroundColor: '#2A4270' }}>Pb</Ball>
              </dt>
              <dd>Prescience for B.</dd>
              <dt>
                <Ball style={{ color: '#fff', backgroundColor: '#2A4270' }}>A</Ball>
              </dt>
              <dd>Spice location A.</dd>
              <dt>
                <Ball style={{ color: '#fff', backgroundColor: '#2A4270' }}>B</Ball>
              </dt>
              <dd>Spice location B.</dd>
            </Definitions>
          </NonBreaking>
        </Text>
        <div style={{ position: 'relative', width: '90%', marginLeft: '5%' }}>
          <div style={{ position: 'absolute', width: '100%' }}>
            <Wrapper size={mapSize} style={{ flex: 1, maxWidth: '100%' }}>
              <svg
                {...mapSize}
                viewBox="0 0 487.06 487.06"
                xmlSpace="preserve"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <use xlinkHref={'/page/map.svg#root'}></use>
              </svg>
            </Wrapper>
          </div>
        </div>
      </Spaced>
    </Fragment>
  );
}

export function Setup_3() {
  return (
    <Fragment>
      <WithBottom>
        <Spaced>
          <Title color={colors.blue2} size="small">
            Setup Part 3 : Prediction
          </Title>
          <Text>
            <p>
              If the Bene Gesserit faction is in the game, they must do their prediction immediately before
              any card are distributed.
            </p>
            <p>If the Bene Gesserit faction was not drafted, skip this phase.</p>
          </Text>
          <Title color={colors.blue2} size="small">
            Setup Part 4 : Traitors
          </Title>
          <Text columns={2}>
            <NonBreaking>
              <Text>
                <ol>
                  <li>
                    <p>
                      Deal 4 Traitor cards from the Traitor deck to every player except the player playing as
                      the Bene Tleilaxu faction.
                    </p>
                  </li>
                  <li>
                    <p>
                      Every player except the one playing as Harkonnen must chose 1 out of the 4 as their
                      Traitor.
                      <br />
                      Harkonnen keeps all 4.
                    </p>
                  </li>
                  <li>
                    <p>
                      If Bene Tleilaxu was not one of the drafted factions, then remove the non-chosen and
                      remaining Traitor cards from the game.
                    </p>
                  </li>
                </ol>
                <blockquote>
                  <p>I have Stilgar as my traitor.</p>
                  <p style={{ float: 'right' }}>~ DeeDeeMegaDooDoo</p>
                </blockquote>
              </Text>
            </NonBreaking>
            <Outline variant="normal">
              <Text>
                <h1>With Bene Tleilaxu</h1>
                <p>If the Bene Tleilaxu was one of the drafted factions:</p>
                <ol>
                  <li>
                    Instead of removing from the game, each player (except Bene Tleilaxu themselves) places
                    their non-chosen Traitor cards on their faction-token.
                  </li>
                  <li>
                    The player playing as the Bene Tleilaxu faction shuffles each pile on every faction-token
                    & and takes 1 card from each pile.
                  </li>
                  <li>
                    If this results in less then 5 Traitor cards in their hand, they draw from the remaining
                    Traitor deck, until they have exactly 5.
                  </li>
                  <li>
                    When they have 5 Traitor cards, they pick one of them to be their Traitor, by placing
                    their Traitor card (face down) behind their shield.
                  </li>
                  <li>
                    All Traitor cards that other factions didn't chose are collected into a deck, and this
                    becomes the Bene Tleilaxu FaceDancer draw deck.
                  </li>
                </ol>
              </Text>
            </Outline>
          </Text>
        </Spaced>
        <div style={{ width: '35vw', marginLeft: '4vw' }}>
          <Fan size={cardSize}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.traitor}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.traitor}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.traitor}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.traitor}
            </Wrapper>
          </Fan>
        </div>
      </WithBottom>
    </Fragment>
  );
}

export function Setup_4() {
  return (
    <WithBottom>
      <Spaced>
        <Title color={colors.blue2} size="small">
          Setup Part 5 : Treachery & Fates
        </Title>
        <Text columns={2}>
          <Outline variant="normal">
            <Text>
              <h1>With Ixians</h1>
              <p>If the Ixians was one of the drafted factions:</p>
              <ol>
                <li>Deal Treachery cards equal to the number of players (including Ixian).</li>
                <li>
                  Ixian can <strong>look</strong> at these "starting cards".
                </li>
                <li>
                  After looking, Ixians create a deck out of the starting card, shuffle it and then deal 1 to
                  each player (including themselves).
                </li>
              </ol>
            </Text>
          </Outline>
          <Text>
            <p>This is a simple step:</p>
            <ol>
              <li>Every player gets dealt 1 Treachery card.</li>
              <li>Every player gets dealt 1 Fate card.</li>
            </ol>
            <p>Harkonnen takes 1 extra Treachery card from the Treachery draw deck.</p>
          </Text>
        </Text>
      </Spaced>
      <Text>
        <div
          style={{
            padding: '0 33vw',
            marginTop: '-15vw',
          }}
        >
          <Fan size={cardSize} spacing={-14}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.fate}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.fate}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.fate}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.fate}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.fate}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.fate}
            </Wrapper>
          </Fan>
        </div>
        <div
          style={{
            padding: '0 33vw',
            marginTop: '-30vw',
          }}
        >
          <Fan size={cardSize} spacing={-8}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.treachery}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.treachery}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.treachery}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.treachery}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.treachery}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {backs.treachery}
            </Wrapper>
          </Fan>
        </div>
      </Text>
    </WithBottom>
  );
}

export function Setup_5() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="small">
          Setup Part 6 : Storm Placement
        </Title>
        <Text>
          <p>
            The Storm Marker is placed at a random location along the map edge using either a D18 dice
            (recommended) or using the following procedure:
          </p>
          <ol>
            <li>
              The two players whose player circles are nearest on either side of the Storm Start Sector will
              secretly dial a number from 0 to 20 on the battle wheels.
            </li>
            <li>The two numbers are simultaneously revealed</li>
            <li>
              move Storm Marker from the Storm Start sector counterclockwise around the map for the sum total
              of the 2 number.
            </li>
          </ol>
        </Text>
        <Title color={colors.blue2} size="small">
          Setup Part 6 : Troop Placement
        </Title>
        <Text columns={2}>
          <NonBreaking>
            <Text>
              <p>Faction now place their starting troops on the board.</p>
              <p>This happens in a set order of priority:</p>
              <ol>
                <li>Atreides & Harkonnen & the Spacing Guild</li>
                <li>
                  Ixian (<em>place their Mobile Deployment Platform</em>)
                </li>
                <li>Fremen</li>
                <li>Bene Gesserit</li>
              </ol>
              <p>Highest priority deploys first.</p>
            </Text>
          </NonBreaking>
          {/* <div
            style={{
              display: 'grid',
              gap: '0.5vw',
              gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
            }}
          >
            {Object.values(factions)
              .map((f) => ({ sheet: f.sheet, tokens: f.sheet.assets.troops }))
              .map(({ sheet, tokens: v }, i) => (
                <Fragment key={i}>
                  {v.map((ii, iii) => (
                    <Fragment key={iii}>
                      {ii.front && (
                        <Fragment>
                          <Wrapper isCircle={true} size={discSize} style={{ flex: 1 }}>
                            <TroopToken
                              color={sheet.assets.color}
                              variant={ii.front.variant}
                              pattern={sheet.assets.pattern}
                              modifiers={ii.front.modifiers}
                            />
                          </Wrapper>
                        </Fragment>
                      )}
                      {ii.back && (
                        <Fragment>
                          <Wrapper isCircle={true} size={discSize} style={{ flex: 1 }}>
                            <TroopToken
                              color={sheet.assets.color}
                              variant={ii.back.variant}
                              pattern={sheet.assets.pattern}
                              modifiers={ii.back.modifiers}
                            />
                          </Wrapper>
                        </Fragment>
                      )}
                    </Fragment>
                  ))}
                </Fragment>
              ))}
          </div> */}
        </Text>
      </Spaced>
    </Fragment>
  );
}
