import { Meta, StoryObj } from '@storybook/react-vite';
import { Fan } from './Fan';
import { FC, PropsWithChildren } from 'react';
import { card } from '../data/sizes';

const squareSize = {
  width: 200,
  height: 200,
};

const DemoBlock: FC<PropsWithChildren<{ color: string; width?: number; height?: number }>> = ({
  children,
  color = 'lightgrey',
  width = card.width,
  height = card.height,
}) => (
  <div
    style={{
      width,
      height,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: `3px solid rgba(0, 0, 0, 0.5)`,
      borderRadius: 18,
      background: color,
      color: 'black',
      boxSizing: 'border-box',
    }}
  >
    {children}
  </div>
);

const meta = {
  component: Fan,
  args: {
    size: card,
    children: [],
  },
} satisfies Meta<typeof Fan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty = {
  args: {
    size: card,
    children: [],
  },
} satisfies Story;

export const Default = {
  args: {
    size: card,
    children: [
      <DemoBlock key="1" color="red">
        1
      </DemoBlock>,
      <DemoBlock key="2" color="orange">
        2
      </DemoBlock>,
      <DemoBlock key="3" color="yellow">
        3
      </DemoBlock>,
      <DemoBlock key="4" color="green">
        4
      </DemoBlock>,
      <DemoBlock key="5" color="blue">
        5
      </DemoBlock>,
    ],
  },
} satisfies Story;

export const Size = {
  args: {
    size: squareSize,
    children: [
      <DemoBlock key="1" color="red" {...squareSize}>
        1
      </DemoBlock>,
      <DemoBlock key="2" color="orange" {...squareSize}>
        2
      </DemoBlock>,
      <DemoBlock key="3" color="yellow" {...squareSize}>
        3
      </DemoBlock>,
      <DemoBlock key="4" color="green" {...squareSize}>
        4
      </DemoBlock>,
      <DemoBlock key="5" color="blue" {...squareSize}>
        5
      </DemoBlock>,
    ],
  },
} satisfies Story;

export const Spacing = {
  args: {
    size: squareSize,
    spacing: 10,
    children: [
      <DemoBlock key="1" color="red" {...squareSize}>
        1
      </DemoBlock>,
      <DemoBlock key="2" color="orange" {...squareSize}>
        2
      </DemoBlock>,
      <DemoBlock key="3" color="yellow" {...squareSize}>
        3
      </DemoBlock>,
      <DemoBlock key="4" color="green" {...squareSize}>
        4
      </DemoBlock>,
      <DemoBlock key="5" color="blue" {...squareSize}>
        5
      </DemoBlock>,
    ],
  },
} satisfies Story;

export const SpacingNegative = {
  args: {
    size: squareSize,
    spacing: -10,
    children: [
      <DemoBlock key="1" color="red" {...squareSize}>
        1
      </DemoBlock>,
      <DemoBlock key="2" color="orange" {...squareSize}>
        2
      </DemoBlock>,
      <DemoBlock key="3" color="yellow" {...squareSize}>
        3
      </DemoBlock>,
      <DemoBlock key="4" color="green" {...squareSize}>
        4
      </DemoBlock>,
      <DemoBlock key="5" color="blue" {...squareSize}>
        5
      </DemoBlock>,
    ],
  },
} satisfies Story;
