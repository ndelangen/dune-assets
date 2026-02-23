import preview from '../../../.storybook/preview';
import * as About from './About';
import * as Cards from './Cards';
import * as Deals from './Deals';
import * as Factions from './Factions';
import * as FAQ from './Faq';
import * as Introduction from './Introduction';
import * as Misc from './MiscRules';
import * as Phases from './Phases';
import * as Setup from './Setup';
import * as TechTokens from './TechTokens';
import styles from '../Rulebook.module.css';
import { Page } from '../utils/Page';

const meta = preview.meta({
  title: 'Book/Pages/Dreamrules',
  component: Page,
  args: {
    background: true,
    pageNumber: 0,
    ratio: Math.sqrt(2),
  },
  globals: {
    viewport: {
      value: 'page',
    },
  },
  parameters: {
    cover: (
      <div className={styles.cover}>
        <h1>A GAME OF CONQUEST, DIPLOMACY & BETRAYAL</h1>
        <img src='/page/dune_logo.svg' alt='Dune logo' />
        <h2>THE SPICE MUST FLOW</h2>
        <div></div>
      </div>
    ),
  },
});

export default meta;

export const Welcome = meta.story({
  args: {
    children: <About.Welcome />,
  },
});

export const Intro = meta.story({
  args: {
    children: <Introduction.Board />,
  },
});

export const Sectors = meta.story({
  args: {
    children: <Introduction.Sectors />,
  },
});

export const Strongholds = meta.story({
  args: {
    children: <Introduction.Strongholds />,
  },
});

export const CardsIntro = meta.story({
  args: {
    children: <Cards.Intro />,
  },
});

export const TreacheryCards1 = meta.story({
  args: {
    children: <Cards.TreacheryCards1 />,
  },
});

export const TreacheryCards2 = meta.story({
  args: {
    children: <Cards.TreacheryCards2 />,
  },
});

export const TreacheryCards3 = meta.story({
  args: {
    children: <Cards.TreacheryCards3 />,
  },
});

export const KaramaCard = meta.story({
  args: {
    children: <Cards.KaramaCard />,
  },
});

export const TruthTranceCard = meta.story({
  args: {
    children: <Cards.TruthTranceCard />,
  },
});

export const TreacheryCards4 = meta.story({
  args: {
    children: <Cards.TreacheryCards4 />,
  },
});

export const TreacheryCards5 = meta.story({
  args: {
    children: <Cards.TreacheryCards5 />,
  },
});

export const TechTokens1 = meta.story({
  args: {
    children: <TechTokens.About />,
  },
});

export const MiscRules = meta.story({
  args: {
    children: <Misc.MiscRules />,
  },
});

export const Factions1 = meta.story({
  args: {
    children: <Factions.Factions1 />,
  },
});

export const Factions2 = meta.story({
  args: {
    children: <Factions.Factions2 />,
  },
});

export const Factions3 = meta.story({
  args: {
    children: <Factions.Factions3 />,
  },
});

export const Setup1 = meta.story({
  args: {
    children: <Setup.Drafting />,
  },
});

export const Setup2 = meta.story({
  args: {
    children: <Setup.Layout />,
  },
});

export const Setup3 = meta.story({
  args: {
    children: <Setup.StartingPhases1 />,
  },
});

export const Setup4 = meta.story({
  args: {
    children: <Setup.StartingPhases2 />,
  },
});

export const Setup5 = meta.story({
  args: {
    children: <Setup.StartingPhases3 />,
  },
});

export const PhasesIntro = meta.story({
  args: {
    children: <Phases.About />,
  },
});

export const PhasesNexus = meta.story({
  args: {
    children: <Phases.Nexus />,
  },
});

export const PhasesFate = meta.story({
  args: {
    children: <Phases.Fate />,
  },
});

export const PhasesBidding = meta.story({
  args: {
    children: <Phases.Bidding />,
  },
});

export const PhasesRevival = meta.story({
  args: {
    children: <Phases.Revival />,
  },
});

export const PhasesSpice = meta.story({
  args: {
    children: <Phases.Spice />,
  },
});

export const PhasesMovement = meta.story({
  args: {
    children: <Phases.Movement />,
  },
});

export const PhasesBattle = meta.story({
  args: {
    children: <Phases.Battle />,
  },
});

export const PhasesBattleResolve = meta.story({
  args: {
    children: <Phases.BattleResolve />,
  },
});

export const PhasesBattleOrder = meta.story({
  args: {
    children: <Phases.BattleOrder />,
  },
});

export const PhasesMentat = meta.story({
  args: {
    children: <Phases.Mentat />,
  },
});

export const PhasesStorm = meta.story({
  args: {
    children: <Phases.Storm />,
  },
});

export const Deals1 = meta.story({
  args: {
    children: <Deals.About />,
  },
});

export const FAQ1 = meta.story({
  args: {
    children: <FAQ.P1 />,
  },
});

export const AboutDreams = meta.story({
  args: {
    children: <About.Dreams />,
  },
});
