import preview from '../../.storybook/preview';
import { Fan } from './Fan';
import type { FC, PropsWithChildren } from 'react';
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

const meta = preview.meta({
  component: Fan,
  args: {
    size: card,
    children: [],
  },
});

export const Empty = meta.story({
  args: {
    size: card,
    children: [],
  },
});

export const Default = meta.story({
  args: {
    size: card,
    children: [
      <DemoBlock key='1' color='red'>
        1
      </DemoBlock>,
      <DemoBlock key='2' color='orange'>
        2
      </DemoBlock>,
      <DemoBlock key='3' color='yellow'>
        3
      </DemoBlock>,
      <DemoBlock key='4' color='green'>
        4
      </DemoBlock>,
      <DemoBlock key='5' color='blue'>
        5
      </DemoBlock>,
    ],
  },
});

export const Size = meta.story({
  args: {
    size: squareSize,
    children: [
      <DemoBlock key='1' color='red' {...squareSize}>
        1
      </DemoBlock>,
      <DemoBlock key='2' color='orange' {...squareSize}>
        2
      </DemoBlock>,
      <DemoBlock key='3' color='yellow' {...squareSize}>
        3
      </DemoBlock>,
      <DemoBlock key='4' color='green' {...squareSize}>
        4
      </DemoBlock>,
      <DemoBlock key='5' color='blue' {...squareSize}>
        5
      </DemoBlock>,
    ],
  },
});

export const Spacing = meta.story({
  args: {
    size: squareSize,
    spacing: 10,
    children: [
      <DemoBlock key='1' color='red' {...squareSize}>
        1
      </DemoBlock>,
      <DemoBlock key='2' color='orange' {...squareSize}>
        2
      </DemoBlock>,
      <DemoBlock key='3' color='yellow' {...squareSize}>
        3
      </DemoBlock>,
      <DemoBlock key='4' color='green' {...squareSize}>
        4
      </DemoBlock>,
      <DemoBlock key='5' color='blue' {...squareSize}>
        5
      </DemoBlock>,
    ],
  },
});

export const SpacingNegative = meta.story({
  args: {
    size: squareSize,
    spacing: -10,
    children: [
      <DemoBlock key='1' color='red' {...squareSize}>
        1
      </DemoBlock>,
      <DemoBlock key='2' color='orange' {...squareSize}>
        2
      </DemoBlock>,
      <DemoBlock key='3' color='yellow' {...squareSize}>
        3
      </DemoBlock>,
      <DemoBlock key='4' color='green' {...squareSize}>
        4
      </DemoBlock>,
      <DemoBlock key='5' color='blue' {...squareSize}>
        5
      </DemoBlock>,
    ],
  },
});
