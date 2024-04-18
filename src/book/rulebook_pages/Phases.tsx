import { Fragment } from 'react';

import { Definitions } from '../../block/Definitions';
import { Fan } from '../../block/Fan';
import { WithBottom } from '../../block/Layout';
import { Outline } from '../../block/Outline';
import { Spaced } from '../../block/Spaced';
import { NonBreaking, Text } from '../../block/Text';
import { Title } from '../../block/Title';
import { Wrapper } from '../../block/Wrapper';
// import { nexus_1, nexus_yes } from '../../presets/nexus_cards';
import { card as cardSize } from '../../data/sizes';
// import * as backs from '../../presets/back_cards';
import * as colors from '../../utils/colors';

const order = [
  'face_dancer',
  'nexus',
  'fate_swap',
  'bidding',
  'revival',
  'spice_blow',
  'shipment',
  'battle',
  'mentat',
  'collection',
  'ixian MDP',
  'storm',
];

export function About() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1}>Phases</Title>
        <Text columns={2}>
          <NonBreaking>
            <p>DUNE is played in turns to a maximum limit of 10 turns.</p>
            <p>
              Each turn is composed of nine specific phases that must be completed in the exact sequence
              presented below.
            </p>
          </NonBreaking>
          <Outline variant="example">
            Note: All factions have special advantages that may contradict these rules.
            <br />A faction's particular advantages always have precedence.
          </Outline>
        </Text>
        <Title color={colors.blue2} size="medium">
          Phase 1: Infiltration
        </Title>
        <Text columns={2}>
          <Outline variant="normal">
            <h2>Skip phase step when:</h2>
            <ul>
              <li>on Turn 1.</li>
              <li>the Bene Tleilaxu faction wasn't drafted.</li>
            </ul>
          </Outline>
          <p>
            Bene Tleilaxu can discard 1 Traitor card to the Traitor discard deck and draw 1 from the Traitor
            draw deck.
          </p>

          <p>
            The player playing as Bene Tleilaxu can infiltrate factions by revealing traitors cards from their
            hand of leaders in the Tleilaxu Tanks.
          </p>
          <h2>Then, the following happens:</h2>
          <ol>
            <li>
              <p>The Traitor card is placed in front of the Bene Tleilaxu's shield.</p>
            </li>
            <li>
              <p>The Bene Tleilaxu places one of their leader discs on top of the revealed Traitor card.</p>
            </li>
            <li>
              <p>
                The faction that the Traitor card belongs to, now has a brief time-window to call traitor on
                the Bene Tleilaxu leader placed on top of the Traitor card.
              </p>
            </li>
          </ol>
          <NonBreaking>
            <Text>
              <p>
                If the traitor is called, the Tleilaxu leader dies, and the faction does not become
                infiltrated.
              </p>
              <h1>Infiltrated</h1>
              <p>
                If <strong>no</strong> traitor is called, the leader of the Traitor card is revived (no cost)
                and return the the owner faction.
              </p>
              <p>
                From now on, the faction is infiltrated.
                <br />
                The leader of which the Traitor card is in front of the Bene Tleilaxu is called the
                "infiltrating leader".
              </p>
              <hr />
              <p>
                When you are infiltrated, you must (whenever the Bene Tleilaxu asks) provide the Bene Tleilaxu
                with the following information (in secret):
              </p>
              <ul>
                <li>Your Spice total in your personal Spice reserve.</li>
                <li>Exactly which Treachery card you have.</li>
                <li>The contents of your finalized battle-plan before reveal.</li>
              </ul>
              <h1>Ending infiltration</h1>
              <p>This Infiltration lasts until the infiltrating leader dies.</p>
              <p>
                If an infiltrated faction wins the game Bene Tleilaxu win <strong>along with</strong> them.
              </p>
            </Text>
          </NonBreaking>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function Nexus() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="medium">
          Phase 2: Nexus
        </Title>
        <Text>
          <Outline variant="example">
            <p>This phase is currently a work in progress. It's actively being designed.</p>
          </Outline>
        </Text>
        <Text columns={2}>
          <Outline variant="normal">
            <h2>Skip this phase on Turn 1.</h2>
          </Outline>
          <NonBreaking>
            <Text>
              <h1>Nexus deck</h1>
              <ol>
                <li>Take 1 card from the Nexus deck.</li>
                <li>Do what it says on the card.</li>
              </ol>
              <Outline variant="example">
                <h3>No Nexus</h3>
                <p>
                  Draw <em>n</em> Nexus cards from the Nexus draw deck (one at a time), placing them on the
                  Nexus discard deck.
                </p>
                <p>
                  When the drawn card is titled <em>Perform Nexus</em>, then <strong>stop</strong> and perform
                  the actions detailed on that card.
                </p>
              </Outline>
              <Outline variant="example">
                <h3>Perform Nexus</h3>
                <ol>
                  <li>Stop drawing cards.</li>
                  <li>Perform a Nexus.</li>
                  <li>Shuffle all Nexus cards back into a new Nexus draw deck</li>
                </ol>
              </Outline>
              <p>The distribution of cards (total 20):</p>
              <Definitions>
                <dt>No Nexus</dt>
                <dd>
                  4 cards with the number: 4<br />
                  5 cards with the number: 5<br />
                  6 cards with the number: 6<br />
                  4 cards with the number: 7<br />
                </dd>
                <dt>Perform Nexus</dt>
                <dd>1 card</dd>
              </Definitions>
            </Text>
          </NonBreaking>

          <div style={{ padding: '0 10vw 4vw 10vw' }}>
            {/* <Fan size={cardSize} spacing={-20}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {nexus_1}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {nexus_yes}
              </Wrapper>
            </Fan> */}
          </div>
          <NonBreaking>
            <Text>
              <h1>Forming alliances</h1>
              <p>When the card indicated there should be a Nexus, here are the steps:</p>
              <ol>
                <li>
                  Players that are currently allied can break their alliance by returning the Alliance card
                  they received, and taking back their own.
                </li>
                <li>
                  Players can offer an alliance to 1 other player at a time.
                  <br />
                  They do this by offering their Alliance card.
                </li>
                <li>If the player choses to accept, the alliance is formed.</li>
                <li>If the player choses to decline, they can offer to someone else.</li>
              </ol>
            </Text>
          </NonBreaking>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function Fate() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="medium">
          Phase 3: Fate swapping
        </Title>
        <Text columns={2}>
          <Outline variant="normal">
            <h2>Skip this phase on Turn 1.</h2>
          </Outline>
          <p>Every player may make a single 1:1 trade of a Fate card with another player.</p>
          <blockquote>
            <p>You know this is a worthless card right?</p>
            <p style={{ float: 'right' }}>~ Brodie</p>
          </blockquote>
          <div
            style={{
              padding: '0 14vw',
              marginTop: '10vw',
            }}
          >
            {/* <Fan size={cardSize} spacing={-8}>
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
            </Fan> */}
          </div>
        </Text>
        <Title color={colors.blue2} size="medium">
          Phase 4: Bidding
        </Title>
        <Text columns={2}>
          <h1>Declaration</h1>
          <p>
            Each faction must publicly reveal the number of Treachery Cards in their hands. A player can never
            have more than four cards in their hand at any one time.
          </p>
          <p>A player cannot bid for Treachery Cards if they are at their hand limits.</p>
          <h1>Dealer</h1>
          <p>
            Count the number of factions not at their hand limit, and for each of them set aside one card from
            the top of the Treachery deck. If the Treachery deck has fewer cards than players who can bid, the
            cards remaining in the deck are set aside. The discard pile is then shuffled together and cards
            equal to the difference are drawn and placed separately to the first pile. The first pile will be
            auctioned off first, and the second pile second.
          </p>
          <h1>Auction</h1>
          <p>The first card in the stack is now auctioned for Spice.</p>
          <ul>
            <li>
              The first player in Storm Order will open bidding on the first card. If that player already has
              4 Treachery Cards the next player who does not have 4 Treachery Cards opens bidding.
            </li>
            <li>
              They may bid one or more Spice or pass. Bidding then proceeds to the next player in Storm Order
              who may raise the bid or pass until all other players pass in a row. The top-bidding player then
              pays the number of Spice they bid to the Emperor, or the Spice Bank if the Emperor is not in the
              game, and takes the card into their hand.
            </li>
          </ul>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function Bidding() {
  return (
    <Fragment>
      <Spaced>
        <Text columns={2}>
          <h1>Bid Limit</h1>
          <p>
            No player may bid more Spice than they have, except with permission from their ally if any, or the
            Emperor.
          </p>
          <p>
            If a faction wins the bidding, but cannot pay for the card due to not having enough Spice, the bid
            is considered illegal and the bidding on the card in question is restarted with the same starting
            bidder, however the player who made the illegal bid is unable to bid on that Treachery Card.
          </p>
          <h1>Next Starting Bidder</h1>
          <p>
            In subsequent bidding during this phase, the First Player who can bid, to the right of the player
            who opened the bid for the previous card, begins the bidding for the next card. In this way every
            player who can bid gets a chance to open the bidding for a Treachery Card.
          </p>
          <h1>End of Bidding</h1>
          <p>
            Bidding for Treachery Cards continues until all cards available for bid have been auctioned off or
            a card is not bid on by anyone.
          </p>
          <p>
            If a card is passed by everyone, all remaining cards are returned to the top of the Treachery deck
            in the order they were dealt and the bidding round is over.
          </p>
          <h1>Transparency</h1>
          <p>
            The number of (not the type) Treachery cards each player holds is public information during the
            bidding round. Nobody is allowed to hide the number of cards they hold at this time.
          </p>
          <p>If a player has a full hand, they must pass on all cards up for bid.</p>
          <Outline variant="normal">
            <h1>Bidding Etiquette</h1>
            <p>
              While these are not strict rules, we suggest they are complied with to keep the bidding round as
              short as possible
            </p>
            <p>
              A pause should be taken before the use of faction powers like Ixian deck Splitting or Atreides
              Prescience where they announce to the table that they are about to use them thus giving players
              a fair chance to use karama cards, or faction powers.
            </p>
            <p>
              We suggest 30 seconds to a minute should be spent before the bidding of each card to allow the
              factions to make deals on card knowledge, subsidies and bidding strategy. In general, when a
              player is asking for subsidy from their ally or the Emperor, we recommend asking for an amount
              of Spice and accepting a yes or no answer to keep the round moving. This will also allow allies
              to share their plans on who should buy what and how much Spice they can share between them.
              Complex deals should be saved for this time period.
            </p>
            <p>
              Once bidding starts on a card, each players bid should take no more than 10 seconds. Simple
              deals can take part in this time however the game should not be paused to allow a complex deal
              to take place.
            </p>
            <p>
              When it is a players turn to bid they should have priority in making simple deals. This means
              that other players should be quiet and interfere minimally when they make deals during their 10
              seconds.
            </p>
            <p>
              We suggest that players frequently flouting these conventions be warned, with a potential limit
              being imposed that they may only state their bid and nothing else once bidding has started.
            </p>
          </Outline>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function Revival() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="medium">
          Phase 5: Revival
        </Title>
        <Text>
          <p>
            All revivals happen in Storm Order for purposes of the Bene Tleilaxu's Revival Income, and the
            Bene Tleilaxu always revive their Troop tokens and leaders last.
          </p>
          <h1>Force Revival</h1>
          <p>All players may now revive up to 3 Troops from the Tleilaxu Tanks.</p>
          <Definitions>
            <dt>Free</dt>
            <dd>
              <p>A certain number of Troop tokens are revived for free as stated on the player sheet.</p>
            </dd>
            <dt>By Spice</dt>
            <dd>
              <p>
                Any additional Troop tokens that may be revived must be done at a cost of 2 Spice per Troop
                token, or more if indicated on faction sheet. All Spice expended for Troop token revival is
                placed in the Spice Bank.
              </p>
            </dd>
            <dt>Limit</dt>
            <dd>
              <p>
                A player can never revive more than 3 Troop tokens per turn, unless a Tleilaxu Ghola Card is
                played to revive troops.
              </p>
            </dd>
            <dt>To Reserves</dt>
            <dd>
              <p>Revived Troop tokens must be placed in the player's reserve.</p>
            </dd>
          </Definitions>

          <h1>Leader Revival</h1>
          <p>
            Once a player has only, or has had only 1 available leader, they may revive one leader per turn
            until all of their leaders have been revived.
          </p>
          <Definitions>
            <dt>Revival Cost</dt>
            <dd>
              <p>
                To revive a leader, a player must pay that leader's strength in Spice to the Bene Tleilaxu, or
                the Spice Bank if the Bene Tleilaxu is not in the game.
              </p>
            </dd>
            <dt>Revived Leader Status</dt>
            <dd>
              <p>A revived leader can be played normally and is still subject to being a traitor.</p>
            </dd>
            <dt>Dead Again</dt>
            <dd>
              <p>
                If a revived leader is killed again, place it face down in the Tleilaxu Tanks. This leader
                cannot be revived again until all of the player's other revivable leaders have been revived,
                killed, and sent to the Tleilaxu Tanks again.
              </p>
            </dd>
          </Definitions>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function Spice() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="medium">
          Phase 6: Spice blow
        </Title>
        <Text columns={2}>
          <ol>
            <li>Reveal both card card A & B, simultaneously</li>
            <li>Place Spice / Shai-Halud tokens in the territory.</li>
            <li>Draw & place extra a Spice Card(s) on any Shai-Halud card.</li>
            <li>Fremen may re-direct (if multiple) and ride the spawned Shai-Halud tokens.</li>
            <li>
              Set any 3rd Shai-Halud cards aside, shuffle them back into the deck at the end of the phase.
            </li>
          </ol>
          <Outline variant="normal">
            <h1>First Turn</h1>
            <p>Any Shai-Halud cards that are drawn on turn 1, are set aside instead.</p>
            <p>They take no effect and are shuffled back into the Spice deck at the end of the phase.</p>
          </Outline>
        </Text>
        <Text>
          <p>The Spice deck never re-shuffles. By the end of turn 10, the complete Spice deck is used.</p>
        </Text>
        <Title color={colors.blue2} size="medium">
          Phase 7: Shipping & Movement
        </Title>
        <Text>
          <h1>Storm Order</h1>
          <p>
            Shipment and Movement happens in Storm Order by default. Each player's turn consists of one
            shipment and one movement. If the Spacing Guild is in the game, their Ship When You Wish advantage
            takes precedence to Storm Order. After the Spacing Guild has used this advantage, Shipment and
            Movement proceeds in strict Storm Order until all factions have had a chance to Ship and Move.
          </p>
          <h1>Shipment</h1>
          <p>
            A player may make one shipment of any number of tokens from their reserves to any one territory on
            the map. A player must pay spice to the spice bank for their shipment or to the Guild if they are
            in the game. The cost of shipping off-planet reserves is one spice per token shipped into any
            stronghold or city, and two spice per token shipped to any other territory. The Fremen player does
            not have to pay as their reserves are on the far side of Dune, see their faction sheet for
            details.
          </p>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function Movement() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1} size="small">
          Movement
        </Title>

        <Text columns={2}>
          <h1>Restrictions</h1>
          <p>
            No player may ship into a sector in storm or a stronghold already occupied by two other players.
            Otherwise, shipments may be placed in any territory. No player except the Spacing Guild and their
            ally may ship tokens from the board back to their reserves.{' '}
          </p>

          <p>
            The Stronghold Shield Wall counts as a Rock Territory in terms of Shipment, Movement and
            occupation limits.
          </p>

          <p>
            Each player may move, as a stack, any number of their Troop tokens from one territory into one
            other territory. The default move limit is one Territory.
          </p>

          <h1>Ornithopters</h1>
          <p>
            When a player has any amount of Troop tokens in Arrakeen or Carthag has access to ornithopters. If
            the faction shipped forces into Arrakeen or Carthag, they immediately gain access to Ornithopters
            for their movement.
          </p>
          <NonBreaking>
            <Text>
              <h1>Movement</h1>
              <p>
                Each player may make only one move per turn. Sectors have no effect on movement, i.e., tokens
                can move into or through a territory ignoring all sectors. As sector's only function is to
                regulate the movement and coverage of the storm and spice collection. No token except for the
                Fremen’s may move into, out of, or through a sector in storm (including non-sand territories).
                If a factions forces are split into 2 or more sectors of the same territory, they may all
                leave the territory with one movement action as a stack. To recombine these forces into one
                stack while remaining in that territory requires one movement action.
              </p>
              <p>
                Many territories occupy several sectors, so that a player may move into and out of a territory
                which is partly in the storm and part out, so long as the group does not pass through the part
                covered by the storm. When ending a move in a territory lying in several sectors, a player
                must make clear in which sector of the territory they choose to leave their tokens. The polar
                sink is never in storm. Tokens do not block movement with one exception: Like shipment, tokens
                cannot be moved into or through a stronghold if tokens of two other players are already there.
                Otherwise, tokens are free to move into, out of, or through any territory occupied by any
                number of tokens.
              </p>
            </Text>
          </NonBreaking>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function Battle() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="medium">
          Phase 8: Battle
        </Title>
        <Text columns={2}>
          <NonBreaking>
            <Text>
              <h1>Detecting battles</h1>
              <p>You can recognize battle locations, using these rules:</p>
              <ul>
                <li>
                  At least 2 (non-allied) factions have Troop tokens in the same territory during the battle
                  phase.
                </li>
                <li>The Bene Gesserit advisors never participate in battles.</li>
                <li>There are never any battles in the Polar Sink territory.</li>
                <li>
                  When the territory is split by the storm and troops tokens are not in the same sector, then
                  those troops do not battle each other.
                </li>
              </ul>
            </Text>
          </NonBreaking>
          <NonBreaking>
            <Text>
              <h1>Order of battles</h1>
              <p>
                From the storm marker onwards, check if the first player is in any battles. If they are they
                become the aggressor.
              </p>
              <h2>The aggressors will:</h2>
              <ul>
                <li>Choose which battle they are in will be resolved next.</li>
                <li>Win battle in the case of a tie in battle-strength.</li>
              </ul>
              <p>
                When all the battles of the first player are resolved, the next player becomes the aggressor.
                Repeat this process until all battles are resolved.
              </p>
            </Text>
          </NonBreaking>
          <NonBreaking>
            <Text>
              <h1>Winning a battle</h1>
              <p>The winner of the battle is the player that:</p>
              <ul>
                <li>Was not called Traitor upon.</li>
                <li>
                  Had a battle strength that was higher than the opponent, or was the aggressor in case of a
                  tie.
                </li>
              </ul>
              <p>There are exactly 0 winners in a Battle when any of these conditions are true:</p>
              <ul>
                <li>
                  A lasgun and shield were revealed (it does not not need to be from the same battle-plan).
                </li>
                <li>Both players call Traitor.</li>
              </ul>
              <p>
                The winning player loses the Troop tokens they dialed in battle, as well as the Spice they
                used.
              </p>
              <p>The Spice for all killed leaders is collected by the winner.</p>
            </Text>
          </NonBreaking>
          <NonBreaking>
            <Text>
              <h1>Losing a battle</h1>
              <p>
                The losing player loses all the Troop tokens they had in the territory and must discard every
                Treachery Card they used in their battle-plan.
              </p>
              <p>Fremen can choose to keep Treachery cards they played as Fanatical Tactics.</p>
              <p>
                Spacing Guild can keep Treachery cards they played when they retreat, and pay the appropriate
                amount of Spice (the strength of the leader they played times the number of Treachery cards)
              </p>
              <Outline variant="normal">
                Note that the loser does not lose their leader as a result of battle. Leaders are killed only
                by weapon Treachery Cards.
              </Outline>
            </Text>
          </NonBreaking>
        </Text>
        <Text></Text>
      </Spaced>
    </Fragment>
  );
}

