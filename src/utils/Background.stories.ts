import type { Meta, StoryObj } from '@storybook/react';
import { Background } from './Background';

const meta = {
  component: Background,
} satisfies Meta<typeof Background>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Duo1: Story = {
  args: {
    image: 'image/texture/021.jpg',
    colors: ['red', 'blue'],
    opacity: 0,
    strength: 0,
  },
};

export const Duo2: Story = {
  args: {
    image: 'image/texture/021.jpg',
    colors: ['red', 'blue'],
    opacity: 120,
    strength: 0,
  },
};

export const Duo3: Story = {
  args: {
    image: 'image/texture/011.jpg',
    colors: ['hotpink', 'deepskyblue'],
    opacity: 70,
    strength: -100,
  },
};

export const Linear1: Story = {
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
};
export const Linear2: Story = {
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
};
export const Linear3: Story = {
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
};
export const Radial1: Story = {
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
};

export const Radial2: Story = {
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
};

export const Atreides: Story = {
  args: {
    image: 'image/texture/015.jpg',
    colors: ['#4B4C0D', '#262B04'],
    opacity: 50,
    strength: 0,
  },
};

export const Ixian: Story = {
  args: {
    image: 'image/texture/004.jpg',
    colors: ['#D4BE6B', '#A88E2A'],
    opacity: 20,
    strength: 0,
  },
};

export const BeneGesserit: Story = {
  args: {
    image: 'image/texture/020.jpg',
    colors: ['#3A4491', '#101D65'],
    opacity: 120,
    strength: -100,
  },
};

export const BeneTleilaxu: Story = {
  args: {
    image: 'image/texture/031.jpg',
    colors: ['#6E008F', '#2D006B'],
    opacity: 120,
    strength: -80,
  },
};

export const Emperor: Story = {
  args: {
    image: 'image/texture/030.jpg',
    colors: ['#A40008', '#8D0006'],
    opacity: -50,
    strength: 0,
  },
};

export const Fremen: Story = {
  args: {
    image: 'image/texture/054.jpg',
    colors: ['#F6A834', '#CF7317'],
    opacity: 20,
    strength: -100,
  },
};

export const Guild: Story = {
  args: {
    image: 'image/texture/007.jpg',
    colors: ['#D83C13', '#B41C0C'],
    opacity: 100,
    strength: -100,
  },
};

export const Iduali: Story = {
  args: {
    image: 'image/texture/009.jpg',
    colors: ['#5B2802', '#470200'],
    opacity: 200,
    strength: -100,
  },
};

export const Harkonnen: Story = {
  args: {
    image: 'image/texture/059.jpg',
    colors: ['#191311', '#000000'],
    opacity: 40,
    strength: -10,
  },
};

export const Moritani: Story = {
  args: {
    image: 'image/texture/057.jpg',
    colors: ['#0B4D64', '#05333D'],
    opacity: 1040,
    strength: -60,
  },
};

export const Ginaz: Story = {
  args: {
    image: 'image/texture/056.jpg',
    colors: ['#425A61', '#273739'],
    opacity: 1400,
    strength: -30,
  },
};

export const Landsraad: Story = {
  args: {
    image: 'image/texture/036.jpg',
    colors: ['#520E2D', '#410D25'],
    opacity: 400,
    strength: -100,
  },
};

export const Richese: Story = {
  args: {
    image: 'image/texture/029.jpg',
    colors: ['#B5B0A5', '#7C786D'],
    opacity: 200,
    strength: -65,
  },
};

export const Ecaz: Story = {
  args: {
    image: 'image/texture/044.jpg',
    colors: ['#7F3D81', '#581858'],
    opacity: 300,
    strength: -75,
  },
};

export const CHOAM: Story = {
  args: {
    image: 'image/texture/021.jpg',
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
    opacity: 0,
    strength: 0,
  },
};

export const Discovery: Story = {
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
};

export const Hiereg: Story = {
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
};

export const Terror: Story = {
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
};

export const Spice: Story = {
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
};

export const TechTeal: Story = {
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
};

export const TechPurple: Story = {
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
};

export const TechYellow: Story = {
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
};

export const TechRed: Story = {
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
};

export const TechMaroon: Story = {
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
    opacity: 100,
    strength: 0,
  },
};

export const TechOrange: Story = {
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
};

export const TechBlue: Story = {
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
};

export const TechPink: Story = {
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
};

export const TechWhite: Story = {
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
};

export const Moss: Story = {
  args: {
    image: 'image/texture/009.jpg',
    colors: ['#4E431D', '#31260D'],
    opacity: 200,
    strength: 0,
  },
};

export const Traitor: Story = {
  args: {
    image: 'image/texture/075.jpg',
    colors: ['#3D3438', '#040404'],
    opacity: 0,
    strength: -100,
  },
};

export const Alliance: Story = {
  args: {
    image: 'image/texture/075.jpg',
    colors: ['#4D4724', '#302B16'],
    opacity: 50,
    strength: -100,
  },
};

export const Weapon: Story = {
  args: {
    image: 'image/texture/075.jpg',
    colors: ['#8F2C1C', '#621D1A'],
    opacity: 50,
    strength: -100,
  },
};

export const Defense: Story = {
  args: {
    image: 'image/texture/075.jpg',
    colors: ['#29335E', '#0A153C'],
    opacity: 60,
    strength: -100,
  },
};

export const Storm: Story = {
  args: {
    image: 'image/texture/075.jpg',
    colors: ['#582705', '#875818'],
    opacity: 50,
    strength: 0,
  },
};

export const Spice2: Story = {
  args: {
    image: 'image/texture/075.jpg',
    colors: ['#7E6238', '#593D16'],
    opacity: 30,
    strength: -100,
  },
};

export const Spice3: Story = {
  args: {
    image: 'image/texture/075.jpg',
    colors: ['#3C6066', '#2A4046'],
    opacity: 80,
    strength: -100,
  },
};

export const Special: Story = {
  args: {
    image: 'image/texture/075.jpg',
    colors: ['#474620', '#27260C'],
    opacity: 60,
    strength: -100,
  },
};

export const Worthless: Story = {
  args: {
    image: 'image/texture/075.jpg',
    colors: ['#887849', '#6F6034'],
    opacity: 80,
    strength: -100,
  },
};

export const Fate: Story = {
  args: {
    image: 'image/texture/075.jpg',
    colors: ['#7E275A', '#C54E90'],
    opacity: 80,
    strength: -100,
  },
};

export const StripedWeapon: Story = {
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
};

export const StripedDefense: Story = {
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
};

export const StripedSpecial: Story = {
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
};

export const StripedWorthless: Story = {
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
};

export const StripedFate: Story = {
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
};
