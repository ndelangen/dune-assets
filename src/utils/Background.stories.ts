import preview from '../../.storybook/preview';
import { Background } from './Background';

const meta = preview.meta({
  component: Background,
});

export const Duo1 = meta.story({
  args: {
    image: 'image/texture/021.jpg',
    colors: ['red', 'blue'],
    opacity: 0,
    strength: 0,
  },
});

export const Duo2 = meta.story({
  args: {
    image: 'image/texture/021.jpg',
    colors: ['red', 'blue'],
    opacity: 120,
    strength: 0,
  },
});

export const Duo3 = meta.story({
  args: {
    image: 'image/texture/011.jpg',
    colors: ['hotpink', 'deepskyblue'],
    opacity: 70,
    strength: -100,
  },
});

export const Linear1 = meta.story({
  args: {
    image: 'image/texture/011.jpg',
    colors: [
      {
        type: 'linear',
        angle: 45,
        stops: [
          ['#ff0000', 0],
          ['#4444ff', 1],
        ],
      },
      'orange',
    ],
    opacity: 70,
    strength: -100,
  },
});
export const Linear2 = meta.story({
  args: {
    image: 'image/texture/011.jpg',
    colors: [
      {
        type: 'linear',
        angle: 45,
        stops: [
          ['#ff0000', 0.5],
          ['#4444ff', 0.5],
        ],
      },
      'orange',
    ],
    opacity: 70,
    strength: -100,
  },
});
export const Linear3 = meta.story({
  args: {
    image: 'image/texture/052.jpg',
    colors: [
      'blue',
      {
        type: 'linear',
        angle: 90,
        stops: [
          ['#000000', 0.5],
          ['#00ffff', 0.5],
        ],
      },
    ],
    opacity: 40,
    strength: -100,
  },
});
export const Radial1 = meta.story({
  args: {
    image: 'image/texture/052.jpg',
    colors: [
      'blue',
      {
        type: 'radial',
        stops: [
          ['#000000', 0.5],
          ['#00ffff', 0.5],
          ['#ffffff', 1],
        ],
      },
    ],
    opacity: 40,
    strength: -100,
  },
});

export const Radial2 = meta.story({
  args: {
    image: 'image/texture/054.jpg',
    colors: [
      'white',
      {
        type: 'radial',
        x: 50,
        y: 100,
        r: 100,
        stops: [
          ['#FF9999', 0],
          ['#FFCC99', 0.2],
          ['#FFFF99', 0.4],
          ['#CCFF99', 0.6],
          ['#99FF99', 0.8],
          ['#99FFFF', 1],
        ],
      },
    ],
    opacity: 150,
    strength: -100,
  },
});

export const Atreides = meta.story({
  args: {
    image: 'image/texture/015.jpg',
    colors: ['#4B4C0D', '#262B04'],
    opacity: 50,
    strength: 0,
  },
});

export const Ixian = meta.story({
  args: {
    image: 'image/texture/004.jpg',
    colors: ['#D4BE6B', '#A88E2A'],
    opacity: 20,
    strength: 0,
  },
});

export const BeneGesserit = meta.story({
  args: {
    image: 'image/texture/020.jpg',
    colors: ['#3A4491', '#101D65'],
    opacity: 150,
    strength: -100,
  },
});

export const BeneTleilaxu = meta.story({
  args: {
    image: 'image/texture/031.jpg',
    colors: ['#6E008F', '#2D006B'],
    opacity: 120,
    strength: -80,
  },
});

export const Emperor = meta.story({
  args: {
    image: 'image/texture/030.jpg',
    colors: ['#A40008', '#8D0006'],
    opacity: -150,
    strength: 0,
  },
});

export const Fremen = meta.story({
  args: {
    image: 'image/texture/054.jpg',
    colors: ['#F6A834', '#CF7317'],
    opacity: 120,
    strength: -100,
  },
});

