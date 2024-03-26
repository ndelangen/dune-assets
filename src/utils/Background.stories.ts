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
