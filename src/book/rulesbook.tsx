// import coverA from '../asset/cover/cover-a.svg';
// import coverB from '../asset/cover/cover-b.svg';
// import coverC from '../asset/cover/cover-c.svg';
// import coverD from '../asset/cover/cover-d.svg';
// import coverE from '../../asset/cover/cover-e.svg';
// import { Cover } from '../objects/book/cover';
import { About_Dreams, About_Welcome } from './rulebook_pages/About';
import {
  Cards_Intro,
  KaramaCard,
  TreacheryCards1,
  TreacheryCards2,
  TreacheryCards3,
  TreacheryCards4,
  TreacheryCards5,
  TruthTranceCard,
} from './rulebook_pages/Cards';
import { Deals } from './rulebook_pages/Deals';
import { Factions1, Factions2, Factions3 } from './rulebook_pages/Factions';
import { Faq_1 } from './rulebook_pages/Faq';
import { Intro, Sectors, Strongholds } from './rulebook_pages/Introduction';
import { MiscRules } from './rulebook_pages/MiscRules';
import {
  Phases_Battle,
  Phases_BattleOrder,
  Phases_BattleResolve,
  Phases_Bidding,
  Phases_Fate,
  Phases_Intro,
  Phases_Mentat,
  Phases_Movement,
  Phases_Nexus,
  Phases_Revival,
  Phases_Spice,
  Phases_Storm,
} from './rulebook_pages/Phases';
import { Setup_1, Setup_2, Setup_3, Setup_4, Setup_5 } from './rulebook_pages/Setup';
import { TechTokens } from './rulebook_pages/TechTokens';

export const ratio = Math.sqrt(2);
// export const cover = <Cover background={coverE} offset={80} />;
export const cover = <div></div>;
export const pages = [
  <About_Welcome />,
  <Intro />,
  <Sectors />,
  <Strongholds />,
  <Cards_Intro />,
  <TreacheryCards1 />,
  <TreacheryCards2 />,
  <TreacheryCards3 />,
  <KaramaCard />,
  <TruthTranceCard />,
  <TreacheryCards4 />,
  <TreacheryCards5 />,
  <TechTokens />,
  <MiscRules />,
  <Factions1 />,
  <Factions2 />,
  <Factions3 />,
  <Setup_1 />,
  <Setup_2 />,
  <Setup_3 />,
  <Setup_4 />,
  <Setup_5 />,
  <Phases_Intro />,
  <Phases_Nexus />,
  <Phases_Fate />,
  <Phases_Bidding />,
  <Phases_Revival />,
  <Phases_Spice />,
  <Phases_Movement />,
  <Phases_Battle />,
  <Phases_BattleResolve />,
  <Phases_BattleOrder />,
  <Phases_Mentat />,
  <Phases_Storm />,
  <Deals />,
  <Faq_1 />,
  <About_Dreams />,
];