export const Guild = meta.story({
  args: {
    image: 'image/texture/007.jpg',
    colors: ['#D83C13', '#B41C0C'],
    opacity: 400,
    strength: -100,
  },
});

export const Iduali = meta.story({
  args: {
    image: 'image/texture/009.jpg',
    colors: ['#5B2802', '#470200'],
    opacity: 100,
    strength: -100,
  },
});

export const Harkonnen = meta.story({
  args: {
    image: 'image/texture/059.jpg',
    colors: ['#191311', '#000000'],
    opacity: 140,
    strength: -10,
  },
});

export const Moritani = meta.story({
  args: {
    image: 'image/texture/057.jpg',
    colors: ['#0B4D64', '#05333D'],
    opacity: 1040,
    strength: -67,
  },
});

export const Ginaz = meta.story({
  args: {
    image: 'image/texture/056.jpg',
    colors: ['#425A61', '#273739'],
    opacity: 1400,
    strength: -10,
  },
});

export const Landsraad = meta.story({
  args: {
    image: 'image/texture/036.jpg',
    colors: ['#520E2D', '#410D25'],
    opacity: 400,
    strength: -100,
  },
});

export const Richese = meta.story({
  args: {
    image: 'image/texture/029.jpg',
    colors: ['#B5B0A5', '#7C786D'],
    opacity: 200,
    strength: -77,
  },
});

export const Ecaz = meta.story({
  args: {
    image: 'image/texture/044.jpg',
    colors: ['#7F3D81', '#581858'],
    opacity: 250,
    strength: -85,
  },
});

export const CHOAM = meta.story({
  args: {
    image: 'image/texture/075.jpg',
    colors: [
      {
        type: 'linear',
        angle: 90,
        stops: [
          ['#EB0220', 0.5],
          ['#252527', 0.5],
        ],
      },
      {
        type: 'linear',
        angle: 90,
        stops: [
          ['#B90010', 0.5],
          ['#0C0C0C', 0.5],
        ],
      },
    ],
    opacity: 100,
    strength: 0,
  },
});

export const Discovery = meta.story({
  args: {
    image: 'image/texture/052.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#A57B37', 0.35],
          ['#392C1A', 0.35],
          ['#392C1A', 1],
        ],
      },
    ],
    opacity: 40,
    strength: -100,
  },
});

export const Hiereg = meta.story({
  args: {
    image: 'image/texture/052.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#392C1A', 0.35],
          ['#A57B37', 0.35],
          ['#A57B37', 1],
        ],
      },
    ],
    opacity: 40,
    strength: -100,
  },
});

export const Terror = meta.story({
  args: {
    image: 'image/texture/038.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#24577A', 0.35],
          ['#418CB1', 0.35],
          ['#66C0EB', 1],
        ],
      },
    ],
    opacity: 40,
    strength: 0,
  },
});

export const Spice = meta.story({
  args: {
    image: 'image/texture/001.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#DE9E31', 0.35],
          ['#DE9E31', 0.35],
          ['#FCFAAD', 1],
        ],
      },
    ],
    opacity: 40,
    strength: 0,
  },
});

export const TechTeal = meta.story({
  args: {
    image: 'image/texture/003.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#C1C091', 0.3],
          ['#8A8B56', 0.3],
          ['#7D7D49', 1],
        ],
      },
    ],
    opacity: 100,
    strength: 0,
  },
});

export const TechPurple = meta.story({
  args: {
    image: 'image/texture/003.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#79529F', 0.3],
          ['#4F207D', 0.3],
          ['#36165E', 1],
        ],
      },
    ],
    opacity: 100,
    strength: 0,
  },
});

export const TechYellow = meta.story({
  args: {
    image: 'image/texture/003.jpg',
    colors: [
      '#5E3C16',
      {
        type: 'radial',
        stops: [
          ['#E6B05D', 0.3],
          ['#E5A22A', 0.3],
          ['#A46E26', 1],
        ],
      },
    ],
    opacity: 100,
    strength: 0,
  },
});

