import * as About from './rulebook_pages/About';
import * as Cards from './rulebook_pages/Cards';
import * as Deals from './rulebook_pages/Deals';
import * as Factions from './rulebook_pages/Factions';
import * as FAQ from './rulebook_pages/Faq';
import * as Introduction from './rulebook_pages/Introduction';
import * as Misc from './rulebook_pages/MiscRules';
import * as Phases from './rulebook_pages/Phases';
import * as Setup from './rulebook_pages/Setup';
import * as TechTokens from './rulebook_pages/TechTokens';
import styles from './Rulebook.module.css';
import { Page } from './Page';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Page,
  args: {
    background: true,
    pageNumber: 0,
    ratio: Math.sqrt(2),
  },
  parameters: {
    cover: (
      <div className={styles.cover}>
        <h1>A GAME OF CONQUEST, DIPLOMACY & BETRAYAL</h1>
        <img src="/page/dune_logo.svg" />
        <h2>THE SPICE MUST FLOW</h2>
        <div></div>
      </div>
    ),
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome = {
  args: {
    children: <About.Welcome />,
  },
} satisfies Story;

export const Intro = {
  args: {
    children: <Introduction.Board />,
  },
} satisfies Story;

export const Sectors = {
  args: {
    children: <Introduction.Sectors />,
  },
} satisfies Story;

export const Strongholds = {
  args: {
    children: <Introduction.Strongholds />,
  },
} satisfies Story;

export const CardsIntro = {
  args: {
    children: <Cards.Intro />,
  },
} satisfies Story;

export const TreacheryCards1 = {
  args: {
    children: <Cards.TreacheryCards1 />,
  },
} satisfies Story;

export const TreacheryCards2 = {
  args: {
    children: <Cards.TreacheryCards2 />,
  },
} satisfies Story;

export const TreacheryCards3 = {
  args: {
    children: <Cards.TreacheryCards3 />,
  },
} satisfies Story;

export const KaramaCard = {
  args: {
    children: <Cards.KaramaCard />,
  },
} satisfies Story;

export const TruthTranceCard = {
  args: {
    children: <Cards.TruthTranceCard />,
  },
} satisfies Story;

export const TreacheryCards4 = {
  args: {
    children: <Cards.TreacheryCards4 />,
  },
} satisfies Story;

export const TreacheryCards5 = {
  args: {
    children: <Cards.TreacheryCards5 />,
  },
} satisfies Story;

export const TechTokens1 = {
  args: {
    children: <TechTokens.About />,
  },
} satisfies Story;

export const MiscRules = {
  args: {
    children: <Misc.MiscRules />,
  },
} satisfies Story;

export const Factions1 = {
  args: {
    children: <Factions.Factions1 />,
  },
} satisfies Story;

export const Factions2 = {
  args: {
    children: <Factions.Factions2 />,
  },
} satisfies Story;

export const Factions3 = {
  args: {
    children: <Factions.Factions3 />,
  },
} satisfies Story;

export const Setup1 = {
  args: {
    children: <Setup.Drafting />,
  },
} satisfies Story;

export const Setup2 = {
  args: {
    children: <Setup.Layout />,
  },
} satisfies Story;

export const Setup3 = {
  args: {
    children: <Setup.StartingPhases1 />,
  },
} satisfies Story;

export const Setup4 = {
  args: {
    children: <Setup.StartingPhases2 />,
  },
} satisfies Story;

export const Setup5 = {
  args: {
    children: <Setup.StartingPhases3 />,
  },
} satisfies Story;

export const PhasesIntro = {
  args: {
    children: <Phases.About />,
  },
} satisfies Story;

export const PhasesNexus = {
  args: {
    children: <Phases.Nexus />,
  },
} satisfies Story;

export const PhasesFate = {
  args: {
    children: <Phases.Fate />,
  },
} satisfies Story;

export const PhasesBidding = {
  args: {
    children: <Phases.Bidding />,
  },
} satisfies Story;

export const PhasesRevival = {
  args: {
    children: <Phases.Revival />,
  },
} satisfies Story;

export const PhasesSpice = {
  args: {
    children: <Phases.Spice />,
  },
} satisfies Story;

export const PhasesMovement = {
  args: {
    children: <Phases.Movement />,
  },
} satisfies Story;

export const PhasesBattle = {
  args: {
    children: <Phases.Battle />,
  },
} satisfies Story;

export const PhasesBattleResolve = {
  args: {
    children: <Phases.BattleResolve />,
  },
} satisfies Story;

export const PhasesBattleOrder = {
  args: {
    children: <Phases.BattleOrder />,
  },
} satisfies Story;

export const PhasesMentat = {
  args: {
    children: <Phases.Mentat />,
  },
} satisfies Story;

export const PhasesStorm = {
  args: {
    children: <Phases.Storm />,
  },
} satisfies Story;

export const Deals1 = {
  args: {
    children: <Deals.About />,
  },
} satisfies Story;

export const FAQ1 = {
  args: {
    children: <FAQ.P1 />,
  },
} satisfies Story;

export const AboutDreams = {
  args: {
    children: <About.Dreams />,
  },
} satisfies Story;