export function BattleOrder() {
  return (
    <WithBottom>
      <Spaced>
        <Title color={colors.blue1} size="small">
          Battle Sub-Phases
        </Title>
        <Text>
          <Definitions>
            <dt>Step 1</dt>
            <dd>
              <p>Aggressor pick the battle location and opponent.</p>
            </dd>
            <dt>Step 2</dt>
            <dd>
              <p>Either player declares they have no leader leaders to play, if they do not.</p>
            </dd>
            <dt>Step 3</dt>
            <dd>
              <p>Last option of playing Supplies! Treachery card.</p>
              <p>Last option of playing Ixian alliance ability.</p>
              <p>Last option of playing Bene Tleilaxu Fate.</p>
              <p>Last option of playing Guild Fate.</p>
              <p>Last option of playing Bene Gesserit Fate.</p>
            </dd>
            <dt>Step 4</dt>
            <dd>
              <p>Bene Gesserit Voice.</p>
            </dd>
            <dt>Step 5</dt>
            <dd>
              <p>Atreides Battle Prescience.</p>
            </dd>
            <dt>Step 6</dt>
            <dd>
              <p>Harkonnen Fate ability.</p>
            </dd>
            <dt>Step 7</dt>
            <dd>
              <p>Bene Tleilaxu can look at infiltrated faction's committed battle-plan.</p>
            </dd>
            <dt>Step 8</dt>
            <dd>
              <p>Last option of playing TruthTrance Treachery cards.</p>
              <p>Fremen Fanatical Tactics.</p>
            </dd>
            <dt>Step 9</dt>
            <dd>
              <p>Reveal & Resolve battle-plans.</p>
            </dd>
            <dt>Step 10</dt>
            <dd>
              <p>Option of discarding or using Break Conditioning Treachery card.</p>
            </dd>
            <dt>Step 11</dt>
            <dd>
              <p>
                Traitor calls. (<em>this trumps Break Conditioning if played</em>).
              </p>
            </dd>
            <dt>Step 12</dt>
            <dd>
              <p>
                Guild retreat ability. (<em></em>)
              </p>
            </dd>
            <dt>Step 13</dt>
            <dd>
              <p>Apply the weapon and defense Treachery cards to send Leader discs to the Tleilaxu Tanks.</p>
              <p>Set Spice aside for killed leaders.</p>
            </dd>
            <dt>Step 14</dt>
            <dd>
              <p>For both players count their total battle strength by adding:</p>
              <ul>
                <li>
                  The Leader strength (<em>if not killed</em>)
                </li>
                <li>The dial on the battle-wheel</li>
                <li>Add 1¼ if Mercenaries was added</li>
              </ul>
              <p>The player with the highest total battle strength is the winner.</p>
            </dd>
          </Definitions>
          <blockquote>
            <p>
              I find that rolling dice and going up a ladder is great fun and a great feeling whilst sliding
              down a snake is not fun but theres always hope you might climb a ladder and still win
              objectively snakes are worse than ladders but without them the ladders feel pointless if you
              want a highly competitive game where the smart ass always wins play dream rules
            </p>
            <p style={{ float: 'right' }}>~ Eichmal</p>
          </blockquote>
        </Text>
      </Spaced>
    </WithBottom>
  );
}

