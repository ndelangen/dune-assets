import { FC, Fragment } from 'react';

import { Ball } from '../../block/Ball';
import { Definitions } from '../../block/Definitions';
import { SideBySide } from '../../block/Layout';
import { Spaced } from '../../block/Spaced';
import { NonBreaking, Text } from '../../block/Text';
import { Title } from '../../block/Title';
import * as colors from '../../utils/colors';
import styles from './Custom.module.css';

export function Board() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1}>Introduction</Title>
        <Text>
          <NonBreaking>
            <h1>Object of the game</h1>
            <p>
              Each faction has a set of unique economic, military, strategic, or treacherous advantages.
              <br />
              The object of the game is to use these advantages to gain control of Dune. The winners are the
              first players to control 3 Victory Points, or 4 in an Alliance with one other player, during the
              Mentat Pause phase.
            </p>
            <p>
              A faction has special advantages detailed on their faction sheets that may contradict the rules.
              A faction's particular advantages always have precedence over the rules.
            </p>
          </NonBreaking>
        </Text>
        <Title color={colors.blue1} size="medium">
          The board
        </Title>
        <Text>
          <NonBreaking>
            <p>
              Printed on the board is a map of the planet Dune. The map contains six types of territories.
            </p>
          </NonBreaking>
          <Definitions>
            <dt>Sand</dt>
            <dd>
              <SideBySide gap={1}>
                <Ball style={{ color: '#000', backgroundColor: '#F6D979' }} />
                <div>Yellow</div>
              </SideBySide>
            </dd>
            <dt>Imperial Basin</dt>
            <dd>
              <SideBySide gap={1}>
                <Ball style={{ color: '#000', backgroundColor: '#F6D979' }} borderA="dashed" />
                <div>Yellow with dashed border</div>
              </SideBySide>
            </dd>
            <dt>Rock</dt>
            <dd>
              <SideBySide gap={1}>
                <Ball style={{ color: '#000', backgroundColor: '#A67A3E' }} borderA="solid" />
                <div>Light brown with solid border</div>
              </SideBySide>
            </dd>
            <dt>Shieldwall</dt>
            <dd>
              <SideBySide gap={1}>
                <Ball style={{ color: '#000', backgroundColor: '#A67A3E' }} borderA="solid" />
                <div>Light brown with solid border</div>
              </SideBySide>
            </dd>
            <dt>Polar Sink</dt>
            <dd>
              <SideBySide gap={1}>
                <Ball style={{ color: '#000', backgroundColor: '#ffffff' }} borderA="solid" />
                <div>White</div>
              </SideBySide>
            </dd>
            <dt>City stronghold</dt>
            <dd>
              <SideBySide gap={1}>
                <Ball
                  style={{ color: '#F7BA7A', backgroundColor: '#F7BA7A' }}
                  borderA="dashed"
                  borderB="#67371C"
                />
                <div>Dark Brown, with dashed border</div>
              </SideBySide>
            </dd>
            <dt>Seitch stronghold</dt>
            <dd>
              <SideBySide gap={1}>
                <Ball style={{ color: '#F7BA7A' }} borderA="solid" borderB="#67371C" />
                <div>Dark Brown, with solid border</div>
              </SideBySide>
            </dd>
          </Definitions>
        </Text>
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{ position: 'absolute', width: '100%' }}>
            <svg
              style={{ borderRadius: '50%', boxShadow: '0 0 4vw 0 rgba(0, 0, 0, 0.5)' }}
              width={'100%'}
              viewBox="0 0 487.06 487.06"
              xmlSpace="preserve"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <use xlinkHref={'/page/map.svg#root'}></use>
            </svg>
          </div>
        </div>
      </Spaced>
    </Fragment>
  );
}