export const TechSun = meta.story({
  args: {
    image: 'image/texture/003.jpg',
    colors: [
      '#7E0002',
      {
        type: 'radial',
        stops: [
          ['#DE9E31', 0.35],
          ['#FCFAAD', 0.35],
          ['#DE9E31', 1],
        ],
      },
    ],
    opacity: 300,
    strength: 200,
  },
});

export const TechRed = meta.story({
  args: {
    image: 'image/texture/003.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#8D272B', 0.3],
          ['#7E0002', 0.3],
          ['#620003', 1],
        ],
      },
    ],
    opacity: 100,
    strength: 0,
  },
});

export const TechMaroon = meta.story({
  args: {
    image: 'image/texture/003.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#612A2A', 0.3],
          ['#4C0002', 0.3],
          ['#2E0002', 1],
        ],
      },
    ],
    opacity: 500,
    strength: 50,
  },
});

export const TechOrange = meta.story({
  args: {
    image: 'image/texture/003.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#D83C13', 0.3],
          ['#B41C0C', 0.3],
          ['#B41C0C', 1],
        ],
      },
    ],
    opacity: 100,
    strength: 0,
  },
});

export const TechBlue = meta.story({
  args: {
    image: 'image/texture/003.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#3A4491', 0.3],
          ['#101D65', 0.3],
          ['#101D65', 1],
        ],
      },
    ],
    opacity: 100,
    strength: 0,
  },
});

export const TechPink = meta.story({
  args: {
    image: 'image/texture/003.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#520E2D', 0.3],
          ['#410D25', 0.3],
          ['#410D25', 1],
        ],
      },
    ],
    opacity: 100,
    strength: 0,
  },
});

export const TechWhite = meta.story({
  args: {
    image: 'image/texture/003.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#888888', 0.3],
          ['#333333', 0.3],
          ['#444444', 1],
        ],
      },
    ],
    opacity: 100,
    strength: 0,
  },
});

export const TechGreen = meta.story({
  args: {
    image: 'image/texture/003.jpg',
    colors: [
      'black',
      {
        type: 'radial',
        stops: [
          ['#75A255', 0.3],
          ['#47682C', 0.3],
          ['#4D802F', 1],
        ],
      },
    ],
    opacity: 100,
    strength: 0,
  },
});

export const Moss = meta.story({
  args: {
    image: 'image/texture/009.jpg',
    colors: ['#4E431D', '#31260D'],
    opacity: 200,
    strength: 0,
  },
});

export const Traitor = meta.story({
  args: {
    image: 'image/texture/082.jpg',
    colors: ['#3D3438', '#040404'],
    opacity: 0,
    strength: -100,
  },
});

export const Alliance = meta.story({
  args: {
    image: 'image/texture/082.jpg',
    colors: ['#4D4724', '#302B16'],
    opacity: 50,
    strength: -100,
  },
});

export const Weapon = meta.story({
  args: {
    image: 'image/texture/082.jpg',
    colors: ['#8F2C1C', '#621D1A'],
    opacity: 50,
    strength: -100,
  },
});

export const Defense = meta.story({
  args: {
    image: 'image/texture/082.jpg',
    colors: ['#29335E', '#0A153C'],
    opacity: 60,
    strength: -100,
  },
});

export const Storm = meta.story({
  args: {
    image: 'image/texture/082.jpg',
    colors: ['#582705', '#875818'],
    opacity: 50,
    strength: 0,
  },
});

export const Spice2 = meta.story({
  args: {
    image: 'image/texture/082.jpg',
    colors: ['#7A4421', '#56210B'],
    opacity: 30,
    strength: -100,
  },
});

export const Spice3 = meta.story({
  args: {
    image: 'image/texture/082.jpg',
    colors: ['#3C6066', '#2A4046'],
    opacity: 80,
    strength: -100,
  },
});

