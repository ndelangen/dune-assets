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