export function Sectors() {
  return (
    <Fragment>
      <Spaced>
        <Text columns={2}>
          <NonBreaking>
            <h1>Sectors</h1>
            <p>
              The map is also divided by longitude lines into 18 sectors which extend from the edge of the
              Polar Sink to the horizon.
            </p>
            <p>Sectors are important in 3 ways:</p>
            <ol>
              <li>When the storm moves, it moves from sector to sector.</li>
              <li>
                Territories that are under storm cannot be entered or moved through. When a territory is
                partially under storm, these parts act as separate territories.
              </li>
              <li>Spice can only be collected within the appropriate sector of a territory.</li>
            </ol>
          </NonBreaking>

          <svg
            viewBox="0 0 487.06 487.06"
            xmlSpace="preserve"
            fillRule="evenodd"
            clipRule="evenodd"
            style={{ borderRadius: '50%' }}
          >
            <use xlinkHref={'/page/map.svg#root'}></use>
            <use
              xlinkHref={'/page/map.svg#sectors'}
              fill="none"
              stroke="black"
              clipRule="evenodd"
              display="inline"
              opacity="1"
              fillRule="nonzero"
              strokeWidth="7px"
            />
            <use
              xlinkHref={'/page/map.svg#sectors'}
              fill="none"
              stroke="white"
              clipRule="evenodd"
              display="inline"
              opacity="1"
              fillRule="nonzero"
              strokeWidth="4px"
            />
          </svg>
        </Text>
        <Text>
          <hr />
        </Text>
        <Text columns={2}>
          <svg
            style={{ borderRadius: '50%' }}
            viewBox="0 0 487.06 487.06"
            xmlSpace="preserve"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <use xlinkHref={'/page/map.svg#root'}></use>
          </svg>
          <NonBreaking>
            <h1>Spice locations</h1>
            <p>There are a total of 20 locations on the board where Spice can spawn and be collected.</p>
            <ul>
              <li>15 "Spice blows" ranging from 6 to 12 Spice.</li>
              <li>5 "Spice mines" ranging from 3 to 5 Spice.</li>
            </ul>
            <p>
              <em>
                TODO: the map on the left should show the locations of the Spice-blows and Spice-mines,
                clearly.
              </em>
            </p>
          </NonBreaking>
        </Text>
        <Text>
          <hr />
        </Text>
        <Text columns={2}>
          <NonBreaking>
            <h1>Polar sink territory</h1>
            <p>A unique territory on dune is the polar sink. This territory is safe from everything</p>
          </NonBreaking>
          <NonBreaking>
            <ul>
              <li>Safe from storm.</li>
              <li>Safe from Shai-Halud.</li>
              <li>
                Safe from battle.
                <br />
                There are never battles here.
                <br />
                There is no occupancy limit for this territory.
              </li>
            </ul>
          </NonBreaking>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function Strongholds() {
  return (
    <Fragment>
      <Spaced>
        <Text>
          <h1>Strongholds</h1>
        </Text>
        <Text columns={2}>
          <p>There are 5 strongholds clearly marked on the board:</p>
          <Definitions>
            <dt>Arrakeen</dt>
            <dd>
              <p>The home-base of house Atreides.</p>
              <p>
                If you have Troop tokens here, you have access to "ornithopters"{' '}
                <em>(explained further on page N)</em>.
              </p>
              <p>
                If you have Troop tokens here at the collection phase, you gain 2 Spice from the Spice bank.
              </p>
            </dd>
            <dt>Carthag</dt>
            <dd>
              <p>The home-base of house Harkonnen.</p>
              <p>
                If you have Troop tokens here, you have access to "ornithopters"{' '}
                <em>(explained further on page N)</em>.
              </p>
              <p>
                If you have Troop tokens here at the collection phase, you gain 2 Spice from the Spice bank.
              </p>
            </dd>
            <dt>Seitch Tabr</dt>
            <dd>
              <p>The home-base of the Fremen.</p>
            </dd>
            <dt>Habbanya Seitch</dt>
            <dd>
              <p>This stronghold has no special uses, but is the hardest one to reach.</p>
            </dd>
            <dt>Tuek's Seitch</dt>
            <dd>
              <p>The home-base of the Spacing Guild</p>
              <p>
                If you have Troop tokens here at the collection phase, you gain 1 Spice from the Spice bank.
              </p>
            </dd>
          </Definitions>

          <p>After 4 Shai-Halud cards have been revealed, the 6th stronghold opens up:</p>
          <p>The Shieldwall territory will be a stronghold for victory purposes only. This means that:</p>
          <ul>
            <li>It still costs 2 Spice per Troop to ship to it.</li>
            <li>There is no occupation limit.</li>
            <li>It can still be blown up by Family Atomics.</li>
          </ul>
          <p>
            When the Shieldwall territory is partially under storm, only the larger part (upper left) counts
            as the stronghold.
          </p>
          <StrongholdsMap />
        </Text>
      </Spaced>
    </Fragment>
  );
}
const StrongholdsMap: FC = () => (
  <>
    <div className={styles.strongholdsMap}>
      <svg
        style={{ borderRadius: '50%', opacity: 0.5 }}
        viewBox="0 0 487.06 487.06"
        xmlSpace="preserve"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <use xlinkHref={'/page/map.svg#root'}></use>
      </svg>
      <svg
        style={{ borderRadius: '50%' }}
        viewBox="0 0 487.06 487.06"
        xmlSpace="preserve"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <defs>
          <mask id="arrakeen">
            <rect width="100%" height="100%" fill="black" />
            <use xlinkHref={'/page/map.svg#arrakeen'}></use>
          </mask>
          <mask id="carthag">
            <rect width="100%" height="100%" fill="black" />
            <use xlinkHref={'/page/map.svg#carthag'}></use>
          </mask>
          <mask id="tabr">
            <rect width="100%" height="100%" fill="black" />
            <use xlinkHref={'/page/map.svg#tabr'}></use>
          </mask>
          <mask id="habbanya">
            <rect width="100%" height="100%" fill="black" />
            <use xlinkHref={'/page/map.svg#habbanya'}></use>
          </mask>
          <mask id="tueks">
            <rect width="100%" height="100%" fill="black" />
            <use xlinkHref={'/page/map.svg#tueks'}></use>
          </mask>
          <mask id="shield-wall">
            <rect width="100%" height="100%" fill="black" />
            <use xlinkHref={'/page/map.svg#shield-wall'}></use>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="red" mask="url(#arrakeen)" />
        <rect width="100%" height="100%" fill="orange" mask="url(#carthag)" />
        <rect width="100%" height="100%" fill="yellow" mask="url(#tabr)" />
        <rect width="100%" height="100%" fill="green" mask="url(#habbanya)" />
        <rect width="100%" height="100%" fill="blue" mask="url(#tueks)" />
        <rect width="100%" height="100%" fill="purple" mask="url(#shield-wall)" />
      </svg>
    </div>
    <Definitions>
      <dt>Arrakeen</dt>
      <dd>
        <Ball style={{ color: '#000', backgroundColor: 'red' }} />
      </dd>
      <dt>Carthag</dt>
      <dd>
        <Ball style={{ color: '#000', backgroundColor: 'orange' }} />
      </dd>
      <dt>Sietch Tabr</dt>
      <dd>
        <Ball style={{ color: '#000', backgroundColor: 'yellow' }} />
      </dd>
      <dt>Habbanya Sietch</dt>
      <dd>
        <Ball style={{ color: '#000', backgroundColor: 'green' }} />
      </dd>
      <dt>Tueks Sietch</dt>
      <dd>
        <Ball style={{ color: '#000', backgroundColor: 'blue' }} />
      </dd>
      <dt>Shield wall</dt>
      <dd>
        <Ball style={{ color: '#000', backgroundColor: 'purple' }} />
      </dd>
    </Definitions>
  </>
);