export const Special = meta.story({
  args: {
    image: 'image/texture/082.jpg',
    colors: ['#474620', '#27260C'],
    opacity: 60,
    strength: -100,
  },
});

export const Worthless = meta.story({
  args: {
    image: 'image/texture/082.jpg',
    colors: ['#887849', '#6F6034'],
    opacity: 80,
    strength: -100,
  },
});

export const Fate = meta.story({
  args: {
    image: 'image/texture/082.jpg',
    colors: ['#7E275A', '#C54E90'],
    opacity: 80,
    strength: -100,
  },
});

export const StripedWeapon = meta.story({
  args: {
    image: 'image/texture/076.jpg',
    colors: [
      {
        type: 'linear',
        angle: 90,
        stops: [
          ['#CB8E4A', 0],
          ['#F3E086', 1],
        ],
      },
      {
        type: 'linear',
        angle: 120,
        stops: [
          ['#CD7B38', 0.3],
          ['#E9CA70', 1],
        ],
      },
    ],
    opacity: 220,
    strength: 0,
  },
});

export const StripedDefense = meta.story({
  args: {
    image: 'image/texture/076.jpg',
    colors: [
      {
        type: 'linear',
        angle: 90,
        stops: [
          ['#757DAC', 0],
          ['#CEDDF0', 1],
        ],
      },
      {
        type: 'linear',
        angle: 120,
        stops: [
          ['#58608F', 0.3],
          ['#B8BFDB', 1],
        ],
      },
    ],
    opacity: 220,
    strength: 0,
  },
});

export const StripedSpecial = meta.story({
  args: {
    image: 'image/texture/076.jpg',
    colors: [
      {
        type: 'linear',
        angle: 90,
        stops: [
          ['#9A9256', 0],
          ['#EEECA6', 1],
        ],
      },
      {
        type: 'linear',
        angle: 120,
        stops: [
          ['#827E43', 0.3],
          ['#DEDB91', 1],
        ],
      },
    ],
    opacity: 220,
    strength: 0,
  },
});

export const StripedWorthless = meta.story({
  args: {
    image: 'image/texture/076.jpg',
    colors: [
      {
        type: 'linear',
        angle: 90,
        stops: [
          ['#A9945D', 0],
          ['#F5EFB4', 1],
        ],
      },
      {
        type: 'linear',
        angle: 120,
        stops: [
          ['#997E45', 0.3],
          ['#D9CC91', 1],
        ],
      },
    ],
    opacity: 220,
    strength: 0,
  },
});

export const StripedFate = meta.story({
  args: {
    image: 'image/texture/076.jpg',
    colors: [
      {
        type: 'linear',
        angle: 90,
        stops: [
          ['#C25489', 0],
          ['#FB82CE', 1],
        ],
      },
      {
        type: 'linear',
        angle: 120,
        stops: [
          ['#721D48', 0.3],
          ['#DE6BAD', 1],
        ],
      },
    ],
    opacity: 220,
    strength: 0,
  },
});

export const StripedAlliance = meta.story({
  args: {
    image: 'image/texture/076.jpg',
    colors: [
      {
        type: 'linear',
        angle: 90,
        stops: [
          ['#CBB955', 0],
          ['#F8F1A4', 1],
        ],
      },
      {
        type: 'linear',
        angle: 120,
        stops: [
          ['#B2A03F', 0.3],
          ['#E9E175', 1],
        ],
      },
    ],
    opacity: 220,
    strength: 0,
  },
});

export const StripedSpice = meta.story({
  args: {
    image: 'image/texture/076.jpg',
    colors: [
      {
        type: 'linear',
        angle: 90,
        stops: [
          ['#AD8E49', 0],
          ['#C3AB77', 1],
        ],
      },
      {
        type: 'linear',
        angle: 120,
        stops: [
          ['#A28046', 0.3],
          ['#BAA26D', 1],
        ],
      },
    ],
    opacity: 220,
    strength: 0,
  },
});
