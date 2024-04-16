import { Fragment } from 'react';

import { Definitions } from '../../block/Definitions';
import { Fan } from '../../block/Fan';
import { SideBySide } from '../../block/Layout';
import { Outline } from '../../block/Outline';
import { Spaced } from '../../block/Spaced';
import { NonBreaking, Text } from '../../block/Text';
import { Title } from '../../block/Title';
import { Wrapper } from '../../block/Wrapper';
import { card as cardSize } from '../../data/sizes';
// import * as card from '../../presets/treachery_cards';
import * as colors from '../../utils/colors';

export function Cards_Intro() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1}>Cards</Title>
        <Text>
          <p>
            The game is played with multiple card decks.
            <br />
            These decks and their contents are outlined here:
          </p>
          <Definitions>
            <dt>
              Storm deck
              <br />6 cards
            </dt>
            <dd>
              <p>
                6 cards numbered 1 through 6
                <br />
                This deck is only used if the Fremen are in play.
              </p>
            </dd>
            <dt>
              Spice deck
              <br />
              25 cards
            </dt>
            <dd>
              <p>
                15 Spice-blow cards.
                <br />
                5 Spice-mine cards.
                <br />
                5 Shai-Halud cards.
                <br />
                Tells where Spice Blows will create treasure troves of Spice waiting to be harvested, and when
                the giant sandworms known as Shai-Hulud will turn up.
              </p>
            </dd>
            <dt>
              Fate deck
              <br />6 cards
            </dt>
            <dd>
              <p>6 Cards, each one mimics a specific worthless Treachery Card.</p>
            </dd>
            <dt>Alliance deck</dt>
            <dd>
              <p>
                1 card per faction, each detailing a specific faction's alliance ability.
                <br />
                use these to remind who is allied tho whom, and what the faction alliance ability is.
              </p>
            </dd>
            <dt>
              Treachery deck
              <br />
              45 cards
            </dt>
            <dd>
              <p>
                Provides weapons, defenses, tricks and tools to outmaneuver opponents and win battles.
                <br />
                <em>These cards are explained in detail below.</em>
              </p>
            </dd>
          </Definitions>
        </Text>
        <Title color={colors.blue1} size="medium">
          Treachery cards
        </Title>
        <Text>
          <p>Here's an overview of all of the card in the Treachery deck:</p>
        </Text>
        <Text columns={3} size={1.8}>
          <div style={{ padding: '1vw 4vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.baliset}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.baliset}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.baliset}
              </Wrapper>
            </Fan>
          </div>
          <ul>
            <li>6x Worthless Cards, unique</li>
            <li>5x Poison Weapon Cards, unique</li>
            <li>5x Projectile Weapon Cards, unique</li>
            <li>5x Snooper Cards, generic</li>
            <li>5x Shield Cards, generic</li>
            <li>1x Lasgun</li>
            <li>1x Weirding Way</li>
            <li>1x Chemistry</li>
          </ul>
          <ul>
            <li>3x Cheap Hero, 2 male 1 female</li>
            <li>2x Karama Cards, generic</li>
            <li>2x Truth Trance Cards, generic</li>
            <li>2x Mercenaries, generic</li>
            <li>1x Hajr</li>
            <li>1x Weather Control</li>
            <li>1x Tleilaxu Ghola</li>
            <li>1x Family Atomics</li>
            <li>1x Orange Catholic Bible</li>
            <li>1x Break Conditioning</li>
            <li>1x Supplies!</li>
          </ul>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function TreacheryCards1() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="small">
          Worthless
        </Title>
        <SideBySide>
          <div style={{ padding: '2vw 6vw', width: '20vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.baliset}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.baliset}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.baliset}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.baliset}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.baliset}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.baliset}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Worthless cards</h1>
            <p>Worthless cards can be used/discarded in one of 2 ways:</p>
            <ol>
              <li>Discarding them by playing them in a battle plan.</li>
              <li>Discarding them by playing your fate ability, when you have the matching fate card.</li>
            </ol>
            <blockquote>
              <p>I love this card!</p>
              <p style={{ float: 'right' }}>~ IhasPinecone</p>
            </blockquote>
          </Text>
        </SideBySide>
        <Title color={colors.blue2} size="small">
          Weapons
        </Title>
        <SideBySide>
          <div style={{ padding: '2vw 6vw', width: '20vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.maula_pistol}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.maula_pistol}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.maula_pistol}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.maula_pistol}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.maula_pistol}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Projectile Weapons</h1>
            <p>
              There are 5 standard projectile weapons in the Treachery deck: <br />
              Stunner, Slip Tip, Maula Pistol, Crysknife & Hunter seeker.
            </p>
            <p>
              Playing this card in your battle plan will kill the opponent's leader unless they have a
              projectile defense in their battle plan.
            </p>
            <p>
              These cards can be voiced as "<em>projectile weapon</em>"
            </p>
            <blockquote>
              <p>Fremen might want this one..</p>
              <p style={{ float: 'right' }}>~ DeeDeeMegaDooDoo</p>
            </blockquote>
          </Text>
        </SideBySide>
        <SideBySide>
          <div style={{ padding: '2vw 6vw', width: '20vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.chaumas}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.chaumas}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.chaumas}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.chaumas}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.chaumas}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Poison Weapons</h1>
            <p>
              There are 5 standard poison weapons in the Treachery deck: <br />
              GomJabbar, Chaumas, Chaumurky, Basilia weapon & Ellaca drug.
            </p>
            <p>
              Playing this card in your battle plan will kill the opponent's leader unless they have a poison
              defense in their battle plan.
            </p>
            <p>
              These cards can be voiced as "<em>poison weapon</em>"
            </p>
            <blockquote>
              <p>That's a good card!</p>
              <p style={{ float: 'right' }}>~ Awpteamoose</p>
            </blockquote>
          </Text>
        </SideBySide>
      </Spaced>
    </Fragment>
  );
}

export function TreacheryCards2() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="small">
          Unique Battle cards
        </Title>

        <SideBySide>
          <div style={{ width: '24vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.weirding_way}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Weirding way</h1>
            <p>
              Playing this card in your battle plan without a second weapon will kill the opponent's leader
              unless they have a projectile defense in their battle plan.
            </p>
            <p>
              Playing this card in your battle plan with a second weapon protect your leader from a projectile
              weapon.
              <br />
              It will not protect your leader from a lasgun.
            </p>
            <p>Playing this with a lasgun does not cause a lasgun-shield explosion.</p>
            <p>
              This card can be voiced as "<em>weirding way</em>".
            </p>
          </Text>
        </SideBySide>

        <SideBySide>
          <div style={{ width: '24vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.lasgun}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Lasgun</h1>
            <p>Playing this card in your battle plan will kill the opponent's leader.</p>
            <p>
              If your battle-plan also contains a shield, or your opponent's battle plan contains a shield, a
              lasgun-shield explosion occurs.
              <br />
              All tokens in the territory, including Spice, Troops, Leaders are destroyed/killed.
            </p>
            <p>
              This card can be voiced as "<em>lasgun</em>".
            </p>
            <blockquote>
              <p>I bindingly don't have a lasgun</p>
              <p style={{ float: 'right' }}>~ Hoots</p>
            </blockquote>
          </Text>
        </SideBySide>
        <SideBySide>
          <div style={{ width: '24vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.chemistry}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Chemistry</h1>
            <p>
              Playing this card in your battle plan with a second defense will kill the opponent's leader
              unless they have a poison defense in their battle plan.
            </p>
            <p>
              Playing this card in your battle plan without a second defense protects your leader from a
              poison weapon.
            </p>
            <p>
              This card can be voiced as "<em>chemistry</em>".
            </p>
          </Text>
        </SideBySide>
      </Spaced>
    </Fragment>
  );
}

export function TreacheryCards3() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="small">
          Defenses
        </Title>
        <SideBySide>
          <div style={{ padding: '2vw 6vw', width: '20vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.shield}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.shield}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.shield}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.shield}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.shield}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Projectile Defenses</h1>
            <p>There are 5 standard projectile defenses called "Shield" in the Treachery deck.</p>
            <p>
              Playing this card in your battle plan will defend your leader from projectile weapons in your
              opponent's battle plan.
            </p>
            <p>
              When this card is ever played in combination with a "Lasgun" a lasgun shield explosion occurs.
              <br />
              It does not matter if the Lasgun is in your battle-plan or in your opponent's.
            </p>
            <p>
              These cards can be voiced as "<em>projectile defense</em>" or "<em>shield</em>"
            </p>
            <blockquote>
              <p>You must play a shield!</p>
              <p style={{ float: 'right' }}>~ central419</p>
            </blockquote>
          </Text>
        </SideBySide>
        <SideBySide>
          <div style={{ padding: '2vw 6vw', width: '20vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.snooper}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.snooper}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.snooper}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.snooper}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.snooper}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Poison Defense</h1>
            <p>There are 5 standard poison defenses called "Snooper" in the Treachery deck.</p>
            <p>
              Playing this card in your battle plan will defend your leader from poison weapons in your
              opponent's battle plan.
            </p>
            <p>
              These cards can be voiced as "<em>poison defense</em>" or "<em>snooper</em>"
            </p>
            <blockquote>
              <p>He has a second snooper?!</p>
              <p style={{ float: 'right' }}>~ laurens</p>
            </blockquote>
          </Text>
        </SideBySide>
      </Spaced>
    </Fragment>
  );
}

export function KaramaCard() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="small">
          Karama card
        </Title>
        <SideBySide>
          <div style={{ padding: '1vw 2vw', width: '24vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.karama}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.karama}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }} size={1.7}>
            <h1>Karama</h1>
            <p>There are 2 karama cards in the Treachery deck.</p>
            <Outline variant="normal">
              <p>You can play this card in 1 of 3 ways:</p>
              <ol>
                <li>
                  During any phase of the game, you can play this card to cancel/block any{' '}
                  <strong>other</strong> faction's ability listed on their faction sheet.
                </li>
                <li>During bidding phase, make an infinite bid for a card, take the card without paying.</li>
                <li>
                  During <strong>your</strong> shipment and movement turn, your shipment cost is reduced to
                  half of normal. Your payment for this shipment goes to the Spice Bank.
                </li>
              </ol>
            </Outline>
          </Text>
        </SideBySide>
        <Text columns={2} size={1.7}>
          <NonBreaking>
            <h1>Full turn</h1>
            <p>
              Playing a karama to block another faction's advantage will cancel this advantage for the rest of
              the current turn.
            </p>
          </NonBreaking>
          <NonBreaking>
            <Text>
              <Outline variant="example">
                <p>
                  When you play a karama to stop the Atreides bidding prescience advantage, the Atreides can't
                  look at <strong>any</strong> cards that bidding phase.
                </p>
              </Outline>
            </Text>
          </NonBreaking>
        </Text>
        <Text>
          <hr />
        </Text>
        <Text size={1.7}>
          <h1>Karama effects</h1>
          <p>
            On each player's faction sheet each advantage that can be karama'd is denoted by a "*"-token.
            <br />
            On the second page of their faction sheet is described in detail what happens when this ability is
            blocked/cancelled.
          </p>
          <p>
            Certain advantages have a narrow time-window when you can play the karama to block them. This is
            also described on the second page.
          </p>
          <p>
            <b>EXAMPLES:</b>
          </p>
        </Text>
        <Text columns={2}>
          <Outline variant="example">
            <p>
              When playing a karama to stop the Spacing Guild from using their storm order advantage during
              ship and move, you must do so before the Spacing Guild was supposed to take their turn.
            </p>
          </Outline>
          <Outline variant="example">
            <p>
              When playing a karama to stop the Bene Gesserit from using their voice advantage against you,
              you can listen to what their voice is, but must play the karama before proceeding with further
              actions/revealing.
            </p>
          </Outline>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function TruthTranceCard() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="small">
          Truth Trance cards
        </Title>
        <SideBySide>
          <div style={{ padding: '1vw 2vw', width: '24vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.truth_trance}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.truth_trance}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }} size={1.7}>
            <h1>Truth Trance</h1>
            <p>There are 2 truth trance cards in the Treachery deck.</p>
            <p>You can play a Truth Trance card at any time.</p>
            <Outline variant="normal">
              <p>
                Publicly ask one other player a single yes/no question about the game that must be answered
                publicly.
              </p>
              <p>The game pauses until an answer is given.</p>
              <p>The player must answer "yes" or "no" truthfully.</p>
            </Outline>
          </Text>
        </SideBySide>
        <Text columns={2} size={1.7}>
          <h1>The game pauses</h1>
          <p>When a truth trance card is played, no game actions can happen:</p>
          <ul>
            <li>No binding deals can be made during this time.</li>
            <li>No cards can be played, including other Truth Trance cards.</li>
          </ul>
          <h1>Binding future actions</h1>
          <p>
            You can be asked about future actions you will perform.
            <br />
            You must commit to an answer and then you are not allowed to make game actions that would make
            your answer not true.
          </p>
          <p>To be clear: you will be locked into future actions via the answer you give.</p>
          <h1>What questions are allowed?</h1>
          <p>
            Some player discretion is needed, it's possible for extreme toxic play to happen with either
            deliberately unclear questions, or questions that are effectively a card-blanc "you must do
            exactly the thing i decide you must do".
          </p>
          <ul>
            <li>Absolutely, no questions about future truth-trace questions.</li>
            <li>No confusing questions, if you need to explain the question, it's not clear enough.</li>
            <li>No questions about undecidable future events.</li>
          </ul>
          <p>
            If you asked your question and it turns out to be toxic, you must discard your Truth Trance card,
            you do <strong>not</strong> get to ask another question.
          </p>
        </Text>
        <Text columns={2} size={1.7}>
          <NonBreaking>
            <Text>
              <h1>Good examples</h1>
              <Outline variant="example">Do you have Stilgar as a traitor?</Outline>
              <Outline variant="example">
                Will you play a projectile weapon, weirding way as a weapon or a lasgun in the next battle?
              </Outline>
              <Outline variant="example">
                Will you have more than 4 Troop tokens in Arrakeen by the end of your shipment & movement
                turn?
              </Outline>
            </Text>
          </NonBreaking>
          <NonBreaking>
            <Text>
              <h1>Bad examples</h1>
              <Outline variant="example">Will you win both battles?</Outline>
              <Outline variant="example">Is Hasimir Fenring anyone's Traitor?</Outline>
            </Text>
          </NonBreaking>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function TreacheryCards4() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="small">
          Special cards
        </Title>
        <SideBySide>
          <div style={{ padding: '1vw 4vw', width: '22vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.cheap_hero}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.cheap_hero}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.cheap_heroine}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Cheap hero</h1>
            <p>
              There are 3 Cheap Hero cards in the Treachery deck, 2 are called "Cheap Hero", 1 is called
              "Cheap Heroine".
              <br />
              Play this card in your battle-plan <strong>instead of</strong> a leader.
              <br />
              <em>Guild can play it along with a leader disc after having activated their fate.</em>
            </p>
            <p>
              The leader's strength is 0.
              <br />
              The Cheap Hero cannot be called traitor.
            </p>
            <p>
              A Cheap Hero card is always discarded after use. Unless you won with Traitor, in that case you
              can chose to keep or discard.
            </p>
            <p>It's not allowed to voice Cheap Hero, neither positive, nor positive.</p>
            <blockquote>
              <p>I love cheap heroine!</p>
              <p style={{ float: 'right' }}>~ awpteamoose</p>
            </blockquote>
          </Text>
        </SideBySide>
        <SideBySide>
          <div style={{ width: '17vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.weather_control}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Weather Control</h1>
            <p>There's a single Weather Control card in the Treachery deck.</p>
            <p>
              You can play this card during the storm phase only, after the storm calculation is complete, but
              before the storm is moved.
            </p>
            <p>You can move the storm up to 10 sectors forwards.</p>
          </Text>
        </SideBySide>
        <SideBySide>
          <div style={{ width: '17vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.family_atomics}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Family Atomics</h1>
            <p>There's a single Family card in the Treachery deck.</p>
            <p>
              You can play this card during the storm phase only, after the storm calculation is complete (and
              after Weather Control is played), but before the storm is moved.
            </p>
            <p>
              You can only play this card if you have at least 1 Troop token in an territory adjacent or on
              the Shieldwall territory.
              <br />
              If the storm is in the way, you cannot use Family Atomics.
            </p>
            <p>After playing this card it is removed from the game.</p>
            <blockquote>
              <p>KA-BOOOM!</p>
              <p style={{ float: 'right' }}>~ IhasPinecone</p>
            </blockquote>
          </Text>
        </SideBySide>
      </Spaced>
    </Fragment>
  );
}

export function TreacheryCards5() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="small">
          Special cards
        </Title>
        <SideBySide>
          <div style={{ padding: '1vw 4vw', width: '22vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.mercenaries}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.mercenaries}
              </Wrapper>
            </Fan>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Mercenaries</h1>
            <p>
              There are 2 Mercenaries cards in the Treachery deck.
              <br />
              You can play this card in the battle plan, in addition to playing a weapon and a defense.
            </p>
            <p>
              When this card is in your battle plan, it adds 1 battle strength to your battle plan.
              <br />
              In addition you also become the aggressor in battle, and thus win ties.
              <br />
              If both players play Mercenaries, then storm order decides the aggressor.
            </p>
            <p>
              When asked for dial as Atreides battle prescience, you must answer the number of your
              Battlewheel and must also disclose if you are playing Mercenaries.
            </p>
            <p>This card can be voiced as "Mercenaries".</p>
          </Text>
        </SideBySide>
        <SideBySide>
          <div style={{ padding: '1vw 4vw', width: '22vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {card.supplies}
              </Wrapper>
            </Fan>
            <div
              style={{
                padding: '0 6vw',
                width: '14vw',
                marginTop: '-4vw',
                marginLeft: '-2vw',
              }}
            >
              <Fan size={cardSize} spacing={-3}>
                <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                  {card.ernok}
                </Wrapper>
                <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                  {card.trishula}
                </Wrapper>
                <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                  {card.phrine_pen}
                </Wrapper>
                <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                  {card.sup_shield}
                </Wrapper>
              </Fan>
            </div>
          </div>
          <Text style={{ flex: 1 }}>
            <h1>Supplies!</h1>
            <p>There's 1 Supplies! card in the Treachery deck.</p>
            <p>
              You can play this card at any time, within the following constraint:
              <br />
              You cannot play this between the time-window of Voice and battle plan reveal.
              <br />
              Effectively this means you are allowed to play it at start of battle, before any battle
              advantages are used.
            </p>
            <p>
              When you play the Supplies! card, you discard it and take the 4 Supplies! Treachery cards from
              the supply, into your hand.
              <br />
              These special Treachery cards to not count towards your hand limit.
            </p>
            <p>The Supply! Treachery cards cannot be spited by Harkonnen.</p>
            <p>The Supply! Treachery cards can be voiced, like regular Treachery cards.</p>
            <blockquote>
              <p>Are you supplies!-ed?</p>
              <p style={{ float: 'right' }}>~ DragonJade</p>
            </blockquote>
          </Text>
        </SideBySide>
      </Spaced>
    </Fragment>
  );
}