export function BattleResolve() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1} size="small">
          Battle Plans
        </Title>
        <Text columns={2}>
          <p>To resolve a battle, each player must secretly formulate a Battle Plan.</p>
          <p>
            A Battle Plan <strong>MUST</strong> include:
          </p>
          <ul>
            <li>A Battle Wheel with a dialed number, representing the number of Troop tokens's strength.</li>
            <li>A Leader disc or Cheap Hero Treachery card. (unless the player has neither available)</li>
          </ul>
          <p>
            And it <strong>MAY</strong> include:
          </p>
          <ul>
            <li>1 weapon Treachery card.</li>
            <li>1 defense Treachery card.</li>
            <li>1 Mercenaries Treachery card.</li>
            <li>A number of Spice tokens.</li>
          </ul>
          <NonBreaking>
            <Text>
              <h1>Battle wheel</h1>
              <p>
                Each player picks up a Battle Wheel and secretly dials a number from zero to the number of
                Troop tokens they have in the disputed territory. Both players will lose the number of Troop
                tokens dialed on the Battle Wheel.
              </p>
              <p>
                The maximum dial is 20, even if you have more Troop tokens or if Troops add more strength.
              </p>
            </Text>
          </NonBreaking>
          <NonBreaking>
            <Text>
              <h1>Treachery Cards</h1>
              <p>
                You are only allowed to play Treachery cards, if you play either a Leader disc or Cheap Hero
                Treachery card in your battle plan.
              </p>
            </Text>
          </NonBreaking>
          <NonBreaking>
            <Text>
              <h1>Leader disc</h1>
              <p>You must play a Leader disc in your battle plan, if able.</p>
              <p>You may play a Cheap Hero Treachery card in place of a Leader disc.</p>
              <p>If you have neither available, you must declare so in Battle phase - step 2.</p>
            </Text>
          </NonBreaking>
          <h1>Traitors</h1>
          <p>
            Both player may choose if they call Traitor on the opponent's leader (<em>if they can</em>). When
            both pass and Harkonnen is allied to 1 of the 2 players, ask Harkonnen if they call Traitor.
          </p>
          <p>
            Harkonnen can only reveal the Traitor card of the Leader disc played by their ally's opponent. If
            harkonnen choses to do so, it is as if the ally played the Traitor card.
          </p>
          <p>
            When a Traitor card is revealed that matches the Leader disc played by their opponent, the the
            player that called Traitor:
          </p>
          <ul>
            <li>wins the fight.</li>
            <li>does not lose the Spice they dialed.</li>
            <li>does not lose any Troop tokens, even if dialed.</li>
            <li>their leader lives, irregardless of Treachery cards played.</li>
            <li>the opponent leader is killed, irregardless of Treachery cards played.</li>
          </ul>
          <h1>Double Traitors</h1>
          <p>
            When both players reveal a Traitor card card matching the opponent's leader, both leaders are
            killed, all Spice dialed is lose, all Troop tokens are send to the Tleilaxu Tanks.
          </p>
          <p>Both player lose, there is no winner.</p>
        </Text>
      </Spaced>
    </Fragment>
  );
}
export function Mentat() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="medium">
          Phase 9: Mentat Pause
        </Title>
        <Text>
          <p>
            During this phase players check if any of the players meet the following conditions for winning
            the game:
          </p>
          <Definitions>
            <dt>
              Strongholds
              <br />
              <em>1¼ Victory Points, per Stronghold</em>
            </dt>
            <dd>Having Troop tokens in any of the strongholds awards 1¼ Victory Points, per Stronghold.</dd>
            <dt>
              Shieldwall
              <br />
              <em>1⅕ Victory Points</em>
            </dt>
            <dd>
              Having Troop tokens on the North-West sector of Shieldwall (
              <em>after Shieldwall has been activated</em>), awards 1⅕ Victory Points.
            </dd>
            <dt>
              Tech Tokens
              <br />
              <em>1 Victory Point</em>
            </dt>
            <dd>
              Having 3 or more Tech tokens, <>awards 1 Victory Point</>.
            </dd>
          </Definitions>
          <p>The fractions are purely for tie-breaking purposes.</p>
        </Text>
        <Text>
          <hr />
        </Text>
        <Text columns={2}>
          <NonBreaking>
            <Text>
              <h1>Non-allied players</h1>
              <p>
                Players that do not have an ally, will win the game if they have at least 3 Victory Points.
              </p>
              <h1>Allied players</h1>
              <p>Players that do have an ally, will win the game if they have at least 4 Victory Points.</p>
            </Text>
          </NonBreaking>
          <NonBreaking>
            <Outline variant="normal">
              <Text>
                <h1>On Turn 10</h1>
                <ol>
                  <li>
                    If fremen are in the game, and they (and their ally) have 3 or more Victory Points, Fremen
                    plus their ally win.
                  </li>
                  <li>
                    If fremen are in the game, but they (and their ally) do not have 3 or more Victory Points,
                    Fremen win alone.
                  </li>
                  <li>
                    If fremen are not in the game, then the player (not alliance) with the most Victory Points
                    wins. If there is a tie, the player first in storm order wins.
                  </li>
                </ol>
              </Text>
            </Outline>
          </NonBreaking>
        </Text>
        <Title color={colors.blue2} size="medium">
          Phase 10: Collection
        </Title>
        <Text columns={2}>
          <p>Collect Spice from Spice-blows & strongholds.</p>
          <p>
            Any player with 0 or 1 Spice can collect Spice from the Spice bank to bring their total to 2, by
            collecting Spice from the Spice bank.
          </p>
          <p>
            Players are allowed to bribe each other during the Collection phase, to be able to use the
            charity.
          </p>
          <p>
            All collection, (<em>including from Choam charity & Bribe piles</em>) happens as{' '}
            <strong>a single instant for all players, at the same time</strong>.
          </p>
        </Text>
      </Spaced>
    </Fragment>
  );
}
export function Storm() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="medium">
          Phase 11: Storm
        </Title>
        <Text columns={2}>
          <p>
            The Storm Marker is moved around the map. The faction whose Player Marker the storm next
            approaches will be the First Player for this turn.
          </p>
          <h1>Storm calculation</h1>
          <p>
            In all subsequent Storm Phases, the two players who last used the Battle Wheels will independently
            dial a whole number from 0 to 3, simultaneously reveal their numbers, add them together, and then
            advance the Storm Marker from its current position counterclockwise around the map for the sum
            total of sectors.
          </p>
          <p>When both players dial 0, the storm moves 1.</p>
          <Outline variant="normal">
            <h1>With Fremen drafted</h1>
            <p>When the Fremen are in the game, Storm calculation happens via the Storm deck instead.</p>
            <p>
              The player playing as the Fremen draws 1 random card from the Storm deck, and reveals that card
              during the Storm phase. Then immediately draws a new card for next turn.
            </p>
          </Outline>
          <NonBreaking>
            <h1>Damage</h1>
            <p>
              Any Troop tokens in a sector of sand territory (except the Imperial Basin) over which the storm
              passes or stops are killed. Place these forces in the Tleilaxu Tanks. Forces that are not on a
              sand territory are protected from the storm. In addition any Spice in a sector over which a
              storm passes or stops is removed to the Spice Bank.
            </p>
          </NonBreaking>
          <NonBreaking>
            <h1>Obstruction</h1>
            <p>Forces may not move into, out of, or through a sector in storm.</p>
          </NonBreaking>
          <Outline variant="normal">
            <h1>First Turn</h1>
            <p>
              The first time the storm is moved, the Storm Marker is placed at a random location along the map
              edge using either a D18 dice (recommended) or using the following procedure:
            </p>
            <ol>
              <li>
                The two players whose player circles are nearest on either side of the Storm Start Sector will
                secretly dial a number from 0 to 20 on the battle wheels.
              </li>
              <li>The two numbers are simultaneously revealed</li>
              <li>
                move Storm Marker from the Storm Start sector counterclockwise around the map for the sum
                total of the 2 number.
              </li>
            </ol>
          </Outline>
        </Text>
      </Spaced>
    </Fragment>
  );
}
